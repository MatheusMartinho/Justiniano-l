"use client";

import Link from 'next/link';
import { Scale, Search, Clock, Settings } from 'lucide-react';

/**
 * Header Component
 * Main navigation header for the application
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Scale className="w-8 h-8 text-amber-500" />
            <span className="text-xl font-bold text-white">
              Perplexity Jurídico
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/search"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Busca</span>
            </Link>
            
            <Link 
              href="/history"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Clock className="w-5 h-5" />
              <span>Histórico</span>
            </Link>
            
            <Link 
              href="/settings"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </Link>
          </nav>

          {/* User Menu (Placeholder) */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
