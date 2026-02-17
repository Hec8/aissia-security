"use client";

import React, { useState, useEffect } from 'react';
import { api } from '@/lib/api';

type JobOffer = {
    id?: number | string;
    title: string;
    slug?: string;
    description?: string;
    profiles?: string;
    conditions?: string;
    location?: string;
    is_active: boolean;
};

type Props = {
    initial?: Partial<JobOffer>;
    onSuccess?: (data?: JobOffer) => void;
};

export default function JobOfferForm({ initial, onSuccess }: Props) {
    const [form, setForm] = useState<JobOffer>({ id: undefined, title: '', slug: '', description: '', profiles: '', conditions: '', location: '', is_active: true });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!initial) return;
        const src = initial as Partial<JobOffer>;
        setForm(() => ({
            id: src.id ?? undefined,
            title: typeof src.title === 'string' ? src.title : '',
            slug: typeof src.slug === 'string' ? src.slug : '',
            description: typeof src.description === 'string' ? src.description : '',
            profiles: typeof src.profiles === 'string' ? src.profiles : '',
            conditions: typeof src.conditions === 'string' ? src.conditions : '',
            location: typeof src.location === 'string' ? src.location : '',
            is_active: typeof src.is_active === 'boolean' ? src.is_active : true,
        }));
    }, [initial]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        try {
            const payload: Partial<Omit<JobOffer, 'id'>> & { id?: number } = {
                title: form.title,
                slug: form.slug ? form.slug : undefined,
                description: form.description && form.description !== '' ? form.description : undefined,
                profiles: form.profiles && form.profiles !== '' ? form.profiles : undefined,
                conditions: form.conditions && form.conditions !== '' ? form.conditions : undefined,
                location: form.location && form.location !== '' ? form.location : undefined,
                is_active: form.is_active,
                id: typeof form.id === 'string' ? Number(form.id) : form.id as number | undefined,
            };
            if (initial && initial.id) {
                await api.admin.updateJobOffer(Number(initial.id), payload);
            } else {
                await api.admin.createJobOffer(payload);
            }
            if (onSuccess) {
                onSuccess({ ...form, id: payload.id } as JobOffer);
            }
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            setError(message || 'Erreur');
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded">{error}</div>}
            <input name="title" value={form.title} onChange={handleChange} placeholder="Titre du poste" className="w-full px-4 py-3 border rounded" required />
            <input name="slug" value={form.slug} onChange={handleChange} placeholder="slug (optionnel)" className="w-full px-4 py-3 border rounded" />
            <input name="location" value={form.location} onChange={handleChange} placeholder="Lieu" className="w-full px-4 py-3 border rounded" />
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full px-4 py-3 border rounded resize-none" rows={6} />
            <textarea name="profiles" value={form.profiles} onChange={handleChange} placeholder="Profils recherchés (HTML allowed)" className="w-full px-4 py-3 border rounded resize-none" rows={4} />
            <textarea name="conditions" value={form.conditions} onChange={handleChange} placeholder="Conditions" className="w-full px-4 py-3 border rounded resize-none" rows={4} />
            <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="is_active" checked={form.is_active} onChange={handleChange} />
                <span>Actif</span>
            </label>
            <div>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-[var(--secondary)] text-[var(--primary)] rounded">{saving ? 'Enregistrement...' : 'Enregistrer'}</button>
            </div>
        </form>
    );
}
