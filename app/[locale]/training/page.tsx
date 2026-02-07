import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { AnimatedSection, ScaleAnimation, StaggerContainer } from '@/components/ui';
import { Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default async function TrainingPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const trainingModules = [
        {
            title: 'Sport',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Parcours du combattant',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Formation théorique',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Sécurité privée',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Consignes générales de la sécurité privée',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Manipulation et usage des armes non-létales',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Communication',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Formation cyno',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Assistance et Intervention',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'Self défense',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'La protection rapprochée',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
        {
            title: 'COMMENT RÉDIGER UN RAPPORT',
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
        },
    ];

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                <PageHeader
                    title={t.training.title}
                    subtitle={t.training.subtitle}
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

                {/* Section Modules de formation - Grille de cartes */}
                <section className="py-20 bg-gray-50">
                    <Container>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {trainingModules.map((module, index) => (
                                <ScaleAnimation key={index} delay={index * 0.05}>
                                    <div 
                                        className="bg-[var(--secondary)] rounded-2xl overflow-hidden border-4 border-[var(--primary)] shadow-lg hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="relative aspect-[4/3] bg-gray-800">
                                            <Image 
                                                src={module.image}
                                                alt={module.title}
                                            fill
                                            className="object-cover object-top opacity-80"
                                        />
                                    </div>
                                    <div className="p-6 bg-[var(--secondary)]">
                                        <h3 className="text-xl font-bold text-[var(--primary)]">
                                            {module.title}
                                        </h3>
                                    </div>
                                    </div>
                                </ScaleAnimation>
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
