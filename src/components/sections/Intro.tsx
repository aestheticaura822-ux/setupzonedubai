// File: src/components/Home/Intro.tsx

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  TrendingUp,
  CheckCircle2,
  Building2,
  Sparkles,
  Award,
  Users,
} from 'lucide-react';
import { useTina, tinaField } from 'tinacms/dist/react';
import introData from '../../content/home/intro.json';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';

const iconMap: any = {
  ShieldCheck, Zap, Globe2, TrendingUp,
};

export default function Intro({ tinaData }: { tinaData?: any }) {
const { language } = useLanguage();
const introFallback = loadContent('home/intro', language);
const data = tinaData?.data?.home || introFallback;
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      {/* Soft mesh background */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-brand-sky/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-brand-violet/8 blur-[140px] pointer-events-none" />

      {/* Dot grid */}
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE — Visual (Dashboard-style card) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-[80px] rounded-full" />

            <div className="relative">
              {/* Floating badge — top left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 z-20"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.1)] border border-border">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-sm">
                    <Award size={16} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.dashboardCard.awardBadge, 'label')}>
                      {data.dashboardCard.awardBadge.label}
                    </p>
                    <p className="text-xs font-black text-[#0A0F1F]" data-tina-field={tinaField(data.dashboardCard.awardBadge, 'value')}>
                      {data.dashboardCard.awardBadge.value}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — bottom right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 z-20"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.1)] border border-border">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-sm">
                    <Users size={16} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.dashboardCard.expertsBadge, 'label')}>
                      {data.dashboardCard.expertsBadge.label}
                    </p>
                    <p className="text-xs font-black text-[#0A0F1F]" data-tina-field={tinaField(data.dashboardCard.expertsBadge, 'value')}>
                      {data.dashboardCard.expertsBadge.value}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Main dashboard card */}
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)] p-6 md:p-8 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
                      <Building2 size={20} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.dashboardCard, 'brandLabel')}>
                        {data.dashboardCard.brandLabel}
                      </p>
                      <h3 className="text-base font-black text-[#0A0F1F]" data-tina-field={tinaField(data.dashboardCard, 'brandTitle')}>
                        {data.dashboardCard.brandTitle}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider" data-tina-field={tinaField(data.dashboardCard, 'statusLabel')}>
                      {data.dashboardCard.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Steps list */}
                <div className="space-y-3">
                  {data.dashboardCard.steps.map((step: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                        step.status === 'active'
                          ? 'bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200'
                          : step.status === 'done'
                          ? 'bg-slate-50 border border-slate-100'
                          : 'bg-white border border-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {step.status === 'done' ? (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                            <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                          </div>
                        ) : step.status === 'active' ? (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center relative">
                            <span className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-40" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white relative" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-300" />
                        )}
                        <span className={`text-xs font-bold ${step.status === 'pending' ? 'text-slate-400' : 'text-[#0A0F1F]'}`} data-tina-field={tinaField(step, 'label')}>
                          {step.label}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        step.status === 'active' ? 'text-sky-600' : step.status === 'done' ? 'text-emerald-600' : 'text-slate-400'
                      }`} data-tina-field={tinaField(step, 'week')}>
                        {step.week}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.dashboardCard, 'progressLabel')}>
                      {data.dashboardCard.progressLabel}
                    </span>
                    <span className="text-xs font-black text-[#0A0F1F]" data-tina-field={tinaField(data.dashboardCard, 'progressValue')}>
                      {data.dashboardCard.progressValue}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${data.dashboardCard.progressPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-brand"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-brand opacity-[0.08] blur-2xl" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-border shadow-soft mb-6">
              <Sparkles size={14} className="text-brand-sky" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data, 'badge')}>
                {data.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-6">
              <span data-tina-field={tinaField(data.heading, 'line1')}>{data.heading.line1}</span>{' '}
              <span className="relative inline-block">
                <span className="gradient-text" data-tina-field={tinaField(data.heading, 'highlight')}>{data.heading.highlight}</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                    stroke="url(#introUnderline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="introUnderline" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#0EA5E9" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              <span data-tina-field={tinaField(data.heading, 'line3')}>{data.heading.line3}</span>
            </h2>

            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-5" data-tina-field={tinaField(data, 'paragraph1')}>
              {data.paragraph1}
            </p>

            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8">
              <span className="font-bold text-[#0A0F1F]" data-tina-field={tinaField(data, 'paragraph2BoldPart')}>{data.paragraph2BoldPart}</span>
              <span data-tina-field={tinaField(data, 'paragraph2Rest')}>{data.paragraph2Rest}</span>
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {data.highlights.map((item: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-border hover:border-brand-sky/40 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-[#1E293B] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={data.ctaPrimary.link}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-white font-bold text-sm shadow-[0_10px_40px_rgba(14,165,233,0.35)] hover:shadow-[0_15px_60px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative" data-tina-field={tinaField(data.ctaPrimary, 'text')}>{data.ctaPrimary.text}</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={data.ctaSecondary.link}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-border hover:border-brand-sky/40 hover:shadow-soft transition-all duration-300 text-sm font-bold text-[#0A0F1F]"
              >
                <span data-tina-field={tinaField(data.ctaSecondary, 'text')}>{data.ctaSecondary.text}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom — 4 Benefit Cards */}
        <div className="mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#0A0F1F] tracking-tight">
              <span data-tina-field={tinaField(data.bottomSectionTitle, 'line1')}>{data.bottomSectionTitle.line1}</span>{' '}
              <span className="gradient-text" data-tina-field={tinaField(data.bottomSectionTitle, 'highlight')}>{data.bottomSectionTitle.highlight}</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.benefits.map((benefit: any, i: number) => {
              const Icon = iconMap[benefit.icon] || ShieldCheck;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    type: 'spring',
                    stiffness: 80,
                  }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient}`} />

                    <div className="relative mb-5">
                      <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={24} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    <h4 className="text-base font-black text-[#0A0F1F] mb-2 tracking-tight" data-tina-field={tinaField(benefit, 'title')}>
                      {benefit.title}
                    </h4>

                    <p className="text-xs text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(benefit, 'description')}>
                      {benefit.description}
                    </p>

                    <div className={`absolute -bottom-1 -right-1 w-20 h-20 rounded-tl-[80px] bg-gradient-to-br ${benefit.gradient} opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}