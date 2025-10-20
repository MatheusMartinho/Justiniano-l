"use client";

import { Loader2 } from 'lucide-react';

/**
 * LoadingState Component
 * Displays a loading animation while searching jurisprudence
 */
export default function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-12 flex flex-col items-center gap-6">
        {/* Animated Spinner */}
        <Loader2 className="w-16 h-16 text-amber-500 animate-spin" />
        
        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-xl font-medium text-white">
            Analisando jurisprudência dos tribunais...
          </p>
          <p className="text-sm text-slate-400">
            Consultando STJ e STF
          </p>
        </div>
      </div>
    </div>
  );
}
