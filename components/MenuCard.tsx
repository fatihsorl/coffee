'use client';

import { motion } from 'framer-motion';

interface MenuCardProps {
    title: string;
    description: string;
    price: string;
    category?: string;
    isPopular?: boolean;
    image?: string;
}

export default function MenuCard({ title, description, price, category, isPopular, image }: MenuCardProps) {
    const getDefaultImage = (title: string, category: string) => {
        const productImages: Record<string, string> = {
            // Kahveler
            'espresso': 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
            'americano': 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&h=300&fit=crop',
            'cappuccino': 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
            'latte': 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop',
            'mocha': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
            'özel karışım': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',

            // Tatlılar
            'tiramisu': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
            'cheesecake': 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
            'brownie': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
            'profiterol': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
            'san sebastian': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',

            // Atıştırmalıklar
            'avokado toast': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
            'croissant': 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400&h=300&fit=crop',
            'sandviç': 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop',
            'salata': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
            'muffin': 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop'
        };

        return productImages[title.toLowerCase()] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop';
    };

    const productImage = image || getDefaultImage(title, category || '');

    return (
        <motion.div
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100 hover:border-accent/30"
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Hover Gradient Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-coffee-light/5 z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            {/* Popular Badge */}
            {isPopular && (
                <motion.div
                    className="absolute top-3 right-3 bg-gradient-to-r from-accent to-coffee-medium text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20"
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                    }}
                >
                    ⭐ Popüler
                </motion.div>
            )}

            {/* Product Image */}
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={productImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6">
                <div className="flex justify-between items-start mb-3">
                    <motion.h3
                        className="font-playfair text-xl font-semibold text-coffee-dark group-hover:text-accent transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {title}
                    </motion.h3>
                    <div className="ml-4 flex-shrink-0">
                        <motion.span
                            className="text-2xl font-bold text-accent"
                            whileHover={{
                                scale: 1.1,
                                color: "#8b4513",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {price}
                        </motion.span>
                    </div>
                </div>

                <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-4"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {description}
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                    className="h-0.5 bg-gradient-to-r from-accent to-coffee-light rounded-full w-12"
                    whileHover={{ width: 80 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
} 