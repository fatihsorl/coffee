'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaveTransition from '@/components/WaveTransition';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function AboutPage() {
    const cafeGallery = [
        {
            src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Kafe Dış Görünüm",
            title: "Modern Tasarım"
        },
        {
            src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Kafe İç Mekan",
            title: "Sıcak Atmosfer"
        },
        {
            src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Kahve Hazırlama",
            title: "Özenli Hazırlık"
        },
        {
            src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Latte Art",
            title: "Sanat Eseri Kahveler"
        },
        {
            src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Kafe Masaları",
            title: "Rahat Oturma Alanları"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-coffee-dark to-coffee-medium text-white pb-20 pt-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6">
                        Hakkımızda
                    </h1>
                    <p className="text-xl text-coffee-light max-w-2xl mx-auto">
                        2015 yılından beri kahve tutkumuzu sizlerle paylaşıyoruz
                    </p>
                </div>
            </section>

            {/* Hikayemiz */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-coffee-dark mb-6">
                                Bizim Hikayemiz
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                2015 yılında küçük bir hayalle başladık. Şehrin kalbinde, insanların
                                bir araya gelip kaliteli kahve eşliğinde sıcak sohbetler edebileceği
                                bir mekan yaratmak istiyorduk.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Bugün, 9 yıl sonra, o küçük hayalimiz gerçek oldu. Her gün onlarca
                                kahve severin buluşma noktası olan kafeimizde, özenle seçilmiş
                                çekirdeklerden hazırladığımız kahvelerle sizleri ağırlıyoruz.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Amacımız sadece kahve satmak değil; insanların kendilerini evlerinde
                                hissedecekleri, dostlarıyla keyifli vakit geçirebilecekleri bir
                                atmosfer sunmak.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="rounded-lg h-96 overflow-hidden shadow-lg">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                    effect="fade"
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    navigation
                                    pagination={{
                                        clickable: true,
                                    }}
                                    className="h-full"
                                >
                                    {cafeGallery.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 to-transparent flex items-end">
                                                <div className="p-6 text-white">
                                                    <h3 className="text-lg font-semibold">{image.title}</h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dalga Geçişi: Beyaz'dan Krem'e */}
            <WaveTransition fromColor="#ffffff" toColor="#f5f2ed" height="h-20" />

            {/* Değerlerimiz */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-coffee-dark mb-4">
                            Değerlerimiz
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Bizi biz yapan değerler ve ilkeler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">☕</div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-3">
                                Kalite
                            </h3>
                            <p className="text-gray-600">
                                En iyi çekirdekleri özenle seçiyor, her fincan kahveyi mükemmel
                                demleme teknikleriyle hazırlıyoruz.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-3">
                                Sıcaklık
                            </h3>
                            <p className="text-gray-600">
                                Her müşterimizi ailemizin bir parçası olarak görüyor, samimi
                                ve sıcak bir ortam sunuyoruz.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-3">
                                Sürdürülebilirlik
                            </h3>
                            <p className="text-gray-600">
                                Çevreye duyarlı üretim yapan çiftçilerden kahve alıyor,
                                doğaya saygılı uygulamalar benimsiyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dalga Geçişi: Krem'den Beyaz'a */}
            <WaveTransition fromColor="#f5f2ed" toColor="#ffffff" height="h-20" />

            {/* Ekibimiz */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-coffee-dark mb-4">
                            Ekibimiz
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Deneyimli ve tutkulu ekibimizle size en iyi hizmeti sunuyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                                    alt="Ahmet Yılmaz - Baş Barista"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-2">
                                Ahmet Yılmaz
                            </h3>
                            <p className="text-coffee-medium font-medium mb-2">Baş Barista</p>
                            <p className="text-gray-600 text-sm">
                                10 yıllık deneyimi ile mükemmel kahve hazırlama sanatının ustası
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                                    alt="Elif Kaya - Pastry Chef"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-2">
                                Elif Kaya
                            </h3>
                            <p className="text-coffee-medium font-medium mb-2">Pastry Chef</p>
                            <p className="text-gray-600 text-sm">
                                Ev yapımı tatlılarımızın yaratıcısı, lezzet sanatçısı
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                                    alt="Mehmet Demir - Kurucu"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-2">
                                Mehmet Demir
                            </h3>
                            <p className="text-coffee-medium font-medium mb-2">Kurucu & İşletmeci</p>
                            <p className="text-gray-600 text-sm">
                                Kahve tutkunu girişimci, kafeyi hayata geçiren vizyon sahibi
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dalga Geçişi: Beyaz'dan Koyu Kahve'ye */}
            <WaveTransition fromColor="#ffffff" toColor="#3c2415" height="h-20" />

            {/* CTA Section */}
            <section className="py-16 bg-coffee-dark text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6">
                        Bizi Ziyaret Edin
                    </h2>
                    <p className="text-coffee-light text-lg mb-8">
                        Hikayemizin bir parçası olmak için kafeimize bekleriz.
                        Sıcak atmosferimizde unutulmaz anlar yaşayın.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/menu"
                            className="bg-accent hover:bg-coffee-medium text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Menümüzü İnceleyin
                        </Link>
                        <Link
                            href="/iletisim"
                            className="border-2 border-accent hover:bg-accent text-accent hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            İletişime Geçin
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 