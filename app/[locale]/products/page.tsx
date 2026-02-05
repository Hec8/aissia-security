import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Card, CardBody, Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const products = [
        {
            category: 'Équipements de Surveillance',
            items: [
                {
                    name: 'Caméras de surveillance HD',
                    description: 'Caméras haute définition pour surveillance intérieure et extérieure',
                },
                {
                    name: 'Systèmes d\'enregistrement DVR/NVR',
                    description: 'Enregistreurs numériques pour stockage vidéo sécurisé',
                },
                {
                    name: 'Moniteurs de surveillance',
                    description: 'Écrans professionnels pour visualisation en temps réel',
                },
            ],
        },
        {
            category: 'Contrôle d\'Accès',
            items: [
                {
                    name: 'Lecteurs de badges',
                    description: 'Systèmes de lecture de cartes RFID et badges magnétiques',
                },
                {
                    name: 'Systèmes biométriques',
                    description: 'Contrôle d\'accès par empreintes digitales et reconnaissance faciale',
                },
                {
                    name: 'Tourniquets de sécurité',
                    description: 'Barrières physiques pour contrôle des flux de personnes',
                },
            ],
        },
        {
            category: 'Systèmes d\'Alarme',
            items: [
                {
                    name: 'Centrales d\'alarme',
                    description: 'Systèmes centraux de gestion et d\'alerte',
                },
                {
                    name: 'Détecteurs de mouvement',
                    description: 'Capteurs infrarouges et volumétriques',
                },
                {
                    name: 'Sirènes d\'alarme',
                    description: 'Dispositifs d\'alerte sonore intérieurs et extérieurs',
                },
            ],
        },
        {
            category: 'Équipements Agents',
            items: [
                {
                    name: 'Tenues professionnelles',
                    description: 'Uniformes et vêtements de service pour agents de sécurité',
                },
                {
                    name: 'Équipements de communication',
                    description: 'Talkies-walkies et systèmes radio professionnels',
                },
                {
                    name: 'Matériel d\'intervention',
                    description: 'Lampes tactiques, menottes, gilets pare-balles',
                },
            ],
        },
        {
            category: 'Détection Incendie',
            items: [
                {
                    name: 'Détecteurs de fumée',
                    description: 'Capteurs optiques et ioniques certifiés',
                },
                {
                    name: 'Alarmes incendie',
                    description: 'Déclencheurs manuels et sirènes d\'évacuation',
                },
                {
                    name: 'Extincteurs',
                    description: 'Extincteurs portables et sur roues, toutes classes de feu',
                },
            ],
        },
        {
            category: 'Solutions Connectées',
            items: [
                {
                    name: 'Systèmes IoT',
                    description: 'Solutions connectées pour surveillance à distance',
                },
                {
                    name: 'Applications mobiles',
                    description: 'Gestion de sécurité depuis smartphone et tablette',
                },
                {
                    name: 'Plateformes cloud',
                    description: 'Stockage et analyse de données sécurisés',
                },
            ],
        },
    ];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title={t.products.title}
                    subtitle={t.products.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.products },
                    ]}
                />

                <section className="py-20 bg-white">
                    <Container>
                        <div className="mb-12">
                            <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
                                AISSIA SÉCURITÉ propose une gamme complète d'équipements et de matériels de sécurité
                                professionnels répondant aux normes les plus strictes. Nous travaillons avec les meilleurs
                                fournisseurs pour garantir la qualité et la fiabilité de nos produits.
                            </p>
                        </div>

                        <div className="space-y-16">
                            {products.map((category, catIndex) => (
                                <div key={catIndex}>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-3 border-b-2 border-[var(--secondary)]">
                                        {category.category}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {category.items.map((item, itemIndex) => (
                                            <Card key={itemIndex} hover>
                                                <CardBody>
                                                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                                                        <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-[var(--text-secondary)] text-sm">
                                                        {item.description}
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-[var(--accent)]">
                    <Container>
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
                            Pourquoi choisir nos produits ?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Qualité Certifiée</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Tous nos produits sont certifiés et conformes aux normes internationales
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Support Technique</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Assistance et maintenance assurées par nos équipes expertes
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Installation Rapide</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Mise en service professionnelle et formation incluse
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                                Intéressé par nos produits ?
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] mb-8">
                                Contactez-nous pour obtenir un devis personnalisé et des conseils d'experts.
                            </p>
                            <a
                                href={`/${locale}/contact`}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[var(--primary)] rounded-lg hover:bg-[var(--primary-dark)] transition-smooth"
                            >
                                Demander un devis
                            </a>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
