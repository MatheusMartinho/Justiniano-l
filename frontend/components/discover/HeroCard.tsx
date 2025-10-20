"use client";

import { ArrowRight, TrendingUp } from 'lucide-react';
import { HeroData } from '@/types/discover';

interface HeroCardProps {
  data: HeroData;
}

export default function HeroCard({ data }: HeroCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl glass-red h-[400px] group cursor-pointer">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8 space-y-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-gradient-red text-white text-xs font-bold rounded-full">
            DESTAQUE DO DIA
          </span>
          <span className="px-3 py-1 glass-dark text-white/80 text-xs font-semibold rounded-full">
            {data.categoria}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {data.titulo}
        </h2>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <span className="font-semibold">{data.tribunal}</span>
          <span>•</span>
          <span>{data.data}</span>
        </div>

        {/* Summary */}
        <p className="text-white/80 text-lg">
          {data.resumo}
        </p>

        {/* Impact & CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#BF1725]" />
            <span className="text-sm font-semibold text-white">
              Impacto: <span className="text-[#BF1725]">{data.impacto}</span>
            </span>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-red text-white font-semibold rounded-full hover:scale-105 transition-all">
            Ler mais
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
