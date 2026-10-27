// File: src/components/Home/TrustBar.tsx

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, UserCheck, Clock } from 'lucide-react';
import { tinaField } from 'tinacms/dist/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';

const iconMap: any = {
  Users, Award, UserCheck, Clock,
};

// Count-up hook — defensive against strings, undefined, NaN, Arabic text, etc.
function useCountUp(rawEnd: number | string, duration = 2000, start = 0) {
  // Coerce any input into a real finite number
  const parsed =
    typeof rawEnd === 'number'
      ? rawEnd
      : parseFloat(String(rawEnd ?? '').replace(/[^\d.]/g, '')) || 0;
  const end = Number.isFinite(parsed) ? parsed : 0;

  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.floor(eased * (end - start) + start);
      setCount(Number.isFinite(next) ? next : end);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, end, duration, start]);

  return { count, ref };
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const { count, ref } = useCountUp(stat.value, 2000);
  const Icon = iconMap[stat.icon] || Users;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: 'spring',
        stiffness: 80,
      }}
      className="group relative"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
        style={{ background: stat.glowColor }}
      />

      {/* Card */}
      <div className="relative p-6 md:p-7 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] group-hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`} />

        {/* Corner deco */}
        <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${stat.gradient} opacity-[0.08] group-hover:opacity-[0.15] blur-2xl transition-opacity duration-500`} />

        {/* Icon */}
        <div className="relative mb-6">
          <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
          <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
            <Icon size={26} className="text-white" strokeWidth={2.2} />
          </div>
        </div>

        {/* Number — forced LTR so "+" and "/7" don't flip in Arabic */}
        <div
          dir="ltr"
          className="flex items-baseline justify-start gap-1 mb-2 whitespace-nowrap"
        >
          <span className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-br from-[#0A0F1F] to-[#334155] bg-clip-text text-transparent leading-none">
            {count.toLocaleString('en-US')}
          </span>
          {stat.suffix && (
            <span
              className={`inline-block text-3xl md:text-4xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent leading-none`}
            >
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <h3 className="text-base font-black text-[#0A0F1F] mb-1.5 tracking-tight" data-tina-field={tinaField(stat, 'label')}>
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(stat, 'description')}>
          {stat.description}
        </p>

        {/* Bottom corner accent */}
        <div className={`absolute -bottom-1 -right-1 w-20 h-20 rounded-tl-[80px] bg-gradient-to-br ${stat.gradient} opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
}

export default function TrustBar({ tinaData }: { tinaData?: any }) {
  const { language } = useLanguage();
  const trustBarFallback = loadContent('home/trust-bar', language);
  const data = tinaData?.data?.home?.trustBar || trustBarFallback;

  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Soft mesh background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-brand-sky/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-violet/8 blur-[140px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
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
          className="text-center mb-10 md:mb-14"
        >
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-border shadow-soft mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data, 'badge')}>
              {data.badge}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-4">
            <span data-tina-field={tinaField(data.heading, 'line1')}>{data.heading.line1}</span>{' '}
            <span className="relative inline-block">
              <span className="gradient-text" data-tina-field={tinaField(data.heading, 'line2Highlight')}>{data.heading.line2Highlight}</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                  stroke="url(#underline2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline2" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed" data-tina-field={tinaField(data, 'subtitle')}>
            {data.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {data.stats.map((stat: any, index: number) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm font-semibold text-[#475569]"
        >
          {data.bottomTrust.map((item: any, i: number) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
              <span data-tina-field={tinaField(item, 'label')}>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}