import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl text-zinc-100 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1">
          <span className="sr-only">Divulgence AI — Home</span>
          <span className="text-white">divulgence</span>
          <span className="text-sky-400">.ai</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#services" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1">Services</a>
          <a href="#how" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1">How it works</a>
          <a href="#pricing" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1">Pricing</a>
          <a href="#contact" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#book"
            title="Choose a time that suits you. We will review your goals beforehand."
            className="inline-flex items-center gap-2 rounded-md bg-sky-500 hover:bg-sky-400 text-white px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Book a call</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/30 text-zinc-100 hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
