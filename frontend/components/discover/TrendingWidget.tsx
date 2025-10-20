"use client";

import { Flame, TrendingUp, TrendingDown } from 'lucide-react';
import { TrendingTopic } from '@/types/discover';

interface TrendingWidgetProps {
  trending: TrendingTopic[];
}

export default function TrendingWidget({ trending }: TrendingWidgetProps) {
  return (
    <div className="glass rounded-3xl p-6 space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Flame className="w-5 h-5 text-[#BF1725]" />
        Trending Hoje
      </h3>

      <div className="space-y-2">
        {trending.map((topic) => (
          <div
            key={topic.posicao}
            className="glass-light rounded-xl p-3 hover:glass-red transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[#BF1725] font-bold text-sm w-6">
                  #{topic.posicao}
                </span>
                <span className="text-white text-sm font-medium group-hover:text-white transition-colors">
                  {topic.tema}
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                {topic.direcao === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
                <span className={`text-xs font-bold ${
                  topic.direcao === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {topic.variacao}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
