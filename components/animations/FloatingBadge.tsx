'use client';

import { Floating } from '@/components/animations/AdvancedAnimations';
import { ReactNode } from 'react';

interface FloatingBadgeProps {
    children: ReactNode;
    className?: string;
    amplitude?: number;
    duration?: number;
}

export const FloatingBadge = ({ children, className = '', amplitude = 10, duration = 4 }: FloatingBadgeProps) => {
    return (
        <Floating className={className} amplitude={amplitude} duration={duration}>
            {children}
        </Floating>
    );
};
