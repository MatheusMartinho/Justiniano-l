"use client";

import { useState } from 'react';
import { Scale } from 'lucide-react';
import SearchBox from '@/components/search/SearchBox';
import ResultCard from '@/components/search/ResultCard';
import LoadingState from '@/components/search/LoadingState';
import { SearchResult } from '@/types';

/**
 * Search Page
 * Main page for legal jurisprudence search
 */
export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Generate mock data based on query
   */
  const generateMockData = (searchQuery: string): SearchResult => {
    const lowerQuery = searchQuery.toLowerCase();
    
    // Mock data for "dano moral" or "negativação"
    if (lowerQuery.includes('dano moral') || lowerQuery.includes('negativação')) {
      return {
        query: searchQuery,
        timestamp: new Date().toISOString(),
        sintese: "A jurisprudência dos tribunais superiores é pacífica no sentido de que a inscrição indevida em cadastros de proteção ao crédito (SPC/SERASA) gera dano moral presumido (in re ipsa), dispensando a comprovação de prejuízo efetivo. O Superior Tribunal de Justiça consolidou esse entendimento em diversos precedentes, estabelecendo que a simples negativação irregular já configura violação aos direitos da personalidade.",
        entendimentoPredominante: "Dano moral presumido em caso de negativação indevida, com valores de indenização variando conforme as circunstâncias do caso concreto e a capacidade econômica das partes.",
        valorMedio: "R$ 5.000,00 a R$ 15.000,00",
        decisoes: [
          {
            tribunal: "STJ",
            numero: "REsp 1.408.697/PR",
            data: "26/02/2019",
            ementa: "CIVIL E PROCESSUAL CIVIL. RECURSO ESPECIAL. INSCRIÇÃO INDEVIDA EM CADASTRO DE INADIMPLENTES. DANO MORAL PRESUMIDO. QUANTUM INDENIZATÓRIO. REVISÃO. SÚMULA 7/STJ. 1. A inscrição indevida em cadastros de proteção ao crédito gera dano moral in re ipsa, sendo desnecessária a comprovação de prejuízo concreto. 2. O valor da indenização deve ser fixado com moderação, considerando as circunstâncias do caso, a gravidade da lesão e a capacidade econômica das partes.",
            relator: "Min. Nancy Andrighi",
            orgao: "Terceira Turma",
            url: "https://www.stj.jus.br/exemplo1",
            data_timestamp: 1551139200000
          },
          {
            tribunal: "STJ",
            numero: "REsp 1.737.412/SE",
            data: "15/05/2018",
            ementa: "RECURSO ESPECIAL. AÇÃO DE INDENIZAÇÃO. INSCRIÇÃO INDEVIDA EM ÓRGÃO DE PROTEÇÃO AO CRÉDITO. DANO MORAL CONFIGURADO. VALOR DA INDENIZAÇÃO. RAZOABILIDADE. 1. É consolidado nesta Corte o entendimento de que a inscrição indevida do nome do consumidor nos cadastros de inadimplentes caracteriza dano moral in re ipsa. 2. O montante indenizatório deve observar os princípios da proporcionalidade e razoabilidade.",
            relator: "Min. Ricardo Villas Bôas Cueva",
            orgao: "Terceira Turma",
            url: "https://www.stj.jus.br/exemplo2",
            data_timestamp: 1526342400000
          },
          {
            tribunal: "STJ",
            numero: "AgInt no AREsp 1.550.951/SP",
            data: "10/12/2019",
            ementa: "AGRAVO INTERNO NO AGRAVO EM RECURSO ESPECIAL. NEGATIVAÇÃO INDEVIDA. DANO MORAL CONFIGURADO. VALOR ARBITRADO EM CONSONÂNCIA COM OS PARÂMETROS DESTA CORTE. 1. A jurisprudência do STJ é firme no sentido de que a inscrição indevida em cadastros de inadimplentes gera dano moral presumido. 2. O valor fixado em R$ 10.000,00 está em harmonia com os precedentes desta Corte para casos análogos.",
            relator: "Min. Marco Aurélio Bellizze",
            orgao: "Terceira Turma",
            url: "https://www.stj.jus.br/exemplo3",
            data_timestamp: 1575936000000
          }
        ],
        divergencias: "Importante observar que a Súmula 385 do STJ estabelece que não há dano moral presumido quando já existem outras inscrições legítimas no nome do devedor (teoria do 'dano moral reflexo'). Nesses casos, é necessária a comprovação de prejuízo específico.",
        sumulas: [
          {
            numero: "Súmula 385 STJ",
            texto: "Da anotação irregular em cadastro de proteção ao crédito, não cabe indenização por dano moral, quando preexistente legítima inscrição, ressalvado o direito ao cancelamento."
          }
        ],
        tribunais_consultados: ["STJ", "STF"],
        total_decisoes_encontradas: 847
      };
    }
    
    // Mock data for "prescrição" or "honorários"
    if (lowerQuery.includes('prescrição') || lowerQuery.includes('honorários')) {
      return {
        query: searchQuery,
        timestamp: new Date().toISOString(),
        sintese: "O Superior Tribunal de Justiça firmou entendimento de que a prescrição para cobrança de honorários advocatícios contratuais é quinquenal, aplicando-se o prazo previsto no artigo 206, §5º, inciso II, do Código Civil. Esse posicionamento foi consolidado após divergências jurisprudenciais sobre a aplicação do prazo decenal ou quinquenal.",
        entendimentoPredominante: "Prescrição quinquenal (5 anos) para cobrança de honorários advocatícios contratuais, contados da data do vencimento da obrigação ou da prestação do serviço.",
        valorMedio: "N/A",
        decisoes: [
          {
            tribunal: "STJ",
            numero: "REsp 1.727.575/SP",
            data: "12/03/2019",
            ementa: "RECURSO ESPECIAL. CIVIL. HONORÁRIOS ADVOCATÍCIOS CONTRATUAIS. PRESCRIÇÃO. PRAZO QUINQUENAL. ART. 206, §5º, II, DO CÓDIGO CIVIL. 1. A pretensão de cobrança de honorários advocatícios contratuais prescreve em cinco anos, nos termos do art. 206, §5º, II, do Código Civil. 2. O prazo prescricional inicia-se na data do vencimento da obrigação ou da efetiva prestação dos serviços advocatícios.",
            relator: "Min. Paulo de Tarso Sanseverino",
            orgao: "Segunda Seção",
            url: "https://www.stj.jus.br/exemplo4",
            data_timestamp: 1552348800000
          },
          {
            tribunal: "STJ",
            numero: "REsp 1.444.484/RS",
            data: "25/06/2014",
            ementa: "CIVIL. HONORÁRIOS ADVOCATÍCIOS. CONTRATO DE PRESTAÇÃO DE SERVIÇOS. PRESCRIÇÃO QUINQUENAL. 1. Aplica-se o prazo prescricional de cinco anos à pretensão de cobrança de honorários advocatícios decorrentes de contrato de prestação de serviços, conforme o disposto no art. 206, §5º, II, do CC/2002.",
            relator: "Min. Luis Felipe Salomão",
            orgao: "Quarta Turma",
            url: "https://www.stj.jus.br/exemplo5",
            data_timestamp: 1403654400000
          }
        ],
        divergencias: "Há discussão doutrinária sobre o termo inicial da prescrição quando não há data específica de vencimento no contrato, prevalecendo o entendimento de que o prazo se inicia com a efetiva prestação do serviço ou com a notificação para pagamento.",
        sumulas: [],
        tribunais_consultados: ["STJ"],
        total_decisoes_encontradas: 312
      };
    }
    
    // Generic mock data
    return {
      query: searchQuery,
      timestamp: new Date().toISOString(),
      sintese: "A pesquisa foi realizada nos tribunais superiores brasileiros. Os resultados abaixo apresentam decisões relevantes relacionadas à sua consulta. Recomenda-se a análise detalhada de cada acórdão para compreensão completa do entendimento jurisprudencial.",
      entendimentoPredominante: "Análise caso a caso, observando as particularidades de cada situação concreta e os princípios constitucionais aplicáveis.",
      valorMedio: "N/A",
      decisoes: [
        {
          tribunal: "STJ",
          numero: "REsp 1.234.567/SP",
          data: "15/08/2023",
          ementa: "Exemplo de ementa relacionada à sua pesquisa. Este é um resultado genérico que será substituído por dados reais quando a integração com as APIs dos tribunais estiver completa.",
          relator: "Min. Exemplo da Silva",
          orgao: "Terceira Turma",
          url: "https://www.stj.jus.br/exemplo",
          data_timestamp: 1692057600000
        }
      ],
      divergencias: "Não foram identificadas divergências significativas nos precedentes analisados.",
      sumulas: [],
      tribunais_consultados: ["STJ", "STF"],
      total_decisoes_encontradas: 45
    };
  };

  /**
   * Handle search submission
   */
  const handleSearch = async (searchQuery: string) => {
    // Clear previous results and errors
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate mock data
      const mockResult = generateMockData(searchQuery);
      setResult(mockResult);
    } catch (err) {
      setError('Erro ao realizar a busca. Por favor, tente novamente.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Pesquisa Jurisprudencial
          </h1>
          <p className="text-slate-400">
            Consulte jurisprudência dos tribunais superiores em linguagem natural
          </p>
        </div>

        {/* Search Box */}
        <SearchBox 
          onSearch={handleSearch}
          loading={loading}
        />

        {/* Loading State */}
        {loading && <LoadingState />}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <p className="text-red-400 text-center">
              {error}
            </p>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <ResultCard result={result} />
        )}

        {/* Empty State */}
        {!result && !loading && !error && (
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <Scale className="w-24 h-24 text-slate-700" />
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-slate-300">
                Bem-vindo ao Perplexity Jurídico
              </h2>
              <p className="text-slate-400 max-w-md">
                Digite sua pergunta jurídica acima para encontrar jurisprudência 
                relevante dos tribunais superiores brasileiros.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
