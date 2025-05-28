'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PremiumFeatureProps {
    children: React.ReactNode;
    featureName: string;
    price: string;
    description: string;
    icon: React.ReactNode;
}

export default function PremiumFeature({
    children,
    featureName,
    price,
    description,
    icon
}: PremiumFeatureProps) {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPopup(true);
    };

    return (
        <>
            {/* Premium Feature Wrapper */}
            <div className="relative">
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-10 cursor-pointer rounded-lg flex items-center justify-center group hover:bg-black/30 transition-all duration-300"
                    onClick={handleClick}
                >
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-accent/20 group-hover:scale-105 transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="flex items-center space-x-3">
                            <div className="text-accent text-2xl">
                                {icon}
                            </div>
                            <div>
                                <div className="font-semibold text-coffee-dark">Premium Özellik</div>
                                <div className="text-sm text-gray-600">Detaylar için tıklayın</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Original Content (blurred) */}
                <div className="filter blur-[2px] pointer-events-none">
                    {children}
                </div>
            </div>

            {/* Premium Feature Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPopup(false)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="text-center mb-6">
                                <motion.div
                                    className="text-5xl mb-4"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {icon}
                                </motion.div>
                                <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-2">
                                    {featureName}
                                </h3>
                                <p className="text-gray-600">
                                    {description}
                                </p>
                            </div>

                            {/* Price */}
                            <motion.div
                                className="bg-gradient-to-r from-accent/10 to-coffee-light/10 rounded-lg p-6 mb-6 text-center"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="text-3xl font-bold text-accent mb-2">
                                    {price}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Tek seferlik ödeme
                                </div>
                            </motion.div>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Profesyonel tasarım</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Mobil uyumlu</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Kolay yönetim</span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex space-x-3">
                                <motion.button
                                    className="flex-1 bg-accent hover:bg-coffee-medium text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        // WhatsApp ile iletişim
                                        window.open(`https://wa.me/905454814645?text=Merhaba, ${featureName} özelliği hakkında bilgi almak istiyorum.`, '_blank');
                                    }}
                                >
                                    İletişime Geç
                                </motion.button>
                                <motion.button
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowPopup(false)}
                                >
                                    Kapat
                                </motion.button>
                            </div>

                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                onClick={() => setShowPopup(false)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
} 