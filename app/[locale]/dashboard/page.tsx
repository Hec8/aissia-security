'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';

export default function DashboardPage() {
    const { locale } = useTranslation();

    // Mock data for overview
    const stats = [
        {
            label: 'Services actifs',
            value: '4',
            change: '+1 ce mois',
            color: 'bg-blue-500',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            href: `/${locale}/dashboard/services`,
        },
        {
            label: 'Modules de formation',
            value: '12',
            change: '2 nouveaux',
            color: 'bg-green-500',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            href: `/${locale}/dashboard/training`,
        },
        {
            label: 'Demandes de devis',
            value: '8',
            change: '3 non lus',
            color: 'bg-orange-500',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            href: `/${locale}/dashboard/quotes`,
        },
        {
            label: 'Messages',
            value: '15',
            change: '5 non lus',
            color: 'bg-purple-500',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            href: `/${locale}/dashboard/messages`,
        },
        {
            label: 'Abonnés newsletter',
            value: '243',
            change: '+12 cette semaine',
            color: 'bg-teal-500',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            ),
            href: `/${locale}/dashboard/newsletter`,
        },
    ];

    const recentQuotes = [
        { id: 1, name: 'Jean Dupont', service: 'Agent de Sécurité (ADS J/N)', date: '06/02/2026', status: 'new' },
        { id: 2, name: 'Marie Lambert', service: 'Protection rapprochée', date: '05/02/2026', status: 'read' },
        { id: 3, name: 'Pierre Martin', service: 'Audit de sécurité', date: '04/02/2026', status: 'new' },
    ];

    const recentMessages = [
        { id: 1, name: 'Sophie Bernard', subject: 'Demande d\'information', date: '06/02/2026', status: 'new' },
        { id: 2, name: 'Alain Moreau', subject: 'Partenariat', date: '05/02/2026', status: 'read' },
        { id: 3, name: 'Claire Rousseau', subject: 'Réclamation', date: '03/02/2026', status: 'new' },
    ];

    return (
        <div className="space-y-8">
            {/* Page title */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
                <p className="text-gray-500 text-sm mt-1">Vue d&apos;ensemble de l&apos;activité</p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {stats.map((stat, index) => (
                    <Link key={index} href={stat.href} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                                {stat.icon}
                            </div>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
                        <div className="text-xs text-green-600 font-medium mt-1">{stat.change}</div>
                    </Link>
                ))}
            </div>

            {/* Recent activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent quotes */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Derniers devis reçus</h3>
                        <Link href={`/${locale}/dashboard/quotes`} className="text-sm text-[var(--secondary)] hover:underline font-medium">
                            Voir tout
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {recentQuotes.map((quote) => (
                            <div key={quote.id} className="px-6 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                                        {quote.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm font-medium text-gray-900 truncate">{quote.name}</div>
                                        <div className="text-xs text-gray-500 truncate">{quote.service}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <span className="text-xs text-gray-400">{quote.date}</span>
                                    {quote.status === 'new' && (
                                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent messages */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Derniers messages</h3>
                        <Link href={`/${locale}/dashboard/messages`} className="text-sm text-[var(--secondary)] hover:underline font-medium">
                            Voir tout
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {recentMessages.map((msg) => (
                            <div key={msg.id} className="px-6 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                                        {msg.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm font-medium text-gray-900 truncate">{msg.name}</div>
                                        <div className="text-xs text-gray-500 truncate">{msg.subject}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <span className="text-xs text-gray-400">{msg.date}</span>
                                    {msg.status === 'new' && (
                                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
