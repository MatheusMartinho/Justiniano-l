"use client";

import Link from 'next/link';
import { Scale, Search, Clock, Settings } from 'lucide-react';

/**
 * Header Component
 * Main navigation header with glassmorphism effect
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full glass-red flex items-center justify-center">
              <Scale className="w-6 h-6 text-[#BF1725]" />
            </div>
            <span className="text-xl font-bold text-white">
              Justiniano I
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            <Link 
              href="/search"
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-light hover:glass-red text-white/80 hover:text-white transition-all"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Busca</span>
            </Link>
            
            <Link 
              href="/history"
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-light hover:glass-red text-white/80 hover:text-white transition-all"
            >
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Histórico</span>
            </Link>
            
            <Link 
              href="/settings"
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-light hover:glass-red text-white/80 hover:text-white transition-all"
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Configurações</span>
            </Link>
          </nav>

          {/* User Menu (Placeholder) */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-6 py-2 text-sm font-semibold text-white bg-gradient-red rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#BF1725]/50 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
