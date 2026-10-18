// File: src/components/Home/Packages.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  ArrowRight,
  Star,
  Crown,
  Building2,
  Globe,
  MessageCircle,
  Phone,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { useTina, tinaField } from 'tinacms/dist/react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
import packagesData from '../../content/home/packages.json';

const iconMap: any = {
  Building2, Globe, Crown,
};

const trustColorMap: Record<string, { bg: string; border: string; text: string }> = {
  emerald: { bg: 'bg-emerald-100', border: 'border-emerald-200', text: 'text-emerald-600' },
  sky: { bg: 'bg-sky-100', border: 'border-sky-200', text: 'text-sky-600' },
  violet: { bg: 'bg-violet-100', border: 'border-violet-200', text: 'text-violet-600' },
  amber: { bg: 'bg-amber-100', border: 'border-amber-200', text: 'text-amber-600' },
};

export default function Packages({ tinaData }: { tinaData?: any }) {
const { language } = useLanguage();
const packagesFallback = loadContent('home/packages', language);
const data = tinaData?.data?.home || packagesFallback;
  const [period, setPeriod] = useState<'one-time' | 'installment'>('one-time');

  return (
    <section id="packages" className="relative py-14 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white" />

      {/* Mesh blobs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-sky-100/50 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-violet-100/50 blur-[150px] pointer-events-none" />

      {/* Dot grid */}
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
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
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
                <path d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8" stroke="url(#pkgUnderline)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="pkgUnderline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data, 'subtitle')}>
            {data.subtitle}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-border shadow-soft">
            <button
              onClick={() => setPeriod('one-time')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                period === 'one-time' ? 'text-white' : 'text-[#64748B] hover:text-[#0A0F1F]'
              }`}
            >
              {period === 'one-time' && (
                <motion.div
                  layoutId="togglePill"
                  className="absolute inset-0 bg-gradient-brand rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative" data-tina-field={tinaField(data.toggle, 'oneTimeLabel')}>{data.toggle.oneTimeLabel}</span>
            </button>
            <button
              onClick={() => setPeriod('installment')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                period === 'installment' ? 'text-white' : 'text-[#64748B] hover:text-[#0A0F1F]'
              }`}
            >
              {period === 'installment' && (
                <motion.div
                  layoutId="togglePill"
                  className="absolute inset-0 bg-gradient-brand rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative" data-tina-field={tinaField(data.toggle, 'installmentLabel')}>{data.toggle.installmentLabel}</span>
            </button>
          </div>
        </motion.div>

        {/* === PACKAGES GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
          {data.packages.map((pkg: any, index: number) => {
            const Icon = iconMap[pkg.icon] || Building2;
            const isHighlighted = pkg.highlighted;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.12, type: 'spring', stiffness: 70 }}
                className={`group relative ${isHighlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                <div className="absolute -inset-2 rounded-[36px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" style={{ background: pkg.glowColor }} />

                {isHighlighted && (
                  <div className="absolute -inset-2 rounded-[36px] opacity-60 blur-2xl" style={{ background: pkg.glowColor }} />
                )}

                <div className={`relative h-full rounded-[28px] bg-white overflow-hidden transition-all duration-500 group-hover:-translate-y-2 ${
                  isHighlighted
                    ? 'border-2 border-violet-300 shadow-[0_25px_80px_rgba(139,92,246,0.25)]'
                    : 'border border-border shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)]'
                }`}>
                  <div className={`h-1.5 bg-gradient-to-r ${pkg.gradient}`} />

                  {/* IMAGE HEADER */}
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                      data-tina-field={tinaField(pkg, 'image')}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-65 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }} />

                    <div className="absolute -bottom-6 left-6 z-10">
                      <div className="relative">
                        <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.iconBg} blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.iconBg} flex items-center justify-center shadow-xl ring-4 ring-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                          <Icon size={24} className="text-white" strokeWidth={2.2} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative p-7 md:p-8 pt-10">
                    {pkg.badge && (
                      <div className="absolute -top-4 right-5 z-20">
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${pkg.gradient} shadow-lg`}>
                          {pkg.badge === 'Most Popular' && <Star size={11} className="text-white" strokeWidth={3} fill="white" />}
                          {pkg.badge === 'Best Value' && <BadgeCheck size={11} className="text-white" strokeWidth={3} />}
                          <span className="text-[10px] font-black uppercase tracking-widest text-white" data-tina-field={tinaField(pkg, 'badge')}>
                            {pkg.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    <h3 className="text-2xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-2" data-tina-field={tinaField(pkg, 'name')}>
                      {pkg.name}
                    </h3>

                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-6" data-tina-field={tinaField(pkg, 'tagline')}>
                      {pkg.tagline}
                    </p>

                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Starting from</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-black text-[#64748B]">{pkg.currency}</span>
                      <span className="text-5xl md:text-6xl font-black text-[#0A0F1F] leading-none tracking-tight" data-tina-field={tinaField(pkg, 'price')}>
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-7">
                      {period === 'one-time'
                        ? 'One-time payment'
                        : `${data.toggle.installmentSuffix} ${pkg.currency} ${Math.ceil(parseInt(pkg.price.replace(',', '')) / 3).toLocaleString()}`}
                    </div>

                    <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-6" />

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature: string, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-5 h-5 rounded-full ${pkg.accentBg} ${pkg.accentBorder} border flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check size={11} className={pkg.accentText} strokeWidth={3.5} />
                          </div>
                          <span className="text-sm font-semibold text-[#1E293B] leading-snug">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <a
                      href={getWhatsAppLink(`Hi! I'm interested in the "${pkg.name}" package (${pkg.currency} ${pkg.price}). Please share more details.`)}
                      target="_blank"
                      rel="noreferrer"
                      className={`group/btn relative flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 overflow-hidden ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                          : `bg-white border-2 ${pkg.accentBorder} ${pkg.accentText} hover:bg-gradient-to-r hover:${pkg.gradient} hover:text-white hover:border-transparent hover:scale-105`
                      }`}
                    >
                      <span className="relative flex items-center gap-2">
                        <span data-tina-field={tinaField(pkg, 'cta')}>{pkg.cta}</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* === BOTTOM CTA — Custom Package === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.customPackageCTA.backgroundImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/85 to-[#0A1628]/70" />

          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-6 right-8 opacity-20 hidden md:block"
          >
            <Crown size={80} className="text-white" />
          </motion.div>

          <div className="relative p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <ShieldCheck size={26} className="text-white" strokeWidth={2.2} />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1.5" data-tina-field={tinaField(data.customPackageCTA, 'title')}>
                  {data.customPackageCTA.title}
                </h3>
                <p className="text-sm text-white/80 font-medium" data-tina-field={tinaField(data.customPackageCTA, 'subtitle')}>
                  {data.customPackageCTA.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href={getWhatsAppLink(data.customPackageCTA.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A1628] font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
              >
<WhatsAppIcon size={16} className="text-emerald-600" />
                <span data-tina-field={tinaField(data.customPackageCTA, 'primaryCta')}>{data.customPackageCTA.primaryCta}</span>
              </a>
              <a
                href={data.customPackageCTA.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
              >
                <Phone size={16} />
                <span data-tina-field={tinaField(data.customPackageCTA, 'secondaryCta')}>{data.customPackageCTA.secondaryCta}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* === TRUST LINE === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm font-semibold text-[#475569]"
        >
          {data.trustLine.map((item: any, i: number) => {
            const colors = trustColorMap[item.color] || trustColorMap.sky;
            return (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                  <Check size={11} className={colors.text} strokeWidth={3.5} />
                </div>
                <span data-tina-field={tinaField(item, 'label')}>{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}