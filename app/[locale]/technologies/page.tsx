import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Container } from '@/components/ui';
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
                                <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    {t.technologies.badge}
                                </span>
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
                                            {tech.description}
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
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg group"
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
                <section className="py-20 bg-[var(--primary)]">
                    <Container>
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <span className="inline-block px-4 py-1.5 bg-[var(--secondary)] text-[var(--primary)] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    {t.technologies.howItWorks.badge}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {t.technologies.howItWorks.title}
                                </h2>
                                <div className="w-16 h-1 bg-[var(--secondary)] rounded-full mx-auto" />
                            </div>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
                            {t.technologies.howItWorks.steps.map((step, index) => (
                                <StaggerItem key={index} direction="scale">
                                    <div className="text-center group">
                                        <div className="w-20 h-20 bg-white/10 border-2 border-[var(--secondary)]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--secondary)]/20 transition-all duration-300">
                                            <span className="text-3xl font-black text-[var(--secondary)]">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
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
