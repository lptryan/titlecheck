import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#f9f9ff] dark:bg-slate-950 transition-colors">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#022448] dark:text-blue-400">home_pin</span>
            <span className="text-2xl font-semibold text-[#022448] dark:text-blue-100 font-headline tracking-tight">TitleCheck</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className={`${currentPath === '/' ? 'text-[#022448] dark:text-blue-400 font-bold' : 'text-slate-500'} transition-colors`}>Home</Link>
            <Link to="/distress" className={`${currentPath === '/distress' ? 'bg-slate-100 dark:bg-slate-800' : ''} text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded`}>Solutions</Link>
            <button className="scale-95 active:opacity-80 transition-all duration-200">
              <span className="material-symbols-outlined text-[#022448] dark:text-blue-400">account_circle</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-20 md:pb-0 pb-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 mt-auto bg-[#f9f9ff] dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4 opacity-40">
            <span className="material-symbols-outlined text-primary">home_pin</span>
            <span className="font-headline font-bold text-primary uppercase tracking-widest text-sm">TitleCheck Intelligence</span>
          </div>
          <div className="flex gap-8 mb-4 flex-wrap justify-center">
            <a href="#" className="text-xs font-['Inter'] leading-relaxed text-slate-400 dark:text-slate-600 hover:text-[#022448] dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-['Inter'] leading-relaxed text-slate-400 dark:text-slate-600 hover:text-[#022448] dark:hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs font-['Inter'] leading-relaxed text-slate-400 dark:text-slate-600 hover:text-[#022448] dark:hover:text-blue-400 transition-colors">Disclosures</a>
          </div>
          <p className="text-xs font-['Inter'] leading-relaxed text-slate-400 dark:text-slate-600">© 2026 TitleCheck Intelligence. Official Record Information Only.</p>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.04)] z-50 border-t border-slate-200/20 dark:border-slate-800/20">
        <Link to="/" className={`flex flex-col items-center justify-center ${currentPath === '/' ? 'text-[#022448] dark:text-blue-300 font-bold bg-[#e7eefe] dark:bg-blue-900/30 rounded-xl px-3 py-1' : 'text-slate-400 dark:text-slate-500'}`}>
          <span className="material-symbols-outlined">home</span>
          <span className="text-[11px] font-medium font-['Inter'] uppercase tracking-wider">Home</span>
        </Link>
        <Link to="/lookup" className={`flex flex-col items-center justify-center ${currentPath === '/lookup' ? 'text-[#022448] dark:text-blue-300 font-bold bg-[#e7eefe] dark:bg-blue-900/30 rounded-xl px-3 py-1' : 'text-slate-400 dark:text-slate-500'}`}>
          <span className="material-symbols-outlined">search</span>
          <span className="text-[11px] font-medium font-['Inter'] uppercase tracking-wider">Search</span>
        </Link>
        <Link to="/report" className={`flex flex-col items-center justify-center ${currentPath.startsWith('/report') ? 'text-[#022448] dark:text-blue-300 font-bold bg-[#e7eefe] dark:bg-blue-900/30 rounded-xl px-3 py-1' : 'text-slate-400 dark:text-slate-500'}`}>
          <span className="material-symbols-outlined">description</span>
          <span className="text-[11px] font-medium font-['Inter'] uppercase tracking-wider">Reports</span>
        </Link>
        <Link to="/distress" className={`flex flex-col items-center justify-center ${currentPath === '/distress' ? 'text-[#022448] dark:text-blue-300 font-bold bg-[#e7eefe] dark:bg-blue-900/30 rounded-xl px-3 py-1' : 'text-slate-400 dark:text-slate-500'}`}>
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[11px] font-medium font-['Inter'] uppercase tracking-wider">Learning</span>
        </Link>
      </nav>
    </div>
  );
}
