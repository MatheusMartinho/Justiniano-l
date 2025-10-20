/**
 * TypeScript types for Justiniano I
 */

/**
 * Search query parameters
 */
export interface SearchQuery {
  /** Natural language query from the user */
  query: string;
  /** Optional filter for specific tribunals (e.g., ["STJ", "STF"]) */
  tribunais?: string[];
}

/**
 * Legal decision from a tribunal
 */
export interface Decisao {
  /** Tribunal name (e.g., "STJ", "STF") */
  tribunal: string;
  /** Decision number (e.g., "REsp 1.408.697/PR") */
  numero: string;
  /** Decision date in DD/MM/YYYY format */
  data: string;
  /** Summary of the decision (ementa) */
  ementa: string;
  /** Judge who reported the case */
  relator: string;
  /** Judging body (órgão julgador) */
  orgao: string;
  /** URL to the complete decision */
  url: string;
  /** Timestamp for sorting (optional) */
  data_timestamp?: number;
}

/**
 * Legal precedent (súmula)
 */
export interface Sumula {
  /** Precedent number (e.g., "Súmula 385 STJ") */
  numero: string;
  /** Full text of the precedent */
  texto: string;
}

/**
 * Complete search result with AI synthesis
 */
export interface SearchResult {
  /** Original search query */
  query: string;
  /** ISO timestamp of when the search was performed */
  timestamp: string;
  /** AI-generated synthesis of the jurisprudence */
  sintese: string;
  /** Predominant understanding from the courts */
  entendimentoPredominante: string;
  /** Average compensation value (if applicable, e.g., "R$ 5.000 a R$ 15.000") */
  valorMedio?: string;
  /** List of related decisions */
  decisoes: Decisao[];
  /** Notable divergences or observations */
  divergencias: string;
  /** Related legal precedents */
  sumulas: Sumula[];
  /** List of tribunals consulted */
  tribunais_consultados: string[];
  /** Total number of decisions found */
  total_decisoes_encontradas: number;
}

/**
 * User information and subscription details
 */
export interface User {
  /** Unique user identifier */
  id: string;
  /** User email address */
  email: string;
  /** Current subscription plan */
  plano: 'free' | 'pro' | 'premium';
  /** Number of searches used in current period */
  consultasUsadas: number;
  /** Maximum searches allowed in current period */
  consultasLimite: number;
}
