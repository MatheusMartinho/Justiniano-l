"use client";

import { Loader2 } from 'lucide-react';

/**
 * LoadingState Component
 * Displays a loading animation while searching jurisprudence
 */
export default function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="glass-red rounded-3xl p-12 flex flex-col items-center gap-6">
        {/* Animated Spinner */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full glass-dark flex items-center justify-center">
            <Loader2 className="w-10 h-10 text-[#BF1725] animate-spin" />
          </div>
          <div className="absolute inset-0 rounded-full bg-[#BF1725]/20 animate-ping"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-xl font-semibold text-white">
            Analisando jurisprudência dos tribunais...
          </p>
          <p className="text-sm text-white/70">
            Consultando STJ e STF
          </p>
        </div>
      </div>
    </div>
  );
}
