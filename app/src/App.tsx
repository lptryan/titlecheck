import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import PropertyLookup from './pages/PropertyLookup';
import PropertyReport from './pages/PropertyReport';
import SellerDistress from './pages/SellerDistress';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="lookup" element={<PropertyLookup />} />
          <Route path="report" element={<PropertyReport />} />
          <Route path="distress" element={<SellerDistress />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
