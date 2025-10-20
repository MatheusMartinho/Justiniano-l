"use client";

import { useState } from 'react';
import { Clock, Search, Star, MessageSquare, Calendar, Trash2 } from 'lucide-react';
import { Conversation } from '@/types/history';

/**
 * History Page
 * Search history and saved conversations
 */
export default function HistoryPage() {
  const [filter, setFilter] = useState<'todas' | 'favoritas' | 'recentes'>('todas');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock conversations data
  const conversations: Conversation[] = [
    {
      id: '1',
      titulo: 'Dano moral por negativação indevida',
      preview: 'Pesquisei sobre valores de indenização por dano moral em casos de negativação indevida no SPC/Serasa...',
      data: '20/01/2025',
      hora: '14:30',
      mensagens_count: 8,
      categoria: 'Consumidor',
      favorito: true
    },
    {
      id: '2',
      titulo: 'Prescrição em execução fiscal',
      preview: 'Consultei sobre o prazo de prescrição intercorrente em execução fiscal e as recentes mudanças...',
      data: '19/01/2025',
      hora: '10:15',
      mensagens_count: 12,
      categoria: 'Tributário',
      favorito: true
    },
    {
      id: '3',
      titulo: 'Honorários advocatícios sucumbenciais',
      preview: 'Busquei jurisprudência sobre cálculo de honorários advocatícios em ações de execução...',
      data: '18/01/2025',
      hora: '16:45',
      mensagens_count: 6,
      categoria: 'Processual',
      favorito: false
    },
    {
      id: '4',
      titulo: 'LGPD e compartilhamento de dados',
      preview: 'Pesquisei sobre limites do compartilhamento de dados pessoais entre órgãos públicos...',
      data: '17/01/2025',
      hora: '09:20',
      mensagens_count: 15,
      categoria: 'Digital',
      favorito: true
    },
    {
      id: '5',
      titulo: 'Penhora de salário em execução de alimentos',
      preview: 'Consultei sobre percentual máximo de penhora de salário em execução de pensão alimentícia...',
      data: '16/01/2025',
      hora: '11:30',
      mensagens_count: 9,
      categoria: 'Família',
      favorito: false
    },
    {
      id: '6',
      titulo: 'Usucapião extrajudicial - Documentação',
      preview: 'Busquei informações sobre documentos necessários para usucapião extrajudicial...',
      data: '15/01/2025',
      hora: '15:10',
      mensagens_count: 7,
      categoria: 'Imobiliário',
      favorito: false
    },
    {
      id: '7',
      titulo: 'Revisão de alimentos - Mudança de situação',
      preview: 'Pesquisei sobre requisitos para revisão de pensão alimentícia por mudança de situação financeira...',
      data: '14/01/2025',
      hora: '13:45',
      mensagens_count: 10,
      categoria: 'Família',
      favorito: false
    },
    {
      id: '8',
      titulo: 'Ação rescisória - Prazo decadencial',
      preview: 'Consultei sobre prazo para propositura de ação rescisória e hipóteses de cabimento...',
      data: '13/01/2025',
      hora: '10:00',
      mensagens_count: 11,
      categoria: 'Processual',
      favorito: true
    }
  ];

  // Filter conversations
  const filteredConversations = conversations.filter(conv => {
    let matchesFilter = true;
    if (filter === 'favoritas') {
      matchesFilter = conv.favorito;
    }
    
    const matchesSearch = 
      searchQuery === '' ||
      conv.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.categoria.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full glass-red flex items-center justify-center">
              <Clock className="w-10 h-10 text-[#BF1725]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">
            Histórico
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {filteredConversations.length} conversas salvas
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass rounded-2xl p-4 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar em conversas..."
              className="w-full pl-12 pr-4 py-3 bg-transparent text-white placeholder-white/40 focus:outline-none"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('todas')}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                filter === 'todas'
                  ? 'bg-gradient-red text-white'
                  : 'glass-light text-white/60 hover:text-white'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('favoritas')}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                filter === 'favoritas'
                  ? 'bg-gradient-red text-white'
                  : 'glass-light text-white/60 hover:text-white'
              }`}
            >
              <Star className="w-4 h-4" />
              Favoritas
            </button>
            <button
              onClick={() => setFilter('recentes')}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                filter === 'recentes'
                  ? 'bg-gradient-red text-white'
                  : 'glass-light text-white/60 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              Recentes
            </button>
          </div>
        </div>

        {/* Conversations List */}
        <div className="space-y-4">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className="glass rounded-3xl p-6 hover:glass-red transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    {/* Title and Category */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                        {conv.titulo}
                      </h3>
                      <span className="px-3 py-1 glass-dark text-white/70 text-xs rounded-full">
                        {conv.categoria}
                      </span>
                      {conv.favorito && (
                        <Star className="w-4 h-4 text-[#BF1725] fill-[#BF1725]" />
                      )}
                    </div>

                    {/* Preview */}
                    <p className="text-white/70 text-sm line-clamp-2">
                      {conv.preview}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-white/50 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{conv.data}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{conv.hora}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{conv.mensagens_count} mensagens</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-xl glass-light hover:glass-red flex items-center justify-center transition-all">
                      <Star className={`w-5 h-5 ${conv.favorito ? 'text-[#BF1725] fill-[#BF1725]' : 'text-white/60'}`} />
                    </button>
                    <button className="w-10 h-10 rounded-xl glass-light hover:bg-red-500/20 flex items-center justify-center transition-all group/delete">
                      <Trash2 className="w-5 h-5 text-white/60 group-hover/delete:text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="glass rounded-3xl p-12 text-center">
              <Search className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <p className="text-white/60">
                Nenhuma conversa encontrada.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
