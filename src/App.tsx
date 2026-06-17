/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import PrintResume from './components/PrintResume';

export default function App() {
  return (
    <div className="bg-[#060608] min-h-screen text-zinc-100 selection:bg-purple-900 selection:text-white overflow-x-hidden antialiased print:bg-white print:text-black">
      {/* Global Navigation Hub */}
      <div className="print:hidden">
        <Header />
      </div>

      {/* Main Sections Body */}
      <main className="print:hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Dynamic Theme Selection Widget */}
      <div className="print:hidden">
        <ThemeSwitcher />
      </div>

      {/* Print-Only Flawless Resume Document */}
      <PrintResume />
    </div>
  );
}

