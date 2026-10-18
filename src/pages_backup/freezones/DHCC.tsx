// File: src/pages/freezones/DHCC.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2,
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Rocket,
  Package, FileCheck, MapPin, UserCheck,
  BadgeCheck, ShoppingCart, CreditCard,
  Monitor, Stethoscope, Pill, Brain,
  HeartPulse, Activity, Ambulance, Smile,
  Dna, FileBadge,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import dhccData from '../../content/freezones/dhcc-free-zone.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const iconMap: any = {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2,
  Briefcase, ShieldCheck, Phone, MessageCircle, HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Rocket,
  Package, FileCheck, MapPin, UserCheck,
  BadgeCheck, ShoppingCart, CreditCard,
  Monitor, Stethoscope, Pill, Brain,
  HeartPulse, Activity, Ambulance, Smile,
  Dna, FileBadge,
};

export default function DHCC({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.freezones || dhccData;

  const {
    hero,
    stats,
    dashboardCard,
    whyDhcc,
    whoCanOpenSection,
    licensesSection,
    documentsSectionDhcc,
    setupProcessSectionDhcc,
    whyTrustUsSection,
    faqs,
    relatedServices,
    finalCTA,
  } = data as any;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero.image})` }} data-tina-field={tinaField(hero, 'image')} />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-cyan-900/75 to-teal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <HeartPulse size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>{hero.breadcrumbParent}</span><span>/</span>
                <span className="text-white font-bold">{hero.breadcrumbLabel}</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Stethoscope size={14} className="text-teal-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(hero, 'badge')}>{hero.badge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(hero, 'title')}>
                {hero.title.replace(hero.titleHighlight, '')}
                <span className="text-teal-300">{hero.titleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(hero, 'subtitle')}>{hero.subtitle}</motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href={hero.ctaPrimaryLink || '#contact'} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-teal-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  {hero.ctaPrimaryText}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink(hero.ctaSecondaryMessage || '')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
{hero.ctaSecondaryText}
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {hero.badges?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-teal-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Medical Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-cyan-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-sky-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HeartPulse size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest" data-tina-field={tinaField(dashboardCard, 'title')}>{dashboardCard.title}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white/90" />
                        <span className="w-2 h-2 rounded-full bg-white/60" />
                        <span className="w-2 h-2 rounded-full bg-white/30" />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg">
                          <Stethoscope size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest" data-tina-field={tinaField(dashboardCard, 'totalLabel')}>{dashboardCard.totalLabel}</div>
                          <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(dashboardCard, 'totalValue')}>{dashboardCard.totalValue}</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest" data-tina-field={tinaField(dashboardCard, 'statusBadge')}>{dashboardCard.statusBadge}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {dashboardCard.metrics?.map((m: any, i: number) => (
                          <div key={i} className="p-3 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                            <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1" data-tina-field={tinaField(m, 'label')}>{m.label}</div>
                            <div className={`text-lg font-black ${m.color}`} data-tina-field={tinaField(m, 'value')}>{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <HeartPulse size={18} className="text-teal-500" />
                        <Stethoscope size={18} className="text-cyan-500" />
                        <Pill size={18} className="text-sky-500" />
                        <Brain size={18} className="text-teal-600" />
                        <Dna size={18} className="text-cyan-600" />
                        <Activity size={18} className="text-sky-600" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
                          <ArrowRight size={12} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
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
            {stats?.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.color}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-xl font-black text-[#0A0F1F] leading-none mb-0.5" data-tina-field={tinaField(stat, 'value')}>{stat.value}</div>
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

      {/* === 3. WHY DHCC — Bento Grid === */}
      {whyDhcc && (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-200 shadow-soft mb-6">
                <Award size={14} className="text-teal-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-teal-700" data-tina-field={tinaField(whyDhcc, 'badge')}>{whyDhcc.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(whyDhcc, 'title')}>
                {whyDhcc.title.replace(whyDhcc.titleHighlight, '')}
                <span className="gradient-text">{whyDhcc.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(whyDhcc, 'subtitle')}>{whyDhcc.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {whyDhcc.smallCards?.map((card: any, i: number) => {
                const Icon = iconMap[card.icon] || Globe;
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

              {whyDhcc.largeCard && (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-8 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-full min-h-[300px]">
                    <img src={whyDhcc.largeCard.image} alt={whyDhcc.largeCard.title} className="absolute inset-0 w-full h-full object-cover" data-tina-field={tinaField(whyDhcc.largeCard, 'image')} />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 via-cyan-600/80 to-sky-700/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="relative p-7 h-full flex flex-col justify-between min-h-[300px]">
                      <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                        <HeartPulse size={30} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(whyDhcc.largeCard, 'title')}>{whyDhcc.largeCard.title}</h3>
                        <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl" data-tina-field={tinaField(whyDhcc.largeCard, 'description')}>{whyDhcc.largeCard.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {whyDhcc.smallCard2 && (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className={`lg:col-span-4 group relative p-6 rounded-3xl bg-gradient-to-br ${whyDhcc.smallCard2.color} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                    <Building2 size={140} className="text-white" />
                  </motion.div>
                  <div className="relative h-full flex flex-col justify-between min-h-[280px]">
                    <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                      <Building2 size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(whyDhcc.smallCard2, 'title')}>{whyDhcc.smallCard2.title}</h3>
                      <p className="text-sm text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(whyDhcc.smallCard2, 'description')}>{whyDhcc.smallCard2.description}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* === 4. WHO CAN OPEN — Chip Cards === */}
      {whoCanOpenSection && (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Users size={14} className="text-teal-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(whoCanOpenSection, 'badge')}>{whoCanOpenSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(whoCanOpenSection, 'title')}>
                {whoCanOpenSection.title.replace(whoCanOpenSection.titleHighlight, '')}
                <span className="gradient-text">{whoCanOpenSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(whoCanOpenSection, 'subtitle')}>{whoCanOpenSection.subtitle}</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {whoCanOpenSection.items?.map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || Stethoscope;
                return (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-50 via-cyan-50 to-sky-50 border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300 cursor-default">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                        <Icon size={12} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold text-[#0A0F1F]" data-tina-field={tinaField(item, 'label')}>{item.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === 5. LICENSE TYPES === */}
      {licensesSection && (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-200 shadow-soft mb-6">
                <FileText size={14} className="text-teal-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-teal-700" data-tina-field={tinaField(licensesSection, 'badge')}>{licensesSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(licensesSection, 'title')}>
                {licensesSection.title.replace(licensesSection.titleHighlight, '')}
                <span className="gradient-text">{licensesSection.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {licensesSection.items?.map((license: any, i: number) => {
                const Icon = iconMap[license.icon] || FileText;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                    <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${license.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                    <div className="relative rounded-3xl bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <div className={`h-1.5 bg-gradient-to-r ${license.color}`} />

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-5">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                            <Icon size={26} className="text-white" strokeWidth={2.2} />
                          </div>
                          <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${license.color} shadow-md`}>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest" data-tina-field={tinaField(license, 'code')}>{license.code}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(license, 'title')}>{license.title}</h3>
                        <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4" data-tina-field={tinaField(license, 'description')}>{license.description}</p>

                        <div className="relative py-2 mb-3">
                          <div className="border-t-2 border-dashed border-border" />
                          <div className="absolute -left-8 -top-1 w-4 h-4 rounded-full bg-slate-100 border-r-2 border-dashed border-border" />
                          <div className="absolute -right-8 -top-1 w-4 h-4 rounded-full bg-slate-100 border-l-2 border-dashed border-border" />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">Available</span>
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${license.color} flex items-center justify-center`}>
                            <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === 6. DOCUMENTS REQUIRED === */}
      {documentsSectionDhcc && (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <FileCheck size={14} className="text-teal-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(documentsSectionDhcc, 'badge')}>{documentsSectionDhcc.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(documentsSectionDhcc, 'title')}>
                {documentsSectionDhcc.title.replace(documentsSectionDhcc.titleHighlight, '')}
                <span className="gradient-text">{documentsSectionDhcc.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl bg-white border border-border shadow-[0_15px_50px_rgba(20,184,166,0.1)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500" />

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documentsSectionDhcc.items?.map((doc: any, i: number) => {
                      const Icon = iconMap[doc.icon] || FileText;
                      return (
                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-teal-50/50 to-transparent hover:from-teal-50 hover:to-cyan-50/50 transition-all duration-300 border border-transparent hover:border-teal-200">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                              <Icon size={18} className="text-white" strokeWidth={2.5} />
                            </div>
                          </div>
                          <div className="flex-1 pt-0.5">
                            <h3 className="text-base font-black text-[#0A0F1F] leading-tight mb-1" data-tina-field={tinaField(doc, 'label')}>{doc.label}</h3>
                            <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(doc, 'description')}>{doc.description}</p>
                          </div>
                          <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* === 7. SETUP PROCESS — Horizontal Timeline === */}
      {setupProcessSectionDhcc && (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-200 shadow-soft mb-6">
                <Rocket size={14} className="text-teal-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-teal-700" data-tina-field={tinaField(setupProcessSectionDhcc, 'badge')}>{setupProcessSectionDhcc.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(setupProcessSectionDhcc, 'title')}>
                {setupProcessSectionDhcc.title.replace(setupProcessSectionDhcc.titleHighlight, '')}
                <span className="gradient-text">{setupProcessSectionDhcc.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(setupProcessSectionDhcc, 'subtitle')}>{setupProcessSectionDhcc.subtitle}</p>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-cyan-200 to-sky-200" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {setupProcessSectionDhcc.steps?.map((step: any, i: number) => {
                  const Icon = iconMap[step.icon] || Target;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
                      <div className="hidden lg:flex justify-center mb-6">
                        <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                            <Icon size={26} className="text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>

                      <div className="relative rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                        <div className="relative h-32 overflow-hidden lg:hidden">
                          <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" data-tina-field={tinaField(step, 'image')} />
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50 mix-blend-multiply`} />
                          <div className="absolute top-3 left-3">
                            <div className="w-10 h-10 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                              <Icon size={18} className="text-white" strokeWidth={2.5} />
                            </div>
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`text-[10px] font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent uppercase tracking-widest`} data-tina-field={tinaField(step, 'step')}>
                              Step {step.step}
                            </span>
                          </div>
                          <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(step, 'title')}>{step.title}</h3>
                          <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(step, 'description')}>{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* === 8. WHY TRUST US === */}
      {whyTrustUsSection && (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Award size={14} className="text-teal-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(whyTrustUsSection, 'badge')}>{whyTrustUsSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(whyTrustUsSection, 'title')}>
                {whyTrustUsSection.title.replace(whyTrustUsSection.titleHighlight, '')}
                <span className="gradient-text">{whyTrustUsSection.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-5">
              {whyTrustUsSection.items?.map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || Award;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative flex items-center gap-6 p-6 rounded-3xl bg-white border border-border hover:border-teal-200 hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] hover:-translate-x-1 transition-all duration-500 overflow-hidden">
                    <div className="flex-shrink-0 relative">
                      <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={22} className="text-white" strokeWidth={2.5} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-black text-[#0A0F1F] mb-1 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                    </div>

                    <ArrowRight size={16} className="hidden md:block text-[#64748B] group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === 9. FAQ === */}
      {faqs && (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                  <MessageCircle size={14} className="text-teal-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(faqs, 'badge')}>{faqs.badge}</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(faqs, 'title')}>
                  {faqs.title.replace(faqs.titleHighlight, '')}
                  <span className="gradient-text">{faqs.titleHighlight}</span>
                </h2>

                <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(faqs, 'subtitle')}>{faqs.subtitle}</p>

                <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-teal-500 via-cyan-600 to-sky-700 shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                    <HeartPulse size={80} className="text-white" />
                  </motion.div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                      <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                    <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our DHCC healthcare specialists.</p>
                    <div className="flex flex-wrap gap-3">
                      <a href={getWhatsAppLink('Hi! I have a question about Dubai Healthcare City Free Zone.')} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-teal-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                {faqs.items?.map((faq: any, i: number) => (
                  <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-teal-200 hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                    <summary className="flex items-start gap-4 p-6 list-none">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                        <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-teal-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                      </div>
                      <div className="relative flex-shrink-0 pt-1">
                        <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-teal-400 group-open:to-cyan-600 group-open:border-transparent transition-all duration-300">
                          <span className="text-teal-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      )}

      {/* === 10. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {relatedServices && (
            <>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
                  {relatedServices.title.replace(relatedServices.titleHighlight, '')}
                  <span className="gradient-text">{relatedServices.titleHighlight}</span>
                </h2>
                <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(relatedServices, 'subtitle')}>{relatedServices.subtitle}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {relatedServices.items?.map((service: any, i: number) => (
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
                          <ArrowRight size={14} className="text-teal-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {finalCTA && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-cyan-900/70 to-teal-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

              <div className="relative p-8 md:p-14 lg:p-16">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                      <Sparkles size={14} className="text-white" />
                      <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(finalCTA, 'badge')}>{finalCTA.badge}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg" data-tina-field={tinaField(finalCTA, 'title')}>
                      {finalCTA.title.replace(finalCTA.titleHighlight, '')}
                      <span className="text-teal-300">{finalCTA.titleHighlight}</span>
                    </h2>

                    <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(finalCTA, 'subtitle')}>{finalCTA.subtitle}</p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <a href={getWhatsAppLink(finalCTA.whatsappMessage || '')} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-teal-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                        <WhatsAppIcon size={16} className="text-emerald-600" />
{finalCTA.primaryCta}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href={finalCTA.phoneHref || 'tel:+971566556645'} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                        <Phone size={16} />Call Now
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {finalCTA.badges?.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                          <CheckCircle2 size={12} className="text-teal-300" strokeWidth={3} />
                          <span className="font-semibold text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <motion.a href={getWhatsAppLink(finalCTA.whatsappMessage || '')} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <WhatsAppIcon size={22} className="text-emerald-600" />

                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                          <p className="text-base font-black text-[#0A0F1F]" data-tina-field={tinaField(finalCTA, 'phone')}>{finalCTA.phone}</p>
                          <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                        </div>
                        <ArrowRight size={18} className="text-txt-muted group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.a>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Building2 size={22} className="text-white" strokeWidth={2.2} />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1" data-tina-field={tinaField(finalCTA.office, 'label')}>{finalCTA.office.label}</p>
                          <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1" data-tina-field={tinaField(finalCTA.office, 'line1')}>{finalCTA.office.line1}</p>
                          <p className="text-xs text-[#64748B] font-medium leading-snug" data-tina-field={tinaField(finalCTA.office, 'line2')}>{finalCTA.office.line2}</p>
                          <a href={finalCTA.office.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-teal-600 hover:text-teal-700 transition">
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
                          <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1" data-tina-field={tinaField(finalCTA.hours, 'label')}>{finalCTA.hours.label}</p>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Mon – Fri</span><span className="font-black text-[#0A0F1F]">{finalCTA.hours.monFri}</span></div>
                            <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Saturday</span><span className="font-black text-[#0A0F1F]">{finalCTA.hours.saturday}</span></div>
                            <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Sunday</span><span className="font-black text-red-500">{finalCTA.hours.sunday}</span></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}