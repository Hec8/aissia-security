'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { useTranslation } from '@/lib/hooks/useTranslation';

export const Header = () => {
    const { t, locale } = useTranslation();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Détection du scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Composants de drapeaux en SVG
    const FlagFR = () => (
        <svg className="w-5 h-4 rounded-sm" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
            <rect width="900" height="600" fill="#ED2939" />
            <rect width="600" height="600" fill="#fff" />
            <rect width="300" height="600" fill="#002395" />
        </svg>
    );

    const FlagGB = () => (
        <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
            <clipPath id="t"><path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z" /></clipPath>
            <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
            </g>
        </svg>
    );

    // Fermer le dropdown quand on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navigation = [
        { name: t.nav.about, href: `/${locale}/about` },
        { name: t.nav.services, href: `/${locale}/services` },
        { name: t.nav.training, href: `/${locale}/training` },
        { name: t.nav.products, href: `/${locale}/products` },
        { name: t.nav.contact, href: `/${locale}/contact` },
    ];

    const isActive = (href: string) => {
        if (href === `/${locale}`) {
            return pathname === `/${locale}` || pathname === '/';
        }
        return pathname?.startsWith(href);
    };

    const languages = [
        { code: 'fr', label: 'Français', shortLabel: 'FR', flag: <FlagFR /> },
        { code: 'en', label: 'English', shortLabel: 'EN', flag: <FlagGB /> },
    ];

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    const switchLanguage = (newLocale: string) => {
        const newPath = pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`;
        window.location.href = newPath;
        setIsLangDropdownOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[var(--primary)]'}`}>
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href={`/${locale}`} className="flex items-center group">
                        <div className="relative h-14 w-40">
                            <Image 
                                src={isScrolled ? "/logo AISSIA /Variantes logo-02.png" : "/logo AISSIA /Variantes logo-03.png"}
                                alt="AISSIA SÉCURITÉ"
                                fill
                                className="object-contain transition-all duration-300"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    isActive(item.href)
                                        ? isScrolled 
                                            ? 'bg-[var(--primary)] text-white' 
                                            : 'bg-white/20 text-white'
                                        : isScrolled
                                            ? 'text-[var(--text-primary)] hover:bg-[var(--accent)]'
                                            : 'text-white hover:bg-white/10'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Language Switcher & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                className={`flex items-center space-x-2 px-3 py-2 border rounded-lg text-sm font-medium transition-all duration-300 ${
                                    isScrolled
                                        ? 'border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--accent)]'
                                        : 'border-white/30 text-white hover:bg-white/10'
                                }`}
                            >
                                <span className="flex items-center">{currentLanguage.flag}</span>
                                <span className="font-semibold">{currentLanguage.shortLabel}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isLangDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-[var(--border)] overflow-hidden z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => switchLanguage(lang.code)}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-smooth ${locale === lang.code
                                                ? 'bg-[var(--primary)] text-white'
                                                : 'text-[var(--text-primary)] hover:bg-[var(--accent)]'
                                                }`}
                                        >
                                            <span className="flex items-center">{lang.flag}</span>
                                            <span>{lang.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                                isScrolled
                                    ? 'text-[var(--text-primary)] hover:bg-[var(--accent)]'
                                    : 'text-white hover:bg-white/10'
                            }`}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className={`lg:hidden py-4 border-t ${isScrolled ? 'border-[var(--border)]' : 'border-white/20'}`}>
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                                    isActive(item.href)
                                        ? isScrolled 
                                            ? 'bg-[var(--primary)] text-white' 
                                            : 'bg-white/20 text-white'
                                        : isScrolled
                                            ? 'text-[var(--text-primary)] hover:bg-[var(--accent)]'
                                            : 'text-white hover:bg-white/10'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </Container>
        </header>
    );
};
