import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaveTransition from '@/components/WaveTransition';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-coffee-dark to-coffee-medium text-white pb-20 pt-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6">
                        İletişim
                    </h1>
                    <p className="text-xl text-coffee-light max-w-2xl mx-auto">
                        Bize ulaşın, sorularınızı yanıtlayalım
                    </p>
                </div>
            </section>



            {/* İletişim Bilgileri */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* İletişim Kartları */}
                        <div className="space-y-6">
                            <h2 className="font-playfair text-3xl font-bold text-coffee-dark mb-8">
                                Bize Ulaşın
                            </h2>

                            {/* Adres */}
                            <div className="bg-cream p-6 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-accent text-white p-3 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-coffee-dark mb-2">Adresimiz</h3>
                                        <p className="text-gray-600">
                                            Örnek Mahalle, Kahve Sokak No:123<br />
                                            Kadıköy / İstanbul
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Telefon */}
                            <div className="bg-cream p-6 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-accent text-white p-3 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-coffee-dark mb-2">Telefon</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+905551234567" className="hover:text-accent transition-colors">
                                                +90 555 123 45 67
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* E-posta */}
                            <div className="bg-cream p-6 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-accent text-white p-3 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-coffee-dark mb-2">E-posta</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:info@kafeismi.com" className="hover:text-accent transition-colors">
                                                info@kafeismi.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Çalışma Saatleri */}
                            <div className="bg-cream p-6 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-accent text-white p-3 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-coffee-dark mb-2">Çalışma Saatleri</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <p>Pazartesi - Cuma: 08:00 - 22:00</p>
                                            <p>Cumartesi - Pazar: 09:00 - 23:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-green-500 text-white p-3 rounded-lg">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-coffee-dark mb-1">WhatsApp</h3>
                                            <p className="text-gray-600 text-sm">Hızlı iletişim için</p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://wa.me/905551234567?text=Merhaba, kafeyle ilgili bilgi almak istiyorum."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                                    >
                                        Mesaj Gönder
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Harita */}
                        <div>
                            <h2 className="font-playfair text-3xl font-bold text-coffee-dark mb-8">
                                Konumumuz
                            </h2>
                            <div className="rounded-lg h-96 overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.665!2d29.0275!3d40.9925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzMzLjAiTiAyOcKwMDEnMzkuMCJF!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str&q=Örnek+Mahalle,+Kahve+Sokak+No:123,+Kadıköy,+İstanbul"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Kafe Konumu - Örnek Mahalle, Kahve Sokak No:123, Kadıköy/İstanbul"
                                ></iframe>
                            </div>

                            {/* Yol Tarifi */}
                            <div className="mt-6 p-4 bg-cream rounded-lg">
                                <h3 className="font-semibold text-coffee-dark mb-2">Nasıl Gelir?</h3>
                                <ul className="text-gray-600 text-sm space-y-1">
                                    <li>• Kadıköy İskele'den 5 dakika yürüme mesafesi</li>
                                    <li>• En yakın metro: Kadıköy-Kartal Metro Hattı</li>
                                    <li>• Otobüs durağı: Kahve Sokak durağı (50m)</li>
                                    <li>• Otopark: Çevrede ücretli sokak parkı mevcut</li>
                                </ul>
                                <div className="mt-4">
                                    <a
                                        href="https://maps.google.com/?q=Örnek+Mahalle,+Kahve+Sokak+No:123,+Kadıköy,+İstanbul"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-accent hover:text-coffee-medium font-medium"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Google Maps'te Aç
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dalga Geçişi: Beyaz'dan Koyu Kahve'ye */}
            <WaveTransition fromColor="#ffffff" toColor="#3c2415" height="h-20" />

            {/* Rezervasyon CTA */}
            <section className="py-16 bg-coffee-dark text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6">
                        Rezervasyon Yapmak İster misiniz?
                    </h2>
                    <p className="text-coffee-light text-lg mb-8">
                        Özel günleriniz için masa rezervasyonu yapabilir,
                        grup etkinlikleri organize edebilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/rezervasyon"
                            className="bg-accent hover:bg-coffee-medium text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Rezervasyon Yap
                        </Link>
                        <a
                            href="https://wa.me/905551234567?text=Rezervasyon yapmak istiyorum."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-accent hover:bg-accent text-accent hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            WhatsApp ile Rezervasyon
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 