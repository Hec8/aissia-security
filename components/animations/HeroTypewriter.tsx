'use client';

import { Typewriter } from '@/components/animations/AdvancedAnimations';

interface HeroTypewriterProps {
    texts: string[];
}

export const HeroTypewriter = ({ texts }: HeroTypewriterProps) => {
    return (
        <Typewriter
            texts={texts}
            className="text-white/95"
            speed={60}
            deleteSpeed={30}
            pauseDuration={3000}
        />
    );
};
