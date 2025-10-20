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
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-bold text-white">Síntese do Entendimento</h2>
        </div>
        
        <p className="text-slate-300 leading-relaxed">
          {result.sintese}
        </p>
        
        {/* Predominant Understanding Box */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-amber-400 mb-2">
            Entendimento Predominante
          </h3>
          <p className="text-slate-200">
            {result.entendimentoPredominante}
          </p>
        </div>
        
        {/* Average Value Box (if applicable) */}
        {result.valorMedio && result.valorMedio !== "N/A" && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">
              Valor Médio de Indenização
            </h3>
            <p className="text-slate-200 text-lg font-medium">
              {result.valorMedio}
            </p>
          </div>
        )}
      </div>

      {/* CARD 2 - Related Decisions */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Scale className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-bold text-white">
            Decisões Relacionadas ({result.decisoes.length})
          </h2>
        </div>
        
        <div className="space-y-4">
          {result.decisoes.map((decisao, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 space-y-3 hover:border-slate-600 transition-colors"
            >
              {/* Tribunal Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full">
                  {decisao.tribunal}
                </span>
                <span className="text-white font-medium">
                  {decisao.numero}
                </span>
              </div>
              
              {/* Date and Judge */}
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>📅 {decisao.data}</span>
                <span>👨‍⚖️ {decisao.relator}</span>
              </div>
              
              {/* Organ */}
              <div className="text-sm text-slate-400">
                <span className="font-medium">Órgão:</span> {decisao.orgao}
              </div>
              
              {/* Summary (Ementa) */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {decisao.ementa}
              </p>
              
              {/* Link to Full Decision */}
              <a
                href={decisao.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
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
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">
              Súmulas Relacionadas
            </h2>
          </div>
          
          <div className="space-y-3">
            {result.sumulas.map((sumula, index) => (
              <div 
                key={index}
                className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4"
              >
                <h3 className="text-purple-400 font-semibold mb-2">
                  {sumula.numero}
                </h3>
                <p className="text-slate-300 text-sm">
                  {sumula.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CARD 4 - Divergences and Observations */}
      {result.divergencias && result.divergencias.trim() !== "" && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">
              Divergências e Observações
            </h2>
          </div>
          
          <p className="text-slate-300 leading-relaxed">
            {result.divergencias}
          </p>
        </div>
      )}

      {/* Footer - Important Notice */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-yellow-500">⚠️ Importante:</strong> Esta é uma ferramenta de auxílio à pesquisa jurídica. 
              As sínteses são geradas por IA e devem ser verificadas nas fontes originais. 
              Sempre consulte os acórdãos completos e a legislação vigente antes de fundamentar suas teses.
            </p>
            <p className="text-slate-400 text-xs">
              Consulta realizada em: {new Date(result.timestamp).toLocaleString('pt-BR')}
            </p>
            <p className="text-slate-400 text-xs">
              Tribunais consultados: {result.tribunais_consultados.join(', ')} • 
              Total de decisões encontradas: {result.total_decisoes_encontradas}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
