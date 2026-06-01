import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreaDetail from './pages/PracticeAreaDetail';
import Attorneys from './pages/Attorneys';
import AttorneyDetail from './pages/AttorneyDetail';
import CaseResults from './pages/CaseResults';
import CaseDetail from './pages/CaseDetail';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Consultation from './pages/Consultation';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Diversity from './pages/Diversity';
import ProBono from './pages/ProBono';
import GlobalOffices from './pages/GlobalOffices';
import ClientPortal from './pages/ClientPortal';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/attorneys/:slug" element={<AttorneyDetail />} />
        <Route path="/case-results" element={<CaseResults />} />
        <Route path="/case-results/:slug" element={<CaseDetail />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/pro-bono" element={<ProBono />} />
        <Route path="/global-offices" element={<GlobalOffices />} />
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
