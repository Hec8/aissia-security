import React from 'react';
import { Container } from '../ui/Container';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: { name: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    breadcrumbs,
}) => {
    return (
        <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20 md:py-24">
            <Container>
                <div className="text-center max-w-4xl mx-auto">
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <nav className="flex items-center justify-center space-x-2 text-sm mb-6 opacity-90">
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <span>/</span>}
                                    {crumb.href ? (
                                        <a href={crumb.href} className="hover:underline">
                                            {crumb.name}
                                        </a>
                                    ) : (
                                        <span className="font-medium">{crumb.name}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </nav>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--secondary)]">{title}</h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-white/95 leading-relaxed">{subtitle}</p>
                    )}
                </div>
            </Container>
        </section>
    );
};
