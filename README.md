# Coffee App

Next.js ile yapılmış bir kahve dükkanı vitrin sitesi.

## Teknolojiler

Next.js 16 (App Router)
React 19
Tailwind CSS
Firebase Firestore
Zustand
Resend
Swiper
shadcn/ui

## Kurulum

```bash
npm install
```

`.env.example` dosyasını `.env.local` olarak kopyalayıp aşağıdaki değerleri kendi hesabınıza göre doldurun:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ornek@mail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

- Resend anahtarı iletişim formu için, Firebase anahtarları ürün verisi (Firestore) için gerekli.
- `RESEND_API_KEY` gerçek bir sırdır, `.env.local` dışına çıkmamalı.

Ardından:

```bash
npm run dev
```

http://localhost:3000 adresinde açılır.

## Komutlar

```bash
npm run dev     # geliştirme ortamı
npm run build   # production build
npm run start   # production başlatma
npm run lint    # eslint kontrolü
```

## Proje Yapısı

```text
app/          # sayfalar, route grupları, API route'lar
components/   # ortak bileşenler, layout parçaları, shadcn/ui
lib/          # Firebase, veri çekme fonksiyonları, ortak sabitler
store/        # Zustand sepet store'u
public/images/ # optimize edilmiş görseller
```

Ürünler `lib/getProducts.js` üzerinden Firestore'dan çekilir; kategoriler `lib/categories.js`, navigasyon linkleri `lib/navigation.js`, indirim oranı `lib/pricing.js` içinde tanımlıdır.
