'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Button, Card, CardBody, Container, Input, Textarea, AnimatedSection, ScaleAnimation } from '@/components/ui';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { api } from '@/lib/api';

export default function ContactPage() {
    const { t, locale } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await api.sendContactForm(formData);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main>
                <AnimatedSection>
                <PageHeader
                    title={t.contact.title}
                    subtitle={t.contact.subtitle}
                    breadcrumbs={[
                        { name: t.nav.home, href: `/${locale}` },
                        { name: t.nav.contact },
                    ]}
                />
                </AnimatedSection>

                <section className="py-20 bg-white">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Contact Information */}
                            <AnimatedSection>
                                <div className="space-y-8">
                                    <ScaleAnimation delay={0.1}>
                                        <Card>
                                    <CardBody>
                                        <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                            {t.contact.info.address}
                                        </h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Adresse du siège social<br />
                                            Riviera bonoumin Cité Lauriers 3<br />
                                            Côte d&apos;Ivoire
                                        </p>
                                    </CardBody>
                                </Card>
                                    </ScaleAnimation>

                                    <ScaleAnimation delay={0.2}>
                                <Card>
                                    <CardBody>
                                        <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                            {t.contact.info.phone}
                                        </h3>
                                        <p className="text-[var(--text-secondary)]">
                                            +225 2722261328<br />
                                        </p>
                                    </CardBody>
                                </Card>
                                    </ScaleAnimation>

                                    <ScaleAnimation delay={0.3}>
                                <Card>
                                    <CardBody>
                                        <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                            {t.contact.info.email}
                                        </h3>
                                        <p className="text-[var(--text-secondary)]">
                                            contact@aissia-securite.com<br />
                                            info@aissia-securite.com
                                        </p>
                                    </CardBody>
                                </Card>
                                    </ScaleAnimation>

                                    <ScaleAnimation delay={0.4}>
                                <Card>
                                    <CardBody>
                                        <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                            {t.contact.info.hours}
                                        </h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Lundi - Vendredi: 8h - 18h<br />
                                            Samedi: 9h - 13h<br />
                                            Dimanche: Fermé
                                        </p>
                                    </CardBody>
                                </Card>
                                    </ScaleAnimation>
                            </div>
                        </AnimatedSection>

                            {/* Contact Form */}
                            <AnimatedSection delay={0.2}>
                                <div className="lg:col-span-2">
                                    <Card>
                                    <CardBody className="p-8">
                                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                                            Envoyez-nous un message
                                        </h2>

                                        {submitStatus === 'success' && (
                                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                                                {t.contact.form.success}
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                                                {t.contact.form.error}
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <Input
                                                label={t.contact.form.name}
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Votre nom complet"
                                            />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <Input
                                                    label={t.contact.form.email}
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="votre@email.com"
                                                />

                                                <Input
                                                    label={t.contact.form.phone}
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+XXX XX XX XX XX"
                                                />
                                            </div>

                                            <Input
                                                label={t.contact.form.subject}
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="Objet de votre message"
                                            />

                                            <Textarea
                                                label={t.contact.form.message}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                placeholder="Décrivez votre demande..."
                                            />

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? t.common.loading : t.contact.form.submit}
                                            </Button>
                                        </form>
                                    </CardBody>
                                </Card>
                            </div>
                        </AnimatedSection>
                        </div>
                    </Container>
                </section>

                {/* Map Section */}
                <section className="py-20 bg-[var(--accent)]">
                    <Container>
                        <AnimatedSection>
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
                            Notre Localisation
                        </h2>
                        </AnimatedSection>
                        <ScaleAnimation delay={0.2}>
                        <div className="rounded-2xl overflow-hidden shadow-xl border-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3486157719!2d-3.988!3d5.367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjInMDEuMiJOIDPCsDU5JzE2LjgiVw!5e0!3m2!1sfr!2sci!4v1234567890"
                                width="100%"
                                height="500"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carte de localisation AISSIA Sécurité"
                                className="w-full"
                            ></iframe>
                        </div>
                        </ScaleAnimation>
                        <AnimatedSection delay={0.3}>
                        <div className="mt-8 text-center">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Riviera+Bonoumin+Cité+Lauriers+3+Abidjan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Ouvrir dans Google Maps
                            </a>
                        </div>
                        </AnimatedSection>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
