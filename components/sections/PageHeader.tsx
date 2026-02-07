import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: { name: string; href?: string }[];
    image?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    breadcrumbs,
    image,
}) => {
    return (
        <section className="relative bg-[var(--primary)] text-white min-h-[350px] md:min-h-[400px] flex items-center overflow-hidden">
            {/* Background image on the right */}
            {image && (
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    {/* Gradient overlay: solid primary on the left, fading to transparent on the right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] via-45% to-transparent"></div>
                    {/* Subtle dark overlay for readability */}
                    <div className="absolute inset-0 bg-[var(--primary)]/30"></div>
                </div>
            )}

            <Container className="relative z-10">
                <div className="max-w-2xl py-8 text-left">
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <nav className="flex items-center space-x-2 text-sm mb-6 text-white/80">
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && (
                                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                    {crumb.href ? (
                                        <a href={crumb.href} className="hover:text-[var(--secondary)] transition-colors">
                                            {crumb.name}
                                        </a>
                                    ) : (
                                        <span className="font-medium text-[var(--secondary)]">{crumb.name}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </nav>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
                            {subtitle}
                        </p>
                    )}
                </div>
            </Container>
        </section>
    );
};
