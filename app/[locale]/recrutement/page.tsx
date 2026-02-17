'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { Container, AnimatedSection } from '@/components/ui';
import { PageHeader } from '@/components/sections';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { api, JobOffer } from '@/lib/api';
import ApplyModal from '@/components/ui/ApplyModal';

export default function RecruitmentPage() {
    type Offer = {
        id: string | number;
        title?: string;
        location?: string | null;
        description?: string | null;
        profiles?: string;
        conditions?: string;
    };

    type Translations = {
        recruitment?: {
            title?: string;
            subtitle?: string;
            heading?: string;
        };
        nav?: {
            home?: string;
            recruitment?: string;
        };
    };

    const { t, locale } = useTranslation();
    const tt = t as Translations;
    const [offers, setOffers] = useState<Offer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [applyOpen, setApplyOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

    useEffect(() => {
    let mounted = true;
    api.getJobs()
        .then((res) => {
            if (!mounted) return;
            const formattedOffers: Offer[] = (res.data || []).map((job: JobOffer) => ({
                ...job,
                profiles: job.profiles ?? undefined, // null → undefined
                conditions: job.conditions ?? undefined, // null → undefined for Offer.conditions
            }));
            setOffers(formattedOffers);
        })
        .catch(() => setOffers([]))
        .finally(() => mounted && setLoading(false));
    return () => { mounted = false };
}, []);

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                    <PageHeader
                            title={tt.recruitment?.title || 'Recrutement'}
                            subtitle={tt.recruitment?.subtitle || ''}
                            image="/images site/Whisk_4c173eda2ddccc68af54a6bd0f0abda5dr.jpeg"
                            breadcrumbs={[
                                { name: tt.nav?.home || '', href: `/${locale}` },
                                { name: tt.nav?.recruitment || 'Recrutement' },
                            ]}
                        />
                </AnimatedSection>

                <section className="py-20 bg-gray-50">
                    <Container>
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">{tt.recruitment?.heading || 'Offres d\u2019emploi'}</h2>

                            {loading ? (
                                <p>Chargement...</p>
                            ) : offers.length === 0 ? (
                                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                    <h3 className="text-lg font-semibold mb-2">Aucun poste n’est à pourvoir actuellement.</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Nous ne recrutons pas pour le moment, mais nous vous invitons à consulter régulièrement cette page pour découvrir nos futures opportunités ou suivez-nous sur nos réseaux pour rester informé(e)
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {offers.map((offer) => (
                                        <article key={offer.id} className="group bg-white rounded-2xl p-6 border border-[var(--secondary)] shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
                                            <div className="flex">
                                                <div className="hidden md:block w-1 rounded-l-2xl bg-[var(--secondary)] mr-4" />
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{offer.title}</h3>
                                                            {offer.location && <span className="inline-block text-sm text-[var(--secondary)] bg-[var(--secondary)]/10 px-2 py-0.5 rounded-full">{offer.location}</span>}
                                                        </div>
                                                    </div>

                                                    {offer.description && <div className="prose prose-sm text-gray-700 mt-3 mb-4" dangerouslySetInnerHTML={{ __html: offer.description }} />}

                                                    {offer.profiles && (
                                                        <div className="mb-3">
                                                            <h4 className="font-semibold text-[var(--text-primary)]">Profils recherchés</h4>
                                                            <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: offer.profiles }} />
                                                        </div>
                                                    )}

                                                    {offer.conditions && (
                                                        <div>
                                                            <h4 className="font-semibold text-[var(--text-primary)]">Conditions</h4>
                                                            <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: offer.conditions }} />
                                                        </div>
                                                    )}

                                                    <div className="mt-4 flex items-center gap-3">
                                                        <button onClick={() => { setSelectedOffer(offer); setApplyOpen(true); }} className="px-4 py-2 bg-[var(--primary)] text-white rounded-xl shadow-sm hover:opacity-95 hover:scale-105 transition">Postuler ici</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </AnimatedSection>
                    </Container>
                </section>
            </main>
            <Footer />
            <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} offer={selectedOffer ? { id: selectedOffer.id, title: selectedOffer.title } : null} />
        </>
    );
}
