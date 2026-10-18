// File: src/pages/freezones/IFZA.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Rocket,
  Star, Store, Code,
  BadgeCheck, Factory, ShoppingCart, CreditCard, Scale,
  FileBadge, UserCheck,
  RefreshCw, Monitor, Palette, Timer,
  Blocks, Compass, GraduationCap, Landmark as LandmarkIcon,
  Receipt, ClipboardCheck, ShieldAlert, Globe2,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import ifzaData from '../../content/freezones/ifza-free-zone.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const iconMap: any = {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Rocket,
  Star, Store, Code,
  BadgeCheck, Factory, ShoppingCart, CreditCard, Scale,
  FileBadge, UserCheck,
  RefreshCw, Monitor, Palette, Timer,
  Blocks, Compass, GraduationCap, LandmarkIcon,
  Receipt, ClipboardCheck, ShieldAlert, Globe2,
};

export default function IFZA({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.freezones || ifzaData;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} data-tina-field={tinaField(data, 'heroImage')} />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/95 via-purple-900/75 to-violet-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Rocket size={120} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">IFZA</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data, 'heroTitle')}>
                {data.heroTitle.replace(data.heroTitleHighlight, '')}
                <span className="text-violet-300">{data.heroTitleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data, 'heroSubtitle')}>{data.heroSubtitle}</motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in IFZA Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.heroChips.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-violet-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Floating Cards */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-400 to-purple-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-purple-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-fuchsia-300" />
              </motion.div>

              {/* Primary Cost Card */}
              <motion.div initial={{ opacity: 0, y: 40, rotate: -5 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-8 right-0 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${data.heroCards.primary.color} opacity-40 blur-2xl rounded-3xl`} />
                  <div className="relative w-[280px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="absolute -top-2.5 -right-2.5">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-teal-600 text-white shadow-md" data-tina-field={tinaField(data.heroCards.primary, 'badge')}>
                        {data.heroCards.primary.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${data.heroCards.primary.color} flex items-center justify-center shadow-lg`}>
                        <DollarSign size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.heroCards.primary, 'label')}>{data.heroCards.primary.label}</p>
                        <h3 className="text-base font-black text-[#0A0F1F]" data-tina-field={tinaField(data.heroCards.primary, 'value')}>{data.heroCards.primary.value}</h3>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-2xl font-black text-violet-600" data-tina-field={tinaField(data.heroCards.primary, 'highlight')}>{data.heroCards.primary.highlight}</span>
                      <span className="text-xs font-bold text-violet-600" data-tina-field={tinaField(data.heroCards.primary, 'highlightLabel')}>{data.heroCards.primary.highlightLabel}</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-violet-200 to-transparent mb-3" />
                    <p className="text-xs text-[#64748B] font-medium" data-tina-field={tinaField(data.heroCards.primary, 'footer')}>{data.heroCards.primary.footer}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Secondary Remote Card */}
              <motion.div initial={{ opacity: 0, y: 40, rotate: 5 }} animate={{ opacity: 1, y: 0, rotate: 3 }} transition={{ duration: 0.8, delay: 1.0, type: 'spring', stiffness: 80 }} className="absolute bottom-8 left-0 z-20">
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${data.heroCards.secondary.color} opacity-40 blur-2xl rounded-3xl`} />
                  <div className="relative w-[250px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${data.heroCards.secondary.color} flex items-center justify-center shadow-lg`}>
                        <Globe size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.heroCards.secondary, 'label')}>{data.heroCards.secondary.label}</p>
                        <h3 className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.heroCards.secondary, 'value')}>{data.heroCards.secondary.value}</h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1" data-tina-field={tinaField(data.heroCards.secondary, 'title')}>{data.heroCards.secondary.title}</div>
                    <p className="text-xs text-[#64748B] font-medium" data-tina-field={tinaField(data.heroCards.secondary, 'subtext')}>{data.heroCards.secondary.subtext}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. STATS === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {data.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Clock;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-[#0A0F1F] leading-none mb-0.5" data-tina-field={tinaField(stat, 'value')}>{stat.value}</div>
                        <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest" data-tina-field={tinaField(stat, 'label')}>{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHY CHOOSE IFZA — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 shadow-soft mb-6">
              <Award size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-violet-700" data-tina-field={tinaField(data.whyIfzaSection, 'badge')}>{data.whyIfzaSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyIfzaSection, 'title')}>
              {data.whyIfzaSection.title.replace(data.whyIfzaSection.titleHighlight, '')}
              <span className="gradient-text">{data.whyIfzaSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whyIfzaSection, 'subtitle')}>{data.whyIfzaSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-br ${data.whyIfzaSection.primaryCard.color} p-7 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Rocket size={160} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Zap size={30} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(data.whyIfzaSection.primaryCard, 'title')}>{data.whyIfzaSection.primaryCard.title}</h3>
                  <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-md" data-tina-field={tinaField(data.whyIfzaSection.primaryCard, 'description')}>{data.whyIfzaSection.primaryCard.description}</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 space-y-5">
              {data.whyIfzaSection.secondaryCards.map((card: any, i: number) => {
                const Icon = iconMap[card.icon] || Globe;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 * (i + 1) }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-1.5" data-tina-field={tinaField(card, 'title')}>{card.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(card, 'description')}>{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 4. KEY BENEFITS — Alternating Layout === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Star size={14} className="text-violet-500" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.benefitsSection, 'badge')}>{data.benefitsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.benefitsSection, 'title')}>
              {data.benefitsSection.title.replace(data.benefitsSection.titleHighlight, '')}
              <span className="gradient-text">{data.benefitsSection.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {data.benefitsSection.items.map((benefit: any, i: number) => {
              const Icon = iconMap[benefit.icon] || Globe;
              const isEven = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className={`lg:col-span-5 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                      <img src={benefit.image} alt={benefit.title} className="w-full h-[280px] object-cover" data-tina-field={tinaField(benefit, 'image')} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-40 mix-blend-multiply`} />
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                          <Icon size={26} className="text-white" strokeWidth={2.2} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="text-5xl font-black text-white/25">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border shadow-soft mb-4">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.color}`} />
                      <span className="text-[10px] font-bold tracking-wider uppercase text-txt-muted">Benefit {i + 1}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight mb-4" data-tina-field={tinaField(benefit, 'title')}>{benefit.title}</h3>
                    <p className="text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(benefit, 'description')}>{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. LICENSE TYPES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-950 via-purple-950 to-violet-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-500/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <FileText size={14} className="text-violet-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.licensesSection, 'badge')}>{data.licensesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.licensesSection, 'title')}>
              {data.licensesSection.title.replace(data.licensesSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">{data.licensesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/75 font-medium" data-tina-field={tinaField(data.licensesSection, 'subtitle')}>{data.licensesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data.licensesSection.items.map((license: any, i: number) => {
              const Icon = iconMap[license.icon] || Store;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${license.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500 p-5">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${license.color}`} />
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${license.color} shadow-md`}>
                        <span className="text-[9px] font-black text-white uppercase tracking-widest" data-tina-field={tinaField(license, 'code')}>{license.code}</span>
                      </div>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1.5 leading-tight" data-tina-field={tinaField(license, 'title')}>{license.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(license, 'description')}>{license.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. OFFICE SOLUTIONS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 shadow-soft mb-6">
              <Building2 size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-violet-700" data-tina-field={tinaField(data.officeOptionsSection, 'badge')}>{data.officeOptionsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.officeOptionsSection, 'title')}>
              {data.officeOptionsSection.title.replace(data.officeOptionsSection.titleHighlight, '')}
              <span className="gradient-text">{data.officeOptionsSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.officeOptionsSection, 'subtitle')}>{data.officeOptionsSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.officeOptionsSection.items.map((option: any, i: number) => {
              const Icon = iconMap[option.icon] || Monitor;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${option.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(option, 'title')}>{option.title}</h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(option, 'description')}>{option.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. COMPLIANCE SERVICES (DARK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-violet-950 via-purple-950 to-violet-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <ShieldCheck size={14} className="text-violet-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.complianceSection, 'badge')}>{data.complianceSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.complianceSection, 'title')}>
              {data.complianceSection.title.replace(data.complianceSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">{data.complianceSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/75 font-medium" data-tina-field={tinaField(data.complianceSection, 'subtitle')}>{data.complianceSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {data.complianceSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex gap-4 group">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={20} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-base font-black text-white mb-1.5 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. WHY IDEAL FOR GLOBAL ENTREPRENEURS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Globe size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.whyIdealSection, 'badge')}>{data.whyIdealSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyIdealSection, 'title')}>
              {data.whyIdealSection.title.replace(data.whyIdealSection.titleHighlight, '')}
              <span className="gradient-text">{data.whyIdealSection.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.whyIdealSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Globe;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_25px_70px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. WHO SHOULD SETUP === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 shadow-soft mb-6">
              <Users size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-violet-700" data-tina-field={tinaField(data.whoShouldSection, 'badge')}>{data.whoShouldSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whoShouldSection, 'title')}>
              {data.whoShouldSection.title.replace(data.whoShouldSection.titleHighlight, '')}
              <span className="gradient-text">{data.whoShouldSection.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {data.whoShouldSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Code;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={20} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm font-black text-white leading-tight drop-shadow-md" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. HOW WE HELP — Timeline === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <ClipboardCheck size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.howWeHelpSection, 'badge')}>{data.howWeHelpSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.howWeHelpSection, 'title')}>
              {data.howWeHelpSection.title.replace(data.howWeHelpSection.titleHighlight, '')}
              <span className="gradient-text">{data.howWeHelpSection.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-200 via-purple-200 to-fuchsia-200" />

            {data.howWeHelpSection.steps.map((step: any, i: number) => {
              const Icon = iconMap[step.icon] || MessageCircle;
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: isLeft ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className={`relative flex items-center gap-8 mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group ${!isLeft ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} h-full w-1 bg-gradient-to-b ${step.color}`} />
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-[10px] font-black text-txt-muted uppercase tracking-widest">Step {step.step}</span>
                      </div>
                      <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(step, 'title')}>{step.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(step, 'description')}>{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex relative z-10 flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} shadow-lg ring-4 ring-white`} />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 11. COST & TIMELINE === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-950 via-purple-950 to-violet-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-500/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <DollarSign size={14} className="text-violet-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.costTimelineSection, 'badge')}>{data.costTimelineSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.costTimelineSection, 'title')}>
              {data.costTimelineSection.title.replace(data.costTimelineSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">{data.costTimelineSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/75 font-medium" data-tina-field={tinaField(data.costTimelineSection, 'subtitle')}>{data.costTimelineSection.subtitle}</p>
          </motion.div>

          {/* Cost Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {data.costTimelineSection.costBreakdown.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
                <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 overflow-hidden shadow-2xl p-5 hover:-translate-y-2 transition-all duration-500">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-3" data-tina-field={tinaField(item, 'item')}>{item.item}</div>
                  <div className="text-2xl font-black text-white leading-none mb-1">AED</div>
                  <div className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent leading-none mb-2`} data-tina-field={tinaField(item, 'cost')}>{item.cost}</div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest pt-3 border-t border-white/10" data-tina-field={tinaField(item, 'notes')}>{item.notes}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Year 1 Total */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto mb-14">
            <div className="relative rounded-3xl bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 backdrop-blur-2xl border-2 border-violet-400/40 p-6 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg">
                  <DollarSign size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-violet-300 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.costTimelineSection.year1Total, 'label')}>{data.costTimelineSection.year1Total.label}</div>
                  <div className="text-sm font-bold text-white/70" data-tina-field={tinaField(data.costTimelineSection.year1Total, 'subtext')}>{data.costTimelineSection.year1Total.subtext}</div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-[10px] font-black text-violet-300 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.costTimelineSection.year1Total, 'fromLabel')}>{data.costTimelineSection.year1Total.fromLabel}</div>
                <div className="text-3xl md:text-4xl font-black text-white leading-none">
                  AED <span className="text-violet-300">{data.costTimelineSection.year1Total.minValue}</span> – <span className="text-violet-300">{data.costTimelineSection.year1Total.maxValue}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <Timer size={14} className="text-violet-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.costTimelineSection, 'timelineBadge')}>{data.costTimelineSection.timelineBadge}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight" data-tina-field={tinaField(data.costTimelineSection, 'timelineTitle')}>{data.costTimelineSection.timelineTitle}</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.costTimelineSection.timeline.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 overflow-hidden group hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${item.color} shadow-md mb-4`}>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest" data-tina-field={tinaField(item, 'day')}>{item.day}</span>
                </div>
                <h4 className="text-sm font-black text-white leading-tight mb-2" data-tina-field={tinaField(item, 'title')}>{item.title}</h4>
                <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1" data-tina-field={tinaField(data.costTimelineSection, 'comparisonTitle')}>{data.costTimelineSection.comparisonTitle}</h3>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest" data-tina-field={tinaField(data.costTimelineSection, 'comparisonSubtitle')}>{data.costTimelineSection.comparisonSubtitle}</p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-2xl">
              <div className="grid grid-cols-4 gap-2 p-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-b border-white/10">
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest">{data.costTimelineSection.comparisonHeaders.factor}</div>
                <div className="text-[10px] font-black text-violet-300 uppercase tracking-widest text-center">{data.costTimelineSection.comparisonHeaders.ifza}</div>
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest text-center">{data.costTimelineSection.comparisonHeaders.rakez}</div>
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest text-center">{data.costTimelineSection.comparisonHeaders.meydan}</div>
              </div>

              {data.costTimelineSection.comparison.map((row: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }} className={`grid grid-cols-4 gap-2 p-4 items-center ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-b-0`}>
                  <div className="text-xs font-bold text-white/70" data-tina-field={tinaField(row, 'factor')}>{row.factor}</div>
                  <div className="text-xs font-black text-violet-300 text-center" data-tina-field={tinaField(row, 'ifza')}>{row.ifza}</div>
                  <div className="text-xs font-bold text-white/60 text-center" data-tina-field={tinaField(row, 'rakez')}>{row.rakez}</div>
                  <div className="text-xs font-bold text-white/60 text-center" data-tina-field={tinaField(row, 'meydan')}>{row.meydan}</div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xs text-white/50 font-medium mt-4 max-w-2xl mx-auto">
              <span className="font-black text-white/70" data-tina-field={tinaField(data.costTimelineSection, 'verdictLabel')}>{data.costTimelineSection.verdictLabel}</span> {data.costTimelineSection.verdictText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* === 12. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-violet-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqsSection, 'badge')}>{data.faqsSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqsSection, 'title')}>
                {data.faqsSection.title.replace(data.faqsSection.titleHighlight, '')}
                <span className="gradient-text">{data.faqsSection.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqsSection, 'subtitle')}>{data.faqsSection.subtitle}</p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Rocket size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'title')}>{data.faqsSection.sidebarCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'text')}>{data.faqsSection.sidebarCard.text}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink(data.faqsSection.sidebarCard.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-violet-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
                      <WhatsAppIcon size={14} className="text-emerald-600" />
WhatsApp
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all duration-300">
                      <Phone size={14} />Call Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {data.faqsSection.items.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-violet-200 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-purple-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 to-purple-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-violet-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-violet-400 group-open:to-purple-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-violet-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pl-20">
                    <div className="pt-2 border-t border-dashed border-border">
                      <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(faq, 'a')}>{faq.a}</p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 13. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-violet-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              {data.relatedServicesSection.title.replace(data.relatedServicesSection.titleHighlight, '')}
              <span className="gradient-text">{data.relatedServicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.relatedServicesSection, 'subtitle')}>{data.relatedServicesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {data.relatedServicesSection.items.map((service: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link to={`/services/${service.slug}`} className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-xl font-black text-white" data-tina-field={tinaField(service, 'title')}>{service.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4" data-tina-field={tinaField(service, 'description')}>{service.description}</p>
                    <div className="flex items-center gap-2 text-sm font-black">
                      <span className="gradient-text">Read More</span>
                      <ArrowRight size={14} className="text-violet-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-950/90 via-purple-900/70 to-violet-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.finalCTA, 'badge')}>{data.finalCTA.badge}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg" data-tina-field={tinaField(data.finalCTA, 'title')}>
                    {data.finalCTA.title.replace(data.finalCTA.titleHighlight, '')}
                    <span className="text-violet-300">{data.finalCTA.titleHighlight}</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>{data.finalCTA.subtitle}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {data.finalCTA.chips.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-violet-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink(data.finalCTA.whatsappCardMessage)} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <WhatsAppIcon size={22} className="text-emerald-600" />

                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-violet-600 hover:text-violet-700 transition">
                          Get Directions<ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Clock size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Working Hours</p>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Mon – Fri</span><span className="font-black text-[#0A0F1F]">9 AM – 6 PM</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Saturday</span><span className="font-black text-[#0A0F1F]">10 AM – 5 PM</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Sunday</span><span className="font-black text-red-500">Closed</span></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}