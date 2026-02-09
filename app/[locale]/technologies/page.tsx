import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Container } from '@/components/ui';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection, ScaleAnimation, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedSection';

export default async function TechnologiesPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const technologies = [
        {
            name: 'ALERTGUARD',
            category: t.technologies.alertguard.category,
            title: t.technologies.alertguard.title,
            description: t.technologies.alertguard.description,
            image: '/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg',
            features: t.technologies.alertguard.features,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <Header />
            <ParticleNetwork />
            <main>
                <AnimatedSection>
                    <PageHeader
                        title={t.technologies.title}
                        subtitle={t.technologies.subtitle}
                        image="/images site/Whisk_e3e1cdf449f884b8f5b406bdbe966519dr.jpeg"
                        breadcrumbs={[
                            { name: t.nav.home, href: `/${locale}` },
                            { name: t.nav.technologies },
                        ]}
                    />
                </AnimatedSection>

                {/* Introduction */}
                <section className="py-20 bg-white">
                    <Container>
                        <AnimatedSection>
                            <div className="max-w-3xl mx-auto text-center">
                                
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">
                                    {t.technologies.introTitle}
                                </h2>
                                <div className="w-16 h-1 bg-[var(--secondary)] rounded-full mx-auto mb-6" />
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {t.technologies.introDescription}
                                </p>
                            </div>
                        </AnimatedSection>
                    </Container>
                </section>

                {/* Technologies showcase */}
                {technologies.map((tech, index) => (
                    <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <Container>
                            <AnimatedSection direction={index % 2 === 0 ? 'left' : 'right'}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100`}>
                                    
                                    {/* Image */}
                                    <div className={`relative min-h-[350px] lg:min-h-[500px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <Image
                                            src={tech.image}
                                            alt={tech.name}
                                            fill
                                            className="object-cover object-top"
                                        />
                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[var(--secondary)] text-[var(--primary)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                                                {tech.category}
                                            </span>
                                        </div>
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className={`flex flex-col justify-center p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="w-14 h-14 bg-[var(--primary)] rounded-2xl flex items-center justify-center text-[var(--secondary)] mb-6 shadow-md">
                                            {tech.icon}
                                        </div>

                                        <h2 className="text-3xl lg:text-4xl font-black text-[var(--primary)] mb-2 tracking-tight uppercase">
                                            {tech.name}
                                        </h2>
                                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                                            {tech.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-[var(--secondary)] rounded-full mb-6" />

                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            AlertGuard est notre solution propriétaire qui offre un suivi continu et des alertes instantanées pour assurer la sécurité de vos équipes sur le terrain.
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3 mb-8">
                                            {tech.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-[var(--secondary)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <svg className="w-3.5 h-3.5 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-700 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div>
                                            <Link
                                                href={`/${locale}/contact`}
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--secondary)] text-[var(--primary)] font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg group"
                                            >
                                                {t.technologies.cta}
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </Container>
                    </section>
                ))}

                {/* How it works */}
                <section className="py-32 bg-[var(--primary)]">
                    <Container>
                        <AnimatedSection>
                            <div className="text-center mb-20">
                                <span className="inline-block px-6 py-2 bg-[var(--secondary)] text-[var(--primary)] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                                    {t.technologies.howItWorks.badge}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    {t.technologies.howItWorks.title}
                                </h2>
                                <div className="w-20 h-1.5 bg-[var(--secondary)] rounded-full mx-auto" />
                            </div>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" staggerDelay={0.1}>
                            {t.technologies.howItWorks.steps.map((step, index) => (
                                <StaggerItem key={index} direction="scale">
                                    <div className="text-center group">
                                        <div className="w-24 h-24 bg-white/10 border-2 border-[var(--secondary)]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--secondary)]/20 group-hover:scale-110 transition-all duration-300">
                                            <span className="text-3xl font-black text-[var(--secondary)]">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </Container>
                </section>

                {/* Application Mobile Section */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Texte à gauche */}
                            <AnimatedSection direction="left">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">
                                        AlertGuard
                                    </h2>
                                    <div className="w-16 h-1 bg-[var(--secondary)] rounded-full mb-8" />
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        Notre application AWAKEGUARD fournit une interface pour effectuer les tâches quotidiennes. Telles que l&apos;analyse de points de contrôle la soumission de formulaire, les rapports d&apos;incidents, les tâches, les rapports de présence, le suivi de localisations et les alertes d&apos;urgences.
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-4">
                                        <a 
                                            href="#" 
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-all"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                            </svg>
                                            APPSTORE
                                        </a>
                                        <a 
                                            href="#" 
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--secondary)] text-[var(--primary)] font-semibold rounded-lg hover:opacity-90 transition-all"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                            </svg>
                                            PLAYSTORE
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Image à droite */}
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="relative flex justify-center">
                                    <div className="relative w-full max-w-sm">
                                        <div className="absolute inset-0 bg-[var(--secondary)]/20 rounded-[3rem] blur-3xl"></div>
                                        <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-800">
                                            <Image
                                                src="/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg"
                                                alt="Application AlertGuard"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="relative py-32 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images site/Whisk_cf25d71bd9128dfb22141568e15d04a3dr.jpeg"
                            alt="Technologies"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>

                    <Container className="relative z-10">
                        <AnimatedSection>
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-block px-6 py-2 bg-[var(--secondary)] text-[var(--primary)] rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
                                    {t.technologies.ctaSection.badge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    {t.technologies.ctaSection.title}
                                </h2>
                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                    {t.technologies.ctaSection.description}
                                </p>
                                <ScaleAnimation delay={0.3}>
                                    <Link
                                        href={`/${locale}/contact`}
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-all duration-300 hover:scale-110 transform"
                                    >
                                        {t.technologies.ctaSection.button}
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
