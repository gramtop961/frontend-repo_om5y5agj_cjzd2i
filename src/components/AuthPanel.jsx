import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function AuthPanel() {
  const [mode, setMode] = useState('signin');

  return (
    <section id="auth" className="relative py-20 md:py-28 bg-gradient-to-b from-[#050807] to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Authentication made simple</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Ready-to-use UI and APIs for sign up, sign in, magic links, and multi-factor authentication.
              Integrate in minutes and customize to your brand.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Email + password, passwordless, and SSO</li>
              <li>• JWT sessions with refresh rotation</li>
              <li>• Webhooks and audit logs for every action</li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-2xl shadow-emerald-500/5">
              <div className="flex w-full rounded-lg bg-black/30 p-1 ring-1 ring-white/10">
                <button
                  className={`flex-1 rounded-md px-3 py-2 text-sm ${mode === 'signin' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
                  onClick={() => setMode('signin')}
                >
                  Sign in
                </button>
                <button
                  className={`flex-1 rounded-md px-3 py-2 text-sm ${mode === 'signup' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
                  onClick={() => setMode('signup')}
                >
                  Create account
                </button>
              </div>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="text-xs text-white/60">Email</label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white/80 focus-within:border-emerald-400/40">
                    <Mail size={16} className="text-white/50" />
                    <input type="email" placeholder="you@company.com" className="w-full bg-transparent outline-none placeholder:text-white/40" />
                  </div>
                </div>
                {(mode === 'signin' || mode === 'signup') && (
                  <div>
                    <label className="text-xs text-white/60">Password</label>
                    <div className="mt-1 flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white/80 focus-within:border-emerald-400/40">
                      <Lock size={16} className="text-white/50" />
                      <input type="password" placeholder="••••••••" className="w-full bg-transparent outline-none placeholder:text-white/40" />
                    </div>
                  </div>
                )}

                <button type="button" className="w-full mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors">
                  {mode === 'signin' ? 'Sign in' : 'Create account'}
                </button>
                <p className="text-xs text-white/50 text-center">Demo UI — wire this to your API when ready.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
