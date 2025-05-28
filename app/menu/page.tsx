'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';
import WaveTransition from '@/components/WaveTransition';

interface MenuItem {
    title: string;
    description: string;
    price: string;
    isPopular?: boolean;
}

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('kahveler');

    const menuData: Record<string, MenuItem[]> = {
        kahveler: [
            {
                title: "Espresso",
                description: "Özenle seçilmiş çekirdeklerden hazırlanan klasik espresso",
                price: "₺20"
            },
            {
                title: "Americano",
                description: "Espresso ve sıcak su ile hazırlanan hafif kahve",
                price: "₺22"
            },
            {
                title: "Cappuccino",
                description: "Espresso, süt ve süt köpüğü ile hazırlanan İtalyan klasiği",
                price: "₺28",
                isPopular: true
            },
            {
                title: "Latte",
                description: "Espresso ve buharda ısıtılmış süt ile hazırlanan kremsi kahve",
                price: "₺30"
            },
            {
                title: "Mocha",
                description: "Espresso, çikolata ve süt ile hazırlanan tatlı kahve",
                price: "₺32"
            },
            {
                title: "Özel Karışım",
                description: "Kafe özel karışım çekirdekleri ile hazırlanan signature kahve",
                price: "₺35",
                isPopular: true
            }
        ],
        tatlilar: [
            {
                title: "Tiramisu",
                description: "Ev yapımı mascarpone peyniri ve taze kahve ile hazırlanan klasik İtalyan tatlısı",
                price: "₺45",
                isPopular: true
            },
            {
                title: "Cheesecake",
                description: "Kremsi peynir dolgulu, üzeri meyveli cheesecake",
                price: "₺40"
            },
            {
                title: "Brownie",
                description: "Sıcak çikolatalı brownie, vanilyalı dondurma ile servis",
                price: "₺35"
            },
            {
                title: "Profiterol",
                description: "Krema dolgulu hamur topları, çikolata sosu ile",
                price: "₺38"
            },
            {
                title: "San Sebastian",
                description: "Karamelize üzeri ile ünlü Bask cheesecake'i",
                price: "₺42"
            }
        ],
        atistirmaliklar: [
            {
                title: "Avokado Toast",
                description: "Taze avokado, cherry domates ve feta peyniri ile servis",
                price: "₺35"
            },
            {
                title: "Croissant",
                description: "Tereyağlı croissant, reçel ve tereyağı ile",
                price: "₺25"
            },
            {
                title: "Sandviç",
                description: "Taze malzemelerle hazırlanan günün sandviçi",
                price: "₺30"
            },
            {
                title: "Salata",
                description: "Mevsim yeşillikleri ve özel sos ile hazırlanan taze salata",
                price: "₺28"
            },
            {
                title: "Muffin",
                description: "Günlük taze pişen çeşitli muffin seçenekleri",
                price: "₺20"
            }
        ]
    };

    const categories = [
        { id: 'kahveler', name: 'Kahveler', icon: '☕' },
        { id: 'tatlilar', name: 'Tatlılar', icon: '🍰' },
        { id: 'atistirmaliklar', name: 'Atıştırmalıklar', icon: '🥪' }
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-coffee-dark to-coffee-medium text-white pb-20 pt-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6">
                        Menümüz
                    </h1>
                    <p className="text-xl text-coffee-light max-w-2xl mx-auto">
                        Özenle hazırladığımız kahveler, ev yapımı tatlılar ve taze atıştırmalıklarımızı keşfedin
                    </p>
                </div>
            </section>


            {/* Menu Content */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeCategory === category.id
                                    ? 'bg-accent text-white shadow-lg'
                                    : 'bg-white text-coffee-dark hover:bg-cream border border-gray-200'
                                    }`}
                            >
                                <span className="text-xl">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Menu Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
                            <MenuCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                isPopular={item.isPopular || false}
                                category={categories.find(cat => cat.id === activeCategory)?.name}
                            />
                        ))}
                    </div>


                    {/* QR Code Section */}
                    <div className="mt-16 bg-cream rounded-lg p-8 text-center">
                        <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-4">
                            QR Menü
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Telefonunuzla QR kodu okutarak dijital menümüze ulaşabilirsiniz
                        </p>
                        <div className="bg-white p-6 rounded-lg inline-block shadow-md">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://kafeismi.com/menu"
                                alt="QR Menü Kodu"
                                className="w-32 h-32 rounded-lg"
                            />
                            <p className="text-sm text-gray-500 mt-2">QR Kod</p>
                        </div>
                    </div>
                </div>
            </section>

            <WaveTransition fromColor="var(--background)" toColor="#3c2415" height="h-20" />

            <Footer />
        </div>
    );
} 