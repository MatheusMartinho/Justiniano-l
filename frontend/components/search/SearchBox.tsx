"use client";

import { useState, FormEvent } from 'react';
import { Search, Loader2, Sparkles, Image, Mic, Paperclip } from 'lucide-react';

interface SearchBoxProps {
  /** Callback function when search is submitted */
  onSearch: (query: string) => void;
  /** Whether a search is currently in progress */
  loading: boolean;
  /** Optional: disable the search box */
  disabled?: boolean;
}

/**
 * SearchBox Component
 * Perplexity Pro style search input for legal queries
 */
export default function SearchBox({ onSearch, loading, disabled = false }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Example queries for user guidance
  const exampleQueries = [
    "Dano moral por negativação indevida",
    "Prescrição de honorários advocatícios",
    "Penhora de salário em execução de alimentos"
  ];

  /**
   * Handle form submission
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Clear previous error
    setError('');
    
    // Validate minimum length
    if (query.trim().length < 10) {
      setError('Por favor, digite uma pergunta com pelo menos 10 caracteres');
      return;
    }
    
    // Call the search callback
    onSearch(query.trim());
  };

  /**
   * Handle example query click
   */
  const handleExampleClick = (exampleQuery: string) => {
    setQuery(exampleQuery);
    setError('');
  };

  const isDisabled = loading || disabled;

  return (
    <div className="w-full space-y-4">
      {/* Search Form - Perplexity Pro Style */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div 
          className={`glass rounded-2xl p-1 transition-all ${
            isFocused ? 'ring-2 ring-[#BF1725]/50' : ''
          }`}
        >
          {/* Main Input Area */}
          <div className="flex items-center gap-2 px-4 py-3">
            {/* Search Icon */}
            <button
              type="submit"
              disabled={isDisabled}
              className="shrink-0 w-10 h-10 rounded-full glass-red flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 text-[#BF1725] animate-spin" />
              ) : (
                <Search className="w-5 h-5 text-[#BF1725]" />
              )}
            </button>

            {/* Input Field */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={isDisabled}
              placeholder="Pergunte qualquer coisa. Digite @ para menções e / para atalhos."
              className="flex-1 bg-transparent text-white placeholder-white/40 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base"
            />

            {/* Action Icons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-9 h-9 rounded-lg glass-light hover:glass-red flex items-center justify-center transition-all"
                title="Anexar arquivo"
              >
                <Paperclip className="w-4 h-4 text-white/60" />
              </button>
              
              <button
                type="button"
                className="w-9 h-9 rounded-lg glass-light hover:glass-red flex items-center justify-center transition-all"
                title="Adicionar imagem"
              >
                <Image className="w-4 h-4 text-white/60" />
              </button>
              
              <button
                type="button"
                className="w-9 h-9 rounded-lg glass-light hover:glass-red flex items-center justify-center transition-all"
                title="Busca por voz"
              >
                <Mic className="w-4 h-4 text-white/60" />
              </button>
              
              <button
                type="submit"
                disabled={isDisabled || !query.trim()}
                className="w-9 h-9 rounded-lg bg-gradient-red hover:scale-105 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                title="Enviar"
              >
                <Sparkles className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Error Message */}
        {error && (
          <p className="text-[#F2A6AF] text-sm px-2">
            {error}
          </p>
        )}
      </form>

      {/* Example Queries */}
      <div className="space-y-3">
        <p className="text-sm text-white/60 px-2">Exemplos de buscas:</p>
        <div className="flex flex-wrap gap-2">
          {exampleQueries.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              disabled={isDisabled}
              className="px-4 py-2 text-sm glass-light hover:glass-red text-white/80 hover:text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
