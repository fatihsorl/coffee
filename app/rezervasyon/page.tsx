'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReservationPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form gönderme işlemi burada yapılacak
        console.log('Rezervasyon bilgileri:', formData);
        alert('Rezervasyon talebiniz alındı! En kısa sürede size dönüş yapacağız.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const generateWhatsAppMessage = () => {
        const message = `Merhaba! Rezervasyon yapmak istiyorum.

İsim: ${formData.name}
Telefon: ${formData.phone}
Tarih: ${formData.date}
Saat: ${formData.time}
Kişi Sayısı: ${formData.guests}
${formData.message ? `Özel İstek: ${formData.message}` : ''}

Teşekkürler!`;

        return encodeURIComponent(message);
    };

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-coffee-dark to-coffee-medium text-white pb-20 pt-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6">
                        Rezervasyon
                    </h1>
                    <p className="text-xl text-coffee-light max-w-2xl mx-auto">
                        Özel günleriniz için masa rezervasyonu yapın
                    </p>
                </div>
            </section>

            {/* Rezervasyon Formu */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Form */}
                        <div>
                            <h2 className="font-playfair text-3xl font-bold text-coffee-dark mb-8">
                                Rezervasyon Formu
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-2">
                                            Ad Soyad *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                            placeholder="Adınız ve soyadınız"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-coffee-dark mb-2">
                                            Telefon *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                            placeholder="+90 555 123 45 67"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-2">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                        placeholder="ornek@email.com"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-coffee-dark mb-2">
                                            Tarih *
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="time" className="block text-sm font-medium text-coffee-dark mb-2">
                                            Saat *
                                        </label>
                                        <select
                                            id="time"
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                        >
                                            <option value="">Saat seçin</option>
                                            <option value="08:00">08:00</option>
                                            <option value="09:00">09:00</option>
                                            <option value="10:00">10:00</option>
                                            <option value="11:00">11:00</option>
                                            <option value="12:00">12:00</option>
                                            <option value="13:00">13:00</option>
                                            <option value="14:00">14:00</option>
                                            <option value="15:00">15:00</option>
                                            <option value="16:00">16:00</option>
                                            <option value="17:00">17:00</option>
                                            <option value="18:00">18:00</option>
                                            <option value="19:00">19:00</option>
                                            <option value="20:00">20:00</option>
                                            <option value="21:00">21:00</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium text-coffee-dark mb-2">
                                        Kişi Sayısı *
                                    </label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        required
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                    >
                                        <option value="1">1 Kişi</option>
                                        <option value="2">2 Kişi</option>
                                        <option value="3">3 Kişi</option>
                                        <option value="4">4 Kişi</option>
                                        <option value="5">5 Kişi</option>
                                        <option value="6">6 Kişi</option>
                                        <option value="7">7 Kişi</option>
                                        <option value="8">8 Kişi</option>
                                        <option value="8+">8+ Kişi (Grup)</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-2">
                                        Özel İstek / Not
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                        placeholder="Özel günler, alerjiler, özel istekler vb."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-accent hover:bg-coffee-medium text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                                >
                                    Rezervasyon Talebini Gönder
                                </button>
                            </form>
                        </div>

                        {/* Bilgi ve WhatsApp */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-6">
                                    Rezervasyon Bilgileri
                                </h3>

                                <div className="space-y-4">
                                    <div className="bg-cream p-4 rounded-lg">
                                        <h4 className="font-semibold text-coffee-dark mb-2">⏰ Çalışma Saatleri</h4>
                                        <p className="text-gray-600 text-sm">
                                            Pazartesi - Cuma: 08:00 - 22:00<br />
                                            Cumartesi - Pazar: 09:00 - 23:00
                                        </p>
                                    </div>

                                    <div className="bg-cream p-4 rounded-lg">
                                        <h4 className="font-semibold text-coffee-dark mb-2">📞 Rezervasyon Hattı</h4>
                                        <p className="text-gray-600 text-sm">
                                            <a href="tel:+905551234567" className="hover:text-accent transition-colors">
                                                +90 555 123 45 67
                                            </a>
                                        </p>
                                    </div>

                                    <div className="bg-cream p-4 rounded-lg">
                                        <h4 className="font-semibold text-coffee-dark mb-2">ℹ️ Önemli Notlar</h4>
                                        <ul className="text-gray-600 text-sm space-y-1">
                                            <li>• 8+ kişilik gruplar için önceden arayınız</li>
                                            <li>• Rezervasyonlar 24 saat önceden yapılmalıdır</li>
                                            <li>• İptal işlemleri için 2 saat önceden haber veriniz</li>
                                            <li>• Özel günler için özel menü seçenekleri mevcuttur</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Rezervasyon */}
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                <h3 className="font-playfair text-xl font-bold text-coffee-dark mb-4">
                                    WhatsApp ile Hızlı Rezervasyon
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Formu doldurmak istemiyorsanız, WhatsApp üzerinden de rezervasyon yapabilirsiniz.
                                </p>

                                <a
                                    href={`https://wa.me/905551234567?text=${generateWhatsAppMessage()}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                                    </svg>
                                    WhatsApp ile Rezervasyon Yap
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 