import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative isolate min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-50">
          AI automation for real business outcomes.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-zinc-300">
          We design and deploy AI systems that cut admin time, speed up response, and turn more leads into bookings for growing businesses in Sydney.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#book"
            title="Choose a time that suits you. We will review your goals beforehand."
            className="inline-flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 text-base font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900"
          >
            Book a strategy call
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md border border-white/15 hover:border-white/30 text-zinc-100 hover:text-white px-6 py-3 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900"
          >
            See pricing
          </a>
        </div>
        <p className="mt-3 text-xs text-zinc-400">Sydney • Australia — We serve AU first</p>
      </div>
    </section>
  );
};

export default Hero;
