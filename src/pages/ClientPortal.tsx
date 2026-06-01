import { useState } from 'react';
import { Lock, Shield } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';

export default function ClientPortal() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center justify-center bg-obsidian pt-20 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="font-ui text-lg tracking-[0.2em] uppercase text-gold font-semibold">Drakonis Legal</span>
            <p className="text-sm text-gray-muted font-ui mt-2">Client Portal</p>
          </div>

          <div className="p-8 bg-navy rounded-lg border border-gold/10">
            <div className="flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-heading text-xl text-warm-white text-center mb-6">Secure Sign In</h2>

            <form onSubmit={(e) => { e.preventDefault(); setShowAlert(true); }}>
              <div className="mb-4">
                <label className="block text-sm font-ui text-gray-light mb-2">Email Address</label>
                <input type="email" className="w-full bg-navy-deep border border-gold/20 rounded px-4 py-3 text-warm-white font-body text-sm focus:border-gold focus:outline-none" placeholder="your@email.com" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-ui text-gray-light mb-2">Password</label>
                <input type="password" className="w-full bg-navy-deep border border-gold/20 rounded px-4 py-3 text-warm-white font-body text-sm focus:border-gold focus:outline-none" placeholder="••••••••" />
              </div>

              {showAlert && (
                <div className="mb-4 p-4 bg-gold/10 border border-gold/30 rounded text-sm text-gold font-body">
                  Portal access is available to existing clients only. Please contact your supervising attorney for access credentials.
                </div>
              )}

              <button type="submit" className="w-full bg-gold text-obsidian font-ui font-semibold py-3 rounded hover:bg-gold-light transition-colors">
                Sign In
              </button>
            </form>

            <div className="text-center mt-4">
              <button type="button" onClick={() => setShowAlert(true)} className="text-sm font-ui text-gray-muted hover:text-gold transition-colors">Forgot password?</button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-navy/50 rounded-lg border border-gold/5 text-center">
            <Shield className="w-5 h-5 text-gold/60 mx-auto mb-3" />
            <p className="text-xs text-gray-muted font-body leading-relaxed">
              The Drakonis Legal Client Portal uses 256-bit AES encryption and multi-factor authentication to protect your confidential information. All data is stored on secure servers in compliance with GDPR and the Data Protection Act 2018.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
