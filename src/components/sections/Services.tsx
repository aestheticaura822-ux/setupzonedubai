// File: src/components/Home/Services.tsx

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Globe,
  Briefcase,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useTina, tinaField } from 'tinacms/dist/react';
import servicesData from '../../content/home/services.json';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';

const iconMap: any = {
  Building2, Globe, Briefcase,
};

function ServiceCard({
  service,
  index,
  learnMore,  // ✅ NAYA PROP
}: {
  service: any;
  index: number;
  learnMore: string;  // ✅ NAYA TYPE
}) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        type: 'spring',
        stiffness: 60,
      }}
      className="group relative"
      style={{ perspective: '1500px' }}
    >
      <div
        className="absolute -inset-2 rounded-[36px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
        style={{ background: service.glowColor }}
      />

      <div className="relative h-full rounded-[32px] bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)] group-hover:-translate-y-3 transition-all duration-500">
        <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
            style={{ backgroundImage: `url(${service.image})`, backgroundColor: '#E2E8F0' }}
            data-tina-field={tinaField(service, 'image')}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-70 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute top-5 right-5">
            <span className="text-6xl font-black text-white/20 leading-none tracking-tight" data-tina-field={tinaField(service, 'number')}>
              {service.number}
            </span>
          </div>

          <div className="absolute top-5 left-5">
            <motion.div whileHover={{ rotate: 12, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="relative">
              <div className="absolute inset-0 bg-white/30 blur-lg rounded-2xl" />
              <div className="relative w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                <Icon size={26} className="text-white" strokeWidth={2.2} />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-1.5" data-tina-field={tinaField(service, 'tagline')}>
              {service.tagline}
            </p>
            <h3 className="text-2xl font-black text-white leading-tight tracking-tight" data-tina-field={tinaField(service, 'title')}>
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-7">
          <p className="text-sm text-[#475569] font-medium leading-relaxed mb-6" data-tina-field={tinaField(service, 'description')}>
            {service.description}
          </p>

          <div className="space-y-2.5 mb-7">
            {service.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <div className={`w-5 h-5 rounded-full ${service.bgAccent} ${service.borderAccent} border flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle2 size={12} className={service.accentColor} strokeWidth={3} />
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-5" />

          <a href={`#${service.id}`} className="group/btn flex items-center justify-between">
            <span className="text-sm font-black text-[#0A0F1F] ..." >
  {learnMore}
</span>
            <div className={`w-9 h-9 rounded-full ${service.bgAccent} ${service.borderAccent} border flex items-center justify-center group-hover/btn:scale-110 transition-all duration-300`}>
              <ArrowUpRight size={16} className={`${service.accentColor} transition-colors`} strokeWidth={2.5} />
            </div>
          </a>
        </div>

        <div className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.04] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none`} />
      </div>
    </motion.div>
  );
}

export default function Services({ tinaData }: { tinaData?: any }) {
const { language } = useLanguage();
const servicesFallback = loadContent('home/services', language);
const data = tinaData?.data?.home || servicesFallback;
  return (
    <section id="services" className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-brand-sky/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-brand-violet/8 blur-[150px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-border shadow-soft mb-6">
            <Sparkles size={14} className="text-brand-sky" />
            <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data, 'badge')}>
              {data.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
            <span data-tina-field={tinaField(data.heading, 'line1')}>{data.heading.line1}</span>{' '}
            <span className="relative inline-block">
              <span className="gradient-text" data-tina-field={tinaField(data.heading, 'highlight')}>{data.heading.highlight}</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8" stroke="url(#servicesUnderline)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="servicesUnderline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data, 'subtitle')}>
            {data.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {data.services.map((service: any, index: number) => (
  <ServiceCard 
    key={service.id} 
    service={service} 
    index={index} 
    learnMore={data.learnMore || 'Learn More'}  // ✅ PASS KARO
  />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 md:mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-border shadow-soft">
            <span className="text-sm font-semibold text-[#475569]" data-tina-field={tinaField(data.bottomCTA, 'question')}>
              {data.bottomCTA.question}
            </span>
            <a
              href={data.bottomCTA.buttonLink}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-white font-bold text-sm shadow-[0_8px_30px_rgba(14,165,233,0.35)] hover:shadow-[0_12px_45px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300"
            >
              <span data-tina-field={tinaField(data.bottomCTA, 'buttonText')}>{data.bottomCTA.buttonText}</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}