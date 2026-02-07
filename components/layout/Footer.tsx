'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { QuoteModal } from '../ui/QuoteModal';
import { useTranslation } from '@/lib/hooks/useTranslation';

export const Footer = () => {
    const { t, locale } = useTranslation();
    const currentYear = new Date().getFullYear();

    const servicesLinks = [
        { name: t.footer.servicesLinks.surveillance, href: `/${locale}/services` },
        { name: t.footer.servicesLinks.audit, href: `/${locale}/services` },
        { name: t.footer.servicesLinks.risk, href: `/${locale}/services` },
        { name: t.footer.servicesLinks.protection, href: `/${locale}/services` },
        { name: t.footer.servicesLinks.formation, href: `/${locale}/training` },
    ];

    const companyLinks = [
        { name: t.footer.companyLinks.about, href: `/${locale}/about` },
        { name: t.footer.companyLinks.services, href: `/${locale}/services` },
        { name: t.footer.companyLinks.products, href: `/${locale}/products` },
        { name: t.footer.companyLinks.technologies, href: `/${locale}/technologies` },
        { name: t.footer.companyLinks.training, href: `/${locale}/training` },
        { name: t.footer.companyLinks.contact, href: `/${locale}/contact` },
    ];

    return (
        <>
        <footer className="bg-[#0a1929] text-white mt-auto">
            <Container>
                <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Col 1 - Logo + Description + Socials */}
                    <div>
                        <div className="relative h-16 w-44 mb-4">
                            <Image 
                                src="/logo AISSIA /Variantes logo-03.png"
                                alt="AISSIA SÉCURITÉ"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed mb-6">
                            {t.footer.description}
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                                aria-label="X (Twitter)"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2 - Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">{t.footer.services}</h3>
                        <ul className="space-y-3">
                            {servicesLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 - Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">{t.footer.company}</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 - Stay Updated / Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">{t.footer.stayUpdated}</h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-4">
                            {t.footer.newsletterText}
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder={t.footer.emailPlaceholder}
                                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent"
                            />
                            <button className="w-full bg-[var(--secondary)] text-[var(--primary)] font-semibold text-sm py-2.5 px-4 rounded-lg hover:opacity-90 transition-all">
                                {t.footer.subscribe}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-white/50">
                        © {currentYear} AISSIA SÉCURITÉ. {t.footer.rights}.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                            {t.footer.privacy}
                        </Link>
                        <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                            {t.footer.terms}
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
            <QuoteModal translations={t.quoteModal} />
        </>
    );
};
