"use client";

import { BookOpen, Scale, ExternalLink, AlertTriangle } from 'lucide-react';
import { SearchResult } from '@/types';

interface ResultCardProps {
  /** Search result data to display */
  result: SearchResult;
}

/**
 * ResultCard Component
 * Displays comprehensive search results with AI synthesis
 */
export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="space-y-6">
      {/* CARD 1 - Main Synthesis */}
      <div className="glass rounded-3xl p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full glass-red flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-[#BF1725]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Síntese do Entendimento</h2>
        </div>
        
        <p className="text-white/90 leading-relaxed">
          {result.sintese}
        </p>
        
        {/* Predominant Understanding Box */}
        <div className="glass-red rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-[#BF1725] mb-2">
            Entendimento Predominante
          </h3>
          <p className="text-white">
            {result.entendimentoPredominante}
          </p>
        </div>
        
        {/* Average Value Box (if applicable) */}
        {result.valorMedio && result.valorMedio !== "N/A" && (
          <div className="glass-dark rounded-2xl p-4">
            <h3 className="text-sm font-semibold text-[#F2A6AF] mb-2">
              Valor Médio de Indenização
            </h3>
            <p className="text-white text-lg font-medium">
              {result.valorMedio}
            </p>
          </div>
        )}
      </div>

      {/* CARD 2 - Related Decisions */}
      <div className="glass rounded-3xl p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full glass-red flex items-center justify-center">
            <Scale className="w-6 h-6 text-[#BF1725]" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Decisões Relacionadas ({result.decisoes.length})
          </h2>
        </div>
        
        <div className="space-y-4">
          {result.decisoes.map((decisao, index) => (
            <div 
              key={index}
              className="glass-light rounded-2xl p-5 space-y-3 hover:glass-red transition-all"
            >
              {/* Tribunal Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gradient-red text-white text-sm font-semibold rounded-full">
                  {decisao.tribunal}
                </span>
                <span className="text-white font-medium">
                  {decisao.numero}
                </span>
              </div>
              
              {/* Date and Judge */}
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>📅 {decisao.data}</span>
                <span>👨‍⚖️ {decisao.relator}</span>
              </div>
              
              {/* Organ */}
              <div className="text-sm text-white/60">
                <span className="font-medium">Órgão:</span> {decisao.orgao}
              </div>
              
              {/* Summary (Ementa) */}
              <p className="text-white/80 text-sm leading-relaxed">
                {decisao.ementa}
              </p>
              
              {/* Link to Full Decision */}
              <a
                href={decisao.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#BF1725] hover:text-[#D92546] text-sm font-medium transition-colors"
              >
                Ver decisão completa
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CARD 3 - Related Precedents (Súmulas) */}
      {result.sumulas && result.sumulas.length > 0 && (
        <div className="glass rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#F2A6AF]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Súmulas Relacionadas
            </h2>
          </div>
          
          <div className="space-y-3">
            {result.sumulas.map((sumula, index) => (
              <div 
                key={index}
                className="glass-dark rounded-2xl p-4"
              >
                <h3 className="text-[#F2A6AF] font-semibold mb-2">
                  {sumula.numero}
                </h3>
                <p className="text-white/80 text-sm">
                  {sumula.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CARD 4 - Divergences and Observations */}
      {result.divergencias && result.divergencias.trim() !== "" && (
        <div className="glass rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full glass-red flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[#D92546]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Divergências e Observações
            </h2>
          </div>
          
          <p className="text-white/90 leading-relaxed">
            {result.divergencias}
          </p>
        </div>
      )}

      {/* Footer - Important Notice */}
      <div className="glass-red rounded-3xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#F2A6AF] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-white/90 text-sm leading-relaxed">
              <strong className="text-[#BF1725]">⚠️ Importante:</strong> Esta é uma ferramenta de auxílio à pesquisa jurídica. 
              As sínteses são geradas por IA e devem ser verificadas nas fontes originais. 
              Sempre consulte os acórdãos completos e a legislação vigente antes de fundamentar suas teses.
            </p>
            <p className="text-white/60 text-xs">
              Consulta realizada em: {new Date(result.timestamp).toLocaleString('pt-BR')}
            </p>
            <p className="text-white/60 text-xs">
              Tribunais consultados: {result.tribunais_consultados.join(', ')} • 
              Total de decisões encontradas: {result.total_decisoes_encontradas}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
