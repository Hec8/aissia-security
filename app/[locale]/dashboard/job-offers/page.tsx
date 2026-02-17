"use client";

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';

interface JobOffer {
    id: number;
    title: string;
    location?: string;
}

export default function DashboardJobOffersPage() {
    const { locale } = useTranslation();
    const [offers, setOffers] = useState<JobOffer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchOffers = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await api.admin.getJobOffers();
            const data = (res.data ?? []) as Array<{ id: number; title: string; location?: string | null }>;
            setOffers(data.map(o => ({
                id: o.id,
                title: o.title,
                location: o.location ?? undefined,
            })));
        } catch (err: unknown) {
            setError((err as Error)?.message || 'Erreur');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchOffers(); }, []);

    const handleDelete = async (id: number) => {
        if (!confirm('Supprimer cette offre ?')) return;
        try {
            await api.admin.deleteJobOffer(id);
            fetchOffers();
        } catch (err: unknown) {
            console.error(err);
            alert((err as Error)?.message ?? 'Erreur');
        }
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Gérer les offres</h1>
                <Link href={`/${locale}/dashboard/job-offers/new`} className="px-4 py-2 bg-[var(--secondary)] text-[var(--primary)] rounded">Nouvelle offre</Link>
            </div>

            {loading ? <p>Chargement...</p> : error ? <div className="text-red-600">{error}</div> : (
                <div>
                    {offers.length === 0 ? (
                        <div className="bg-white rounded-2xl p-8 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Aucune offre n’est disponible.</h3>
                            <p className="text-gray-600 leading-relaxed">Aucune offre n’est à pourvoir actuellement.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {offers.map((o) => (
                                <div key={o.id} className="p-4 border rounded bg-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold">{o.title}</h3>
                                            <p className="text-sm text-gray-600">{o.location}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Link href={`/${locale}/dashboard/job-offers/${o.id}/edit`} className="px-3 py-1 border rounded">Modifier</Link>
                                            <button onClick={() => handleDelete(o.id)} className="px-3 py-1 bg-red-100 text-red-700 rounded">Supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
