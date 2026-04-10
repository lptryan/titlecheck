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

export default function SellerDistress() {
  return (
    <motion.div
      className="px-6 max-w-6xl mx-auto"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="text-center mb-16 space-y-4">
        <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight">Dealing with title complications?</h2>
        <p className="text-lg text-secondary max-w-2xl mx-auto font-body leading-relaxed">
          You're not alone. We've helped thousands of sellers understand their options and navigate official property records with confidence.
        </p>
      </section>

      {/* Main Context: Situation Selector */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-2xl text-primary">Identify Your Situation</h3>
          <span className="text-xs font-label uppercase tracking-[0.1em] text-outline px-3 py-1 bg-surface-container rounded-full">Step 1 of 3</span>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Featured Card: Pre-foreclosure */}
          <button className="md:col-span-2 group relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 text-left transition-all duration-200 hover:shadow-xl hover:translate-y-[-4px] ring-1 ring-outline-variant/20">
            <div className="flex flex-col h-full justify-between gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-error-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                </div>
                <h4 className="text-2xl font-headline text-primary">Pre-foreclosure</h4>
                <p className="text-secondary max-w-md">Immediate intelligence for properties facing legal notices or pending auctions. Understand the timeline and lien priority.</p>
              </div>
              <span className="flex items-center gap-2 text-primary font-semibold text-sm">
                View focused guidance <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-4 -bottom-4 opacity-5">
              <span className="material-symbols-outlined text-[120px]">gavel</span>
            </div>
          </button>

          {/* Small Cards */}
          {[
            { icon: 'account_balance', title: 'Tax liens', text: 'Resolve municipal debt roadblocks before they freeze your transaction.' },
            { icon: 'family_history', title: 'Probate', text: 'Navigating ownership transfer after a loss. Verify heirs and legal standing.' },
            { icon: 'content_cut', title: 'Divorce', text: 'Splitting assets with clarity. Determine quitclaim needs and joint tenancy status.' },
            { icon: 'help_center', title: 'Unknown ownership', text: 'Uncovering hidden clouds on title or unrecorded deeds from decades past.' }
          ].map((item, idx) => (
            <button key={idx} className="group bg-surface-container-low rounded-xl p-6 text-left transition-all duration-200 hover:bg-surface-container-highest ring-1 ring-outline-variant/10">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <h4 className="text-xl font-headline text-primary">{item.title}</h4>
                <p className="text-sm text-secondary">{item.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Resource Section */}
      <section className="mt-24 p-1 rounded-2xl bg-gradient-to-b from-surface-container-high to-surface">
        <div className="bg-surface-container-lowest rounded-[calc(1rem-4px)] p-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img alt="Official looking document on a desk" className="rounded-lg shadow-lg w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8JMgMTRHLpIx0e4XqiFszvf_CFY-XiJFTBAVSR23nMY0YxVKIxgbfjHKRVeblB69n7lZybFJngMF4iVdSZ9DJKMFi3kFsUo5W1P0uKttVfUEizfA9J4XUYKpqDL6IuMguOEfzcFbobIzUOP7C0-RfISEyGtJcrRbHH-j3hKzzVHlBtvE3xwVzEw0RsBALFgWQr7aycyFAvJWPJHJw6TrfKlSiEoPyrtgGkZbS3amLr7EZwLL5Md9f3kJP-rv-UhbqR3PWSgD0akS8"/>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Knowledge Base</span>
            <h3 className="text-3xl font-headline text-primary">The Seller's Guide to Quiet Title Actions</h3>
            <p className="text-secondary leading-relaxed">Not every title issue is a dead end. Learn how "Quiet Title" actions can clear the way for a clean sale, even in complex probate or tax lien scenarios.</p>
            <button className="px-6 py-3 bg-primary text-on-primary font-medium rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
              Read Official Guide
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
