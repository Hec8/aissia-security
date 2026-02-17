import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Container, AnimatedSection } from '@/components/ui';
import { Locale } from '@/lib/i18n';

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const updated = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                    <PageHeader
                        title="Conditions d’utilisation"
                        subtitle="Règles et responsabilités pour l'utilisation de notre service"
                        breadcrumbs={[{ name: 'Accueil', href: `/${locale}` }, { name: 'Conditions d’utilisation' }]}
                    />
                </AnimatedSection>

                <section className="py-12 bg-white">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-6">
                                <div className="inline-block bg-white/5 text-[var(--text-secondary)] px-4 py-2 rounded-md text-sm">Dernière mise à jour : {updated}</div>
                            </div>

                            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    En utilisant notre plateforme, vous acceptez les présentes conditions. Elles définissent l'utilisation autorisée du service, les responsabilités des utilisateurs et nos engagements.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="py-16 bg-gray-50">
                    <Container>
                        <div className="max-w-3xl mx-auto space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Acceptation des conditions</h2>
                                <p className="text-[var(--text-secondary)]">L'accès et l'utilisation de notre service sont soumis à ces conditions. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser le service.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Utilisation autorisée du service</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Vous vous engagez à utiliser la plateforme conformément à la loi et à ne pas effectuer d'activités nuisibles (intrusion, spamming, distribution de contenu illicite).</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Comptes utilisateurs</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>La création d'un compte nécessite des informations exactes. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités réalisées via votre compte.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Propriété intellectuelle</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Tous les contenus, marques et éléments présents sur la plateforme sont protégés par des droits de propriété intellectuelle. Sauf autorisation, vous ne devez pas reproduire ou réutiliser ces contenus.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Limitation de responsabilité</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Nous mettons en œuvre des moyens raisonnables pour assurer la disponibilité et la sécurité du service. Toutefois, nous ne pouvons garantir une disponibilité ininterrompue ni être tenus responsables des dommages indirects résultant de l'utilisation du service.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Modification des conditions</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Nous pouvons modifier ces conditions. Les changements seront publiés sur cette page avec une date de mise à jour. Si des modifications significatives sont apportées, nous en informerons les utilisateurs enregistrés.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Contact</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Pour toute question relative aux présentes conditions, utilisez la page Contact du site ou contactez notre support via les coordonnées indiquées sur le site.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
