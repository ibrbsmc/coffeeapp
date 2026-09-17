# Coffee App

Coffee App, kahve odaklı bir vitrin ve menü uygulamasıdır.
Kullanıcılar ana sayfada ürünleri inceleyebilir, menü sayfasından kategori ve ürün detaylarına gidebilir, iletişim formu üzerinden mesaj gönderebilir.

## Kullanım Amacı

- Kahve ürünlerini modern bir arayüzde sergilemek
- Menü ve ürün detaylarını tek bir akışta sunmak
- İletişim formu ile ziyaretçi mesajlarını almak

## Teknolojiler

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- AOS (Animate On Scroll)
- Firebase Firestore
- Zustand
- Resend
- Swiper (carousel/slider)
- shadcn/ui + Radix UI

## Veri Akışı

Projeyi ilk kez inceliyorsanız veri şu yoldan geçiyor:

1. **Firestore** — ürünler `products` koleksiyonunda duruyor.
2. **`lib/getProducts.js`** — Firestore sorgularının tamamı burada. Fonksiyonlar
   React'in `cache()` sarmalayıcısıyla sarılı, yani aynı istek içinde aynı sorgu
   iki kez çalışmıyor.
3. **Server component'ler** (`app/**/page.js`) — veriyi sunucuda çekip hazır HTML
   üretiyor. Sayfalar `revalidate = 3600` ile saatte bir arka planda tazeleniyor.
4. **Client component'ler** (`MenuContent`, `DrinkSection`, `CartSheet`...) —
   sadece etkileşim gereken parçalar. Veriyi prop olarak alıyorlar.
5. **`store/cartStore.js`** — sepet Zustand'da tutuluyor ve `persist` ile
   localStorage'a yazılıyor, sayfa yenilense de kaybolmuyor.

Ortak sabitler `lib/` altında tek yerde: kategoriler `lib/categories.js`,
navigasyon ve sosyal medya linkleri `lib/navigation.js`, indirim hesabı
`lib/pricing.js`.

## Kurulum

1. Depoyu klonlayın:

```bash
git clone <repo-url>
cd coffee-app
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Ortam değişkenlerini ayarlayın (Bkz. Ortam Değişkenleri).

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

5. Tarayıcıda açın:

```text
http://localhost:3000
```

## Ortam Değişkenleri

Projenin iletişim formu ve veritabanı bağlantılarının çalışması için kök dizinde bir .env.local dosyası oluşturun ve aşağıdaki değişkenleri kendi hesap bilgilerinize göre doldurun:

Hazır şablon için `.env.example` dosyasını `.env.local` olarak kopyalayabilirsiniz.

```env
# Resend API (İletişim Formu İçin)
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ornek@mail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev

# Firebase Yapılandırması (Veritabanı İçin)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

Not: Gönderici ve alıcı mail adresleri artık kod içinde sabit değil, yukarıdaki
`CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` değişkenlerinden okunuyor.


## Komutlar

```bash
npm run dev     # geliştirme ortamı
npm run build   # production build
npm run start   # production başlatma
npm run lint    # eslint kontrolü
```

## Görseller

`public/images` altındaki görseller web için küçültülmüş halde duruyor (toplam
~3 MB). Yeni görsel eklerken de benzer boyutlarda (ürünler ~800px, banner'lar
~1920px) tutmaya dikkat edin — orijinal boyutlarıyla eklenirse sayfa yeniden
yavaşlar.

## Proje Yapısı

```text
app/                  # sayfalar, route grupları ve API route'lar
app/providers/        # uygulama seviyesindeki provider'lar (AOS vb.)
app/api/contact/      # iletişim formu mail gönderim endpoint'i
components/           # ortak bileşenler, layout parçaları ve UI
lib/                  # Firebase, veri çekme ve ortak sabitler
store/                # Zustand cart store yapısı
public/images/        # web için optimize edilmiş görseller
```
