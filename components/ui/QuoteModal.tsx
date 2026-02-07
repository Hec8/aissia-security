'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
    translations: {
        title: string;
        subtitle: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        company: string;
        service: string;
        serviceOptions: {
            surveillance: string;
            audit: string;
            risk: string;
            protection: string;
            formation: string;
            escorte: string;
            other: string;
        };
        message: string;
        submit: string;
        success: string;
        close: string;
    };
}

export function QuoteModal({ translations: t }: QuoteModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [preselectedService, setPreselectedService] = useState('');

    const handleOpen = useCallback((e: Event) => {
        const customEvent = e as CustomEvent;
        if (customEvent.detail?.service) {
            setPreselectedService(customEvent.detail.service);
        }
        setIsOpen(true);
        setIsSubmitted(false);
    }, []);

    useEffect(() => {
        window.addEventListener('open-quote-modal', handleOpen);
        return () => window.removeEventListener('open-quote-modal', handleOpen);
    }, [handleOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Intégrer l'envoi réel (API backend)
        setIsSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsSubmitted(false);
            setPreselectedService('');
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-[var(--primary)] text-white px-6 py-5 rounded-t-2xl flex justify-between items-start z-10">
                            <div>
                                <h2 className="text-xl font-bold text-[var(--secondary)]">{t.title}</h2>
                                <p className="text-white/80 text-sm mt-1">{t.subtitle}</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-1 -mr-1 -mt-1"
                                aria-label={t.close}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-[var(--text-primary)]">{t.success}</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">{t.firstName}</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-gray-900"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">{t.lastName}</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-gray-900"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-gray-900"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-gray-900"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.company}</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-gray-900"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.service}</label>
                                        <select
                                            defaultValue={preselectedService}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-gray-900 bg-white"
                                        >
                                            <option value="">{t.service}</option>
                                            <option value="surveillance">{t.serviceOptions.surveillance}</option>
                                            <option value="audit">{t.serviceOptions.audit}</option>
                                            <option value="risk">{t.serviceOptions.risk}</option>
                                            <option value="protection">{t.serviceOptions.protection}</option>
                                            <option value="formation">{t.serviceOptions.formation}</option>
                                            <option value="escorte">{t.serviceOptions.escorte}</option>
                                            <option value="other">{t.serviceOptions.other}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
                                        <textarea
                                            rows={3}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-gray-900 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[var(--primary)] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                                    >
                                        {t.submit}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Helper client component - bouton qui ouvre le modal
export function QuoteButton({
    children,
    className = '',
    service = '',
}: {
    children: React.ReactNode;
    className?: string;
    service?: string;
}) {
    const handleClick = () => {
        window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: { service } }));
    };

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
}
