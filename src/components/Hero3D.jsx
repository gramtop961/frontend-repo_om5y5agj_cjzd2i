import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-black to-[#0a0f0a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle vignette and gradient overlays that don't block interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(16,185,129,0.15),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/40 px-3 py-1 text-emerald-300">
              <Shield size={16} />
              <span className="text-xs font-medium tracking-wide">Zero-trust ready • SOC2-minded</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Identity-first security for your SaaS
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70">
              Aegis is a modern platform for authentication, access control, and secure user management.
              Built for developers, loved by security teams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#auth" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors">
                Get started free
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/15 text-white/90 hover:border-white/30 transition-colors">
                View pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
