"use client";

import { useState, FormEvent } from 'react';
import { Search, Loader2 } from 'lucide-react';

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
 * Main search input for legal queries in natural language
 */
export default function SearchBox({ onSearch, loading, disabled = false }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

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
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isDisabled}
            placeholder="Digite sua pergunta jurídica em linguagem natural..."
            className="w-full px-6 py-4 pr-32 text-lg bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
          
          {/* Search Button */}
          <button
            type="submit"
            disabled={isDisabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Buscando...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Buscar</span>
              </>
            )}
          </button>
        </div>
        
        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm px-2">
            {error}
          </p>
        )}
      </form>

      {/* Example Queries */}
      <div className="space-y-2">
        <p className="text-sm text-slate-400 px-2">Exemplos de buscas:</p>
        <div className="flex flex-wrap gap-2">
          {exampleQueries.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              disabled={isDisabled}
              className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
