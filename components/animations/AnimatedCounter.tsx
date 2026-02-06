'use client';

import { CountUp } from '@/components/animations/AdvancedAnimations';

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export const AnimatedCounter = ({ target, suffix = '', prefix = '', className = '' }: AnimatedCounterProps) => {
    return <CountUp target={target} suffix={suffix} prefix={prefix} className={className} />;
};
