import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Card, CardBody, Container } from '@/components/ui';
import { translations } from '@/lib/translations';
import { Locale } from '@/lib/i18n';

export default async function TrainingPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const t = translations[locale];

    const modules = [
        {
            title: 'Module 1 : Cadre Légal et Réglementaire',
            duration: '2 jours',
            content: [
                'Code de déontologie de l\'agent de sécurité',
                'Droits et obligations légales',
                'Législation sur la sécurité privée',
                'Responsabilités civiles et pénales',
            ],
        },
        {
            title: 'Module 2 : Sécurité Incendie',
            duration: '3 jours',
            content: [
                'Prévention des risques d\'incendie',
                'Utilisation des extincteurs',
                'Évacuation et gestion de crise',
                'Premiers secours en cas d\'incendie',
            ],
        },
        {
            title: 'Module 3 : Gestion des Conflits',
            duration: '2 jours',
            content: [
                'Techniques de communication',
                'Gestion du stress',
                'Résolution pacifique des conflits',
                'Comportement professionnel',
            ],
        },
        {
            title: 'Module 4 : Surveillance et Rondes',
            duration: '2 jours',
            content: [
                'Techniques de surveillance',
                'Organisation des rondes',
                'Observation et reporting',
                'Utilisation des équipements',
            ],
        },
        {
            title: 'Module 5 : Contrôle d\'Accès',
            duration: '1 jour',
            content: [
                'Procédures de contrôle',
                'Vérification d\'identité',
                'Gestion des visiteurs',
                'Systèmes de badges',
            ],
        },
        {
            title: 'Module 6 : Premiers Secours (SST)',
            duration: '2 jours',
            content: [
                'Protéger, examiner, alerter',
                'Gestes de premiers secours',
                'RCP et défibrillateur',
                'Gestion des urgences médicales',
            ],
        },
    ];

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title={t.training.title}
                    subtitle={t.training.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.training },
                    ]}
                />

                {/* Overview Section */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                                    {t.training.program}
                                </h2>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                                    AISSIA SÉCURITÉ dispose d'un centre de formation agréé offrant un programme complet
                                    et structuré pour la formation des agents de sécurité. Notre formation allie théorie
                                    et pratique pour garantir l'excellence professionnelle de nos futurs agents.
                                </p>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    Le programme se déroule sur une période de {t.training.durationValue} selon le niveau
                                    initial du candidat et se conclut par un {t.training.finalExam.toLowerCase()} qui valide
                                    l'acquisition des compétences nécessaires.
                                </p>
                            </div>

                            {/* Info Card */}
                            <div>
                                <Card>
                                    <CardBody>
                                        <div className="bg-[var(--primary)] text-white p-4 -m-6 mb-6 rounded-t-lg">
                                            <h3 className="text-xl font-bold">Formation Agent de Sécurité</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                                                    {t.training.duration}
                                                </div>
                                                <div className="text-[var(--text-secondary)]">{t.training.durationValue}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                                                    Type
                                                </div>
                                                <div className="text-[var(--text-secondary)]">Théorie + Pratique</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                                                    Certification
                                                </div>
                                                <div className="text-[var(--text-secondary)]">{t.training.finalExam}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                                                    Lieu
                                                </div>
                                                <div className="text-[var(--text-secondary)]">Centre AISSIA SÉCURITÉ</div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Admission Requirements */}
                <section className="py-20 bg-[var(--accent)]">
                    <Container>
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
                            {t.training.requirements}
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <CardBody>
                                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                                        Pour être admis à la formation d'agent de sécurité, les candidats doivent répondre
                                        aux critères suivants :
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--text-primary)] mb-1">Taille Minimale</h3>
                                                <p className="text-[var(--text-secondary)]">{t.training.requirementsList.height}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--text-primary)] mb-1">Alphabétisation</h3>
                                                <p className="text-[var(--text-secondary)]">{t.training.requirementsList.literacy}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--text-primary)] mb-1">Casier Judiciaire</h3>
                                                <p className="text-[var(--text-secondary)]">{t.training.requirementsList.criminalRecord}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--text-primary)] mb-1">Enquête de Moralité</h3>
                                                <p className="text-[var(--text-secondary)]">{t.training.requirementsList.moralityCheck}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--text-primary)] mb-1">Dossier Administratif</h3>
                                                <p className="text-[var(--text-secondary)]">{t.training.requirementsList.adminFile}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--text-primary)] mb-1">Aptitude Médicale</h3>
                                                <p className="text-[var(--text-secondary)]">{t.training.requirementsList.medicalCert}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Training Modules */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                                Modules de Formation
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
                                Notre programme de formation est structuré en modules progressifs couvrant tous les aspects
                                essentiels du métier d'agent de sécurité.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {modules.map((module, index) => (
                                <Card key={index} hover>
                                    <CardBody>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                                                {index + 1}
                                            </div>
                                            <span className="text-sm font-semibold text-[var(--secondary)] bg-[var(--secondary)]/10 px-3 py-1 rounded-full">
                                                {module.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                                            {module.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {module.content.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-sm">
                                                    <svg className="w-4 h-4 text-[var(--secondary)] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-[var(--text-secondary)]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Final Exam */}
                <section className="py-20 bg-[var(--primary)] text-white">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="w-20 h-20 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                {t.training.finalExam}
                            </h2>
                            <p className="text-lg text-white/90 mb-8">
                                À l'issue de la formation, tous les candidats doivent passer un examen final éliminatoire
                                comprenant des épreuves théoriques et pratiques. Seuls les candidats ayant réussi cet examen
                                recevront leur certification d'agent de sécurité.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                                    <h3 className="font-bold text-xl mb-3">Épreuve Théorique</h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• QCM sur l'ensemble des modules</li>
                                        <li>• Études de cas pratiques</li>
                                        <li>• Note minimale requise : 12/20</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                                    <h3 className="font-bold text-xl mb-3">Épreuve Pratique</h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• Mises en situation réelles</li>
                                        <li>• Gestion de conflits</li>
                                        <li>• Premiers secours</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                                Prêt à démarrer votre carrière ?
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] mb-8">
                                Contactez-nous pour obtenir plus d'informations sur nos prochaines sessions de formation
                                et les modalités d'inscription.
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
