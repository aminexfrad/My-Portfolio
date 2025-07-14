import React from 'react';

// Performance optimization utilities for production

// Lazy load components with error boundaries
export const lazyLoadComponent = (importFunc, fallback = null) => {
  const LazyComponent = React.lazy(importFunc);
  
  return (props) => (
    <React.Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

// Image optimization
export const optimizeImage = (src, width = 800) => {
  // Add image optimization parameters for production
  if (process.env.NODE_ENV === 'production') {
    return `${src}?w=${width}&q=85&auto=format`;
  }
  return src;
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/CV_Mohamed_Amine_FRAD.pdf',
    '/ibm_certificate.pdf',
    '/machine_certificate.pdf'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'document';
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Service Worker registration for PWA
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Performance monitoring
export const trackPerformance = () => {
  if (process.env.NODE_ENV === 'production') {
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}: ${entry.value}`);
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }
}; 