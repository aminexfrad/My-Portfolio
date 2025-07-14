import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundProvider from "./components/BackgroundConfig";
import { preloadCriticalResources, trackPerformance } from "./utils/performance";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load components for better performance
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Certifications = lazy(() => import("./components/CertificationsPage"));

// Simple loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(255,255,255,0.3)',
      borderTop: '3px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '15px'
    }}></div>
    Loading...
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 800); // Reduced from 1200ms to 800ms

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Performance optimizations for production
    if (process.env.NODE_ENV === 'production') {
      preloadCriticalResources();
      trackPerformance();
    }
  }, []);

  return (
    <BackgroundProvider>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </BackgroundProvider>
  );
}

export default App;
