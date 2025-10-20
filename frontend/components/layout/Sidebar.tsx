"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Plus, Search, Globe, BarChart3, Bell, User, ArrowUpRight } from 'lucide-react';

/**
 * Sidebar Component
 * Vertical navigation sidebar inspired by modern AI apps
 */
export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 glass border-r border-white/10 flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <Link 
        href="/" 
        className="mb-8 w-12 h-12 rounded-xl glass-red flex items-center justify-center hover:scale-110 transition-all"
      >
        <Scale className="w-7 h-7 text-[#BF1725]" />
      </Link>

      {/* New Search Button */}
      <button className="mb-8 w-12 h-12 rounded-xl glass-light hover:glass-red flex items-center justify-center transition-all group">
        <Plus className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
      </button>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col items-center gap-6">
        {/* Início - Search Page */}
        <Link
          href="/search"
          className={`flex flex-col items-center gap-1 transition-all ${
            isActive('/search') 
              ? 'text-white' 
              : 'text-white/50 hover:text-white'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
            isActive('/search') 
              ? 'bg-[#8B0000] shadow-[0_0_15px_rgba(139,0,0,0.5),0_0_30px_rgba(139,0,0,0.3)] border border-[#BF1725]/40' 
              : 'glass-light hover:glass-red'
          }`}>
            <Search className={`w-5 h-5 ${isActive('/search') ? 'text-[#FF6B6B]' : ''}`} />
          </div>
          <span className="text-[10px] font-medium">Início</span>
        </Link>

        {/* Descobrir - News Page */}
        <Link
          href="/news"
          className={`flex flex-col items-center gap-1 transition-all ${
            isActive('/news') 
              ? 'text-white' 
              : 'text-white/50 hover:text-white'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
            isActive('/news') 
              ? 'bg-[#8B0000] shadow-[0_0_15px_rgba(139,0,0,0.5),0_0_30px_rgba(139,0,0,0.3)] border border-[#BF1725]/40' 
              : 'glass-light hover:glass-red'
          }`}>
            <Globe className={`w-5 h-5 ${isActive('/news') ? 'text-[#FF6B6B]' : ''}`} />
          </div>
          <span className="text-[10px] font-medium">Descobrir</span>
        </Link>

        {/* Histórico - History Page */}
        <Link
          href="/history"
          className={`flex flex-col items-center gap-1 transition-all ${
            isActive('/history') 
              ? 'text-white' 
              : 'text-white/50 hover:text-white'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
            isActive('/history') 
              ? 'bg-[#8B0000] shadow-[0_0_15px_rgba(139,0,0,0.5),0_0_30px_rgba(139,0,0,0.3)] border border-[#BF1725]/40' 
              : 'glass-light hover:glass-red'
          }`}>
            <BarChart3 className={`w-5 h-5 ${isActive('/history') ? 'text-[#FF6B6B]' : ''}`} />
          </div>
          <span className="text-[10px] font-medium">Histórico</span>
        </Link>
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center gap-4 mt-auto">
        {/* Notifications */}
        <button className="w-12 h-12 rounded-xl glass-light hover:glass-red flex items-center justify-center transition-all group relative">
          <Bell className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#BF1725] rounded-full"></span>
        </button>

        {/* Account */}
        <Link
          href="/settings"
          className={`flex flex-col items-center gap-1 transition-all ${
            isActive('/settings') 
              ? 'text-white' 
              : 'text-white/50 hover:text-white'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all relative ${
            isActive('/settings') 
              ? 'bg-[#8B0000] shadow-[0_0_15px_rgba(139,0,0,0.5),0_0_30px_rgba(139,0,0,0.3)] border border-[#BF1725]/40' 
              : 'glass-light hover:glass-red'
          }`}>
            <User className={`w-5 h-5 ${isActive('/settings') ? 'text-[#FF6B6B]' : ''}`} />
            <span className="absolute bottom-0 right-0 px-1.5 py-0.5 bg-gradient-red text-white text-[8px] font-bold rounded">
              PRO
            </span>
          </div>
          <span className="text-[10px] font-medium">Conta</span>
        </Link>

        {/* Update */}
        <button className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all">
          <div className="w-12 h-12 rounded-xl glass-light hover:glass-red flex items-center justify-center transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Atualizar</span>
        </button>
      </div>
    </aside>
  );
}
