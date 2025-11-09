import React from 'react';
import { PhoneCall, Calendar, MessageSquare, FileText, BarChart3, Zap, Cog } from 'lucide-react';

const services = [
  {
    icon: PhoneCall,
    title: 'AI receptionist & call routing',
    desc: 'Answer every call, route smartly, and book straight into your calendar.'
  },
  {
    icon: Calendar,
    title: 'Bookings & reminders',
    desc: 'Automated scheduling, confirmations, and no-show reducing nudges.'
  },
  {
    icon: MessageSquare,
    title: 'Lead capture & CRM sync',
    desc: 'Web chat and forms that push leads into your pipeline in seconds.'
  },
  {
    icon: FileText,
    title: 'Docs & email automation',
    desc: 'Generate quotes, draft emails, and file paperwork automatically.'
  },
  {
    icon: BarChart3,
    title: 'Analytics dashboards',
    desc: 'Track response times, bookings, and pipeline health in one place.'
  },
  {
    icon: Cog,
    title: 'Custom workflows',
    desc: 'Tie tools together with rules and approvals that match your ops.'
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50">Services</h2>
          <p className="mt-2 text-zinc-300">Practical automations that deliver fast wins and compound gains.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:bg-white/[0.04] focus-within:ring-2 focus-within:ring-sky-400">
              <s.icon className="h-6 w-6 text-sky-400" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold text-zinc-100">{s.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex text-sky-400 hover:text-sky-300 text-sm font-medium" aria-label={`Learn more about ${s.title}`}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
