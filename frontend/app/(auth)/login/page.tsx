"use client";

import { LogIn, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Login Page
 * User authentication (placeholder for Week 4 with Clerk)
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full glass-red flex items-center justify-center">
              <LogIn className="w-10 h-10 text-[#BF1725]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">
            Bem-vindo de volta
          </h1>
          <p className="text-white/70">
            Entre na sua conta para continuar
          </p>
        </div>

        {/* Login Form Preview */}
        <div className="glass rounded-3xl p-8 space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <div className="glass-light rounded-xl p-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-white/40" />
              <input 
                type="email" 
                placeholder="seu@email.com"
                disabled
                className="flex-1 bg-transparent text-white placeholder-white/40 focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Senha</label>
            <div className="glass-light rounded-xl p-4 flex items-center gap-3">
              <Lock className="w-5 h-5 text-white/40" />
              <input 
                type="password" 
                placeholder="••••••••"
                disabled
                className="flex-1 bg-transparent text-white placeholder-white/40 focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            disabled
            className="w-full bg-gradient-red text-white font-semibold py-4 rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span>Entrar</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white/50">ou</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-white/60 text-sm">
              Não tem uma conta?{' '}
              <Link href="/signup" className="text-[#BF1725] hover:text-[#D92546] font-semibold">
                Criar conta
              </Link>
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="glass-red rounded-2xl p-4">
          <p className="text-white/90 text-sm text-center">
            <strong className="text-[#BF1725]">🔒 Clerk Auth:</strong> Sistema de autenticação será implementado na Semana 4
          </p>
        </div>
      </div>
    </div>
  );
}
