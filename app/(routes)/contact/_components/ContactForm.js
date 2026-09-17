"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData(EMPTY_FORM);
      } else {
        toast.error(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      // fetch reddedilirse burada yakalanır, aksi halde buton kilitli kalırdı
      toast.error("Connection failed. Please check your internet and try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="rounded-2xl border border-mauve-800/50 p-6 sm:p-8">
      <h3 className="font-(family-name:--font-merienda) text-lg font-bold mb-6">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FIELDS.slice(0, 2).map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>

        <FormField
          field={FIELDS[2]}
          value={formData.subject}
          onChange={handleChange}
        />

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-message"
            className="text-xs uppercase tracking-wider text-mauve-500"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message here..."
            className="bg-transparent border border-mauve-800 rounded-lg px-4 py-2.5 text-sm text-mauve-100 placeholder:text-mauve-600 focus:outline-none focus:border-mauve-500 transition-colors duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2 bg-mauve-100 text-black px-5 py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300 cursor-pointer w-full sm:w-auto sm:self-end disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? "Sending..." : "Send Message"}
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}

function FormField({ field, value, onChange }) {
  const id = `contact-${field.name}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-wider text-mauve-500"
      >
        {field.label}
      </label>
      <input
        id={id}
        type={field.type}
        name={field.name}
        value={value}
        onChange={onChange}
        required
        placeholder={field.placeholder}
        className="bg-transparent border border-mauve-800 rounded-lg px-4 py-2.5 text-sm text-mauve-100 placeholder:text-mauve-600 focus:outline-none focus:border-mauve-500 transition-colors duration-300"
      />
    </div>
  );
}
