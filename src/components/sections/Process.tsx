// File: src/components/Home/Process.tsx

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MessageCircle,
  FileText,
  Building2,
  UserCheck,
  CreditCard,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  Rocket,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { useTina, tinaField } from 'tinacms/dist/react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
import processData from '../../content/home/process.json';

const iconMap: any = {
  MessageCircle, FileText, Building2, UserCheck, CreditCard, Headphones, Rocket,
};

export default function Process({ tinaData }: { tinaData?: any }) {
const { language } = useLanguage();
const processFallback = loadContent('home/process', language);
const data = tinaData?.data?.home || processFallback;  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const BottomIcon = iconMap[data.bottomCTA.icon] || Rocket;

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0B1F3A] to-[#0A1628]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }}
      />

      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
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
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-soft mb-6">
            <Sparkles size={14} className="text-sky-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white/70" data-tina-field={tinaField(data, 'badge')}>
              {data.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5">
            <span data-tina-field={tinaField(data.heading, 'line1')}>{data.heading.line1}</span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-violet-300 bg-clip-text text-transparent" data-tina-field={tinaField(data.heading, 'highlight')}>
                {data.heading.highlight}
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8" stroke="url(#processUnderline)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="processUnderline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#22D3EE" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(data, 'subtitle')}>
            {data.subtitle}
          </p>
        </motion.div>

        {/* TIMELINE LINE */}
        <div className="hidden lg:block relative mb-12">
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
            />
          </div>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-12">
          {data.steps.map((step: any, index: number) => {
            const Icon = iconMap[step.icon] || MessageCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, type: 'spring', stiffness: 70 }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-[32px] opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-700" style={{ background: step.glow }} />

                <div className="relative h-full rounded-[28px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.3)] group-hover:border-white/25 group-hover:bg-white/[0.06] group-hover:-translate-y-2 transition-all duration-500">
                  <div className={`h-1.5 bg-gradient-to-r ${step.gradient}`} />

                  <div className="relative h-36 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-[1.5s] group-hover:opacity-60 group-hover:scale-110"
                      style={{ backgroundImage: `url(${step.image})` }}
                      data-tina-field={tinaField(step, 'image')}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-60 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />

                    <div className="absolute top-3 right-4">
                      <span className="text-7xl font-black text-white/15 leading-none tracking-tight" data-tina-field={tinaField(step, 'number')}>
                        {step.number}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-5">
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }} className="relative">
                        <div className="absolute inset-0 rounded-2xl blur-md opacity-60" style={{ background: step.glow }} />
                        <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg border border-white/20`}>
                          <Icon size={22} className="text-white" strokeWidth={2.2} />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="relative p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br ${step.gradient} text-white text-[10px] font-black shadow-md`}>
                        {step.number}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                        {data.stepsLabel} {index + 1} {data.stepsLabelSuffix} {data.steps.length}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight mb-3" data-tina-field={tinaField(step, 'title')}>
                      {step.title}
                    </h3>

                    <p className="text-sm text-white/65 font-medium leading-relaxed" data-tina-field={tinaField(step, 'description')}>
                      {step.description}
                    </p>
                  </div>

                  <div className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${step.gradient} opacity-[0.06] group-hover:opacity-[0.15] blur-2xl transition-opacity duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.bottomCTA.backgroundImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0B1F3A]/90 to-[#0A1628]/80" />

          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/20 blur-[120px]" />

          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

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

          <div className="relative px-7 md:px-10 pb-7 md:pb-10 flex flex-wrap items-center justify-center md:justify-start gap-5 border-t border-white/10 pt-5">
            {data.bottomCTA.trustIndicators.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <CheckCircle2 size={11} className="text-emerald-300" strokeWidth={3} />
                </div>
                <span className="text-xs font-bold text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}