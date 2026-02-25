'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { Container, AnimatedSection } from '@/components/ui';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import { PageHeader } from '@/components/sections';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { api, JobOffer } from '@/lib/api';
import ApplyModal from '@/components/ui/ApplyModal';

function escapeHtml(s: string) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function normalizeToHtmlList(src?: string | null) {
    if (!src) return '';
    if (/<ul|<li/i.test(src)) return src; // already HTML
    // split lines and/or items starting with -
    const lines = src.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) return '';
    const items = lines.length === 1 && lines[0].includes('-') ?
        lines[0].split(/\s*-\s*/).map(s => s.trim()).filter(Boolean) : lines;
    const lis = items.map(i => `<li>${escapeHtml(i.replace(/^-\s*/, ''))}</li>`).join('');
    return `<ul class="list-disc ml-6">${lis}</ul>`;
}

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

        const demoOffers: Offer[] = [
            {
                id: 'demo-1',
                title: 'Agent de sécurité (CDI)',
                location: 'Abidjan',
                description: '<p>Mission de surveillance sur site commercial. Horaires de jour et de nuit selon planning.</p>',
                profiles: '- Expérience souhaitée\n- Sens des responsabilités\n- Formation sécurité appréciée',
                conditions: '- Salaire compétitif\n- Mutuelle\n- Formation assurée'
            },
            {
                id: 'demo-2',
                title: 'Conducteur de chien de défense (CDD)',
                location: 'Yopougon',
                description: '<p>Travail en binôme avec chien de défense, interventions ponctuelles.</p>',
                profiles: '- Maîtrise de la cynotechnie\n- Permis de conduire B',
                conditions: '- Rémunération selon profil\n- Hébergement possible'
            }
        ];

        api.getJobs()
            .then((res) => {
                if (!mounted) return;
                const formattedOffers: Offer[] = (res.data || []).map((job: JobOffer) => ({
                    ...job,
                    profiles: job.profiles ?? undefined,
                    conditions: job.conditions ?? undefined,
                }));
                if (formattedOffers.length === 0) setOffers(demoOffers);
                else setOffers(formattedOffers);
            })
            .catch(() => {
                if (mounted) setOffers(demoOffers);
            })
            .finally(() => mounted && setLoading(false));

        return () => { mounted = false };
    }, []);

    return (
        <>
            <Header />
            <ParticleNetwork />
            <main>
                <AnimatedSection>
                    <PageHeader
                        title={tt.recruitment?.title || 'Recrutement'}
                        subtitle={tt.recruitment?.subtitle || 'Rejoignez notre équipe'}
                        image="/images site/Whisk_6e32ef6726784ffaef04ff7fe96685e3dr.jpeg"
                        breadcrumbs={[
                            { name: tt.nav?.home || '', href: `/${locale}` },
                            { name: tt.nav?.recruitment || 'Recrutement' },
                        ]}
                    />
                </AnimatedSection>

                <section className="py-20 bg-gray-50">
                    <Container>
                        <AnimatedSection>
                            <div className="text-center mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">{tt.recruitment?.heading || 'Offres d\u2019emploi'}</h2>
                                <div className="w-20 h-1 bg-[var(--secondary)] rounded-full mx-auto mt-3" aria-hidden />
                            </div>

                            <div className="mb-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                    <div className="md:col-span-1 flex items-start md:items-center">
                                        <div className="transform md:translate-y-10">
                                            <h3 className="bg-[var(--secondary)] p-2 rounded-xl text-2xl md:text-3xl text-center font-extrabold text-[var(--text-primary)] leading-tight mb-2">Pièces à fournir</h3>
                                            <p className="text-sm mt-20 text-[var(--text-secondary)]">Regrouper dans un dossier puis compresser en .zip</p>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <div className="bg-[#071826] rounded-3xl p-6 border border-[#12313b] shadow-inner">
                                            <div className="max-h-40 overflow-y-auto">
                                                <ul className="space-y-3 text-sm text-white/90">
                                                    {[
                                                        'Lettre de motivation manuscrite',
                                                        'Curriculum vitae',
                                                        'Copie de la carte nationale d’identité',
                                                        'Copie permis de conduire',
                                                        'Copie diplômes obtenus',
                                                        'Copie certificat de travail ancien employeur',
                                                        'Copie attestation de stage ancien employeur',
                                                        'Certificat de nationalité',
                                                        'Casier judiciaire',
                                                        'Extrait de naissance',
                                                        'Extrait de naissance du conjoint(e)',
                                                        'Extrait de naissance des enfants',
                                                        'Extrait ou acte de mariage',
                                                        '4 photos d’identité',
                                                        'Numéro ou relevé d’identité bancaire (RIB)',
                                                        'Numéro CNPS',
                                                        'Plan de localisation géographique du domicile',
                                                        'Facture CIE ou SODECI',
                                                    ].map((it, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <span className="flex-none w-5 h-5 rounded-full bg-[var(--secondary)]/90 text-[var(--secondary)] flex items-center justify-center mt-1"> 
                                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            <span className="text-sm leading-relaxed">{it}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center shadow-md">
                                                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h10M12 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                                                            <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: normalizeToHtmlList(offer.profiles) }} />
                                                        </div>
                                                    )}

                                                    {offer.conditions && (
                                                        <div>
                                                            <h4 className="font-semibold text-[var(--text-primary)]">Conditions</h4>
                                                            <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: normalizeToHtmlList(offer.conditions) }} />
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
