'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
    const heroImages = [
        {
            src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Kafe Atmosferi"
        },
        {
            src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Kafe İç Mekan"
        },
        {
            src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Kahve Hazırlama"
        },
        {
            src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Latte Art"
        },
        {
            src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Kafe Dış Görünüm"
        }
    ];

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Swiper */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-r from-coffee-dark/70 to-coffee-medium/50 absolute z-10"></div>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                >
                    {heroImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                    Lezzetli Kahveler,
                    <br />
                    <span className="text-accent">Sıcak Sohbetler</span>
                </h1>

                <p className="text-xl sm:text-2xl mb-8 text-cream animate-slide-up">
                    Her fincan kahvede kalite ve tutku bir arada.
                    Sıcak atmosferimizde unutulmaz anlar yaşayın.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
                    <Link
                        href="/menu"
                        className="bg-accent hover:bg-coffee-medium text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Menüyü Görüntüle
                    </Link>

                    <Link
                        href="/rezervasyon"
                        className="border-2 border-white hover:bg-white hover:text-coffee-dark text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Rezervasyon Yap
                    </Link>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce" style={{ bottom: '-100px' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-cream rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-20 w-3 h-3 bg-coffee-light rounded-full opacity-50 animate-pulse delay-500"></div>
        </section>
    );
} 