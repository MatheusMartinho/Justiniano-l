"use client";

import { Building2, TrendingUp, FileText, Flame } from 'lucide-react';
import { StatsData } from '@/types/discover';

interface StatsWidgetProps {
  stats: StatsData;
}

export default function StatsWidget({ stats }: StatsWidgetProps) {
  return (
    <div className="glass rounded-3xl p-6 space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-[#BF1725]" />
        Jurisprudência Hoje
      </h3>

      <div className="space-y-3">
        {/* STJ */}
        <div className="glass-light rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-red flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">{stats.stj_acordaos} novos acórdãos</p>
            <p className="text-white/60 text-sm">STJ publicados</p>
          </div>
        </div>

        {/* STF */}
        <div className="glass-light rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-[#F2A6AF]" />
          </div>
          <div>
            <p className="text-white font-semibold">{stats.stf_repercussoes} repercussões gerais</p>
            <p className="text-white/60 text-sm">STF julgadas</p>
          </div>
        </div>

        {/* Total Semana */}
        <div className="glass-light rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg glass-red flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-[#BF1725]" />
          </div>
          <div>
            <p className="text-white font-semibold">{stats.decisoes_semana.toLocaleString()} decisões</p>
            <p className="text-white/60 text-sm">indexadas esta semana</p>
          </div>
        </div>

        {/* Top Tema */}
        <div className="glass-light rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-red flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">{stats.top_tema}</p>
            <p className="text-white/60 text-sm">{stats.top_tema_buscas} buscas hoje</p>
          </div>
        </div>
      </div>
    </div>
  );
}
