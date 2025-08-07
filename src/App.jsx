import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPortal from './pages/MainPortal';
import DispatchHome from './pages/DispatchHome';
import MediaComingSoon from './pages/MediaComingSoon';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function AppContent() {
  const location = useLocation();
  
  // Determine which "subdomain" we're on based on the path
  const getSubdomain = () => {
    if (location.pathname.startsWith('/dispatch')) return 'dispatch';
    if (location.pathname.startsWith('/media')) return 'media';
    return 'main';
  };

  const subdomain = getSubdomain();

  return (
    <div className="font-sans">
      <Navigation />
      <Routes>
        {/* Main Portal */}
        <Route path="/" element={<MainPortal />} />
        
        {/* Dispatch Routes */}
        <Route path="/dispatch" element={<DispatchHome />} />
        <Route path="/dispatch/about" element={<About />} />
        <Route path="/dispatch/terms" element={<Terms />} />
        <Route path="/dispatch/privacy" element={<Privacy />} />
        
        {/* Media Routes */}
        <Route path="/media" element={<MediaComingSoon />} />
        
        {/* Legacy routes for direct access */}
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
