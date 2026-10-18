// File: src/components/Home/Comparison.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Minus,
  TrendingUp,
  Users,
  ShieldCheck,
  Wallet,
  Landmark,
  Zap,
  MessageCircle,
  Phone,
  Target,
  Award,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { useTina, tinaField } from 'tinacms/dist/react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import comparisonData from '../../content/home/comparison.json';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
const iconMap: any = {
  Building2, Globe, TrendingUp, Users, ShieldCheck, Wallet, Landmark,
  Zap, Target, Award,
};

export default function Comparison({ tinaData }: { tinaData?: any }) {
  
const { language } = useLanguage();
const comparisonFallback = loadContent('home/comparison', language);
const data = tinaData?.data?.home || comparisonFallback;
  const [hoveredSide, setHoveredSide] = useState<'freezone' | 'mainland' | null>(null);

  const fz = data.zones[0];
  const ml = data.zones[1];
  const BottomIcon = iconMap[data.bottomCTA.icon] || ShieldCheck;

  return (
    <section id="comparison" className="relative py-14 md:py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-sky-100/50 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-100/50 blur-[150px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
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
                <path d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8" stroke="url(#compUnderline)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="compUnderline" x1="0" y1="0" x2="300" y2="0">
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

        {/* COMPARISON CARDS — SPLIT */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* CENTER VS BADGE */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
              className="relative"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 blur-2xl"
              />
              <div className="relative w-20 h-20 rounded-full bg-white border-4 border-border shadow-2xl flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl tracking-tight">{data.vsLabel}</span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-3 -right-3"
              >
                <Sparkles size={24} className="text-amber-400" fill="currentColor" />
              </motion.div>
            </motion.div>
          </div>

          {/* LEFT — FREE ZONE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            onMouseEnter={() => setHoveredSide('freezone')}
            onMouseLeave={() => setHoveredSide(null)}
            className="group relative"
            style={{ perspective: '1500px' }}
          >
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-br from-sky-400 to-blue-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700" />

            <div className="relative h-full rounded-[32px] bg-white border border-border overflow-hidden shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_30px_80px_rgba(14,165,233,0.2)] group-hover:-translate-y-2 transition-all duration-500">
              <div className={`h-1.5 bg-gradient-to-r ${fz.gradient}`} />

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                  style={{ backgroundImage: `url(${fz.image})` }}
                  data-tina-field={tinaField(fz, 'image')}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/85 via-blue-600/70 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="absolute top-5 left-5">
                  <motion.div whileHover={{ rotate: 12, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="relative">
                    <div className="absolute inset-0 bg-white/40 blur-lg rounded-2xl" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                      <Globe size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                  </motion.div>
                </div>

                <div className="absolute top-5 right-5">
                  <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/25 backdrop-blur-xl border border-white/40 text-white" data-tina-field={tinaField(fz, 'badge')}>
                    {fz.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-4">
                  <span className="text-8xl font-black text-white/15 leading-none">{fz.watermark}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight drop-shadow-lg mb-1.5" data-tina-field={tinaField(fz, 'name')}>
                    {fz.name}
                  </h3>
                  <p className="text-xs font-bold text-white/85 uppercase tracking-widest" data-tina-field={tinaField(fz, 'tagline')}>
                    {fz.tagline}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-7 md:p-8">
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded-lg ${fz.accentBg} ${fz.accentBorder} border flex items-center justify-center`}>
                      <Target size={12} className={fz.accentText} strokeWidth={2.5} />
                    </div>
                    <span className={`text-[10px] font-black ${fz.accentText} uppercase tracking-widest`}>
                      {data.bestForLabel}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#1E293B] leading-relaxed" data-tina-field={tinaField(fz, 'bestFor')}>
                    {fz.bestFor}
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-border via-sky-200 to-transparent mb-5" />

                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={11} className="text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B] leading-snug" data-tina-field={tinaField(fz, 'highlight')}>
                      {fz.highlight}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Minus size={11} className="text-amber-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#64748B] leading-snug" data-tina-field={tinaField(fz, 'limitation')}>
                      {fz.limitation}
                    </span>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(fz.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-sm font-black text-sky-600 hover:text-sky-700"
                >
                  <span data-tina-field={tinaField(fz, 'ctaText')}>{fz.ctaText}</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-[0.05] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT — MAINLAND */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            onMouseEnter={() => setHoveredSide('mainland')}
            onMouseLeave={() => setHoveredSide(null)}
            className="group relative"
            style={{ perspective: '1500px' }}
          >
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-br from-violet-400 to-purple-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700" />

            <div className="relative h-full rounded-[32px] bg-white border border-border overflow-hidden shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_30px_80px_rgba(139,92,246,0.2)] group-hover:-translate-y-2 transition-all duration-500">
              <div className={`h-1.5 bg-gradient-to-r ${ml.gradient}`} />

              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                  style={{ backgroundImage: `url(${ml.image})` }}
                  data-tina-field={tinaField(ml, 'image')}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/85 via-purple-600/70 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="absolute top-5 left-5">
                  <motion.div whileHover={{ rotate: 12, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="relative">
                    <div className="absolute inset-0 bg-white/40 blur-lg rounded-2xl" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                      <Building2 size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                  </motion.div>
                </div>

                <div className="absolute top-5 right-5">
                  <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/25 backdrop-blur-xl border border-white/40 text-white" data-tina-field={tinaField(ml, 'badge')}>
                    {ml.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-4">
                  <span className="text-8xl font-black text-white/15 leading-none">{ml.watermark}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight drop-shadow-lg mb-1.5" data-tina-field={tinaField(ml, 'name')}>
                    {ml.name}
                  </h3>
                  <p className="text-xs font-bold text-white/85 uppercase tracking-widest" data-tina-field={tinaField(ml, 'tagline')}>
                    {ml.tagline}
                  </p>
                </div>
              </div>

              <div className="relative p-7 md:p-8">
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded-lg ${ml.accentBg} ${ml.accentBorder} border flex items-center justify-center`}>
                      <Target size={12} className={ml.accentText} strokeWidth={2.5} />
                    </div>
                    <span className={`text-[10px] font-black ${ml.accentText} uppercase tracking-widest`}>
                      {data.bestForLabel}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#1E293B] leading-relaxed" data-tina-field={tinaField(ml, 'bestFor')}>
                    {ml.bestFor}
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-border via-violet-200 to-transparent mb-5" />

                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={11} className="text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B] leading-snug" data-tina-field={tinaField(ml, 'highlight')}>
                      {ml.highlight}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Minus size={11} className="text-amber-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#64748B] leading-snug" data-tina-field={tinaField(ml, 'limitation')}>
                      {ml.limitation}
                    </span>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(ml.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-sm font-black text-violet-600 hover:text-violet-700"
                >
                  <span data-tina-field={tinaField(ml, 'ctaText')}>{ml.ctaText}</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 opacity-[0.05] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* FEATURE TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl bg-white border border-border shadow-[0_15px_50px_rgba(15,23,42,0.08)] overflow-hidden mb-12"
        >
          <div className="h-1 bg-gradient-to-r from-sky-400 via-violet-400 to-purple-600" />

          <div className="relative p-6 md:p-8 border-b border-border">
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-4 md:col-span-4">
                <span className="text-xs font-black text-[#64748B] uppercase tracking-widest" data-tina-field={tinaField(data.tableHeaders, 'features')}>
                  {data.tableHeaders.features}
                </span>
              </div>
              <div className="col-span-4 md:col-span-4 text-center">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md">
                    <Globe size={14} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.tableHeaders, 'freezone')}>
                    {data.tableHeaders.freezone}
                  </span>
                </div>
              </div>
              <div className="col-span-4 md:col-span-4 text-center">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-md">
                    <Building2 size={14} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.tableHeaders, 'mainland')}>
                    {data.tableHeaders.mainland}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {data.features.map((feature: any, i: number) => {
              const Icon = iconMap[feature.icon] || Wallet;
              const isWinnerFZ = feature.freezone.score > feature.mainland.score;
              const isWinnerML = feature.mainland.score > feature.freezone.score;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className={`grid grid-cols-12 items-center gap-4 p-5 md:p-6 border-b border-border last:border-b-0 hover:bg-slate-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                >
                  <div className="col-span-4 md:col-span-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border border-border flex items-center justify-center shadow-sm flex-shrink-0">
                      <Icon size={16} className="text-[#475569]" strokeWidth={2.2} />
                    </div>
                    <span className="text-sm md:text-base font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(feature, 'label')}>
                      {feature.label}
                    </span>
                  </div>

                  <div className="col-span-4 md:col-span-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-black ${
                        isWinnerFZ ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-50 text-[#64748B] border border-border'
                      }`}>
                        {isWinnerFZ && <CheckCircle2 size={12} className="text-emerald-600" strokeWidth={3} />}
                        {feature.freezone.value}
                      </div>
                      <div className="w-full max-w-[120px] h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${feature.freezone.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${isWinnerFZ ? 'from-emerald-400 to-teal-500' : 'from-sky-400 to-blue-500'}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-4 md:col-span-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-black ${
                        isWinnerML ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-50 text-[#64748B] border border-border'
                      }`}>
                        {isWinnerML && <CheckCircle2 size={12} className="text-emerald-600" strokeWidth={3} />}
                        {feature.mainland.value}
                      </div>
                      <div className="w-full max-w-[120px] h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${feature.mainland.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${isWinnerML ? 'from-emerald-400 to-teal-500' : 'from-violet-400 to-purple-500'}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.bottomCTA.backgroundImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0B1F3A]/90 to-[#0A1628]/75" />

          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/20 blur-[120px]" />

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-6 right-8 opacity-15 hidden md:block"
          >
            <BottomIcon size={100} className="text-white" />
          </motion.div>

          <div className="relative p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <BottomIcon size={28} className="text-white" strokeWidth={2.2} />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(data.bottomCTA, 'title')}>
                  {data.bottomCTA.title}
                </h3>
                <p className="text-sm md:text-base text-white/75 font-medium max-w-lg" data-tina-field={tinaField(data.bottomCTA, 'subtitle')}>
                  {data.bottomCTA.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href={getWhatsAppLink(data.bottomCTA.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A1628] font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
              >
                <WhatsAppIcon size={16} className="text-emerald-600" />
                <span data-tina-field={tinaField(data.bottomCTA, 'primaryCta')}>{data.bottomCTA.primaryCta}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={data.bottomCTA.phoneHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={16} />
                <span data-tina-field={tinaField(data.bottomCTA, 'secondaryCta')}>{data.bottomCTA.secondaryCta}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}