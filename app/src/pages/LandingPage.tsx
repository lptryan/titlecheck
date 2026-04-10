import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 }
};

const pageTransition: any = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.2
};

export default function LandingPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Dual-Audience Hero */}
      <section className="relative min-h-[795px] flex flex-col md:flex-row overflow-hidden">
        {/* Top Half / Left Side: Buying */}
        <div className="flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 bg-surface-container-lowest relative group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop')] bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
          <div className="relative z-10 flex flex-col items-center max-w-md">
            <div className="mb-6 flex gap-4">
              <span className="material-symbols-outlined text-4xl text-primary">house</span>
              <span className="material-symbols-outlined text-4xl text-primary">magnification_large</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl text-primary mb-6 leading-tight">I'm Buying a Property</h1>
            <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Ensure your future home is free of hidden liens, boundary disputes, or legal encumbrances before you commit.</p>
            <Link to="/lookup" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-200 flex items-center gap-2">
              Check a Property
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-outline-variant opacity-20 self-stretch relative z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border border-outline-variant/30 text-xs font-label uppercase tracking-widest text-outline">OR</div>
        </div>
        <div className="md:hidden h-px w-full bg-outline-variant opacity-20 relative z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border border-outline-variant/30 text-xs font-label uppercase tracking-widest text-outline">OR</div>
        </div>

        {/* Bottom Half / Right Side: Selling */}
        <div className="flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 bg-surface-container-low relative group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
          <div className="relative z-10 flex flex-col items-center max-w-md">
            <div className="mb-6 flex gap-4">
              <span className="material-symbols-outlined text-4xl text-primary">description</span>
              <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 leading-tight">I'm Selling a Property</h2>
            <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Prepare for a seamless closing by identifying and resolving potential title issues before they stall your sale.</p>
            <Link to="/distress" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-all duration-200 flex items-center gap-2">
              Understand My Situation
              <span className="material-symbols-outlined text-sm">info</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <label className="text-xs font-label uppercase tracking-[0.2em] text-primary/60 mb-4 block">The Process</label>
          <h2 className="font-headline text-4xl text-primary">How TitleCheck Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-surface-container-high z-0"></div>

          {/* Steps */}
          {[
            { icon: 'location_on', title: 'Enter address', text: 'Provide the legal address or parcel number of the property in question.' },
            { icon: 'cloud_download', title: 'We pull records', text: 'Our system scans municipal, county, and state databases in real-time.' },
            { icon: 'assignment', title: 'Get detailed report', text: 'Receive a comprehensive PDF audit of ownership history and encumbrances.' },
            { icon: 'verified', title: 'Take informed action', text: 'Proceed with confidence or address issues with our suggested resolutions.', primary: true }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 editorial-shadow group-hover:scale-105 transition-transform duration-300 ${step.primary ? 'bg-primary' : 'bg-surface-container-lowest border border-surface-container-high'}`}>
                <span className={`material-symbols-outlined text-3xl ${step.primary ? 'text-on-primary' : 'text-primary'}`}>{step.icon}</span>
              </div>
              <h3 className="font-headline text-xl text-primary mb-3">{step.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <label className="text-xs font-label uppercase tracking-[0.2em] text-primary/60 block">Authority &amp; Integrity</label>
              <h2 className="font-headline text-4xl text-primary leading-tight">Trusted by over 10,000 legal professionals and homeowners nationwide.</h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded shadow-sm">security</span>
                <div>
                  <h4 className="font-bold text-primary">Bank-Grade Security</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Encrypted data handling ensuring privacy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded shadow-sm">gavel</span>
                <div>
                  <h4 className="font-bold text-primary">Legal Compliance</h4>
                  <p className="text-xs text-on-surface-variant mt-1">ALTA standards for report accuracy.</p>
                </div>
              </div>
            </div>

            <div className="relative p-8 bg-surface-container-lowest rounded-lg editorial-shadow">
              <span className="material-symbols-outlined text-5xl text-primary/10 absolute top-4 right-8">format_quote</span>
              <p className="font-headline text-xl text-on-surface italic relative z-10 leading-relaxed">
                "Title intelligence should not be a black box. We built TitleCheck to give every buyer and seller the clarity of a professional notary at the speed of the digital age."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClW2Vb1uuMx5uv13Y-AHSclR3ZPUEejmity0_eiXYXQKDVL2TWmSiN0Fd3oKF1xWIApfi_kNvD6w2GQQcM7hBydGktEgj-NV-r8GfDUexmSI0XC62Mst1TIbUe0d6gIV3IxbYWnMS0Y69nw3JlWWZE_3cEMEa_K_PVmnio5bBwOpz0LVvj9sb3Pcjb295NoPN-FGl2DfmaVFkhdCadNl7W2yuZFQyD3jCEtuq-i6Dbe2VQ-qjW1tPJUk_lm6mnf1nzDK81zprd1zWT" alt="Founder" />
                </div>
                <div>
                  <p className="font-bold text-primary">Arthur J. Sterling</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Founder &amp; Chief Counsel</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative rounded-2xl overflow-hidden h-[600px] editorial-shadow">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ZdXAaVVmnhS5TIO630gYdiSwgpYVtuFktAeo5UL2WNSgV1PhxEWvs4plE1IB3U5Sa-U6_xP3bNe_Xe6vWLyAE2YQTN6J06SEkR5HCHW7QE-Kx9jRnnNdKmBQrle7wd8d3fnQ5viASxEVLXkxc6_SVZYcwvurfCG3ZHVogAFIiNtdpN1VC9E7zGnRigZ3lCpAZo3BcVsFbdhHTujDH4Rp8NryesuO8hvpwc9Wkg479SUUTInxAzPa3w-2Sjj4XZcnuPhGN-icFPwA" alt="Office" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl text-primary">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-surface-container-high mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {[
            { q: 'How long does a TitleCheck report take?', a: 'Most standard reports are delivered within 15 minutes. Complex historical properties may take up to 24 hours for our legal team to manually verify discrepancies.' },
            { q: 'Is this report legally binding for title insurance?', a: 'TitleCheck provides informational reports used for due diligence. While highly accurate, we recommend providing our findings to your title insurance provider for final policy issuance.' },
            { q: 'What happens if a lien is discovered?', a: 'Our report will detail the lien holder, the amount, and the filing date. We also provide a "Resolution Pathway" guide to help you or your attorney clear the title.' }
          ].map((faq, idx) => (
            <div key={idx} className="group border-b border-surface-container-high py-6 cursor-pointer">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-primary">{faq.q}</h4>
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
              <div className="mt-4 text-on-surface-variant leading-relaxed text-sm overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
