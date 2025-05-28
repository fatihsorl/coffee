'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MenuCard from '@/components/MenuCard';
import WaveTransition from '@/components/WaveTransition';
import PremiumFeature from '@/components/PremiumFeature';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [showReservationPopup, setShowReservationPopup] = useState(false);

  const featuredItems = [
    {
      title: "Özel Karışım Espresso",
      description: "Özenle seçilmiş çekirdeklerden hazırlanan özel karışım espresso",
      price: "₺25",
      isPopular: true
    },
    {
      title: "Tiramisu",
      description: "Ev yapımı mascarpone peyniri ve taze kahve ile hazırlanan klasik İtalyan tatlısı",
      price: "₺45",
    },
    {
      title: "Avokado Toast",
      description: "Taze avokado, cherry domates ve feta peyniri ile servis edilen sağlıklı atıştırmalık",
      price: "₺35",
    }
  ];

  const cafeImages = [
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Kafe İç Mekan",
      title: "Sıcak Atmosfer"
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Kafe Dış Görünüm",
      title: "Modern Tasarım"
    },
    {
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Kahve Hazırlama",
      title: "Özenli Hazırlık"
    },
    {
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Kafe Masaları",
      title: "Rahat Oturma"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Öne Çıkan Ürünler */}
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
              Öne Çıkan Lezzetler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En sevilen kahvelerimiz ve tatlılarımızdan özenle seçtiklerimiz
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {featuredItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <MenuCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  isPopular={item.isPopular}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link
              href="/menu"
              className="bg-accent hover:bg-coffee-medium text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Tüm Menüyü Görüntüle
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dalga Geçişi: Krem'den Beyaz'a */}
      <WaveTransition fromColor="#f5f2ed" toColor="#ffffff" height="h-20" />

      {/* Hakkımızda Önizleme */}
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
              <p className="text-gray-600 mb-6 leading-relaxed">
                2015 yılından beri kahve tutkumuzu sizlerle paylaşıyoruz. Her fincan kahvede
                kalite ve tutku bir arada. Sıcak atmosferimizde dostlarınızla unutulmaz anlar yaşayın.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Özenle seçilmiş çekirdeklerimiz, deneyimli barista'larımız ve samimi ortamımızla
                size en iyi kahve deneyimini sunuyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="text-accent hover:text-coffee-medium font-semibold inline-flex items-center"
              >
                Daha Fazla Bilgi →
              </Link>
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
                  modules={[Navigation, Pagination, Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation
                  pagination={{
                    clickable: true,
                  }}
                  className="h-full"
                >
                  {cafeImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dalga Geçişi: Beyaz'dan Koyu Kahve'ye */}
      <WaveTransition fromColor="#ffffff" toColor="#3c2415" height="h-20" />

      {/* İletişim CTA */}
      <motion.section
        className="py-16 bg-coffee-dark text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6">
            Bizi Ziyaret Edin
          </h2>
          <p className="text-coffee-light text-lg mb-8">
            Sıcak atmosferimizde sizleri ağırlamaktan mutluluk duyarız.
            Rezervasyon yapmak için bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setShowReservationPopup(true)}
              className="bg-accent hover:bg-coffee-medium text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rezervasyon Yap
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/iletisim"
                className="border-2 border-accent hover:bg-accent text-accent hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                İletişim Bilgileri
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />

      {/* Premium Feature Popup for Reservation */}
      {showReservationPopup && (
        <PremiumFeature
          featureName="Online Rezervasyon Sistemi"
          price="₺2.000"
          description="Müşterileriniz online olarak kolayca rezervasyon yapabilsin. Otomatik onay sistemi ve WhatsApp entegrasyonu ile."
          icon={<>📅</>}
          onClose={() => setShowReservationPopup(false)}
        >
          <div></div>
        </PremiumFeature>
      )}
    </div>
  );
}
