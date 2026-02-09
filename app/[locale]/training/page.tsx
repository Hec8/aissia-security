import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Container } from '@/components/ui';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection, ScaleAnimation, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedSection';

export default async function TrainingPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const trainingModules = [
        {
            title: 'Sport',
            description: 'Entraînement physique intensif pour garantir la forme et l\'endurance nécessaires aux missions de sécurité sur le terrain.',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Parcours du combattant',
            description: 'Exercices pratiques sur parcours d\'obstacles pour développer l\'agilité, la résistance et les réflexes en situation de stress.',
            image: '/images site/Whisk_5b6a220cce09155b41b4433c57706c64dr.jpeg',
        },
        {
            title: 'Formation théorique',
            description: 'Cours magistraux couvrant le cadre juridique, la déontologie et les fondamentaux du métier d\'agent de sécurité.',
            image: '/images site/Whisk_6e32ef6726784ffaef04ff7fe96685e3dr.jpeg',
        },
        {
            title: 'Sécurité privée',
            description: 'Module complet sur les techniques de surveillance, le contrôle d\'accès et la gestion de la sécurité des sites.',
            image: '/images site/Whisk_b3295edd22f0c9aaef84b8a0cb61a288dr.jpeg',
        },
        {
            title: 'Consignes générales',
            description: 'Apprentissage des consignes et protocoles fondamentaux régissant l\'exercice de la profession de sécurité privée.',
            image: '/images site/Whisk_4c173eda2ddccc68af54a6bd0f0abda5dr.jpeg',
        },
        {
            title: 'Armes non-létales',
            description: 'Formation à la manipulation et à l\'usage réglementaire des équipements de défense non-létaux.',
            image: '/images site/Whisk_e3e1cdf449f884b8f5b406bdbe966519dr.jpeg',
        },
        {
            title: 'Communication',
            description: 'Techniques de communication verbale et non-verbale pour la gestion des conflits et l\'accueil du public.',
            image: '/images site/Whisk_cf25d71bd9128dfb22141568e15d04a3dr.jpeg',
        },
        {
            title: 'Formation cyno',
            description: 'Initiation au travail avec les chiens de sécurité : obéissance, détection et intervention canine.',
            image: '/images site/Whisk_de2cf0006a6e0838ea9477dbb5ba68cedr.jpeg',
        },
        {
            title: 'Assistance & Intervention',
            description: 'Protocoles d\'intervention rapide, premiers secours et coordination avec les forces de l\'ordre.',
            image: '/images site/Whisk_47b0b5038e58a95a87042a6fd0231c05dr.jpeg',
        },
        {
            title: 'Self défense',
            description: 'Techniques de défense personnelle adaptées au métier d\'agent de sécurité pour les situations à risque.',
            image: '/images site/Whisk_b45eac5d7cb2009b2e648461d62d93e9dr.jpeg',
        },
        {
            title: 'Protection rapprochée',
            description: 'Formation spécialisée en escorte et protection de personnalités : analyse de risques, itinéraires et réactivité.',
            image: '/images site/Whisk_b3295edd22f0c9aaef84b8a0cb61a288dr.jpeg',
        },
        {
            title: 'Rédaction de rapports',
            description: 'Méthodologie de rédaction des rapports d\'incident, mains courantes et comptes rendus professionnels.',
            image: '/images site/Whisk_e6308d781c51042a7cf4162c4757b890dr.jpeg',
        },
    ];

    return (
        <>
            <Header />
            <ParticleNetwork />
            <main>
                <AnimatedSection>
                <PageHeader
                    title={t.training.title}
                    subtitle={t.training.subtitle}
                    image="/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg"
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.training },
                    ]}
                />
                </AnimatedSection>

                {/* Section Programme de formation */}
                <AnimatedSection>
                    <section className="py-20 bg-white">
                        <Container>
                            <ScaleAnimation>
                                <div className="bg-[var(--primary)] text-white rounded-2xl p-12 text-center">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                        PROGRAMME DE FORMATION DES
                                    </h2>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                        AGENTS DE SÉCURITE
                                    </h3>
                                    <p className="text-xl mb-8">Voir les modules</p>
                                    
                                    <div className="space-y-3 text-left max-w-3xl mx-auto text-sm md:text-base">
                                        <p className="font-semibold">
                                            DURÉE DU STAGE 2 À 5 SEMAINES, EXAMEN FINAL ÉLIMINATOIRE
                                        </p>
                                        <p className="font-semibold text-[var(--secondary)]">
                                            LES CRITÈRES MINIMUM D&apos;ADMISSION AU CENTRE DE FORMATION :
                                        </p>
                                        <p>Taille : 1,72 m</p>
                                        <p>– Lire et écrire couramment (dictée d&apos;admission)</p>
                                        <p>– Extrait de casier</p>
                                        <p>– Enquête de moralité validée par la DST</p>
                                        <p>– Dossier administratif complet</p>
                                        <p>– Certificat médical d&apos;aptitude</p>
                                    </div>
                                </div>
                            </ScaleAnimation>
                        </Container>
                    </section>
                </AnimatedSection>

                {/* Section Modules de formation - Grille 2x2 style cards */}
                <section className="py-20 bg-gray-50">
                    <Container>
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <div className="inline-block bg-[var(--primary)] text-white text-sm font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
                                    Modules
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                                    Nos modules de formation
                                </h2>
                                <div className="w-16 h-1 bg-[var(--secondary)] rounded-full mx-auto"></div>
                            </div>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
                            {trainingModules.map((module, index) => (
                                <StaggerItem key={index} direction="up">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-[var(--secondary)] hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex flex-col sm:flex-row">
                                            {/* Image */}
                                            <div className="relative w-full sm:w-2/5 min-h-[200px] sm:min-h-[220px] flex-shrink-0">
                                                <Image
                                                    src={module.image}
                                                    alt={module.title}
                                                    fill
                                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            {/* Texte */}
                                            <div className="flex-1 p-6 flex flex-col justify-center">
                                                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                                    {module.title}
                                                </h3>
                                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                                    {module.description}
                                                </p>
                                                <Link
                                                    href={`/${locale}/contact`}
                                                    className="inline-flex items-center gap-1.5 text-[var(--secondary)] font-semibold text-sm hover:text-[var(--primary)] transition-colors group/link"
                                                >
                                                    En savoir plus
                                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </Container>
                </section>

                {/* CTA Section */}
                <AnimatedSection>
                    <section className="py-20 bg-white">
                        <Container>
                            <div className="text-center">
                                <ScaleAnimation>
                                    <Link 
                                        href={`/${locale}/contact`}
                                        className="inline-block px-12 py-4 bg-[var(--secondary)] text-[var(--primary)] font-bold text-lg rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:scale-110 transform duration-300"
                                    >
                                        Contactez-nous
                                    </Link>
                                </ScaleAnimation>
                            </div>
                        </Container>
                    </section>
                </AnimatedSection>
            </main>
            <Footer />
        </>
    );
}
