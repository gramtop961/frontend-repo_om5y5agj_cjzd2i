import { useState } from 'react';
import { Lock, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30 text-emerald-300">
            <Lock size={18} />
          </span>
          <span className="font-semibold tracking-tight">Aegis</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#auth" className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white">Sign in</a>
          <a href="#auth" className="px-4 py-2 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors">Create account</a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            <a href="#features" className="block text-white/80 hover:text-white">Features</a>
            <a href="#security" className="block text-white/80 hover:text-white">Security</a>
            <a href="#pricing" className="block text-white/80 hover:text-white">Pricing</a>
            <div className="pt-2 flex gap-3">
              <a href="#auth" className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white">Sign in</a>
              <a href="#auth" className="px-4 py-2 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors">Create account</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
