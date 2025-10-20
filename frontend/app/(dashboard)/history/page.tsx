"use client";

import { Clock } from 'lucide-react';

/**
 * History Page
 * Displays user's search history (placeholder for Week 4)
 */
export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[600px] space-y-6">
          <Clock className="w-24 h-24 text-slate-700" />
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">
              Histórico de Buscas
            </h1>
            <p className="text-slate-400 max-w-md">
              Em breve: Visualize o histórico completo das suas consultas jurídicas
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Esta funcionalidade será implementada na Semana 4 com autenticação
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
