"use client";

import { UserPlus } from 'lucide-react';

/**
 * Signup Page
 * User registration (placeholder for Week 4 with Clerk)
 */
export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <UserPlus className="w-16 h-16 text-amber-500 mx-auto" />
          <h1 className="text-3xl font-bold text-white">
            Criar Conta
          </h1>
          <p className="text-slate-400">
            Em breve com Clerk Authentication
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Registro de usuários será implementado na Semana 4
          </p>
        </div>
      </div>
    </div>
  );
}
