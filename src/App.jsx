import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Global Helper
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SlowmoScrollObserver from './components/SlowmoScrollObserver';
import SmoothScroll from './components/SmoothScroll';
import CookieConsent from './components/CookieConsent';

// Modals & Config Drawer
import BookingModal from './components/Modals/BookingModal';
import BusDetailModal from './components/Modals/BusDetailModal';
import PackageDetailModal from './components/Modals/PackageDetailModal';
import ConfigDrawer from './components/ConfigDrawer';

// Dedicated Page Components
import HomePage from './pages/HomePage';
import BusesPage from './pages/BusesPage';
import BusDetailPage from './pages/BusDetailPage';
import FlightBookingPage from './pages/FlightBookingPage';
import TrainBookingPage from './pages/TrainBookingPage';
import ToursPage from './pages/ToursPage';
import TourDetailPage from './pages/TourDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GeneralBookingPage from './pages/GeneralBookingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// Default Business Config
import { DEFAULT_CONFIG } from './data/config';

export default function App() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  // Global Modals State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const [isBusDetailModalOpen, setIsBusDetailModalOpen] = useState(false);
  const [selectedBusData, setSelectedBusData] = useState(null);

  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackageData, setSelectedPackageData] = useState(null);

  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);

  // Dark Mode — opt-in only, off by default, persisted per visitor
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return window.localStorage.getItem('prabhuling-dark-mode') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    try {
      window.localStorage.setItem('prabhuling-dark-mode', String(isDarkMode));
    } catch {
      // localStorage unavailable — theme just won't persist across visits
    }
  }, [isDarkMode]);

  // Handlers
  const handleOpenBookingModal = (data = {}) => {
    setBookingInitialData(data);
    setIsBookingModalOpen(true);
  };

  const handleOpenBusDetailModal = (bus) => {
    setSelectedBusData(bus);
    setIsBusDetailModalOpen(true);
  };

  const handleOpenPackageModal = (pkg) => {
    setSelectedPackageData(pkg);
    setIsPackageModalOpen(true);
  };

  const handleUpdateConfig = (newConfig) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll />
      <SlowmoScrollObserver />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-main)' }}>
        {/* Navigation Header */}
        <Header
          config={config}
          onOpenBookingModal={handleOpenBookingModal}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        />

        {/* Main Route Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                  onOpenBusDetailModal={handleOpenBusDetailModal}
                  onOpenPackageModal={handleOpenPackageModal}
                />
              }
            />

            <Route
              path="/buses"
              element={
                <BusesPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/buses/:id"
              element={
                <BusDetailPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/flight-booking"
              element={
                <FlightBookingPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/train-booking"
              element={
                <TrainBookingPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/packages"
              element={
                <ToursPage
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/packages/:id"
              element={
                <TourDetailPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/destinations"
              element={<DestinationsPage onOpenBookingModal={handleOpenBookingModal} />}
            />

            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/about"
              element={
                <AboutPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ContactPage
                  config={config}
                />
              }
            />

            <Route
              path="/booking"
              element={
                <GeneralBookingPage
                  config={config}
                />
              }
            />

            <Route
              path="/privacy-policy"
              element={
                <PrivacyPolicyPage
                  config={config}
                />
              }
            />

            <Route
              path="/terms"
              element={
                <TermsPage
                  config={config}
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer
          config={config}
          onToggleConfigDrawer={() => setIsConfigDrawerOpen(true)}
        />

        {/* Global Modals & Evaluation Config Drawer */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          initialData={bookingInitialData}
          config={config}
        />

        <BusDetailModal
          bus={selectedBusData}
          isOpen={isBusDetailModalOpen}
          onClose={() => setIsBusDetailModalOpen(false)}
          onBookBus={handleOpenBookingModal}
        />

        <PackageDetailModal
          packageData={selectedPackageData}
          isOpen={isPackageModalOpen}
          onClose={() => setIsPackageModalOpen(false)}
          onEnquirePackage={handleOpenBookingModal}
        />

        <ConfigDrawer
          config={config}
          isOpen={isConfigDrawerOpen}
          onClose={() => setIsConfigDrawerOpen(false)}
          onUpdateConfig={handleUpdateConfig}
        />

        <CookieConsent onOpenBookingModal={handleOpenBookingModal} />
      </div>
    </Router>
  );
}
