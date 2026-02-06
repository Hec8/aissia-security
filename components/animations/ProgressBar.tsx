'use client';

import { AnimatedProgress } from '@/components/animations/AdvancedAnimations';

interface ProgressBarProps {
    percentage: number;
    label: string;
    color?: string;
    className?: string;
}

export const ProgressBar = ({ percentage, label, color, className }: ProgressBarProps) => {
    return <AnimatedProgress percentage={percentage} label={label} color={color} className={className} />;
};
