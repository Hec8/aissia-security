"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { api } from '@/lib/api';
import { useTranslation } from '@/lib/hooks/useTranslation';

const JobOfferForm = dynamic(() => import('@/components/admin/JobOfferForm'), { ssr: false });

export default function EditJobOfferPage() {
    const { locale } = useTranslation();
    type JobOffer = Record<string, unknown>;
    const [initial, setInitial] = useState<JobOffer | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    useEffect(() => {
        let mounted = true;
        if (!id) return;
        api.admin.getJobOffer(Number(id))
            .then((res) => { if (!mounted) return; setInitial(res.data as unknown as Record<string, unknown>); })
            .catch(() => {})
            .finally(() => mounted && setLoading(false));
        return () => { mounted = false };
    }, [id]);

    if (loading) return <div className="p-6">Chargement...</div>;

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Modifier offre</h1>
                <button onClick={() => router.back()} className="px-4 py-2 border rounded">Retour</button>
            </div>

            <div className="bg-white p-6 rounded">
                <JobOfferForm initial={initial ? (initial as Partial<JobOffer>) : undefined} onSuccess={() => { window.location.href = `/${locale}/dashboard/job-offers`; }} />
            </div>
        </div>
    );
}
