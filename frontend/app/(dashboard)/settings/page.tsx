"use client";

import { Settings, User, CreditCard, Bell } from 'lucide-react';

/**
 * Settings Page
 * User settings and preferences (placeholder for Week 4)
 */
export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Configurações
          </h1>
          <p className="text-slate-400">
            Gerencie suas preferências e informações da conta
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Section */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold text-white">Perfil</h2>
            </div>
            <p className="text-slate-400">
              Em breve: Edite suas informações pessoais
            </p>
          </div>

          {/* Plan Section */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold text-white">Plano</h2>
            </div>
            <p className="text-slate-400">
              Em breve: Gerencie sua assinatura
            </p>
          </div>

          {/* Preferences Section */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold text-white">Preferências</h2>
            </div>
            <p className="text-slate-400">
              Em breve: Configure notificações e preferências
            </p>
          </div>

          {/* General Settings */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold text-white">Geral</h2>
            </div>
            <p className="text-slate-400">
              Em breve: Configurações gerais do sistema
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500 text-center mt-8">
          Estas funcionalidades serão implementadas na Semana 4 com Clerk Auth
        </p>
      </div>
    </div>
  );
}
