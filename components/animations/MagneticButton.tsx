'use client';

import { MagneticHover } from '@/components/animations/AdvancedAnimations';
import { ReactNode } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
}

export const MagneticButton = ({ children, className = '' }: MagneticButtonProps) => {
    return (
        <MagneticHover className={className} strength={0.25}>
            {children}
        </MagneticHover>
    );
};
