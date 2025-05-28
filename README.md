# ☕ Kafe Web Sitesi

Modern ve şık bir kafe/restoran web sitesi. Next.js 15 ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Temiz ve şık arayüz
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Hızlı**: Next.js 15 App Router ile optimize edilmiş performans
- **SEO Dostu**: Arama motorları için optimize edilmiş
- **Interaktif**: Swiper.js ile dinamik galeriler
- **Google Maps**: Gerçek konum entegrasyonu
- **WhatsApp**: Direkt iletişim ve rezervasyon

## 📱 Sayfalar

- **Ana Sayfa**: Hero section, öne çıkan ürünler, hikaye önizlemesi
- **Menü**: Kategorilere ayrılmış menü + QR kod
- **Hakkımızda**: Hikaye, değerler, ekip tanıtımı
- **İletişim**: İletişim bilgileri, Google Maps, WhatsApp
- **Rezervasyon**: Online rezervasyon formu

## 🛠️ Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display + Inter
- **Slider**: Swiper.js
- **Maps**: Google Maps Embed
- **Icons**: Heroicons

## 🎨 Tasarım

- **Renk Paleti**: Kahve tonları (#3c2415, #8b4513, #d2b48c, #f5f2ed)
- **Typography**: Playfair Display (başlıklar) + Inter (metin)
- **Layout**: Modern, minimalist, kullanıcı dostu

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## 📂 Proje Yapısı

```
cafe-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Ana sayfa
│   ├── menu/              # Menü sayfası
│   ├── hakkimizda/        # Hakkımızda sayfası
│   ├── iletisim/          # İletişim sayfası
│   └── rezervasyon/       # Rezervasyon sayfası
├── components/            # React bileşenleri
│   ├── Header.tsx         # Navigasyon
│   ├── Footer.tsx         # Alt bilgi
│   ├── Hero.tsx           # Hero section
│   ├── MenuCard.tsx       # Menü kartları
│   └── WaveTransition.tsx # Dalga geçişleri
├── public/                # Statik dosyalar
└── styles/                # CSS dosyaları
```

## 🌟 Öne Çıkan Özellikler

### Modern Header

- Gradient logo + pulse efekti
- Şeffaf başlangıç, scroll'da backdrop blur
- Pill style navigation
- Animasyonlu mobile menu

### Swiper Entegrasyonları

- Ana sayfa hikaye galerisi (4 fotoğraf, 3sn geçiş)
- Hakkımızda galerisi (5 fotoğraf, fade efekti)
- Hero arka plan (5 fotoğraf, otomatik değişim)

### MenuCard Tasarımı

- Instagram-style modern kartlar
- Gerçek ürün fotoğrafları (Unsplash)
- Hover animasyonları
- Popüler ürün etiketleri

### Dalga Geçişleri

- Section'lar arası smooth geçişler
- SVG dalga şekilleri
- Gradient renk geçişleri

## 📞 İletişim Özellikleri

- **WhatsApp Entegrasyonu**: Direkt mesaj gönderme
- **Google Maps**: Gerçek konum + yol tarifi
- **Rezervasyon Formu**: Online masa rezervasyonu
- **QR Menü**: Dijital menü erişimi

## 🎯 Hedef

24 saatte yayına alınabilir, sadece logo, gerçek fotoğraflar ve iletişim bilgileri güncellenerek hemen kullanıma hazır modern kafe web sitesi.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Geliştirici**: Modern web teknolojileri ile geliştirilmiş profesyonel kafe web sitesi 🚀
