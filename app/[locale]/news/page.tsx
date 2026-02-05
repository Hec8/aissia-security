import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Card, CardBody, Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function NewsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    // Données d'exemple - À remplacer par des appels API
    const news = [
        {
            id: 1,
            title: 'Nouvelle session de formation en mars 2026',
            excerpt: 'AISSIA SÉCURITÉ ouvre les inscriptions pour sa prochaine session de formation d\'agents de sécurité qui débutera le 15 mars 2026.',
            date: '2026-01-15',
            category: 'Formations',
            image: '/images/news/training.jpg',
        },
        {
            id: 2,
            title: 'Partenariat avec de nouvelles institutions',
            excerpt: 'Notre entreprise renforce sa présence en signant de nouveaux contrats avec plusieurs institutions de premier plan.',
            date: '2026-01-10',
            category: 'Entreprise',
            image: '/images/news/partnership.jpg',
        },
        {
            id: 3,
            title: 'Nouveau centre de formation inauguré',
            excerpt: 'AISSIA SÉCURITÉ inaugure son nouveau centre de formation ultra-moderne équipé des dernières technologies pédagogiques.',
            date: '2025-12-20',
            category: 'Infrastructure',
            image: '/images/news/center.jpg',
        },
        {
            id: 4,
            title: 'Certification ISO obtenue',
            excerpt: 'Notre entreprise obtient la certification ISO 9001 pour la qualité de ses services et formations.',
            date: '2025-12-01',
            category: 'Certifications',
            image: '/images/news/iso.jpg',
        },
        {
            id: 5,
            title: 'Renforcement de nos équipes',
            excerpt: 'Recrutement de 50 nouveaux agents de sécurité formés pour répondre à la demande croissante de nos clients.',
            date: '2025-11-15',
            category: 'Ressources Humaines',
            image: '/images/news/team.jpg',
        },
        {
            id: 6,
            title: 'Nouveau système de vidéosurveillance',
            excerpt: 'Déploiement de systèmes de vidéosurveillance intelligents utilisant l\'intelligence artificielle pour une sécurité optimale.',
            date: '2025-11-01',
            category: 'Technologie',
            image: '/images/news/video.jpg',
        },
    ];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title={t.news.title}
                    subtitle={t.news.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.news },
                    ]}
                />

                <section className="py-20 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((article) => (
                                <Card key={article.id} hover>
                                    <div className="relative h-48 bg-[var(--accent)] flex items-center justify-center overflow-hidden">
                                        {/* Placeholder for image */}
                                        <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="absolute top-4 right-4 bg-[var(--secondary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <CardBody>
                                        <div className="flex items-center text-sm text-[var(--text-secondary)] mb-3">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            {formatDate(article.date)}
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 hover:text-[var(--primary)] transition-colors">
                                            <Link href={`/${locale}/news/${article.id}`}>
                                                {article.title}
                                            </Link>
                                        </h3>
                                        <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <Link
                                            href={`/${locale}/news/${article.id}`}
                                            className="text-[var(--primary)] font-semibold hover:underline inline-flex items-center"
                                        >
                                            {t.common.readMore}
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <button className="px-4 py-2 border border-[var(--border)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-smooth disabled:opacity-50" disabled>
                                    Précédent
                                </button>
                                <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg">
                                    1
                                </button>
                                <button className="px-4 py-2 border border-[var(--border)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-smooth">
                                    2
                                </button>
                                <button className="px-4 py-2 border border-[var(--border)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-smooth">
                                    3
                                </button>
                                <button className="px-4 py-2 border border-[var(--border)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-smooth">
                                    Suivant
                                </button>
                            </nav>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
