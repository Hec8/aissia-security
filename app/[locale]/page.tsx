import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardBody, Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';
import { AnimatedSection, ScaleAnimation, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedSection';
import { RotateAnimation } from '@/components/animations/RotateAnimation';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative bg-[var(--primary)] text-white overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
                    {/* Image de fond avec opacité réduite */}
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src="/images site/Whisk_01d70897174239db91a4cbdb45a0eb4bdr.jpeg"
                            alt="Hero background"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-[var(--primary)]/90"></div>
                    </div>

                    <Container>
                        <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 md:py-10 lg:py-16">
                            {/* Contenu texte centré */}
                            <div className="space-y-6 max-w-4xl mx-auto">
                                <ScaleAnimation delay={0.2} scale={0.8}>
                                    <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-bold mb-4 text-[var(--primary)]">
                                        {t.home.hero.subtitle || "Bienvenue chez AISSIA"}
                                    </div>
                                </ScaleAnimation>
                                <AnimatedSection direction="up" delay={0.4}>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--secondary)]">
                                        {t.home.hero.title || "Gardiennage professionnel & sécurité"}
                                    </h1>
                                </AnimatedSection>
                                <AnimatedSection direction="up" delay={0.6}>
                                    <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
                                        {t.home.hero.description || "Solutions de sécurité complètes et sur mesure pour protéger vos biens et vos personnes."}
                                    </p>
                                </AnimatedSection>
                                <AnimatedSection direction="up" delay={0.8}>
                                    <div className="flex flex-wrap gap-4 pt-4 justify-center">
                                        <Link href={`/${locale}/services`}>
                                            <Button size="lg" className="bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-[var(--primary)] border-none">
                                                Découvrir nos services
                                            </Button>
                                        </Link>
                                        <Link href={`/${locale}/training`}>
                                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--primary)]">
                                                Voir nos formations
                                            </Button>
                                        </Link>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Services Cards - Ligne blanche comme dans la maquette */}
                <section className="py-6 bg-white border-b">
                    <Container>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
                            <StaggerItem direction="up">
                                <div className="flex items-center space-x-4 p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-[var(--secondary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--text-primary)]">Gardiennage & Surveillance</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">Protection 24/7</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <div className="flex items-center space-x-4 p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-[var(--secondary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--text-primary)]">Personnel Qualifié</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">Agents formés & certifiés</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <div className="flex items-center space-x-4 p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-[var(--secondary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--text-primary)]">Intervention Rapide</h3>
                                        <p className="text-sm text-[var(--text-secondary)]">Réactivité garantie</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </Container>
                </section>

                {/* Section Culture/Valeurs - Inspiré de la maquette */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Texte */}
                            <AnimatedSection direction="left">
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                                        Une équipe dédiée à votre sécurité
                                    </h2>
                                    <p className="text-lg text-[var(--text-secondary)]">
                                        Nous créons une culture de professionnalisme et d&apos;excellence qui nous inspire à travailler intelligemment, ensemble, pour protéger ce qui compte le plus pour vous.
                                    </p>
                                    
                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                        <ScaleAnimation delay={0.3}>
                                            <div className="text-center p-6 bg-[var(--accent)] rounded-lg">
                                                <div className="text-4xl font-bold text-[var(--secondary)] mb-2">4.7+</div>
                                                <div className="flex justify-center mb-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <div className="text-sm text-[var(--text-secondary)]">Satisfaction Client</div>
                                            </div>
                                        </ScaleAnimation>

                                        <ScaleAnimation delay={0.5}>
                                            <div className="text-center p-6 bg-[var(--accent)] rounded-lg">
                                                <div className="text-4xl font-bold text-[var(--secondary)] mb-2">B+</div>
                                                <div className="flex justify-center mb-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <div className="text-sm text-[var(--text-secondary)]">Services Pros</div>
                                            </div>
                                        </ScaleAnimation>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Image placeholder - Espace pour vos photos */}
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="relative">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative group">
                                        <Image src="/team.jpeg" alt="Équipe AISSIA Sécurité" fill className="object-cover" />
                                        {/* Badge 15+ ans */}
                                        <ScaleAnimation delay={0.7} scale={0.7}>
                                            <div className="absolute bottom-6 right-6 bg-[var(--secondary)] text-white px-6 py-3 rounded-lg shadow-lg z-10">
                                                <div className="text-3xl font-bold">15+</div>
                                                <div className="text-sm">Ans d&apos;expérience</div>
                                            </div>
                                        </ScaleAnimation>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </Container>
                </section>

                {/* Section Services détaillés */}
                <section className="py-20 bg-white">
                    <Container>
                        {/* En-tête section */}
                        <AnimatedSection direction="up">
                            <div className="text-center mb-16">
                                <div className="text-[var(--secondary)] font-semibold text-sm uppercase tracking-wide mb-3">
                                    Nos Services
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                                    Solutions de sécurité professionnelles
                                </h2>
                            </div>
                        </AnimatedSection>

                        {/* Grille de services - 2 lignes de 2 */}
                        <div className="max-w-5xl mx-auto space-y-8">
                            {/* Première ligne */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Service 1 - Surveillance de site */}
                                <RotateAnimation degrees={-3} delay={0.1}>
                                    <Card className="overflow-hidden group hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-[var(--secondary)]">
                                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                                            <Image src="/images site/Whisk_5b6a220cce09155b41b4433c57706c64dr.jpeg" alt="Surveillance de site" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="font-bold text-white text-xl">Surveillance de site</h3>
                                            </div>
                                        </div>
                                        <CardBody className="p-6">
                                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                                Pour la surveillance de vos sites, entreprises, commerces et habitations, AISSIA-SECURITY met à votre disposition des équipes composées d&apos;agents de sécurité, d&apos;agents incendie, et de maîtres-chiens.
                                            </p>
                                            <button className="mt-4 text-[var(--primary)] font-semibold hover:text-[var(--secondary-dark)] transition-colors flex items-center gap-2">
                                                En savoir plus
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </CardBody>
                                    </Card>
                                </RotateAnimation>

                                {/* Service 2 - Audit et Conseil */}
                                <RotateAnimation degrees={3} delay={0.2}>
                                    <Card className="overflow-hidden group hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-[var(--secondary)]">
                                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                                            <Image src="/images site/Whisk_6e32ef6726784ffaef04ff7fe96685e3dr.jpeg" alt="Audit et Conseil" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="font-bold text-white text-xl">Audit et Conseil</h3>
                                            </div>
                                        </div>
                                        <CardBody className="p-6">
                                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                                Pour une sécurité adaptée à vos besoins, AISSIA-SECURITY propose des services d&apos;audit et de conseil spécialisés. Nous analysons votre niveau de sécurité et vous conseillons sur les meilleures solutions à adopter.
                                            </p>
                                            <button className="mt-4 text-[var(--primary)] font-semibold hover:text-[var(--secondary-dark)] transition-colors flex items-center gap-2">
                                                En savoir plus
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </CardBody>
                                    </Card>
                                </RotateAnimation>
                            </div>

                            {/* Deuxième ligne */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Service 3 - Gestion des risques */}
                                <RotateAnimation degrees={3} delay={0.3}>
                                    <Card className="overflow-hidden group hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-[var(--secondary)]">
                                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                                            <Image src="/images site/Whisk_935eee3760f5b579dc6493b3f649dd4cdr.jpeg" alt="Gestion des risques" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="font-bold text-white text-xl">Gestion des risques</h3>
                                            </div>
                                        </div>
                                        <CardBody className="p-6">
                                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                                Nos équipes d&apos;experts en gestion des risques sont disponibles 24h/24 pour intervenir rapidement dans des situations à haut risque. AISSIA-SECURITY vous propose une réponse rapide et coordonnée avec les autorités.
                                            </p>
                                            <button className="mt-4 text-[var(--primary)] font-semibold hover:text-[var(--secondary-dark)] transition-colors flex items-center gap-2">
                                                En savoir plus
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </CardBody>
                                    </Card>
                                </RotateAnimation>

                                {/* Service 4 - Protection rapprochée et Assistance */}
                                <RotateAnimation degrees={-3} delay={0.4}>
                                    <Card className="overflow-hidden group hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-[var(--secondary)]">
                                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                                            <Image src="/images site/Whisk_b3295edd22f0c9aaef84b8a0cb61a288dr.jpeg" alt="Protection rapprochée" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="font-bold text-white text-xl">Protection rapprochée et Assistance</h3>
                                            </div>
                                        </div>
                                        <CardBody className="p-6">
                                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                                Nos agents spécialisés en protection rapprochée vous accompagnent de manière discrète et efficace 24h/24. Nos équipes sont formées pour intervenir dans des situations délicates et réagir immédiatement.
                                            </p>
                                            <button className="mt-4 text-[var(--primary)] font-semibold hover:text-[var(--secondary-dark)] transition-colors flex items-center gap-2">
                                                En savoir plus
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </CardBody>
                                    </Card>
                                </RotateAnimation>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Section bleue (grise) - Impact/Mission */}
                <section className="py-20 bg-[var(--primary)] text-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Texte à gauche */}
                            <AnimatedSection direction="left">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--secondary)]">
                                        Des solutions de sécurité supérieures en Côte d&apos;Ivoire
                                    </h2>
                                    <p className="text-lg text-white/95 mb-8 leading-relaxed">
                                        Nous fournissons des solutions de sécurité complètes et avancées, utilisant les technologies les plus récentes et une approche personnalisée. Nos services couvrent la surveillance sur site, la gestion des accès, et bien plus encore. Nous nous engageons à protéger vos biens et à assurer votre tranquillité d&apos;esprit.
                                    </p>
                                    <Link href={`/${locale}/contact`}>
                                        <Button size="lg" className="bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-[var(--primary)] border-none shadow-lg font-bold uppercase">
                                            Contactez-nous
                                        </Button>
                                    </Link>
                                </div>
                            </AnimatedSection>

                            {/* Image à droite */}
                            <ScaleAnimation delay={0.3}>
                                <div className="relative">
                                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
                                        <Image src="/images site/Whisk_16ddc33bdfa1e1186704be1a6413cf96dr.jpeg" alt="Solutions de sécurité AISSIA" fill className="object-cover" />
                                    </div>
                                </div>
                            </ScaleAnimation>
                        </div>
                    </Container>
                </section>

                {/* Section Nos Partenaires */}
                <section className="py-16 bg-white overflow-hidden">
                    <Container>
                        <AnimatedSection direction="up">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
                                Nos Partenaires
                            </h2>
                        </AnimatedSection>
                        
                        {/* Conteneur du carousel avec animation */}
                        <div className="relative">
                            <div className="flex partners-scroll w-max">
                                {/* Premier groupe de logos */}
                                {[...Array(6)].map((_, i) => (
                                    <div key={`logo-${i}`} className="flex-shrink-0 w-48 h-32 mx-8 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-[var(--secondary)] transition-colors">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                                            <p className="text-xs text-gray-400">Logo partenaire {i + 1}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplication pour effet infini */}
                                {[...Array(6)].map((_, i) => (
                                    <div key={`logo-duplicate-${i}`} className="flex-shrink-0 w-48 h-32 mx-8 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-[var(--secondary)] transition-colors">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                                            <p className="text-xs text-gray-400">Logo partenaire {i + 1}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Section Qu'est-ce qui nous distingue */}
                <section className="py-20 bg-[var(--primary)] text-white border-t-4 border-white">
                    <Container>
                        <div>
                            <AnimatedSection direction="up">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                                    Qu&apos;est-ce qui nous distingue ?
                                </h2>
                            </AnimatedSection>

                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
                                {/* 1. Professionnalisme */}
                                <StaggerItem direction="scale">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Professionnalisme à chaque instant</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Nous assurons des services de sécurité de haute qualité, disponibles en tout temps pour répondre à vos besoins urgents.
                                        </p>
                                    </div>
                                </StaggerItem>

                                {/* 2. Communication 24/7 */}
                                <StaggerItem direction="scale">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Communication 24/7</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Notre équipe est à votre disposition 24/7, assurant une communication fluide et des interventions rapides.
                                        </p>
                                    </div>
                                </StaggerItem>

                                {/* 3. Notre flotte de véhicules */}
                                <StaggerItem direction="scale">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Notre flotte de véhicules</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Nos véhicules de patrouille sont toujours prêts à intervenir rapidement, offrant une couverture flexible et réactive.
                                        </p>
                                    </div>
                                </StaggerItem>

                                {/* 4. Agents agréés */}
                                <StaggerItem direction="scale">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Agents agréés</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Tous nos agents sont formés dans notre centre de formation. Ils sont agréés pour assurer un service de qualité supérieure.
                                        </p>
                                    </div>
                                </StaggerItem>

                                {/* 5. Technologie avancée */}
                                <StaggerItem direction="scale">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Technologie avancée</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Nous utilisons les dernières technologies pour garantir des solutions de sécurité fiables et performantes.
                                        </p>
                                    </div>
                                </StaggerItem>

                                {/* 6. Aide d'urgence */}
                                <StaggerItem direction="scale">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Aide d&apos;urgence</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Nos agents sont formés pour réagir efficacement à toute situation d&apos;urgence, garantissant votre sécurité à tout moment.
                                        </p>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>
                    </Container>
                </section>

                {/* Section Cases/Témoignages avec photos */}
               
                {/* Section expertise avec stats */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Gauche - Image */}
                            <AnimatedSection direction="left">
                                <div className="relative">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
                                        <Image src="/images site/Whisk_4c173eda2ddccc68af54a6bd0f0abda5dr.jpeg" alt="Expertise AISSIA Sécurité" fill className="object-cover" />
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Droite - Texte et Stats */}
                            <AnimatedSection direction="right" delay={0.2}>
                                <div>
                                    <div className="inline-block px-4 py-1 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold mb-4">
                                        Notre Expertise
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                                        Nous vous aidons à résoudre vos problèmes
                                    </h2>
                                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                                        Avec plus de 15 ans d&apos;expérience, nous proposons des solutions de sécurité sur mesure qui répondent à vos besoins spécifiques.
                                    </p>

                                    {/* Progress bars / Stats */}
                                    <div className="space-y-6">
                                        <AnimatedSection direction="right" delay={0.4}>
                                            <div>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-semibold text-[var(--text-primary)]">Surveillance sur site</span>
                                                    <span className="font-bold text-[var(--secondary)]">93%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '93%'}}></div>
                                                </div>
                                            </div>
                                        </AnimatedSection>

                                        <AnimatedSection direction="right" delay={0.6}>
                                            <div>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-semibold text-[var(--text-primary)]">Gestion de risques</span>
                                                    <span className="font-bold text-[var(--secondary)]">80%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '80%'}}></div>
                                                </div>
                                            </div>
                                        </AnimatedSection>

                                        <AnimatedSection direction="right" delay={0.8}>
                                            <div>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-semibold text-[var(--text-primary)]">Protection rapprochée</span>
                                                    <span className="font-bold text-[var(--secondary)]">95%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '95%'}}></div>
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </Container>
                </section>

                {/* Section Contact - Fond bleu (gris) */}
                <section className="py-20 bg-[var(--primary)] text-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Gauche - Infos de contact */}
                            <AnimatedSection direction="left">
                                <div>
                                    <ScaleAnimation delay={0.2} scale={0.8}>
                                        <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 text-white">
                                            24/7 Service
                                        </div>
                                    </ScaleAnimation>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                        Contactez notre équipe commerciale
                                    </h2>
                                    <p className="text-lg text-white/95 mb-8 leading-relaxed">
                                        Nos experts sont disponibles pour répondre à toutes vos questions et vous proposer une solution adaptée.
                                    </p>

                                    <StaggerContainer className="space-y-4" staggerDelay={0.15}>
                                        <StaggerItem direction="left">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-white/80">Adresse</div>
                                                    <div className="font-semibold text-white">Riviera bonoumin Cité Lauriers 3</div>
                                                </div>
                                            </div>
                                        </StaggerItem>

                                        <StaggerItem direction="left">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-white/80">Téléphone</div>
                                                    <div className="font-semibold text-white">2722261328</div>
                                                </div>
                                            </div>
                                        </StaggerItem>
                                    </StaggerContainer>

                                    <ScaleAnimation delay={0.6}>
                                        <button className="mt-8 bg-[var(--secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--secondary-dark)] transition-colors shadow-lg">
                                            Contactez-nous
                                        </button>
                                    </ScaleAnimation>
                                </div>
                            </AnimatedSection>

                            {/* Droite - Formulaire */}
                            <ScaleAnimation delay={0.3}>
                                <div className="bg-white rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                                        Obtenir un devis gratuit
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <input 
                                                type="text" 
                                                placeholder="Prénom" 
                                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-gray-900"
                                            />
                                            <input 
                                                type="text" 
                                                placeholder="Nom" 
                                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-gray-900"
                                            />
                                        </div>
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-gray-900"
                                        />
                                        <input 
                                            type="tel" 
                                            placeholder="Téléphone" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-gray-900"
                                        />
                                        <textarea 
                                            placeholder="Message" 
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-gray-900 resize-none"
                                        ></textarea>
                                        <button 
                                            type="submit"
                                            className="w-full bg-[var(--secondary)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[var(--secondary-dark)] transition-colors"
                                        >
                                            Envoyer le message
                                        </button>
                                    </form>
                                </div>
                            </ScaleAnimation>
                        </div>
                    </Container>
                </section>

                {/* Newsletter */}
                <section className="py-16 bg-[var(--primary)] border-t border-white/10">
                    <Container>
                        <AnimatedSection direction="up">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div className="text-white w-full md:w-auto">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-[var(--secondary)]">
                                        Inscrivez-vous à notre newsletter
                                    </h3>
                                    <p className="text-white text-sm md:text-base">
                                        Recevez les dernières informations, actualités et promotions
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                                    <input 
                                        type="email" 
                                        placeholder="Votre adresse email" 
                                        className="px-4 md:px-6 py-3 rounded-lg w-full sm:flex-1 md:w-80 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] text-gray-900"
                                    />
                                    <button className="bg-[var(--secondary)] text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-[var(--secondary-dark)] transition-colors whitespace-nowrap w-full sm:w-auto">
                                        S&apos;inscrire
                                    </button>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}