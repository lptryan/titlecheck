import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

export default function PropertyLookup() {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/report');
  };

  return (
    <motion.div
      className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-32"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="w-full max-w-3xl text-center">
        {/* Authority Header */}
        <div className="mb-12">
          <h2 className="font-headline text-5xl md:text-7xl text-primary tracking-tight mb-4">
            The Digital Notary
          </h2>
          <p className="text-secondary text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed">
            Access high-fidelity title intelligence and immutable property records in seconds.
          </p>
        </div>

        {/* Search Entry Point */}
        <div className="bg-surface-container-low p-2 rounded-lg shadow-sm">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
              <input 
                className="w-full pl-12 pr-4 py-5 bg-surface-container-lowest border-none rounded-lg text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container transition-all text-lg font-body" 
                placeholder="Enter an address to check" 
                type="text" 
                required 
              />
            </div>
            <button type="submit" className="bg-gradient-to-b from-[#1e3a5f] to-[#022448] text-on-primary px-8 py-5 rounded-lg font-semibold text-lg hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-md">
              Check This Property
            </button>
          </form>
        </div>

        {/* Trust Indicator */}
        <p className="mt-6 text-sm font-label text-secondary-container text-secondary flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          Free title report in seconds. No credit card required.
        </p>

        {/* Secondary Context Cards (Asymmetric Bento) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="md:col-span-2 bg-surface-container p-8 rounded-xl flex flex-col justify-between min-h-[240px]">
            <div>
              <span className="text-xs font-label uppercase tracking-widest text-on-secondary-container opacity-60 mb-2 block">Premium Intelligence</span>
              <h3 className="font-headline text-3xl text-primary mb-4">Audit-Ready Accuracy</h3>
              <p className="text-on-surface-variant leading-relaxed">Our proprietary ledger cross-references municipal records, tax history, and lien filings to provide a definitive risk profile.</p>
            </div>
            <div className="mt-4 flex items-center text-primary font-bold text-sm cursor-pointer hover:underline" onClick={() => navigate('/report')}>
              View Sample Report <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </div>
          </div>
          <div className="bg-primary-container p-8 rounded-xl flex flex-col items-center justify-center text-center text-on-primary-container">
            <div className="text-4xl font-headline text-white mb-2">98.4%</div>
            <div className="text-xs font-label uppercase tracking-wider text-white/90">Confidence Rating</div>
            <div className="mt-6 bg-white/10 p-4 rounded-lg w-full">
              <p className="text-[11px] leading-tight text-white/80">Market leading precision for residential and commercial title search automation.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
