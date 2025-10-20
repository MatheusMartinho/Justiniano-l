"use client";

import { UserPlus, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Signup Page
 * User registration (placeholder for Week 4 with Clerk)
 */
export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full glass-red flex items-center justify-center">
              <UserPlus className="w-10 h-10 text-[#BF1725]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">
            Criar sua conta
          </h1>
          <p className="text-white/70">
            Comece a usar o Justiniano I gratuitamente
          </p>
        </div>

        {/* Signup Form Preview */}
        <div className="glass rounded-3xl p-8 space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Nome completo</label>
            <div className="glass-light rounded-xl p-4 flex items-center gap-3">
              <User className="w-5 h-5 text-white/40" />
              <input 
                type="text" 
                placeholder="Seu nome"
                disabled
                className="flex-1 bg-transparent text-white placeholder-white/40 focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
          </div>

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

          {/* Signup Button */}
          <button
            disabled
            className="w-full bg-gradient-red text-white font-semibold py-4 rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span>Criar conta</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Terms */}
          <p className="text-white/50 text-xs text-center">
            Ao criar uma conta, você concorda com nossos{' '}
            <span className="text-[#BF1725]">Termos de Serviço</span> e{' '}
            <span className="text-[#BF1725]">Política de Privacidade</span>
          </p>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white/50">ou</span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-white/60 text-sm">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-[#BF1725] hover:text-[#D92546] font-semibold">
                Fazer login
              </Link>
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="glass-red rounded-2xl p-4">
          <p className="text-white/90 text-sm text-center">
            <strong className="text-[#BF1725]">🔒 Clerk Auth:</strong> Sistema de registro será implementado na Semana 4
          </p>
        </div>
      </div>
    </div>
  );
}
