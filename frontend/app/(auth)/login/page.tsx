"use client";

import { LogIn } from 'lucide-react';

/**
 * Login Page
 * User authentication (placeholder for Week 4 with Clerk)
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <LogIn className="w-16 h-16 text-amber-500 mx-auto" />
          <h1 className="text-3xl font-bold text-white">
            Login
          </h1>
          <p className="text-slate-400">
            Em breve com Clerk Authentication
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Autenticação será implementada na Semana 4
          </p>
        </div>
      </div>
    </div>
  );
}
