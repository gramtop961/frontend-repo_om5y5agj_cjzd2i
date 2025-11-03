import { Lock, Fingerprint, Zap, Server, CreditCard, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Passwordless Auth',
    description: 'Magic links and biometrics with built-in device verification for frictionless sign-ins.',
    icon: Fingerprint,
  },
  {
    title: 'Role-based Access',
    description: 'Organizations, teams, permissions, and policies that scale with you.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Performance',
    description: 'Edge-ready APIs and SDKs with sub-100ms median response times.',
    icon: Zap,
  },
  {
    title: 'Secure by Default',
    description: 'Encrypted at rest and in transit, secret rotation, and anomaly detection.',
    icon: Lock,
  },
  {
    title: 'Scalable Infra',
    description: 'Multi-tenant architecture with regional isolation and autoscaling.',
    icon: Server,
  },
  {
    title: 'Fair Pricing',
    description: 'Transparent, usage-based plans designed for startups to enterprises.',
    icon: CreditCard,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-[#050807]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_20%_10%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Everything you need to ship secure auth</h2>
          <p className="mt-3 text-white/70">Drop-in components, flexible APIs, and battle-tested security out of the box.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-emerald-400/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 text-emerald-300">
                  <Icon size={18} />
                </div>
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-3 text-xs text-white/50">SOC2 • GDPR • SSO • MFA</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
