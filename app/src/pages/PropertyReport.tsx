import { motion } from 'framer-motion';

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

export default function PropertyReport() {
  return (
    <motion.div
      className="px-4 max-w-lg mx-auto"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Sticky Header Context */}
      <section className="mb-8">
        <h1 className="font-headline text-3xl font-bold text-primary-container leading-tight">
          2148 Oakhaven Drive, Los Angeles, CA 90068
        </h1>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">update</span>
            <p className="text-xs font-label uppercase tracking-wider">Last updated: Oct 24, 2024</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-surface-container-low rounded-lg text-primary text-xs font-semibold hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-sm">download</span>
              Export
            </button>
          </div>
        </div>
      </section>

      {/* Card 1: Title Health Score (Bento Highlight) */}
      <div className="bg-surface-container-lowest rounded-xl p-6 mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/10">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <span className="material-symbols-outlined text-7xl text-[#b45309]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <div className="absolute inset-0 flex items-center justify-center pt-2">
              <span className="material-symbols-outlined text-white text-2xl">warning</span>
            </div>
          </div>
          <span className="px-4 py-1 bg-[#b45309]/10 text-[#b45309] rounded-full text-xs font-bold tracking-widest mb-3 uppercase">Caution</span>
          <h2 className="font-headline text-2xl text-on-surface mb-2">Title Health Investigation</h2>
          <p className="text-on-surface-variant leading-relaxed">Some items require investigation. This property has 1 outstanding involuntary lien detected in official records.</p>
        </div>
      </div>

      {/* Card 2: Ownership Info */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary">person_search</span>
          <h3 className="font-bold text-primary tracking-tight">Ownership Information</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
            <div>
              <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Current Owner</p>
              <p className="font-medium text-on-surface">Evelyn S. Montgomery</p>
            </div>
            <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Last Sale Date</p>
              <p className="font-medium text-on-surface">Mar 12, 2018</p>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Deed Type</p>
              <p className="font-medium text-on-surface">Grant Deed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Liens & Encumbrances */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-4 border-l-4 border-[#b45309]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#b45309]">gavel</span>
            <h3 className="font-bold text-primary tracking-tight">Liens &amp; Encumbrances</h3>
          </div>
          <span className="px-2 py-0.5 bg-[#b45309]/10 text-[#b45309] text-[10px] font-bold rounded">1 LIEN FOUND</span>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-lg border border-[#b45309]/20">
          <div className="flex justify-between items-start mb-2">
            <p className="font-bold text-sm text-on-surface">Tax Lien (Federal)</p>
            <p className="font-bold text-error text-sm">$14,205.12</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-on-surface-variant">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              June 08, 2023
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">receipt_long</span>
              Doc #88219-B
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Foreclosure Status */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-600">event_available</span>
            <h3 className="font-bold text-primary tracking-tight">Foreclosure Status</h3>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/10 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
            <span className="text-emerald-700 text-xs font-bold">Clear</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-on-surface-variant">No active Notice of Default or Lis Pendens filed.</p>
      </div>

      {/* Card 5: Implications */}
      <div className="bg-surface-container-highest/30 rounded-xl p-6 mb-4">
        <h3 className="font-headline text-xl text-primary mb-4">What This Means for You</h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-primary text-lg mt-0.5">label_important</span>
            <p className="text-sm text-on-surface leading-relaxed">The <span className="font-bold">Federal Tax Lien</span> must be cleared before a clean title can be transferred to a new buyer.</p>
          </li>
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-primary text-lg mt-0.5">label_important</span>
            <p className="text-sm text-on-surface leading-relaxed">Traditional lenders may require proof of settlement before approving a new mortgage for this property.</p>
          </li>
        </ul>
      </div>

      {/* Card 6: Options/CTA */}
      <div className="space-y-3">
        <button className="w-full py-4 bg-gradient-to-b from-[#1e3a5f] to-[#022448] text-white rounded-lg font-bold flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined">support_agent</span>
          Speak with a Title Attorney
        </button>
        <button className="w-full py-4 bg-surface-container-lowest border border-outline-variant/50 text-primary rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-surface-container-low transition-all">
          <span className="material-symbols-outlined">handshake</span>
          Match with a Specialist Agent
        </button>
      </div>
    </motion.div>
  );
}
