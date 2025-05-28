'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - Büyük ve Çarpıcı */}
                    <motion.div
                        className="flex-shrink-0 group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="relative">
                                <motion.div
                                    className="w-12 h-12 bg-gradient-to-br from-accent to-coffee-medium rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.span
                                        className="text-2xl"
                                        animate={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    >
                                        ☕
                                    </motion.span>
                                </motion.div>
                                <motion.div
                                    className="absolute -top-1 -right-1 w-4 h-4 bg-coffee-light rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <motion.span
                                    className={`font-playfair text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-coffee-dark' : 'text-white'
                                        }`}
                                    whileHover={{ x: 2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Kafe İsmi
                                </motion.span>
                                <span className={`text-xs font-medium transition-colors duration-300 ${isScrolled ? 'text-coffee-medium' : 'text-coffee-light'
                                    }`}>
                                    Lezzet & Atmosfer
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation - Modern Pill Style */}
                    <div className="hidden lg:block">
                        <div className={`flex items-center space-x-1 px-6 py-3 rounded-full transition-all duration-300 ${isScrolled
                            ? 'bg-cream/80 backdrop-blur-sm'
                            : 'bg-white/10 backdrop-blur-md border border-white/20'
                            }`}>
                            <NavLink href="/" isScrolled={isScrolled}>Ana Sayfa</NavLink>
                            <NavLink href="/menu" isScrolled={isScrolled}>Menü</NavLink>
                            <NavLink href="/hakkimizda" isScrolled={isScrolled}>Hakkımızda</NavLink>
                            <NavLink href="/iletisim" isScrolled={isScrolled}>İletişim</NavLink>
                        </div>
                    </div>

                    {/* CTA Button + Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Rezervasyon Button - Çarpıcı */}
                        <Link
                            href="/rezervasyon"
                            className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-accent to-coffee-medium hover:from-coffee-medium hover:to-accent text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ rotate: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </motion.svg>
                            <span>Rezervasyon</span>
                        </Link>

                        {/* Mobile menu button - Animasyonlu */}
                        <motion.button
                            onClick={toggleMenu}
                            className={`lg:hidden relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isScrolled
                                ? 'bg-coffee-dark text-white'
                                : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative w-6 h-6">
                                <motion.span
                                    className="absolute block w-6 h-0.5 bg-current"
                                    animate={{
                                        rotate: isMenuOpen ? 45 : 0,
                                        y: isMenuOpen ? 8 : 2
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="absolute block w-6 h-0.5 bg-current top-3"
                                    animate={{
                                        opacity: isMenuOpen ? 0 : 1
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="absolute block w-6 h-0.5 bg-current"
                                    animate={{
                                        rotate: isMenuOpen ? -45 : 0,
                                        y: isMenuOpen ? 8 : 20
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation - Slide Down */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="lg:hidden overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="py-6 space-y-4 bg-white/95 backdrop-blur-md rounded-2xl mt-4 shadow-xl border border-coffee-light/20">
                                <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)} delay={0.1}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Ana Sayfa
                                </MobileNavLink>

                                <MobileNavLink href="/menu" onClick={() => setIsMenuOpen(false)} delay={0.2}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Menü
                                </MobileNavLink>

                                <MobileNavLink href="/hakkimizda" onClick={() => setIsMenuOpen(false)} delay={0.3}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Hakkımızda
                                </MobileNavLink>

                                <MobileNavLink href="/iletisim" onClick={() => setIsMenuOpen(false)} delay={0.4}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    İletişim
                                </MobileNavLink>

                                <div className="px-6 pt-4">
                                    <Link
                                        href="/rezervasyon"
                                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-coffee-medium text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>Rezervasyon Yap</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}

// Desktop Navigation Link Component
function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            <Link
                href={href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${isScrolled
                    ? 'text-coffee-dark hover:bg-accent hover:text-white'
                    : 'text-white hover:bg-white/20'
                    }`}
            >
                {children}
            </Link>
        </motion.div>
    );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, children, onClick, delay }: { href: string; children: React.ReactNode; onClick: () => void; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.3 }}
            whileHover={{ x: 5 }}
        >
            <Link
                href={href}
                className="flex items-center space-x-3 px-6 py-3 text-coffee-dark hover:bg-accent hover:text-white transition-all duration-300 mx-4 rounded-xl"
                onClick={onClick}
            >
                {children}
            </Link>
        </motion.div>
    );
} 