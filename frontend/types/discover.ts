/**
 * TypeScript types for Discover page
 */

export interface HeroData {
  titulo: string;
  tribunal: string;
  data: string;
  categoria: string;
  resumo: string;
  impacto: 'Alto' | 'Médio' | 'Baixo';
  imagem_url?: string;
}

export type FeedItemType = 'decisao' | 'legislacao' | 'noticia' | 'dica';

export interface DecisaoItem {
  tipo: 'decisao';
  tribunal: 'STJ' | 'STF' | 'TST' | 'TSE' | 'STM';
  numero: string;
  titulo: string;
  data: string;
  orgao: string;
  ementa: string;
  tags: string[];
  visualizacoes: number;
}

export interface LegislacaoItem {
  tipo: 'legislacao';
  lei: string;
  titulo: string;
  data_publicacao: string;
  resumo: string;
  impacto: 'Alto' | 'Médio' | 'Baixo';
  area: string;
  status?: 'NOVA LEI' | 'ALTERAÇÃO' | 'REVOGAÇÃO';
}

export interface NoticiaItem {
  tipo: 'noticia';
  titulo: string;
  fonte: string;
  categoria: string;
  imagem?: string;
  tempo_leitura: string;
  link: string;
  data: string;
}

export interface DicaItem {
  tipo: 'dica';
  titulo: string;
  categoria: string;
  descricao: string;
  nivel: 'Básico' | 'Intermediário' | 'Avançado';
}

export type FeedItem = DecisaoItem | LegislacaoItem | NoticiaItem | DicaItem;

export interface StatsData {
  stj_acordaos: number;
  stf_repercussoes: number;
  decisoes_semana: number;
  top_tema: string;
  top_tema_buscas: number;
}

export interface AgendaItem {
  data: string;
  hora: string;
  tribunal: string;
  orgao: string;
  tema: string;
  badge?: string;
  link?: string;
}

export interface TrendingTopic {
  posicao: number;
  tema: string;
  variacao: number;
  direcao: 'up' | 'down';
}

export interface Suggestion {
  titulo: string;
  descricao: string;
  tipo: 'artigo' | 'decisao' | 'sumula' | 'dica';
}
