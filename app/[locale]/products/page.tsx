import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { AnimatedSection, ScaleAnimation, StaggerContainer } from '@/components/ui';
import { Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const securityServices = [
        {
            icon: '💼',
            title: 'Agent de Sécurité (ADS J/N)',
            badge: 'PLUS DEMANDÉ',
            features: [
                '🏆 Surveillance jour et nuit',
                '🛡️ Protection des sites et des personnes',
                '📌 Option disponible : Agent de protection armé (ADP J/N)',
            ],
        },
        {
            icon: '🐕',
            title: 'Conducteur-Chien',
            features: [
                '🏆 Surveillance renforcée avec chien de défense',
                '📌 Disponible de jour ou de nuit',
            ],
        },
        {
            icon: '🛡️',
            title: 'Garde du Corps (GDC)',
            features: [
                '• Protection rapprochée personnalisée',
                '📌 Contrats adaptés à vos besoins',
            ],
        },
        {
            icon: '🚨',
            title: 'Abonnement Assistance ALERTGUARD',
            features: [
                '📌 Assistance en cas d\'urgence',
            ],
        },
    ];

    const additionalServices = [
        {
            icon: '✅',
            title: 'Sécurité avancée',
            features: [
                '• Responsable sécurité corporate',
                '• Inspecteur de magasin',
            ],
        },
        {
            icon: '📊',
            title: 'Audit & études de sécurité',
            features: [
                '• Identification et évaluation des risques',
                '• Plan de gestion des crises et évacuation',
            ],
        },
        {
            icon: '🚗',
            title: 'Services d\'intervention & escorte sécurisé',
            features: [
                '• Escorte moto ou auto',
                '• Ramassage de clés de coffres et accès sécurisés',
            ],
        },
    ];

    const strategicServices = [
        {
            icon: '📄',
            title: 'Veille et Intelligence Économique',
            features: [
                '• Rapports d\'analyses des risques',
                '• Notes et fiches pays',
            ],
        },
        {
            icon: '🔔',
            title: 'Abonnement au Bulletin d\'Information',
            features: [
                '📌 Mises à jour régulières sur la sécurité globale',
            ],
        },
    ];

    const annexServices = [
        {
            icon: '✈️',
            title: 'Accompagnement voyage sécurisé',
            features: [],
        },
    ];

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                <PageHeader
                    title={t.products.title}
                    subtitle={t.products.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.products },
                    ]}
                />
                </AnimatedSection>

                {/* Sécurité et surveillance */}
                <section className="py-20 bg-white">
                    <Container>
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-12 text-center">
                                Sécurité et surveillance
                            </h2>
                        </AnimatedSection>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {securityServices.map((service, index) => (
                                <ScaleAnimation key={index} delay={index * 0.1}>
                                    <div 
                                        className="relative bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-xl h-full"
                                    >
                                        {service.badge && (
                                            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm transform rotate-12 shadow-lg">
                                                {service.badge}
                                            </div>
                                        )}
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-[var(--primary)] mt-3">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-700 flex items-start gap-2">
                                                <span className="mt-1">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6">
                                        <Link 
                                            href={`/${locale}/contact`}
                                            className="inline-block px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                        >
                                            📋 Demander un devis
                                        </Link>
                                    </div>
                                    </div>
                                </ScaleAnimation>
                            ))}
                        </StaggerContainer>
                    </Container>
                </section>

                {/* Prestations supplémentaires */}
                <section className="py-20 bg-gray-50">
                    <Container>
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-12 text-center">
                                Prestations supplémentaires
                            </h2>
                        </AnimatedSection>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {additionalServices.map((service, index) => (
                                <ScaleAnimation key={index} delay={index * 0.15}>
                                    <div 
                                        className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-xl h-full"
                                    >
                                    <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--primary)] mb-6 text-center">
                                        {service.title}
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-700 text-sm">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-center">
                                        <Link 
                                            href={`/${locale}/contact`}
                                            className="inline-block px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                        >
                                            📋 Demander un devis
                                        </Link>
                                    </div>
                                    </div>
                                </ScaleAnimation>
                            ))}
                        </StaggerContainer>
                    </Container>
                </section>

                {/* Analyses & Notes Stratégiques */}
                <section className="py-20 bg-white">
                    <Container>
                        <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-12 text-center">
                            Analyses & Notes Stratégiques
                        </h2>
                        </AnimatedSection>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {strategicServices.map((service, index) => (
                                <ScaleAnimation key={index} delay={index * 0.1}>
                                <div 
                                    className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--primary)] mb-6 text-center">
                                        {service.title}
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-700 text-sm">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-center">
                                        <Link 
                                            href={`/${locale}/contact`}
                                            className="inline-block px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                        >
                                            📋 Demander un devis
                                        </Link>
                                    </div>
                                </div>
                                </ScaleAnimation>
                            ))}
                        </StaggerContainer>
                    </Container>
                </section>

                {/* Prestations annexes */}
                <section className="py-20 bg-gray-50">
                    <Container>
                        <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-12 text-center">
                            Prestations annexes
                        </h2>
                        </AnimatedSection>
                        <div className="max-w-xl mx-auto">
                            {annexServices.map((service, index) => (
                                <ScaleAnimation key={index} delay={0.2}>
                                <div 
                                    className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--primary)] mb-6 text-center">
                                        {service.title}
                                    </h3>
                                    <div className="text-center">
                                        <Link 
                                            href={`/${locale}/contact`}
                                            className="inline-block px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                        >
                                            📋 Demander un devis
                                        </Link>
                                    </div>
                                </div>
                                </ScaleAnimation>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <Container>
                        <AnimatedSection delay={0.2}>
                        <div className="max-w-3xl mx-auto text-center bg-[var(--primary)] text-white rounded-2xl p-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Besoin d&apos;une solution personnalisée ?
                            </h2>
                            <p className="text-lg mb-8 text-white/90">
                                Contactez-nous pour discuter de vos besoins spécifiques en matière de sécurité.
                            </p>
                            <ScaleAnimation delay={0.3}>
                            <Link
                                href={`/${locale}/contact`}
                                className="inline-block px-12 py-4 bg-[var(--secondary)] text-[var(--primary)] font-bold text-lg rounded-lg hover:scale-105 hover:opacity-90 transition-all shadow-lg"
                            >
                                Contactez-nous
                            </Link>
                            </ScaleAnimation>
                        </div>
                        </AnimatedSection>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
