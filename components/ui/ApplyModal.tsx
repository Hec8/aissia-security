"use client";

import React, { useState } from 'react';
import { api } from '@/lib/api';

type Props = {
    open: boolean;
    onClose: () => void;
    offer?: { id?: number | string; title?: string } | null;
};

export default function ApplyModal({ open, onClose, offer }: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            const subject = `Candidature: ${offer?.title || 'Offre'}`;
            const body = `Candidature pour l'offre ${offer?.title || ''} (id: ${offer?.id || ''})\n\nMessage:\n${message}`;
            await api.sendContactForm({ name, email, phone, company: '', subject, message: body });
            setSent(true);
            // optionally close after a short delay
            setTimeout(() => { setSending(false); onClose(); setSent(false); setName(''); setEmail(''); setPhone(''); setMessage(''); }, 1200);
        } catch (err) {
            alert('Erreur lors de l\'envoi');
            setSending(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative bg-white rounded-lg w-full max-w-md p-6 z-10">
                <h3 className="text-lg font-semibold mb-4">Postuler {offer?.title ? `: ${offer.title}` : ''}</h3>
                {sent ? (
                    <div className="text-green-600">Candidature envoyée — merci.</div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input required value={name} onChange={e => setName(e.target.value)} placeholder="Nom" className="w-full px-3 py-2 border rounded" />
                        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border rounded" />
                        <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Téléphone (optionnel)" className="w-full px-3 py-2 border rounded" />
                        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message / CV (lien ou texte)" className="w-full px-3 py-2 border rounded" rows={4} />
                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={onClose} className="px-3 py-2 border rounded">Annuler</button>
                            <button type="submit" disabled={sending} className="px-3 py-2 bg-[var(--secondary)] text-[var(--primary)] rounded">{sending ? 'Envoi...' : 'Envoyer'}</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
