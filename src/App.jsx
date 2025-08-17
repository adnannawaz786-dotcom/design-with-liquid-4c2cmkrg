import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black overflow-hidden relative">
        {/* Animated Bokeh Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/3 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/4 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/3 right-20 w-20 h-20 bg-white/6 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white/3 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-20 left-1/2 w-36 h-36 bg-white/2 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-white/5 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-2/3 right-10 w-44 h-44 bg-white/2 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>

        {/* Toast Notifications */}
        <Toaster 
          theme="dark"
          className="toaster-custom"
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              backdropFilter: 'blur(20px)',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
