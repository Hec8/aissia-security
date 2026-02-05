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
        <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-16">
            <Container>
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="flex items-center space-x-2 text-sm mb-4 opacity-90">
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl">{subtitle}</p>
                )}
            </Container>
        </section>
    );
};
