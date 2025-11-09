import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="font-semibold tracking-tight text-xl text-zinc-100">
              <span className="text-white">divulgence</span>
              <span className="text-sky-400">.ai</span>
            </a>
            <p className="mt-3 text-sm text-zinc-400">Sydney NSW • contact@divulgence.ai • +61 2 0000 0000</p>
            <p className="mt-1 text-xs text-zinc-500">ABN 00 000 000 000</p>
          </div>
          <nav className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <a href="#services" className="text-zinc-300 hover:text-white">Services</a>
              <a href="#how" className="text-zinc-300 hover:text-white">How it works</a>
              <a href="#pricing" className="text-zinc-300 hover:text-white">Pricing</a>
            </div>
            <div className="space-y-2">
              <a href="#contact" className="text-zinc-300 hover:text-white">Contact</a>
              <a href="#book" className="text-zinc-300 hover:text-white">Book a call</a>
              <a href="#home" className="text-zinc-300 hover:text-white">Top</a>
            </div>
          </nav>
          <div className="text-sm text-zinc-400">
            <p>© {year} Divulgence AI. All rights reserved.</p>
            <p className="mt-2">We respect your privacy and build with security in mind.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
