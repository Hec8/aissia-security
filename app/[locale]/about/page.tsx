import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title={t.about.title}
                    subtitle={t.about.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.about },
                    ]}
                />

                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            {/* Vision & Mission */}
                            <div className="mb-16">
                                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                                    Notre Vision
                                </h2>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                                    AISSIA SÉCURITÉ s'impose comme un acteur de référence dans le secteur de la sécurité privée,
                                    offrant des solutions professionnelles et innovantes adaptées aux besoins spécifiques de chaque client.
                                    Notre engagement : garantir la protection de vos biens et la sécurité de vos espaces avec excellence
                                    et professionnalisme.
                                </p>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    Nous croyons fermement qu'une sécurité de qualité repose sur des équipes bien formées,
                                    des procédures rigoureuses et une approche personnalisée de chaque mission.
                                </p>
                            </div>

                            {/* Valeurs */}
                            <div className="mb-16">
                                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
                                    Nos Valeurs
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-[var(--accent)] p-6 rounded-lg">
                                        <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Professionnalisme</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Des agents qualifiés, formés aux meilleures pratiques et normes de sécurité.
                                        </p>
                                    </div>

                                    <div className="bg-[var(--accent)] p-6 rounded-lg">
                                        <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Disponibilité</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Service disponible 24/7 pour répondre à tous vos besoins en sécurité.
                                        </p>
                                    </div>

                                    <div className="bg-[var(--accent)] p-6 rounded-lg">
                                        <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Fiabilité</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Des prestations conformes aux normes et aux engagements contractuels.
                                        </p>
                                    </div>

                                    <div className="bg-[var(--accent)] p-6 rounded-lg">
                                        <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Éthique</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Intégrité, respect et transparence dans toutes nos actions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Notre Expertise */}
                            <div>
                                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                                    Notre Expertise
                                </h2>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                                    Forte d'une expérience solide dans le secteur de la sécurité privée, AISSIA SÉCURITÉ
                                    intervient auprès d'une clientèle variée : entreprises, institutions, commerces,
                                    événements et particuliers.
                                </p>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    Nous proposons également un centre de formation agréé pour former les futurs agents de sécurité
                                    selon les standards les plus exigeants du secteur, garantissant ainsi un niveau de compétence
                                    élevé et une parfaite maîtrise des missions de sécurité.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
