"use client";

import { useState } from 'react';
import { FeedItem } from '@/types/discover';
import FeedCard from './FeedCard';

interface DiscoverFeedProps {
  items: FeedItem[];
}

type TabType = 'todos' | 'decisoes' | 'legislacao' | 'noticias' | 'dicas';

export default function DiscoverFeed({ items }: DiscoverFeedProps) {
  const [activeTab, setActiveTab] = useState<TabType>('todos');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'todos', label: 'Para Você' },
    { id: 'decisoes', label: 'Decisões Recentes' },
    { id: 'legislacao', label: 'Legislação' },
    { id: 'noticias', label: 'Notícias' },
    { id: 'dicas', label: 'Dicas Práticas' },
  ];

  const filteredItems = activeTab === 'todos' 
    ? items 
    : items.filter(item => {
        if (activeTab === 'decisoes') return item.tipo === 'decisao';
        if (activeTab === 'legislacao') return item.tipo === 'legislacao';
        if (activeTab === 'noticias') return item.tipo === 'noticia';
        if (activeTab === 'dicas') return item.tipo === 'dica';
        return true;
      });

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="glass rounded-2xl p-2 flex gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-red text-white'
                : 'text-white/60 hover:text-white hover:glass-light'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Feed Items */}
      <div className="space-y-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FeedCard key={index} item={item} />
          ))
        ) : (
          <div className="glass rounded-3xl p-12 text-center">
            <p className="text-white/60">
              Nenhum conteúdo encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
