/**
 * TypeScript types for History page
 */

export interface Conversation {
  id: string;
  titulo: string;
  preview: string;
  data: string;
  hora: string;
  mensagens_count: number;
  categoria: string;
  favorito: boolean;
}

export interface ConversationMessage {
  id: string;
  tipo: 'user' | 'assistant';
  conteudo: string;
  timestamp: string;
}

export interface ConversationDetail extends Conversation {
  mensagens: ConversationMessage[];
}
