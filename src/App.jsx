import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-zinc-50">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <section id="how" className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50">How it works</h2>
              <p className="mt-2 text-zinc-300">A simple, proven path to results.</p>
            </div>
            <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Discover', desc: 'We map goals, systems, and quick wins.' },
                { title: 'Design', desc: 'We craft flows, prompts, and guardrails.' },
                { title: 'Deploy', desc: 'We ship, test, and train your team.' },
                { title: 'Improve', desc: 'We track, refine, and scale what works.' },
              ].map((s, i) => (
                <li key={s.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <span className="text-sky-400 text-sm font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-100">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="pricing" className="bg-slate-950 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50">Pricing</h2>
              <p className="mt-2 text-zinc-300">Clear plans that start small and grow with you.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Starter', price: '$1,200 setup + $490/mo', features: ['Basic flows', 'Email support', 'Monthly check-in'] },
                { name: 'Growth', price: '$2,500 setup + $1,290/mo', features: ['Multi-channel', 'Custom flows', 'Priority support'] },
                { name: 'Premium', price: '$4,800 setup + $2,900/mo', features: ['Advanced voice', 'Compliance', 'Dedicated success'] },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-xl font-semibold text-zinc-100">{p.name}</h3>
                  <p className="mt-2 text-sky-400 font-medium">{p.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <a href="#book" className="mt-6 inline-flex rounded-md bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 text-sm font-medium">Choose {p.name}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
