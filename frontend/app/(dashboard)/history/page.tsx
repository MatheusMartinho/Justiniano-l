"use client";

import { Clock, Search, Calendar } from 'lucide-react';

/**
 * History Page
 * Displays user's search history (placeholder for Week 4)
 */
export default function HistoryPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full glass-red flex items-center justify-center">
              <Clock className="w-10 h-10 text-[#BF1725]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">
            Histórico de Buscas
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Visualize e gerencie o histórico completo das suas consultas jurídicas
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="glass rounded-3xl p-12">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-2xl glass-light flex items-center justify-center">
                <Search className="w-8 h-8 text-white/60" />
              </div>
              <div className="w-16 h-16 rounded-2xl glass-light flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white/60" />
              </div>
              <div className="w-16 h-16 rounded-2xl glass-light flex items-center justify-center">
                <Clock className="w-8 h-8 text-white/60" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                Em Desenvolvimento
              </h2>
              <p className="text-white/70 max-w-md">
                Esta funcionalidade será implementada na Semana 4 com sistema de autenticação
              </p>
            </div>

            <div className="glass-red rounded-2xl p-4 max-w-lg">
              <p className="text-white/90 text-sm">
                <strong className="text-[#BF1725]">Em breve:</strong> Acesse todo o histórico de pesquisas, 
                filtre por data, tribunal e tipo de decisão, e salve suas buscas favoritas.
              </p>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-light rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
              <Search className="w-6 h-6 text-[#BF1725]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Histórico Completo</h3>
            <p className="text-white/60 text-sm">
              Todas as suas pesquisas salvas e organizadas
            </p>
          </div>

          <div className="glass-light rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#BF1725]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Filtros Avançados</h3>
            <p className="text-white/60 text-sm">
              Filtre por data, tribunal e tipo de decisão
            </p>
          </div>

          <div className="glass-light rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#BF1725]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Acesso Rápido</h3>
            <p className="text-white/60 text-sm">
              Repita buscas anteriores com um clique
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
