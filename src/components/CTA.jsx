import React from 'react';

const CTA = () => {
  return (
    <section id="book" className="bg-gradient-to-b from-slate-950 to-slate-900 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50">Ready to automate the busywork?</h2>
        <p className="mt-2 text-zinc-300">Pick a time for a quick strategy call. We’ll map your fastest path to value.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 text-base font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900">Book a call</a>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-white/15 hover:border-white/30 text-zinc-100 hover:text-white px-6 py-3 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-slate-900">See pricing</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
