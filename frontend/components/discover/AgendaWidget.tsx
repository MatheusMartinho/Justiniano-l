"use client";

import { Calendar, ExternalLink } from 'lucide-react';
import { AgendaItem } from '@/types/discover';

interface AgendaWidgetProps {
  agenda: AgendaItem[];
}

export default function AgendaWidget({ agenda }: AgendaWidgetProps) {
  return (
    <div className="glass rounded-3xl p-6 space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Calendar className="w-5 h-5 text-[#BF1725]" />
        Julgamentos Importantes
      </h3>

      <div className="space-y-3">
        {agenda.map((item, index) => (
          <div key={index} className="glass-light rounded-xl p-4 space-y-2 hover:glass-red transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-[#BF1725] font-bold text-sm">
                {item.data} - {item.hora}
              </span>
              {item.badge && (
                <span className="px-2 py-1 bg-gradient-red text-white text-xs font-bold rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            
            <p className="text-white font-semibold text-sm">
              {item.tribunal} - {item.orgao}
            </p>
            
            <p className="text-white/70 text-sm">
              {item.tema}
            </p>

            {item.link && (
              <button className="flex items-center gap-1 text-[#BF1725] text-xs font-semibold hover:text-[#D92546] transition-colors">
                Acompanhar ao vivo
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
