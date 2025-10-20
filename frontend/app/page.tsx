import Link from "next/link";
import { Scale, Search, Zap, Shield, ArrowRight } from "lucide-react";

/**
 * Homepage
 * Landing page for Perplexity Jurídico
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <Scale className="w-20 h-20 text-amber-500" />
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              Pesquisa Jurídica
              <span className="block text-amber-500">Inteligente</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
              Encontre jurisprudência dos tribunais superiores brasileiros em segundos 
              com o poder da Inteligência Artificial
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center gap-4 pt-4">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors text-lg"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 space-y-4">
              <Search className="w-12 h-12 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">
                Busca em Linguagem Natural
              </h3>
              <p className="text-slate-300">
                Digite sua pergunta jurídica como você faria a um colega. 
                Nossa IA entende o contexto e encontra as decisões relevantes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 space-y-4">
              <Zap className="w-12 h-12 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">
                Síntese Instantânea
              </h3>
              <p className="text-slate-300">
                Receba uma síntese clara do entendimento predominante dos tribunais, 
                com valores médios e precedentes relevantes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 space-y-4">
              <Shield className="w-12 h-12 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">
                Fontes Confiáveis
              </h3>
              <p className="text-slate-300">
                Todas as informações vêm diretamente dos sites oficiais do STJ e STF, 
                com links para as decisões completas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Pronto para revolucionar sua pesquisa jurídica?
          </h2>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors text-lg"
          >
            Começar Gratuitamente
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
