"use client";

import HeroCard from '@/components/discover/HeroCard';
import DiscoverFeed from '@/components/discover/DiscoverFeed';
import StatsWidget from '@/components/discover/StatsWidget';
import AgendaWidget from '@/components/discover/AgendaWidget';
import TrendingWidget from '@/components/discover/TrendingWidget';
import PersonalizedWidget from '@/components/discover/PersonalizedWidget';
import { HeroData, FeedItem, StatsData, AgendaItem, TrendingTopic, Suggestion } from '@/types/discover';

/**
 * Discover Page - Legal News and Updates
 * Perplexity-style discover feed for legal content
 */
export default function DiscoverPage() {
  // Hero Data
  const heroData: HeroData = {
    titulo: "STF declara inconstitucional cobrança de ICMS sobre software em nuvem",
    tribunal: "Supremo Tribunal Federal",
    data: "20/01/2025",
    categoria: "Tributário",
    resumo: "Por 8 votos a 3, ministros decidiram que software como serviço (SaaS) não pode ser tributado como mercadoria, impactando milhares de empresas de tecnologia.",
    impacto: "Alto"
  };

  // Stats Data
  const statsData: StatsData = {
    stj_acordaos: 47,
    stf_repercussoes: 3,
    decisoes_semana: 1245,
    top_tema: "Dano moral",
    top_tema_buscas: 389
  };

  // Agenda Data
  const agendaData: AgendaItem[] = [
    {
      data: "22/01",
      hora: "14h",
      tribunal: "STF",
      orgao: "Plenário",
      tema: "LGPD e compartilhamento de dados entre órgãos públicos",
      badge: "Repercussão Geral",
      link: "#"
    },
    {
      data: "23/01",
      hora: "10h",
      tribunal: "STJ",
      orgao: "2ª Seção",
      tema: "Honorários advocatícios em execução fiscal",
      link: "#"
    },
    {
      data: "24/01",
      hora: "15h",
      tribunal: "STF",
      orgao: "1ª Turma",
      tema: "Prescrição intercorrente em ação de improbidade",
      badge: "Tema 897"
    },
    {
      data: "25/01",
      hora: "14h",
      tribunal: "STJ",
      orgao: "3ª Turma",
      tema: "Dano moral por negativação indevida - valor",
      link: "#"
    }
  ];

  // Trending Data
  const trendingData: TrendingTopic[] = [
    { posicao: 1, tema: "Dano moral por negativação", variacao: 234, direcao: "up" },
    { posicao: 2, tema: "Prescrição tributária", variacao: 189, direcao: "up" },
    { posicao: 3, tema: "Penhora de salário", variacao: 156, direcao: "up" },
    { posicao: 4, tema: "Honorários sucumbenciais", variacao: 98, direcao: "up" },
    { posicao: 5, tema: "LGPD e proteção de dados", variacao: 87, direcao: "up" },
    { posicao: 6, tema: "Usucapião extrajudicial", variacao: 76, direcao: "up" },
    { posicao: 7, tema: "Revisão de alimentos", variacao: 45, direcao: "down" },
    { posicao: 8, tema: "Execução fiscal", variacao: 34, direcao: "up" },
    { posicao: 9, tema: "Inventário judicial", variacao: 28, direcao: "down" },
    { posicao: 10, tema: "Ação rescisória", variacao: 12, direcao: "up" }
  ];

  // Suggestions Data
  const suggestionsData: Suggestion[] = [
    {
      titulo: "Nova súmula sobre dano moral",
      descricao: "STJ edita súmula 654 sobre quantificação de danos morais",
      tipo: "sumula"
    },
    {
      titulo: "Você pesquisou sobre prescrição",
      descricao: "Veja também: Prescrição intercorrente em execução fiscal",
      tipo: "decisao"
    },
    {
      titulo: "Artigo recomendado",
      descricao: "Como fundamentar pedidos de dano moral em 2025",
      tipo: "artigo"
    },
    {
      titulo: "Dica prática",
      descricao: "Checklist para petição inicial em ação de cobrança",
      tipo: "dica"
    }
  ];

  // Feed Items (Mixed content)
  const feedItems: FeedItem[] = [
    {
      tipo: "decisao",
      tribunal: "STJ",
      numero: "REsp 1.987.654/SP",
      titulo: "Dano moral em negativação indevida - Valor mínimo",
      data: "18/01/2025",
      orgao: "3ª Turma",
      ementa: "A inscrição indevida em cadastros de proteção ao crédito gera dano moral in re ipsa, sendo desnecessária a prova do abalo psicológico. O valor da indenização deve observar os princípios da razoabilidade e proporcionalidade, não podendo ser inferior a R$ 5.000,00.",
      tags: ["DanoMoral", "Consumidor", "Negativação"],
      visualizacoes: 245
    },
    {
      tipo: "legislacao",
      lei: "Lei 14.789/2025",
      titulo: "Marco Legal da Inteligência Artificial",
      data_publicacao: "15/01/2025",
      resumo: "Estabelece regras para uso de IA no Brasil, incluindo transparência algorítmica, proteção de dados e responsabilidade civil por danos causados por sistemas autônomos.",
      impacto: "Alto",
      area: "Tecnologia",
      status: "NOVA LEI"
    },
    {
      tipo: "noticia",
      titulo: "CNJ aprova nova resolução sobre audiências virtuais",
      fonte: "Consultor Jurídico",
      categoria: "Processual",
      data: "17/01/2025",
      tempo_leitura: "5 min",
      link: "https://example.com"
    },
    {
      tipo: "dica",
      titulo: "Como fundamentar pedido de dano moral",
      categoria: "Prática Forense",
      descricao: "Passo a passo para elaborar fundamentação sólida em ações de dano moral: jurisprudência consolidada, valores médios por tribunal e argumentação eficaz.",
      nivel: "Intermediário"
    },
    {
      tipo: "decisao",
      tribunal: "STF",
      numero: "RE 1.234.567/RJ",
      titulo: "Repercussão Geral - Prescrição intercorrente",
      data: "16/01/2025",
      orgao: "Plenário",
      ementa: "É constitucional a aplicação da prescrição intercorrente em ações de improbidade administrativa, desde que observado o contraditório prévio e a oportunidade de manifestação do autor.",
      tags: ["Prescrição", "Improbidade", "RepercussãoGeral"],
      visualizacoes: 892
    },
    {
      tipo: "legislacao",
      lei: "Lei 14.790/2025",
      titulo: "Alterações no Código de Processo Civil",
      data_publicacao: "12/01/2025",
      resumo: "Modifica prazos processuais e regras sobre honorários advocatícios em execução fiscal, reduzindo de 10 para 5 anos o prazo de prescrição intercorrente.",
      impacto: "Médio",
      area: "Processual Civil",
      status: "ALTERAÇÃO"
    },
    {
      tipo: "noticia",
      titulo: "STJ define tese sobre penhora de salário em execução de alimentos",
      fonte: "Migalhas",
      categoria: "Família",
      data: "15/01/2025",
      tempo_leitura: "7 min",
      link: "https://example.com"
    },
    {
      tipo: "dica",
      titulo: "Checklist para petição inicial perfeita",
      categoria: "Prática Forense",
      descricao: "Lista completa de verificação antes de protocolar: requisitos formais, documentos obrigatórios, fundamentação jurídica e pedidos bem formulados.",
      nivel: "Básico"
    },
    {
      tipo: "decisao",
      tribunal: "STJ",
      numero: "REsp 2.001.234/MG",
      titulo: "Honorários advocatícios - Base de cálculo",
      data: "14/01/2025",
      orgao: "2ª Seção",
      ementa: "Os honorários advocatícios em execução fiscal devem ser calculados sobre o valor atualizado da dívida, incluindo juros e multa, e não apenas sobre o principal.",
      tags: ["Honorários", "ExecuçãoFiscal", "Tributário"],
      visualizacoes: 567
    },
    {
      tipo: "legislacao",
      lei: "Resolução CNJ 543/2025",
      titulo: "Protocolo Nacional de Audiências Virtuais",
      data_publicacao: "10/01/2025",
      resumo: "Estabelece diretrizes nacionais para realização de audiências por videoconferência, incluindo requisitos técnicos mínimos e garantias processuais.",
      impacto: "Alto",
      area: "Processual",
      status: "NOVA LEI"
    }
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Card */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <HeroCard data={heroData} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Feed Principal - 2 columns */}
          <div className="lg:col-span-2">
            <DiscoverFeed items={feedItems} />
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            <StatsWidget stats={statsData} />
            <AgendaWidget agenda={agendaData} />
            <TrendingWidget trending={trendingData} />
            <PersonalizedWidget suggestions={suggestionsData} />
          </div>

        </div>
      </div>
    </div>
  );
}
