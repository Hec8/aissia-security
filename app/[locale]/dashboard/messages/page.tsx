'use client';

import { useState } from 'react';

interface Message {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
    status: 'new' | 'read' | 'replied' | 'archived';
}

export default function DashboardMessagesPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            name: 'Sophie Bernard',
            email: 'sophie.bernard@gmail.com',
            subject: 'Demande d\'information sur vos services',
            message: 'Bonjour, je souhaiterais obtenir plus d\'informations sur vos prestations de surveillance pour un commerce de centre-ville. Quels sont vos horaires de disponibilité et vos tarifs ? Merci d\'avance.',
            date: '06/02/2026 16:45',
            status: 'new',
        },
        {
            id: 2,
            name: 'Alain Moreau',
            email: 'a.moreau@enterprise.com',
            subject: 'Proposition de partenariat',
            message: 'Cher AISSIA Sécurité, je représente une entreprise spécialisée dans les systèmes d\'alarme et je souhaiterais explorer des opportunités de partenariat avec votre structure. Pouvons-nous organiser un rendez-vous ?',
            date: '05/02/2026 10:22',
            status: 'read',
        },
        {
            id: 3,
            name: 'Claire Rousseau',
            email: 'claire.r@yahoo.fr',
            subject: 'Réclamation - Intervention tardive',
            message: 'Bonjour, je tiens à signaler que l\'intervention de vos agents lors de l\'alerte du 2 février a été tardive (45 minutes au lieu des 20 minutes promises). Je souhaite une explication et un geste commercial.',
            date: '03/02/2026 14:10',
            status: 'new',
        },
        {
            id: 4,
            name: 'Marc Leblanc',
            email: 'marc.leblanc@orange.fr',
            subject: 'Félicitations pour votre service',
            message: 'Bonjour, je tenais simplement à remercier votre équipe pour l\'excellent travail réalisé lors de notre événement du 1er février. Les agents étaient professionnels et courtois. Bravo !',
            date: '02/02/2026 09:00',
            status: 'replied',
        },
        {
            id: 5,
            name: 'Isabelle Petit',
            email: 'isabelle.petit@hotmail.com',
            subject: 'Question sur les formations',
            message: 'Bonjour, je souhaite m\'inscrire à votre formation d\'Agent de Sécurité Privée. Quelles sont les prochaines sessions disponibles et les conditions d\'admission ?',
            date: '31/01/2026 17:30',
            status: 'archived',
        },
    ]);

    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied' | 'archived'>('all');

    const filteredMessages = filter === 'all' ? messages : messages.filter(m => m.status === filter);

    const updateStatus = (id: number, status: Message['status']) => {
        setMessages(messages.map(m => m.id === id ? { ...m, status } : m));
        if (selectedMessage?.id === id) {
            setSelectedMessage({ ...selectedMessage, status });
        }
    };

    const openMessage = (msg: Message) => {
        setSelectedMessage(msg);
        if (msg.status === 'new') {
            updateStatus(msg.id, 'read');
        }
    };

    const deleteMessage = (id: number) => {
        setMessages(messages.filter(m => m.id !== id));
        if (selectedMessage?.id === id) setSelectedMessage(null);
    };

    const statusLabels = {
        new: { label: 'Nouveau', color: 'bg-blue-100 text-blue-700' },
        read: { label: 'Lu', color: 'bg-gray-100 text-gray-600' },
        replied: { label: 'Répondu', color: 'bg-green-100 text-green-700' },
        archived: { label: 'Archivé', color: 'bg-orange-100 text-orange-700' },
    };

    const counts = {
        all: messages.length,
        new: messages.filter(m => m.status === 'new').length,
        read: messages.filter(m => m.status === 'read').length,
        replied: messages.filter(m => m.status === 'replied').length,
        archived: messages.filter(m => m.status === 'archived').length,
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Messages de contact</h1>
                <p className="text-gray-500 text-sm mt-1">Consultez les messages envoyés via le formulaire de contact</p>
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
                        {filteredMessages.map((msg) => (
                            <button
                                key={msg.id}
                                onClick={() => openMessage(msg)}
                                className={`w-full text-left px-4 py-3.5 hover:bg-gray-50 transition-colors ${
                                    selectedMessage?.id === msg.id ? 'bg-blue-50 border-l-2 border-l-[var(--secondary)]' : ''
                                }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-sm font-medium ${msg.status === 'new' ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {msg.name}
                                    </span>
                                    {msg.status === 'new' && <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />}
                                </div>
                                <div className="text-xs text-gray-700 font-medium truncate">{msg.subject}</div>
                                <div className="text-[11px] text-gray-400 mt-0.5">{msg.date}</div>
                            </button>
                        ))}
                        {filteredMessages.length === 0 && (
                            <div className="text-center py-8 text-gray-400 text-sm">Aucun message</div>
                        )}
                    </div>
                </div>

                {/* Detail */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    {selectedMessage ? (
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">{selectedMessage.subject}</h2>
                                    <p className="text-sm text-gray-500 mt-0.5">De : {selectedMessage.name}</p>
                                </div>
                                <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${statusLabels[selectedMessage.status].color}`}>
                                    {statusLabels[selectedMessage.status].label}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-[11px] text-gray-400 uppercase font-semibold mb-1">Email</div>
                                    <a href={`mailto:${selectedMessage.email}`} className="text-sm text-blue-600 hover:underline">{selectedMessage.email}</a>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-[11px] text-gray-400 uppercase font-semibold mb-1">Date</div>
                                    <div className="text-sm text-gray-700">{selectedMessage.date}</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[11px] text-gray-400 uppercase font-semibold mb-2">Message</div>
                                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                                    {selectedMessage.message}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                                <a
                                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                                    className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Répondre par email
                                </a>
                                <button
                                    onClick={() => updateStatus(selectedMessage.id, 'replied')}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Marquer répondu
                                </button>
                                <button
                                    onClick={() => updateStatus(selectedMessage.id, 'archived')}
                                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Archiver
                                </button>
                                <button
                                    onClick={() => deleteMessage(selectedMessage.id)}
                                    className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <svg className="w-12 h-12 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm">Sélectionnez un message pour voir les détails</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
