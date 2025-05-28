'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaveTransition from '@/components/WaveTransition';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const contactCardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
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

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
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
                        İletişim
                    </motion.h1>
                    <motion.p
                        className="text-xl text-coffee-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Bize ulaşın, sorularınızı yanıtlayalım
                    </motion.p>
                </div>
            </motion.section>

            {/* İletişim Bilgileri */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* İletişim Kartları */}
                        <motion.div
                            className="space-y-6"
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
                            <motion.h2
                                className="font-playfair text-3xl font-bold text-coffee-dark mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Bize Ulaşın
                            </motion.h2>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                {/* Adres */}
                                <motion.div
                                    className="bg-cream p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                                    variants={contactCardVariants}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <motion.div
                                            className="bg-accent text-white p-3 rounded-lg"
                                            variants={iconVariants}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 10,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold text-coffee-dark mb-2">Adresimiz</h3>
                                            <p className="text-gray-600">
                                                Örnek Mahalle, Kahve Sokak No:123<br />
                                                Kadıköy / İstanbul
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Telefon */}
                                <motion.div
                                    className="bg-cream p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                                    variants={contactCardVariants}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <motion.div
                                            className="bg-accent text-white p-3 rounded-lg"
                                            variants={iconVariants}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 10,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold text-coffee-dark mb-2">Telefon</h3>
                                            <p className="text-gray-600">
                                                <a href="tel:+905454814645" className="hover:text-accent transition-colors">
                                                    +90 545 481 46 45
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* E-posta */}
                                <motion.div
                                    className="bg-cream p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                                    variants={contactCardVariants}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <motion.div
                                            className="bg-accent text-white p-3 rounded-lg"
                                            variants={iconVariants}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 10,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold text-coffee-dark mb-2">E-posta</h3>
                                            <p className="text-gray-600">
                                                <a href="mailto:info@kafeismi.com" className="hover:text-accent transition-colors">
                                                    info@kafeismi.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Çalışma Saatleri */}
                                <motion.div
                                    className="bg-cream p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                                    variants={contactCardVariants}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <motion.div
                                            className="bg-accent text-white p-3 rounded-lg"
                                            variants={iconVariants}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 10,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold text-coffee-dark mb-2">Çalışma Saatleri</h3>
                                            <div className="text-gray-600 space-y-1">
                                                <p>Pazartesi - Cuma: 08:00 - 22:00</p>
                                                <p>Cumartesi - Pazar: 09:00 - 23:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* WhatsApp */}
                                <motion.div
                                    className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300"
                                    variants={contactCardVariants}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <motion.div
                                                className="bg-green-500 text-white p-3 rounded-lg"
                                                variants={iconVariants}
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 10,
                                                    transition: { duration: 0.3 }
                                                }}
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                                                </svg>
                                            </motion.div>
                                            <div>
                                                <h3 className="font-semibold text-coffee-dark mb-1">WhatsApp</h3>
                                                <p className="text-gray-600 text-sm">Hızlı iletişim için</p>
                                            </div>
                                        </div>
                                        <motion.a
                                            href="https://wa.me/905454814645?text=Merhaba, kafeyle ilgili bilgi almak istiyorum."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Mesaj Gönder
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Harita */}
                        <motion.div
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
                            <motion.h2
                                className="font-playfair text-3xl font-bold text-coffee-dark mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Konumumuz
                            </motion.h2>
                            <motion.div
                                className="rounded-lg h-96 overflow-hidden shadow-lg"
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
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
                            </motion.div>

                            {/* Yol Tarifi */}
                            <motion.div
                                className="mt-6 p-4 bg-cream rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{
                                    y: -2,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <h3 className="font-semibold text-coffee-dark mb-2">Nasıl Gelir?</h3>
                                <ul className="text-gray-600 text-sm space-y-1">
                                    <li>• Kadıköy İskele'den 5 dakika yürüme mesafesi</li>
                                    <li>• En yakın metro: Kadıköy-Kartal Metro Hattı</li>
                                    <li>• Otobüs durağı: Kahve Sokak durağı (50m)</li>
                                    <li>• Otopark: Çevrede ücretli sokak parkı mevcut</li>
                                </ul>
                                <div className="mt-4">
                                    <motion.a
                                        href="https://maps.google.com/?q=Örnek+Mahalle,+Kahve+Sokak+No:123,+Kadıköy,+İstanbul"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-accent hover:text-coffee-medium font-medium"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Google Maps'te Aç
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dalga Geçişi: Beyaz'dan Koyu Kahve'ye */}
            <WaveTransition fromColor="#ffffff" toColor="#3c2415" height="h-20" />

            {/* Rezervasyon CTA */}
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
                        Rezervasyon Yapmak İster misiniz?
                    </motion.h2>
                    <motion.p
                        className="text-coffee-light text-lg mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Özel günleriniz için masa rezervasyonu yapabilir,
                        grup etkinlikleri organize edebilirsiniz.
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
                                href="/rezervasyon"
                                className="bg-accent hover:bg-coffee-medium text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                            >
                                Rezervasyon Yap
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a
                                href="https://wa.me/905454814645?text=Rezervasyon yapmak istiyorum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-accent hover:bg-accent text-accent hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                            >
                                WhatsApp ile Rezervasyon
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
} 