import { Resend } from "resend";

const MAX_LENGTH = { name: 100, email: 150, subject: 150, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Alanları doğrular, sorun varsa hata metni döner
function validate({ name, email, subject, message }) {
  const fields = { name, email, subject, message };

  for (const [field, value] of Object.entries(fields)) {
    if (typeof value !== "string" || value.trim() === "") {
      return `"${field}" alanı zorunludur.`;
    }
    if (value.length > MAX_LENGTH[field]) {
      return `"${field}" alanı en fazla ${MAX_LENGTH[field]} karakter olabilir.`;
    }
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Geçerli bir e-posta adresi girin.";
  }

  return null;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const error = validate(body);
    if (error) {
      return Response.json({ success: false, error }, { status: 400 });
    }

    const { name, email, subject, message } = body;

    // İstek anında oluşturulur, build sırasında değil
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `İsim: ${name}\nEmail: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`,
    });

    if (result.error) {
      return Response.json(
        { success: false, error: result.error.message },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
