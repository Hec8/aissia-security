import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { AnimatedSection, ScaleAnimation, StaggerContainer } from '@/components/ui';
import { Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const securityValues = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
            title: "C'est prévenir ...",
            description: "Tous les risques seront détectés, analysés et soumis à votre appréciation.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            title: "C'est réagir...",
            description: "En cas d'incident par exemple, alerter, faire évacuer, exécuter le plan de secours, informer qui de droit (sapeurs-pompier, police, gendarmerie...)",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "C'est contrôler...",
            description: "Les personnes dans les établissements surveillés et réguler les allées et venues à l'intérieur. Le but est d'éviter les vols de produits de valeurs, d'informations sensibles ainsi qu'interdire les accès non autorisés à des zones dangereuses",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "C'est assurer...",
            description: "la sécurité des biens et des personnes.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "C'est faire face...",
            description: "Aux incidents inopinés dans les lieux privés et publiques et être réactif",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: "C'est surveiller...",
            description: "L'intégralité de vos outils de travail.",
        },
    ];

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                <PageHeader
                    title={t.about.title}
                    subtitle={t.about.description}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.about },
                    ]}
                />
                </AnimatedSection>

                {/* Section A Propos avec image */}
                <AnimatedSection>
                    <section className="py-20 bg-white">
                        <Container>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Image à gauche */}
                                <ScaleAnimation>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                        <Image 
                                            src="/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg"
                                            alt="Agent de sécurité Aissia Security"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </ScaleAnimation>

                                {/* Texte à droite */}
                                <AnimatedSection delay={0.2}>
                                    <div>
                                        <div className="text-[var(--text-secondary)] text-sm font-semibold mb-4 uppercase tracking-wide">
                                            À Propos
                                        </div>
                                        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">
                                            Aissia <span className="text-[var(--secondary)]">Security</span>
                                        </h2>
                                        <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                                            <p>
                                                AISSIA-SECURITY est votre partenaire de confiance pour assurer la sécurité des et des services. Grâce à une étude de sécurité adaptée à vos besoins, nous vous proposons des solutions adéquates.
                                            </p>
                                            <p>
                                                Notre mission est de garantir un environnement sûr en utilisant des moyens humains et technologiques performants.
                                            </p>
                                            <p>
                                                Avec AISSIA-SECURITY, bénéficiez d'une approche complète et personnalisée pour relever les défis sécuritaires modernes.
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </Container>
                    </section>
                </AnimatedSection>

                {/* Section "Pour AISSIA SECURITY, la sécurité c'est quoi ?" */}
                <section className="py-20 bg-gray-400 relative overflow-hidden">
                    {/* Cercles décoratifs en arrière-plan */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
                        <div className="absolute top-32 left-32 w-96 h-96 border-4 border-white rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-80 h-80 border-4 border-white rounded-full"></div>
                        <div className="absolute bottom-32 right-32 w-64 h-64 border-4 border-white rounded-full"></div>
                    </div>

                    <Container className="relative z-10">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    Pour <span className="text-[var(--secondary)]">AISSIA-SECURITY</span>,
                                </h2>
                                <p className="text-3xl md:text-4xl font-normal text-white">
                                    la sécurité c'est quoi ?
                                </p>
                            </div>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {securityValues.map((value, index) => (
                                <ScaleAnimation key={index} delay={index * 0.1}>
                                    <div className="bg-[var(--primary)] rounded-lg p-8 text-white h-full hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center mb-4">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">
                                            {value.title}
                                        </h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </ScaleAnimation>
                            ))}
                        </StaggerContainer>

                        <AnimatedSection delay={0.6}>
                            <div className="text-center">
                                <Link 
                                    href={`/${locale}/contact`}
                                    className="inline-block px-8 py-4 bg-[var(--secondary)] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[var(--secondary-dark)] transition-colors hover:scale-105 transform duration-300"
                                >
                                    Contactez-nous maintenant
                                </Link>
                            </div>
                        </AnimatedSection>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
