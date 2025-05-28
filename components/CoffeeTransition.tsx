interface CoffeeTransitionProps {
    variant?: 'bounce' | 'splash' | 'rotate' | 'float' | 'zigzag';
    height?: string;
}

export default function CoffeeTransition({ variant = 'bounce', height = 'h-16' }: CoffeeTransitionProps) {
    if (variant === 'bounce') {
        return (
            <div className={`relative ${height} bg-white overflow-hidden`}>
                {/* Yıldız Parçacıkları */}
                <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-yellow-400 text-sm animate-twinkle opacity-60"
                            style={{
                                left: `${15 + i * 10}%`,
                                top: `${30 + Math.random() * 40}%`,
                                animationDelay: `${i * 0.1}s`,
                            }}
                        >
                            ✨
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'splash') {
        return (
            <div className={`relative ${height} bg-white overflow-hidden`}>
                {/* Yıldız Parçacıkları */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-yellow-400 text-sm animate-twinkle opacity-60"
                            style={{
                                left: `${15 + i * 10}%`,
                                top: `${30 + Math.random() * 40}%`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        >
                            ✨
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'rotate') {
        return (
            <div className={`relative ${height} bg-white overflow-hidden`}>
                {/* Yıldız Parçacıkları */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-yellow-400 text-sm animate-twinkle opacity-60"
                            style={{
                                left: `${15 + i * 10}%`,
                                top: `${30 + Math.random() * 40}%`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        >
                            ✨
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'float') {
        return (
            <div className={`relative ${height} bg-white overflow-hidden`}>
                {/* Yıldız Parçacıkları */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-yellow-400 text-sm animate-twinkle opacity-60"
                            style={{
                                left: `${15 + i * 10}%`,
                                top: `${30 + Math.random() * 40}%`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        >
                            ✨
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Zigzag variant
    return (
        <div className={`relative ${height} bg-white overflow-hidden`}>
            {/* Yıldız Parçacıkları */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-yellow-400 text-sm animate-twinkle opacity-60"
                        style={{
                            left: `${15 + i * 10}%`,
                            top: `${30 + Math.random() * 40}%`,
                            animationDelay: `${i * 0.3}s`,
                        }}
                    >
                        ✨
                    </div>
                ))}
            </div>
        </div>
    );
} 