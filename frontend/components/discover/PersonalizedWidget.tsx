"use client";

import { Target, FileText, Scale, Lightbulb, BookOpen } from 'lucide-react';
import { Suggestion } from '@/types/discover';

interface PersonalizedWidgetProps {
  suggestions: Suggestion[];
}

export default function PersonalizedWidget({ suggestions }: PersonalizedWidgetProps) {
  const getIcon = (tipo: string) => {
    switch (tipo) {
      case 'artigo':
        return <FileText className="w-4 h-4" />;
      case 'decisao':
        return <Scale className="w-4 h-4" />;
      case 'sumula':
        return <BookOpen className="w-4 h-4" />;
      case 'dica':
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="glass rounded-3xl p-6 space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Target className="w-5 h-5 text-[#BF1725]" />
        Para Você
      </h3>

      <p className="text-white/60 text-sm">
        Baseado nas suas buscas
      </p>

      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="glass-light rounded-xl p-4 space-y-2 hover:glass-red transition-all cursor-pointer"
          >
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-lg glass-red flex items-center justify-center shrink-0 text-[#BF1725]">
                {getIcon(suggestion.tipo)}
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">
                  {suggestion.titulo}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {suggestion.descricao}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
