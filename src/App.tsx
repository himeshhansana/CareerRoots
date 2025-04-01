import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FindJobs } from './pages/FindJobs';
import { Internships } from './pages/Internships';
import { Training } from './pages/Training';
import { Employers } from './pages/Employers';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
export function App() {
  return <BrowserRouter>
      <div className="w-full min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<FindJobs />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/training" element={<Training />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}