"use client";

import { Scale, BookText, Newspaper, Lightbulb, ExternalLink, Eye, Clock } from 'lucide-react';
import { FeedItem } from '@/types/discover';
import Image from 'next/image';

interface FeedCardProps {
  item: FeedItem;
}

export default function FeedCard({ item }: FeedCardProps) {
  // Render Decisão
  if (item.tipo === 'decisao') {
    return (
      <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6 text-[#BF1725]" />
            </div>
            <div>
              <span className="px-3 py-1 bg-gradient-red text-white text-xs font-bold rounded-full">
                {item.tribunal}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white/60 text-sm">
            <Eye className="w-4 h-4" />
            <span>{item.visualizacoes}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            {item.numero} - {item.titulo}
          </h3>
          <div className="flex items-center gap-3 text-white/60 text-sm mb-3">
            <span>{item.data}</span>
            <span>•</span>
            <span>{item.orgao}</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
            {item.ementa}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 glass-light text-white/70 text-xs rounded-full hover:glass-red transition-all"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button className="text-[#BF1725] font-semibold text-sm hover:text-[#D92546] transition-colors">
          Ver jurisprudência →
        </button>
      </div>
    );
  }

  // Render Legislação
  if (item.tipo === 'legislacao') {
    return (
      <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all cursor-pointer">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center shrink-0">
            <BookText className="w-6 h-6 text-[#F2A6AF]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-gradient-red text-white text-xs font-bold rounded-full">
                {item.status || 'NOVA LEI'}
              </span>
              <span className="px-3 py-1 glass-light text-white/70 text-xs rounded-full">
                {item.area}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {item.lei} - {item.titulo}
            </h3>
            <p className="text-white/60 text-sm mb-3">
              Publicada em {item.data_publicacao}
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              {item.resumo}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/60">Impacto:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              item.impacto === 'Alto' ? 'bg-gradient-red text-white' :
              item.impacto === 'Médio' ? 'glass-dark text-[#F2A6AF]' :
              'glass-light text-white/70'
            }`}>
              {item.impacto}
            </span>
          </div>
          <button className="text-[#BF1725] font-semibold text-sm hover:text-[#D92546] transition-colors flex items-center gap-1">
            Texto completo
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Render Notícia
  if (item.tipo === 'noticia') {
    return (
      <div className="glass rounded-3xl overflow-hidden hover:glass-red transition-all cursor-pointer">
        {item.imagem && (
          <div className="relative h-48 bg-slate-800">
            <Image
              src={item.imagem}
              alt={item.titulo}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-[#BF1725]" />
            <span className="px-3 py-1 glass-light text-white/70 text-xs rounded-full">
              {item.categoria}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">
            {item.titulo}
          </h3>

          <div className="flex items-center gap-3 text-white/60 text-sm">
            <span>{item.fonte}</span>
            <span>•</span>
            <span>{item.data}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{item.tempo_leitura}</span>
            </div>
          </div>

          <button className="text-[#BF1725] font-semibold text-sm hover:text-[#D92546] transition-colors flex items-center gap-1">
            Ler notícia
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Render Dica
  if (item.tipo === 'dica') {
    return (
      <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all cursor-pointer">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-red flex items-center justify-center shrink-0">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-gradient-red text-white text-xs font-bold rounded-full">
                DICA
              </span>
              <span className="px-3 py-1 glass-light text-white/70 text-xs rounded-full">
                {item.nivel}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {item.titulo}
            </h3>
            <p className="text-white/60 text-sm mb-2">
              {item.categoria}
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              {item.descricao}
            </p>
          </div>
        </div>

        <button className="text-[#BF1725] font-semibold text-sm hover:text-[#D92546] transition-colors">
          Aprender mais →
        </button>
      </div>
    );
  }

  return null;
}
