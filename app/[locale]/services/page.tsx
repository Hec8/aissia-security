import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { AnimatedSection, ScaleAnimation } from '@/components/ui';
import { Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const services = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Surveillance de site et Gardiennage',
            description: 'Nous mettons à disposition des agents de sécurité formés pour surveiller vos sites, entreprises, commerces et habitations. Nos équipes veillent à la protection de vos biens, assurant une présence proactive et dissuasive 24h/24.',
            image: '/images site/Whisk_5b6a220cce09155b41b4433c57706c64dr.jpeg',
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Protection rapprochée',
            description: 'Nos agents spécialisés en protection rapprochée vous accompagnent de manière discrète et efficace 24h/24. Que ce soit pour vos déplacements ou pour votre sécurité quotidienne, nous veillons à votre intégrité avec un service sur mesure.',
            image: '/images site/Whisk_b3295edd22f0c9aaef84b8a0cb61a288dr.jpeg',
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Gestion de risque',
            description: 'Tous nos agents sont formés dans notre centre de formation. Ils sont agréés pour assurer un service de qualité supérieure.',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Assistance',
            description: 'AWAKE assure une assistance rapide et efficace en cas de situation d\'urgence. Nos équipes sont formées pour intervenir avec professionnalisme et rapidité, garantissant une résolution optimale de tout incident.',
            image: '/images site/Whisk_4c173eda2ddccc68af54a6bd0f0abda5dr.jpeg',
        },
    ];

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                <PageHeader
                    title={t.services.title}
                    subtitle={t.services.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.services },
                    ]}
                />
                </AnimatedSection>

                {/* Services Section - Alternating layout */}
                <section className="py-20 bg-gray-50">
                    <Container>
                        <div className="space-y-24">
                            {services.map((service, index) => (
                                <AnimatedSection key={index}>
                                    <div 
                                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                    >
                                        {/* Text Content */}
                                        <AnimatedSection delay={0.2}>
                                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                                <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center text-white mb-6">
                                                    {service.icon}
                                                </div>
                                                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                                                    {service.title}
                                                </h3>
                                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </AnimatedSection>

                                        {/* Image */}
                                        <ScaleAnimation delay={0.3}>
                                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                                                    <Image 

                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </ScaleAnimation>
                                </div>
                            </AnimatedSection>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Rejoignez-nous Section */}
                <section className="relative py-32 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image 
                            src="/images site/Whisk_4c173eda2ddccc68af54a6bd0f0abda5dr.jpeg"
                            alt="Formation en sécurité"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                    </div>

                    {/* Content */}
                    <Container className="relative z-10">
                        <AnimatedSection>
                            <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block px-6 py-2 bg-[var(--secondary)] text-[var(--primary)] rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
                                Rejoignez-nous
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Formation en sécurité privée
                            </h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Nous offrons des formations complètes en sécurité privée pour les agents, leur permettant d&apos;acquérir les compétences nécessaires pour protéger efficacement les personnes et les biens.
                            </p>
                            <ScaleAnimation delay={0.3}>
                                <Link 
                                    href={`/${locale}/training`}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-all duration-300 hover:scale-110 transform"
                                >
                                    Voir plus
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
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
