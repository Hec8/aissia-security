'use client';

import { GlowCard as GlowCardBase } from '@/components/animations/AdvancedAnimations';
import { ReactNode } from 'react';

interface GlowServiceCardProps {
    children: ReactNode;
    className?: string;
}

export const GlowServiceCard = ({ children, className = '' }: GlowServiceCardProps) => {
    return (
        <GlowCardBase className={className}>
            {children}
        </GlowCardBase>
    );
};
