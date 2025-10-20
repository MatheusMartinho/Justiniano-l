"use client";

import { Settings, User, CreditCard, Bell, Shield, Key, Palette, Globe } from 'lucide-react';

/**
 * Settings Page
 * User settings and preferences (placeholder for Week 4)
 */
export default function SettingsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full glass-red flex items-center justify-center">
              <Settings className="w-10 h-10 text-[#BF1725]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">
            Configurações
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Gerencie suas preferências, informações da conta e configurações do sistema
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Section */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <User className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">Perfil</h2>
            </div>
            <p className="text-white/70">
              Edite suas informações pessoais, foto e dados de contato
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Em desenvolvimento</span>
            </div>
          </div>

          {/* Plan Section */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">Plano e Pagamento</h2>
            </div>
            <p className="text-white/70">
              Gerencie sua assinatura, métodos de pagamento e histórico de faturas
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Semana 5</span>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <Bell className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">Notificações</h2>
            </div>
            <p className="text-white/70">
              Configure alertas, e-mails e notificações push
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Em desenvolvimento</span>
            </div>
          </div>

          {/* Security Section */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">Segurança</h2>
            </div>
            <p className="text-white/70">
              Autenticação de dois fatores, senhas e sessões ativas
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Semana 4</span>
            </div>
          </div>

          {/* API Keys Section */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <Key className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">API Keys</h2>
            </div>
            <p className="text-white/70">
              Gerencie chaves de API para integrações externas
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Futuro</span>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <Palette className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">Aparência</h2>
            </div>
            <p className="text-white/70">
              Personalize tema, cores e layout da interface
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Futuro</span>
            </div>
          </div>

          {/* Language Section */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">Idioma e Região</h2>
            </div>
            <p className="text-white/70">
              Configure idioma, fuso horário e formato de data
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Futuro</span>
            </div>
          </div>

          {/* General Settings */}
          <div className="glass rounded-3xl p-6 space-y-4 hover:glass-red transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-red flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#BF1725]" />
              </div>
              <h2 className="text-xl font-bold text-white">Geral</h2>
            </div>
            <p className="text-white/70">
              Configurações gerais do sistema e preferências avançadas
            </p>
            <div className="pt-2">
              <span className="text-sm text-white/50">Em desenvolvimento</span>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="glass-red rounded-3xl p-6">
          <p className="text-white/90 text-center">
            <strong className="text-[#BF1725]">🚀 Roadmap:</strong> Estas funcionalidades serão implementadas 
            progressivamente nas próximas semanas com Clerk Auth e Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
