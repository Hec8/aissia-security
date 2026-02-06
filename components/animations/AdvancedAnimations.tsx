'use client';

import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useRef, useEffect, ReactNode, useState } from 'react';

// ─── COUNTER ANIMATION (Compteur qui s'anime) ───
interface CountUpProps {
    target: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

export const CountUp = ({ target, suffix = '', prefix = '', duration = 2, className = '' }: CountUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (isInView) {
            motionValue.set(target);
        } else {
            motionValue.set(0);
        }
    }, [isInView, motionValue, target]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            setDisplay(Math.round(latest).toLocaleString());
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <span ref={ref} className={className}>
            {prefix}{display}{suffix}
        </span>
    );
};

// ─── TYPEWRITER EFFECT (Machine à écrire) ───
interface TypewriterProps {
    texts: string[];
    className?: string;
    speed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
}

export const Typewriter = ({
    texts,
    className = '',
    speed = 80,
    deleteSpeed = 40,
    pauseDuration = 2000,
}: TypewriterProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = texts[currentTextIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < fullText.length) {
                    setCurrentText(fullText.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseDuration]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
            />
        </span>
    );
};

// ─── ANIMATED PROGRESS BAR (Barre qui se remplit) ───
interface AnimatedProgressProps {
    percentage: number;
    label: string;
    color?: string;
    className?: string;
}

export const AnimatedProgress = ({
    percentage,
    label,
    color = 'var(--secondary)',
    className = '',
}: AnimatedProgressProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <div ref={ref} className={className}>
            <div className="flex justify-between mb-2">
                <span className="font-semibold text-[var(--text-primary)]">{label}</span>
                <motion.span
                    className="font-bold"
                    style={{ color }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {percentage}%
                </motion.span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    {/* Shimmer effect on the bar */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={isInView ? { x: '200%' } : { x: '-100%' }}
                        transition={{ duration: 1.5, delay: 1.2, ease: 'easeInOut' }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

// ─── MAGNETIC HOVER (Bouton magnétique) ───
interface MagneticHoverProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

export const MagneticHover = ({ children, className = '', strength = 0.3 }: MagneticHoverProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * strength);
        y.set((e.clientY - centerY) * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ─── REVEAL TEXT (Texte qui se dévoile mot par mot) ───
interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const RevealText = ({ text, className = '', delay = 0 }: RevealTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    const words = text.split(' ');

    return (
        <span ref={ref} className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%', opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * 0.05,
                            ease: [0.25, 0.4, 0.25, 1],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

// ─── FLOATING ELEMENT (Effet flottant continu) ───
interface FloatingProps {
    children: ReactNode;
    className?: string;
    amplitude?: number;
    duration?: number;
}

export const Floating = ({ children, className = '', amplitude = 15, duration = 4 }: FloatingProps) => {
    return (
        <motion.div
            animate={{
                y: [-amplitude, amplitude, -amplitude],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ─── GLOWING BORDER (Bordure lumineuse animée) ───
interface GlowCardProps {
    children: ReactNode;
    className?: string;
}

export const GlowCard = ({ children, className = '' }: GlowCardProps) => {
    return (
        <motion.div
            className={`relative group ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {/* Animated glow border */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[var(--secondary)] via-[var(--primary-light)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-gradient-shift" />
            <div className="relative bg-white rounded-2xl overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
};

// ─── PARALLAX SCROLL (Parallaxe au scroll) ───
interface ParallaxScrollProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export const ParallaxScroll = ({ children, className = '', speed = 0.5 }: ParallaxScrollProps) => {
    const ref = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const y = useTransform(useMotionValue(scrollY), [0, 1000], [0, 1000 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

// ─── FLIP CARD (Carte qui se retourne) ───
interface FlipCardProps {
    front: ReactNode;
    back: ReactNode;
    className?: string;
}

export const FlipCard = ({ front, back, className = '' }: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`perspective-1000 ${className}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                    {front}
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                    {back}
                </div>
            </motion.div>
        </div>
    );
};

// ─── SHIMMER TEXT (Texte avec effet brillant) ───
interface ShimmerTextProps {
    children: ReactNode;
    className?: string;
}

export const ShimmerText = ({ children, className = '' }: ShimmerTextProps) => {
    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10">{children}</span>
            <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            />
        </span>
    );
};
