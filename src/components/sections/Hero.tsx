// File: src/components/Home/Hero.tsx

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building2, Globe, CreditCard, Check, Star } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { useTina, tinaField } from 'tinacms/dist/react';
import heroData from '../../content/home/hero.json';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
const iconMap: any = {
  Building2, Globe, CreditCard,
};

export default function Hero({ tinaData }: { tinaData?: any }) {
  const { language } = useLanguage();
const heroFallback = loadContent('home/hero', language);
const data = tinaData?.data?.home || heroFallback;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* === BACKGROUND LAYERS === */}

      <video
        autoPlay
        loop
        muted
        playsInline
        poster={data.video.poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={data.video.src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />

      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-brand-sky/15 blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-violet/15 blur-[140px] animate-float pointer-events-none" />

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #64748B 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at left center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at left center, black 20%, transparent 70%)',
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent" />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE — Text */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-border shadow-soft mb-8"
            >
              {data.badge.showPulse && (
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-brand-green opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-green" />
                </span>
              )}
              <Sparkles size={14} className="text-brand-sky" />
              <span className="text-xs font-semibold tracking-wide text-txt" data-tina-field={tinaField(data.badge, 'text')}>
                {data.badge.text}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-[#0A0F1F] drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]"
            >
              <span data-tina-field={tinaField(data.heading, 'line1')}>{data.heading.line1}</span>
              <br />
              <span className="relative inline-block">
                <span className="gradient-text" data-tina-field={tinaField(data.heading, 'line2Highlight')}>{data.heading.line2Highlight}</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C60 3 120 2 180 4C220 5.5 260 7 298 10"
                    stroke="url(#underline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#0EA5E9" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span data-tina-field={tinaField(data.heading, 'line3')}>{data.heading.line3}</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#1E293B] max-w-2xl leading-relaxed mb-10 font-semibold drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
              data-tina-field={tinaField(data, 'subtext')}
            >
              {data.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={data.ctaPrimary.link}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-brand text-white font-bold text-base shadow-[0_10px_40px_rgba(14,165,233,0.4)] hover:shadow-[0_15px_60px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative" data-tina-field={tinaField(data.ctaPrimary, 'text')}>{data.ctaPrimary.text}</span>
                <ArrowRight
                  size={18}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
  href={getWhatsAppLink(data.ctaSecondary.message)}
  target="_blank"
  rel="noreferrer"
  className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 border border-emerald-400/30"
>
  <WhatsAppIcon size={22} className="text-white" />
  <span className="font-bold text-white" data-tina-field={tinaField(data.ctaSecondary, 'text')}>{data.ctaSecondary.text}</span>
  <ArrowRight
    size={16}
    className="text-white group-hover:translate-x-1 transition-transform"
  />
</a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {data.trustPills.map((label: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-border shadow-soft text-sm"
                >
                  <span className="w-4 h-4 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <Check size={10} className="text-brand-green" strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-[#1E293B]">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Google Reviews Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-border shadow-soft">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="h-5 w-px bg-slate-300" />
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="text-brand-gold" fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.googleBadge, 'rating')}>{data.googleBadge.rating}</span>
                <span className="text-xs font-semibold text-slate-500" data-tina-field={tinaField(data.googleBadge, 'reviewsText')}>{data.googleBadge.reviewsText}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — Floating Cards */}
          <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-brand blur-[120px]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px]"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-brand-sky shadow-glow" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-brand-violet shadow-glow-violet" />
              <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-brand-gold" />
            </motion.div>

            {data.floatingCards.map((card: any, index: number) => {
              const Icon = iconMap[card.icon] || Building2;
              const tagColors: Record<string, string> = {
                gold: 'bg-gradient-gold text-white',
                sky: 'bg-gradient-sky text-white',
                violet: 'bg-gradient-violet text-white',
              };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: card.delay,
                    type: 'spring',
                    stiffness: 80,
                  }}
                  className="absolute"
                  style={{
                    right: card.position.right,
                    top: card.position.top,
                    zIndex: card.z,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -18, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 rounded-3xl" />

                      <div className="relative w-[280px] p-5 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(14,165,233,0.15)] hover:shadow-[0_30px_80px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all duration-500">
                        <div className="absolute -top-2.5 -right-2.5">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${tagColors[card.tagColor]}`}
                            data-tina-field={tinaField(card, 'tag')}
                          >
                            {card.tag}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-brand blur-md opacity-50" />
                            <div className="relative w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
                              <Icon size={22} className="text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                              Service
                            </p>
                            <h3 className="text-base font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(card, 'title')}>
                              {card.title}
                            </h3>
                          </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-border via-brand-sky/30 to-transparent mb-3" />

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-txt-muted font-semibold">
                              Starting from
                            </p>
                            <p className="text-lg font-black gradient-text" data-tina-field={tinaField(card, 'price')}>
                              {card.price}
                            </p>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-brand-sky/10 flex items-center justify-center group-hover:bg-gradient-brand transition-all duration-300">
                            <ArrowRight
                              size={14}
                              className="text-brand-sky group-hover:text-white group-hover:translate-x-0.5 transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-20 right-96 w-4 h-4 rounded-full bg-gradient-brand shadow-glow"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-96 right-0 w-3 h-3 rounded-full bg-brand-gold shadow-md"
            />
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-32 right-44 w-2.5 h-2.5 rounded-full bg-brand-violet shadow-glow-violet"
            />

            <motion.svg
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-10 right-20 w-8 h-8 text-brand-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </motion.svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#1E293B]/40 flex items-start justify-center p-2 bg-white/60 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-brand-sky"
          />
        </div>
      </motion.div>

      {/* ============ SCROLLING REVIEWS SECTION ============ */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-16 overflow-hidden border-t border-slate-100">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xs font-black tracking-widest uppercase text-slate-700" data-tina-field={tinaField(data.reviewsSection, 'badgeText')}>
                {data.reviewsSection.badgeText}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              What Our <span className="gradient-text" data-tina-field={tinaField(data.reviewsSection, 'titleHighlight')}>{data.reviewsSection.titleHighlight}</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-xl font-black text-[#0A0F1F]" data-tina-field={tinaField(data.reviewsSection, 'rating')}>{data.reviewsSection.rating}</span>
              <span className="text-sm font-bold text-slate-500" data-tina-field={tinaField(data.reviewsSection, 'reviewsCountText')}>{data.reviewsSection.reviewsCountText}</span>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Reviews Row 1 (Left → Right) */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="flex gap-5 w-max"
          >
            {[...data.reviews, ...data.reviews].map((review: any, i: number) => (
              <div
                key={i}
                className="flex-shrink-0 w-[380px] p-6 rounded-3xl bg-white border border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-5 line-clamp-4">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white text-xs font-black shadow-md flex-shrink-0`}>
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-black text-[#0A0F1F] leading-tight truncate">
                      {review.name}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">
                      {review.date}
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling Reviews Row 2 (Right → Left) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="flex gap-5 w-max"
          >
            {[...data.reviews.slice().reverse(), ...data.reviews.slice().reverse()].map((review: any, i: number) => (
              <div
                key={i}
                className="flex-shrink-0 w-[380px] p-6 rounded-3xl bg-white border border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-5 line-clamp-4">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white text-xs font-black shadow-md flex-shrink-0`}>
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-black text-[#0A0F1F] leading-tight truncate">
                      {review.name}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">
                      {review.date}
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}