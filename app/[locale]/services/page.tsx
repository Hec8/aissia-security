import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Card, CardBody, Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Surveillance et Gardiennage',
            description: 'Protection permanente de vos locaux, sites industriels et commerces avec des agents qualifiés disponibles 24h/24.',
            features: [
                'Surveillance permanente ou ponctuelle',
                'Rondes de sécurité',
                'Contrôle d\'accès',
                'Gestion des alarmes',
            ],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Agents de Sécurité Événementielle',
            description: 'Sécurisation de vos événements professionnels, culturels ou sportifs avec des équipes formées à la gestion de foule.',
            features: [
                'Contrôle des accès',
                'Gestion de la foule',
                'Prévention des incidents',
                'Coordination avec les autorités',
            ],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Conseil et Audit de Sécurité',
            description: 'Analyse de vos besoins en sécurité et recommandations personnalisées pour optimiser votre dispositif de protection.',
            features: [
                'Audit de sécurité',
                'Analyse des risques',
                'Plan de sécurité personnalisé',
                'Suivi et amélioration continue',
            ],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Vidéosurveillance',
            description: 'Installation et surveillance de systèmes de vidéosurveillance pour une protection continue de vos installations.',
            features: [
                'Installation de caméras',
                'Surveillance à distance',
                'Enregistrement sécurisé',
                'Maintenance et support',
            ],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: 'Systèmes de Contrôle d\'Accès',
            description: 'Gestion et contrôle des accès à vos locaux avec des solutions technologiques adaptées à vos besoins.',
            features: [
                'Badges et cartes d\'accès',
                'Contrôle biométrique',
                'Gestion des autorisations',
                'Traçabilité des accès',
            ],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Intervention Rapide',
            description: 'Service d\'intervention rapide disponible 24h/24 pour répondre à toute situation d\'urgence.',
            features: [
                'Réponse immédiate',
                'Équipes mobiles',
                'Coordination avec la police',
                'Gestion de crise',
            ],
        },
    ];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title={t.services.title}
                    subtitle={t.services.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.services },
                    ]}
                />

                <section className="py-20 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Card key={index} hover>
                                    <CardBody>
                                        <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center text-[var(--primary)] mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm">
                                                    <svg className="w-5 h-5 text-[var(--secondary)] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-[var(--text-secondary)]">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[var(--accent)]">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                                Besoin d'un service personnalisé ?
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] mb-8">
                                Contactez-nous pour discuter de vos besoins spécifiques et obtenir une solution adaptée.
                            </p>
                            <a
                                href={`/${locale}/contact`}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[var(--primary)] rounded-lg hover:bg-[var(--primary-dark)] transition-smooth"
                            >
                                {t.common.contactUs}
                            </a>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
