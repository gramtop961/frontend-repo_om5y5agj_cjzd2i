import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import AuthPanel from './components/AuthPanel';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Aegis, Inc. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#security" className="text-white/60 hover:text-white">Security</a>
          <a href="#pricing" className="text-white/60 hover:text-white">Pricing</a>
          <a href="#features" className="text-white/60 hover:text-white">Features</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero3D />
      <Features />
      <section id="pricing" className="py-20 md:py-28 bg-[#060a08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-white/70">Start free. Scale with usage-based plans.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <h3 className="text-lg font-medium">Starter</h3>
              <p className="mt-2 text-sm text-white/70">Everything to launch</p>
              <div className="mt-4 text-3xl font-semibold">Free</div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• 5k monthly active users</li>
                <li>• Email/password + Magic links</li>
                <li>• Hosted auth pages</li>
              </ul>
              <a href="#auth" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white/10 px-4 py-2.5 text-white hover:bg-white/15">Get started</a>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 p-6 ring-1 ring-emerald-400/20">
              <h3 className="text-lg font-medium">Growth</h3>
              <p className="mt-2 text-sm text-white/70">Advanced features</p>
              <div className="mt-4 text-3xl font-semibold">$99/mo</div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• 50k monthly active users</li>
                <li>• SSO (Google, GitHub, SAML)</li>
                <li>• MFA + device management</li>
              </ul>
              <a href="#auth" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-2.5 text-black font-medium hover:bg-emerald-400">Choose Growth</a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <h3 className="text-lg font-medium">Enterprise</h3>
              <p className="mt-2 text-sm text-white/70">Custom at scale</p>
              <div className="mt-4 text-3xl font-semibold">Let's talk</div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• Unlimited MAUs</li>
                <li>• Dedicated region + SLAs</li>
                <li>• SSO, SCIM, Audit logs</li>
              </ul>
              <a href="#auth" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white/10 px-4 py-2.5 text-white hover:bg-white/15">Contact sales</a>
            </div>
          </div>
        </div>
      </section>

      <AuthPanel />
      <Footer />
    </div>
  );
}
