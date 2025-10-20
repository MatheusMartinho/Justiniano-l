"use client";

import { Globe, Calendar, TrendingUp, Newspaper } from 'lucide-react';

/**
 * News Page
 * Legal news and updates (placeholder for future implementation)
 */
export default function NewsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full glass-red flex items-center justify-center">
              <Globe className="w-10 h-10 text-[#BF1725]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">
            Descobrir
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Fique por dentro das últimas notícias e atualizações do mundo jurídico
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="glass rounded-3xl p-12">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-2xl glass-light flex items-center justify-center">
                <Newspaper className="w-8 h-8 text-white/60" />
              </div>
              <div className="w-16 h-16 rounded-2xl glass-light flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white/60" />
              </div>
              <div className="w-16 h-16 rounded-2xl glass-light flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white/60" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                Em Desenvolvimento
              </h2>
              <p className="text-white/70 max-w-md">
                Esta seção trará notícias jurídicas, atualizações legislativas e tendências do direito
              </p>
            </div>

            <div className="glass-red rounded-2xl p-4 max-w-lg">
              <p className="text-white/90 text-sm">
                <strong className="text-[#BF1725]">Em breve:</strong> Acompanhe decisões importantes, 
                mudanças na legislação, artigos jurídicos e análises de especialistas.
              </p>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-light rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-[#BF1725]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Notícias Diárias</h3>
            <p className="text-white/60 text-sm">
              Atualizações diárias sobre decisões importantes dos tribunais
            </p>
          </div>

          <div className="glass-light rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#BF1725]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Tendências</h3>
            <p className="text-white/60 text-sm">
              Análise de tendências e mudanças no cenário jurídico
            </p>
          </div>

          <div className="glass-light rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#BF1725]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Agenda Jurídica</h3>
            <p className="text-white/60 text-sm">
              Calendário de julgamentos e eventos importantes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
