'use client';

import { useState } from 'react';

interface Quote {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
    date: string;
    status: 'new' | 'read' | 'replied' | 'archived';
}

export default function DashboardQuotesPage() {
    const [quotes, setQuotes] = useState<Quote[]>([
        {
            id: 1,
            name: 'Jean Dupont',
            email: 'jean.dupont@email.com',
            phone: '+33 6 12 34 56 78',
            company: 'Dupont & Fils SARL',
            service: 'Agent de Sécurité (ADS J/N)',
            message: 'Bonjour, nous souhaitons obtenir un devis pour la surveillance de notre entrepôt situé dans la zone industrielle de Lyon. Nous avons besoin d\'une couverture 24h/24 du lundi au samedi.',
            date: '06/02/2026 14:32',
            status: 'new',
        },
        {
            id: 2,
            name: 'Marie Lambert',
            email: 'marie.lambert@corporate.fr',
            phone: '+33 6 98 76 54 32',
            company: 'Lambert Corp',
            service: 'Protection rapprochée',
            message: 'Je recherche un service de protection rapprochée pour un déplacement professionnel en Afrique de l\'Ouest prévu pour mars 2026. Durée estimée : 2 semaines.',
            date: '05/02/2026 09:15',
            status: 'read',
        },
        {
            id: 3,
            name: 'Pierre Martin',
            email: 'p.martin@securitas.fr',
            phone: '+33 7 11 22 33 44',
            company: 'Martin Industries',
            service: 'Audit & études de sécurité',
            message: 'Nous souhaitons faire réaliser un audit complet de sécurité de nos 3 sites de production. Merci de nous proposer une offre.',
            date: '04/02/2026 16:48',
            status: 'new',
        },
        {
            id: 4,
            name: 'Fatou Diallo',
            email: 'fatou.d@gmail.com',
            phone: '+221 77 123 45 67',
            company: '',
            service: 'Abonnement Assistance ALERTGUARD',
            message: 'Je souhaite souscrire à l\'abonnement AlertGuard pour mon domicile. Quels sont vos tarifs ?',
            date: '03/02/2026 11:20',
            status: 'replied',
        },
        {
            id: 5,
            name: 'Ahmed Ben Ali',
            email: 'ahmed.benali@company.ma',
            phone: '+212 6 55 44 33 22',
            company: 'BenAli Trading',
            service: 'Conducteur-Chien',
            message: 'Demande de devis pour un service de surveillance avec chien pour un chantier de construction. Superficie : 2 hectares.',
            date: '01/02/2026 08:00',
            status: 'archived',
        },
    ]);

    const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
    const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied' | 'archived'>('all');

    const filteredQuotes = filter === 'all' ? quotes : quotes.filter(q => q.status === filter);

    const updateStatus = (id: number, status: Quote['status']) => {
        setQuotes(quotes.map(q => q.id === id ? { ...q, status } : q));
        if (selectedQuote?.id === id) {
            setSelectedQuote({ ...selectedQuote, status });
        }
    };

    const openQuote = (quote: Quote) => {
        setSelectedQuote(quote);
        if (quote.status === 'new') {
            updateStatus(quote.id, 'read');
        }
    };

    const statusLabels = {
        new: { label: 'Nouveau', color: 'bg-blue-100 text-blue-700' },
        read: { label: 'Lu', color: 'bg-gray-100 text-gray-600' },
        replied: { label: 'Répondu', color: 'bg-green-100 text-green-700' },
        archived: { label: 'Archivé', color: 'bg-orange-100 text-orange-700' },
    };

    const counts = {
        all: quotes.length,
        new: quotes.filter(q => q.status === 'new').length,
        read: quotes.filter(q => q.status === 'read').length,
        replied: quotes.filter(q => q.status === 'replied').length,
        archived: quotes.filter(q => q.status === 'archived').length,
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Demandes de devis</h1>
                <p className="text-gray-500 text-sm mt-1">Consultez et gérez les demandes de devis reçues</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
                {(['all', 'new', 'read', 'replied', 'archived'] as const).map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            filter === f
                                ? 'bg-[var(--primary)] text-white'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        {f === 'all' ? 'Tous' : statusLabels[f].label}
                        <span className="ml-1.5 text-xs opacity-70">({counts[f]})</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* List */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto">
                        {filteredQuotes.map((quote) => (
                            <button
                                key={quote.id}
                                onClick={() => openQuote(quote)}
                                className={`w-full text-left px-4 py-3.5 hover:bg-gray-50 transition-colors ${
                                    selectedQuote?.id === quote.id ? 'bg-blue-50 border-l-2 border-l-[var(--secondary)]' : ''
                                }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-sm font-medium ${quote.status === 'new' ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {quote.name}
                                    </span>
                                    {quote.status === 'new' && <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />}
                                </div>
                                <div className="text-xs text-gray-500 truncate">{quote.service}</div>
                                <div className="text-[11px] text-gray-400 mt-0.5">{quote.date}</div>
                            </button>
                        ))}
                        {filteredQuotes.length === 0 && (
                            <div className="text-center py-8 text-gray-400 text-sm">Aucun devis</div>
                        )}
                    </div>
                </div>

                {/* Detail */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    {selectedQuote ? (
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">{selectedQuote.name}</h2>
                                    <p className="text-sm text-gray-500">{selectedQuote.company || 'Particulier'}</p>
                                </div>
                                <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${statusLabels[selectedQuote.status].color}`}>
                                    {statusLabels[selectedQuote.status].label}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-[11px] text-gray-400 uppercase font-semibold mb-1">Email</div>
                                    <a href={`mailto:${selectedQuote.email}`} className="text-sm text-blue-600 hover:underline">{selectedQuote.email}</a>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-[11px] text-gray-400 uppercase font-semibold mb-1">Téléphone</div>
                                    <a href={`tel:${selectedQuote.phone}`} className="text-sm text-blue-600 hover:underline">{selectedQuote.phone}</a>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-[11px] text-gray-400 uppercase font-semibold mb-1">Service demandé</div>
                                    <div className="text-sm text-gray-700 font-medium">{selectedQuote.service}</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[11px] text-gray-400 uppercase font-semibold mb-2">Message</div>
                                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                                    {selectedQuote.message}
                                </div>
                            </div>

                            <div className="text-xs text-gray-400">Reçu le {selectedQuote.date}</div>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                                <button
                                    onClick={() => updateStatus(selectedQuote.id, 'replied')}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Marquer comme répondu
                                </button>
                                <button
                                    onClick={() => updateStatus(selectedQuote.id, 'archived')}
                                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Archiver
                                </button>
                                <a
                                    href={`mailto:${selectedQuote.email}`}
                                    className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Répondre par email
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <svg className="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-sm">Sélectionnez un devis pour voir les détails</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
