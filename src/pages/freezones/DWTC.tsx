// File: src/pages/freezones/DWTC.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Rocket,
  Star, Crown, MapPin,
  BadgeCheck, CreditCard,
  UserCheck, Plane, Calculator,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import dwtcData from '../../content/freezones/dwtc-free-zone.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
const iconMap: any = {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Rocket,
  Star, Crown, MapPin,
  BadgeCheck, CreditCard,
  UserCheck, Plane, Calculator,
};

export default function DWTC({ tinaData }: { tinaData?: any }) {
  const { language } = useLanguage();
  const dwtcFallback = loadContent('freezones/dwtc-free-zone', language);
  const data = tinaData?.data?.freeZones || dwtcFallback;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} data-tina-field={tinaField(data, 'heroImage')} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-indigo-900/75 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 end-[35%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">DWTC</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Crown size={14} className="text-indigo-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data, 'heroTitle')}>
                {data.heroTitle.replace(data.heroTitleHighlight, '')}
                <span className="text-indigo-300">{data.heroTitleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data, 'heroSubtitle')}>{data.heroSubtitle}</motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in DWTC Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.heroChips.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.color}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#0A0F1F] leading-none mb-0.5" data-tina-field={tinaField(stat, 'value')}>{stat.value}</div>
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

      {/* === 3. WHY DWTC — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Award size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700" data-tina-field={tinaField(data.whyDwtcSection, 'badge')}>{data.whyDwtcSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyDwtcSection, 'title')}>
              {data.whyDwtcSection.title.replace(data.whyDwtcSection.titleHighlight, '')}
              <span className="gradient-text">{data.whyDwtcSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whyDwtcSection, 'subtitle')}>{data.whyDwtcSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* 3 small cards */}
            {data.whyDwtcSection.smallCards.map((card: any, i: number) => {
              const Icon = iconMap[card.icon] || MapPin;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(card, 'title')}>{card.title}</h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(card, 'description')}>{card.description}</p>
                </motion.div>
              );
            })}

            {/* Large card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-8 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-full min-h-[300px]">
                <img src={data.whyDwtcSection.largeCard.image} alt={data.whyDwtcSection.largeCard.title} className="absolute inset-0 w-full h-full object-cover" data-tina-field={tinaField(data.whyDwtcSection.largeCard, 'image')} />
                <div className={`absolute inset-0 bg-gradient-to-br ${data.whyDwtcSection.largeCard.color} opacity-80 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative p-7 h-full flex flex-col justify-between min-h-[300px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                    <Crown size={30} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(data.whyDwtcSection.largeCard, 'title')}>{data.whyDwtcSection.largeCard.title}</h3>
                    <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl" data-tina-field={tinaField(data.whyDwtcSection.largeCard, 'description')}>{data.whyDwtcSection.largeCard.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transport card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className={`lg:col-span-4 group relative p-6 rounded-3xl bg-gradient-to-br ${data.whyDwtcSection.transportCard.color} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -end-6 opacity-15">
                <Plane size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between min-h-[280px]">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Plane size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(data.whyDwtcSection.transportCard, 'title')}>{data.whyDwtcSection.transportCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(data.whyDwtcSection.transportCard, 'description')}>{data.whyDwtcSection.transportCard.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. SERVICES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Briefcase size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.servicesSection, 'badge')}>{data.servicesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.servicesSection, 'title')}>
              {data.servicesSection.title.replace(data.servicesSection.titleHighlight, '')}
              <span className="gradient-text">{data.servicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.servicesSection, 'subtitle')}>{data.servicesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.servicesSection.items.map((service: any, i: number) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(service, 'title')}>{service.title}</h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(service, 'description')}>{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. PACKAGES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 start-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <DollarSign size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700" data-tina-field={tinaField(data.packagesSection, 'badge')}>{data.packagesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.packagesSection, 'title')}>
              {data.packagesSection.title.replace(data.packagesSection.titleHighlight, '')}
              <span className="gradient-text">{data.packagesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.packagesSection, 'subtitle')}>{data.packagesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.packagesSection.items.map((pkg: any, i: number) => {
              const Icon = iconMap[pkg.icon] || Globe;
              const isHighlighted = pkg.highlighted;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }} className={`group relative ${isHighlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}>
                  {isHighlighted && (
                    <div className={`absolute -inset-2 rounded-[36px] bg-gradient-to-r ${pkg.color} opacity-40 blur-2xl`} />
                  )}

                  <div className={`relative h-full rounded-[28px] bg-white overflow-hidden transition-all duration-500 group-hover:-translate-y-2 ${
                    isHighlighted
                      ? 'border-2 border-indigo-300 shadow-[0_25px_80px_rgba(99,102,241,0.25)]'
                      : 'border border-border shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)]'
                  }`}>
                    <div className={`h-1.5 bg-gradient-to-r ${pkg.color}`} />

                    <div className="relative p-7">
                      {pkg.badge && (
                        <div className="absolute top-5 end-5">
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${pkg.color} shadow-lg`}>
                            {pkg.badge === 'Most Popular' && <Star size={11} className="text-white" strokeWidth={3} fill="white" />}
                            {pkg.badge === 'Best Value' && <BadgeCheck size={11} className="text-white" strokeWidth={3} />}
                            <span className="text-[10px] font-black uppercase tracking-widest text-white" data-tina-field={tinaField(pkg, 'badge')}>{pkg.badge}</span>
                          </div>
                        </div>
                      )}

                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-lg mb-5`}>
                        <Icon size={24} className="text-white" strokeWidth={2.2} />
                      </div>

                      <h3 className="text-xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-2" data-tina-field={tinaField(pkg, 'name')}>{pkg.name}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-6" data-tina-field={tinaField(pkg, 'description')}>{pkg.description}</p>

                      <div className="flex items-baseline gap-1.5 mb-6">
                        <span className="text-sm font-black text-[#64748B]">from</span>
                        <span className="text-xs font-bold text-[#94A3B8]" data-tina-field={tinaField(pkg, 'currency')}>{pkg.currency}</span>
                        <span className="text-4xl md:text-5xl font-black text-[#0A0F1F] leading-none tracking-tight" data-tina-field={tinaField(pkg, 'price')}>{pkg.price}</span>
                      </div>

                      <a
                        href={getWhatsAppLink(`Hi! I'm interested in the "${pkg.name}" package (${pkg.currency} ${pkg.price}).`)}
                        target="_blank"
                        rel="noreferrer"
                        className={`group/btn relative flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 overflow-hidden ${
                          isHighlighted
                            ? 'bg-gradient-to-r from-slate-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                            : 'bg-white border-2 border-border text-[#0A0F1F] hover:border-indigo-300 hover:scale-105'
                        }`}
                      >
                        <span className="relative flex items-center gap-2">
                          Get Started
                          <ArrowRight size={16} className="rtl:rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. WHY CHOOSE US — Numbered List === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.whyChooseUsSection, 'badge')}>{data.whyChooseUsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyChooseUsSection, 'title')}>
              {data.whyChooseUsSection.title.replace(data.whyChooseUsSection.titleHighlight, '')}
              <span className="gradient-text">{data.whyChooseUsSection.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-5">
            {data.whyChooseUsSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Rocket;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative flex items-center gap-6 p-6 rounded-3xl bg-white border border-border hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:-translate-x-1 transition-all duration-500 overflow-hidden">
                  <div className="flex-shrink-0 relative">
                    <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-slate-400 to-indigo-600 bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-1 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>

                  <ArrowRight size={16} className="rtl:rotate-180 hidden md:block text-[#64748B] group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 start-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqsSection, 'badge')}>{data.faqsSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqsSection, 'title')}>
                {data.faqsSection.title.replace(data.faqsSection.titleHighlight, '')}
                <span className="gradient-text">{data.faqsSection.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqsSection, 'subtitle')}>
                {data.faqsSection.subtitle}
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-slate-600 via-indigo-600 to-violet-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -end-3 opacity-20">
                  <Building2 size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'title')}>{data.faqsSection.sidebarCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'text')}>{data.faqsSection.sidebarCard.text}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink(data.faqsSection.sidebarCard.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-indigo-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative rounded-3xl bg-white border border-border hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute start-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-400 to-indigo-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 start-0 end-0 h-[2px] bg-gradient-to-r from-slate-400 to-indigo-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pe-4 group-hover:text-indigo-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-slate-500 group-open:to-indigo-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-indigo-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 ps-20">
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

      
    </div>
  );
}