'use client';

import { useState } from 'react';

interface Subscriber {
    id: number;
    email: string;
    subscribedAt: string;
    status: 'active' | 'unsubscribed';
}

export default function DashboardNewsletterPage() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([
        { id: 1, email: 'jean.dupont@email.com', subscribedAt: '06/02/2026', status: 'active' },
        { id: 2, email: 'marie.lambert@corporate.fr', subscribedAt: '05/02/2026', status: 'active' },
        { id: 3, email: 'sophie.bernard@gmail.com', subscribedAt: '05/02/2026', status: 'active' },
        { id: 4, email: 'pierre.martin@securitas.fr', subscribedAt: '04/02/2026', status: 'active' },
        { id: 5, email: 'claire.rousseau@yahoo.fr', subscribedAt: '03/02/2026', status: 'active' },
        { id: 6, email: 'alain.moreau@enterprise.com', subscribedAt: '02/02/2026', status: 'active' },
        { id: 7, email: 'marc.leblanc@orange.fr', subscribedAt: '01/02/2026', status: 'active' },
        { id: 8, email: 'isabelle.petit@hotmail.com', subscribedAt: '31/01/2026', status: 'unsubscribed' },
        { id: 9, email: 'fatou.diallo@gmail.com', subscribedAt: '30/01/2026', status: 'active' },
        { id: 10, email: 'ahmed.benali@company.ma', subscribedAt: '29/01/2026', status: 'active' },
        { id: 11, email: 'laura.garcia@outlook.com', subscribedAt: '28/01/2026', status: 'active' },
        { id: 12, email: 'thomas.ngom@protonmail.com', subscribedAt: '27/01/2026', status: 'active' },
        { id: 13, email: 'nadia.fall@yahoo.fr', subscribedAt: '26/01/2026', status: 'unsubscribed' },
        { id: 14, email: 'david.kamara@gmail.com', subscribedAt: '25/01/2026', status: 'active' },
        { id: 15, email: 'aminata.sy@hotmail.fr', subscribedAt: '24/01/2026', status: 'active' },
    ]);

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<'all' | 'active' | 'unsubscribed'>('all');

    const filteredSubscribers = subscribers
        .filter(s => filter === 'all' || s.status === filter)
        .filter(s => s.email.toLowerCase().includes(search.toLowerCase()));

    const activeCount = subscribers.filter(s => s.status === 'active').length;
    const unsubscribedCount = subscribers.filter(s => s.status === 'unsubscribed').length;

    const toggleStatus = (id: number) => {
        setSubscribers(subscribers.map(s =>
            s.id === id
                ? { ...s, status: s.status === 'active' ? 'unsubscribed' : 'active' }
                : s
        ));
    };

    const deleteSubscriber = (id: number) => {
        setSubscribers(subscribers.filter(s => s.id !== id));
    };

    const exportCsv = () => {
        const active = subscribers.filter(s => s.status === 'active');
        const csv = 'Email,Date d\'inscription\n' + active.map(s => `${s.email},${s.subscribedAt}`).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'newsletter_subscribers.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Abonnés newsletter</h1>
                    <p className="text-gray-500 text-sm mt-1">Gérez les abonnés à la newsletter</p>
                </div>
                <button
                    onClick={exportCsv}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--primary)] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Exporter CSV
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="text-2xl font-bold text-gray-900">{subscribers.length}</div>
                    <div className="text-sm text-gray-500">Total abonnés</div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="text-2xl font-bold text-green-600">{activeCount}</div>
                    <div className="text-sm text-gray-500">Actifs</div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="text-2xl font-bold text-orange-500">{unsubscribedCount}</div>
                    <div className="text-sm text-gray-500">Désabonnés</div>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Rechercher par email..."
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent outline-none"
                    />
                </div>
                <div className="flex gap-2">
                    {(['all', 'active', 'unsubscribed'] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                filter === f
                                    ? 'bg-[var(--primary)] text-white'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            {f === 'all' ? 'Tous' : f === 'active' ? 'Actifs' : 'Désabonnés'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date d&apos;inscription</th>
                                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
                                <th className="text-right px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredSubscribers.map((sub) => (
                                <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-3.5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                                {sub.email[0].toUpperCase()}
                                            </div>
                                            <span className="text-sm text-gray-900">{sub.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3.5 text-sm text-gray-500">{sub.subscribedAt}</td>
                                    <td className="px-6 py-3.5">
                                        {sub.status === 'active' ? (
                                            <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Actif</span>
                                        ) : (
                                            <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">Désabonné</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-3.5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => toggleStatus(sub.id)}
                                                className={`p-1.5 rounded-lg transition-colors ${
                                                    sub.status === 'active'
                                                        ? 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                                                        : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
                                                }`}
                                                title={sub.status === 'active' ? 'Désabonner' : 'Réactiver'}
                                            >
                                                {sub.status === 'active' ? (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                )}
                                            </button>
                                            <button
                                                onClick={() => deleteSubscriber(sub.id)}
                                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Supprimer"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredSubscribers.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm">Aucun abonné trouvé</p>
                    </div>
                )}
            </div>
        </div>
    );
}
