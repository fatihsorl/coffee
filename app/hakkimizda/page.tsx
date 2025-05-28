'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaveTransition from '@/components/WaveTransition';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

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

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const teamMemberVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <motion.section
                className="bg-gradient-to-r from-coffee-dark to-coffee-medium text-white pb-20 pt-50"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        className="font-playfair text-4xl sm:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hakkımızda
                    </motion.h1>
                    <motion.p
                        className="text-xl text-coffee-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        2015 yılından beri kahve tutkumuzu sizlerle paylaşıyoruz
                    </motion.p>
                </div>
            </motion.section>

            {/* Hikayemiz */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.8, ease: "easeOut" }
                                }
                            }}
                        >
                            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-coffee-dark mb-6">
                                Bizim Hikayemiz
                            </h2>
                            <motion.p
                                className="text-gray-600 mb-6 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                2015 yılında küçük bir hayalle başladık. Şehrin kalbinde, insanların
                                bir araya gelip kaliteli kahve eşliğinde sıcak sohbetler edebileceği
                                bir mekan yaratmak istiyorduk.
                            </motion.p>
                            <motion.p
                                className="text-gray-600 mb-6 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Bugün, 9 yıl sonra, o küçük hayalimiz gerçek oldu. Her gün onlarca
                                kahve severin buluşma noktası olan kafeimizde, özenle seçilmiş
                                çekirdeklerden hazırladığımız kahvelerle sizleri ağırlıyoruz.
                            </motion.p>
                            <motion.p
                                className="text-gray-600 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Amacımız sadece kahve satmak değil; insanların kendilerini evlerinde
                                hissedecekleri, dostlarıyla keyifli vakit geçirebilecekleri bir
                                atmosfer sunmak.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.8, ease: "easeOut" }
                                }
                            }}
                        >
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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dalga Geçişi: Beyaz'dan Krem'e */}
            <WaveTransition fromColor="#ffffff" toColor="#f5f2ed" height="h-20" />

            {/* Değerlerimiz */}
            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-coffee-dark mb-4">
                            Değerlerimiz
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Bizi biz yapan değerler ve ilkeler
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="text-4xl mb-4"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                ☕
                            </motion.div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-3">
                                Kalite
                            </h3>
                            <p className="text-gray-600">
                                En iyi çekirdekleri özenle seçiyor, her fincan kahveyi mükemmel
                                demleme teknikleriyle hazırlıyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="text-4xl mb-4"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                🤝
                            </motion.div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-3">
                                Sıcaklık
                            </h3>
                            <p className="text-gray-600">
                                Her müşterimizi ailemizin bir parçası olarak görüyor, samimi
                                ve sıcak bir ortam sunuyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="text-4xl mb-4"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                🌱
                            </motion.div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-3">
                                Sürdürülebilirlik
                            </h3>
                            <p className="text-gray-600">
                                Çevreye duyarlı üretim yapan çiftçilerden kahve alıyor,
                                doğaya saygılı uygulamalar benimsiyoruz.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Dalga Geçişi: Krem'den Beyaz'a */}
            <WaveTransition fromColor="#f5f2ed" toColor="#ffffff" height="h-20" />

            {/* Ekibimiz */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-coffee-dark mb-4">
                            Ekibimiz
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Deneyimli ve tutkulu ekibimizle size en iyi hizmeti sunuyoruz
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="text-center"
                            variants={teamMemberVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                                    alt="Ahmet Yılmaz - Baş Barista"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-2">
                                Ahmet Yılmaz
                            </h3>
                            <p className="text-coffee-medium font-medium mb-2">Baş Barista</p>
                            <p className="text-gray-600 text-sm">
                                10 yıllık deneyimi ile mükemmel kahve hazırlama sanatının ustası
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            variants={teamMemberVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                                    alt="Elif Kaya - Pastry Chef"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-2">
                                Elif Kaya
                            </h3>
                            <p className="text-coffee-medium font-medium mb-2">Pastry Chef</p>
                            <p className="text-gray-600 text-sm">
                                Ev yapımı tatlılarımızın yaratıcısı, lezzet sanatçısı
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            variants={teamMemberVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                                    alt="Mehmet Demir - Kurucu"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-2">
                                Mehmet Demir
                            </h3>
                            <p className="text-coffee-medium font-medium mb-2">Kurucu & İşletmeci</p>
                            <p className="text-gray-600 text-sm">
                                Kahve tutkunu girişimci, kafeyi hayata geçiren vizyon sahibi
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Dalga Geçişi: Beyaz'dan Koyu Kahve'ye */}
            <WaveTransition fromColor="#ffffff" toColor="#3c2415" height="h-20" />

            {/* CTA Section */}
            <motion.section
                className="py-16 bg-coffee-dark text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="font-playfair text-3xl sm:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Bizi Ziyaret Edin
                    </motion.h2>
                    <motion.p
                        className="text-coffee-light text-lg mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Hikayemizin bir parçası olmak için kafeimize bekleriz.
                        Sıcak atmosferimizde unutulmaz anlar yaşayın.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/menu"
                                className="bg-accent hover:bg-coffee-medium text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                            >
                                Menümüzü İnceleyin
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/iletisim"
                                className="border-2 border-accent hover:bg-accent text-accent hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                            >
                                İletişime Geçin
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
} 