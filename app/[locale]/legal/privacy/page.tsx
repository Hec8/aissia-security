import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Container, AnimatedSection } from '@/components/ui';
import { Locale } from '@/lib/i18n';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const updated = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                    <PageHeader
                        title="Politique de confidentialité"
                        subtitle="Comment nous collectons, utilisons et protégeons vos données"
                        breadcrumbs={[{ name: 'Accueil', href: `/${locale}` }, { name: 'Politique de confidentialité' }]}
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
                                    Cette politique explique quelles données nous collectons lorsque vous utilisez notre plateforme, pourquoi nous les utilisons et comment nous les protégeons. Elle s'applique aux utilisateurs de notre service SaaS et aux visiteurs de notre site web.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="py-16 bg-gray-50">
                    <Container>
                        <div className="max-w-3xl mx-auto space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Données collectées</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Nous pouvons collecter les informations suivantes :</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Nom et adresse email fournis lors de l'inscription ou de la prise de contact.</li>
                                        <li>Données d'utilisation anonymisées (analytics) liées à la performance et à l'usage du service.</li>
                                        <li>Cookies essentiels nécessaires au bon fonctionnement du site et à la gestion des sessions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Utilisation des données</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Nous utilisons vos données pour :</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Fournir et améliorer nos services.</li>
                                        <li>Gérer les comptes et communiquer des informations importantes (mises à jour, facturation, support).</li>
                                        <li>Analyser l'usage pour optimiser l'expérience utilisateur et la sécurité.</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Cookies</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Nous utilisons des cookies essentiels pour permettre les fonctions de base du site (authentification, préférences de session). Des cookies analytics sont utilisés pour mesurer et améliorer les performances. Les cookies non essentiels sont activés seulement si vous y consentez lorsque cela est requis.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Sécurité</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Nous appliquons des mesures techniques et organisationnelles adaptées pour protéger vos données contre l'accès non autorisé, la perte ou la divulgation. Les accès aux données sont limités au personnel et prestataires habilités et soumis à des obligations de confidentialité.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Partage des données</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Nous ne vendons pas vos données à des tiers. Nous pouvons partager des informations avec des prestataires de confiance qui traitent des données pour notre compte (hébergement, analytics, email). Ces prestataires sont choisis avec soin et liés par des contrats de traitement de données.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Droits des utilisateurs</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Conformément à la réglementation applicable, vous pouvez : accéder à vos données, demander leur rectification, demander leur suppression, ou vous opposer à certains traitements. Pour exercer vos droits, utilisez la page de contact du site ou écrivez à notre équipe de support.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Contact</h2>
                                <div className="text-[var(--text-secondary)] space-y-4">
                                    <p>Pour toute question relative à cette politique ou pour exercer vos droits, contactez-nous via la page Contact du site ou à l'adresse indiquée sur notre page Contact.</p>
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
