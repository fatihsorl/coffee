'use client';

import { useId } from 'react';

interface WaveTransitionProps {
    fromColor: string;
    toColor: string;
    position?: 'top' | 'bottom';
    height?: string;
}

export default function WaveTransition({
    fromColor,
    toColor,
    position = 'bottom',
    height = 'h-16'
}: WaveTransitionProps) {
    const waveId = useId();

    return (
        <div className={`relative ${height} overflow-hidden`} style={{ backgroundColor: fromColor }}>
            <svg
                className="absolute bottom-0 w-full h-full"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id={waveId} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={fromColor} />
                        <stop offset="100%" stopColor={toColor} />
                    </linearGradient>
                </defs>
                <path
                    d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
                    fill={`url(#${waveId})`}
                />
            </svg>
        </div>
    );
} 