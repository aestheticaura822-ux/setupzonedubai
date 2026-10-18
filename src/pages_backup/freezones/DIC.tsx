// File: src/pages/freezones/DIC.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Target, Search, Rocket,
  Store, Package, FileCheck, MapPin,
  BadgeCheck, Layers, ShoppingCart, CreditCard,
  UserCheck, RefreshCw, Cpu, Monitor, ClipboardCheck,
  Megaphone, Code, Smartphone, Database, Wifi, Server, Cloud,
  Palette, Terminal, Binary,
  Bot, Camera,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import dicData from '../../content/freezones/dubai-internet-city.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const iconMap: any = {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Phone, MessageCircle, HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Target, Search, Rocket,
  Store, Package, FileCheck, MapPin,
  BadgeCheck, Layers, ShoppingCart, CreditCard,
  UserCheck, RefreshCw, Cpu, Monitor, ClipboardCheck,
  Megaphone, Code, Smartphone, Database, Wifi, Server, Cloud,
  Palette, Terminal, Binary, Bot, Camera,
};

export default function DIC({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.freezones || dicData;

  const {
    hero,
    stats,
    dashboardCard,
    benefitsSection,
    licensesSection,
    facilitiesSection,
    howWeHelpSection,
    digitalScaleSection,
    activitiesCloudSection,
    faqsSection,
    relatedServicesSection,
    finalCTA,
  } = data as any;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero.image})` }} data-tina-field={tinaField(hero, 'image')} />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/95 via-blue-900/75 to-cyan-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Cpu size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block">
          <Code size={100} className="text-white" />
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
                <Cpu size={14} className="text-cyan-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(hero, 'badge')}>{hero.badge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(hero, 'title')}>
                {hero.title.replace(hero.titleHighlight, '')}
                <span className="text-cyan-300">{hero.titleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(hero, 'subtitle')}>
                {hero.subtitle}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href={hero.ctaPrimaryLink || '#contact'} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
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
                    <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Tech Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-blue-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-indigo-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal size={16} className="text-white" strokeWidth={2.5} />
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
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <Code size={22} className="text-white" strokeWidth={2.5} />
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
                          <div key={i} className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                            <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1" data-tina-field={tinaField(m, 'label')}>{m.label}</div>
                            <div className={`text-lg font-black ${m.color}`} data-tina-field={tinaField(m, 'value')}>{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Terminal size={18} className="text-cyan-500" />
                        <Code size={18} className="text-blue-500" />
                        <Database size={18} className="text-indigo-500" />
                        <Cloud size={18} className="text-sky-500" />
                        <Wifi size={18} className="text-violet-500" />
                        <Bot size={18} className="text-purple-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
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
              const Icon = iconMap[stat.icon] || Target;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)] hover:-translate-y-1">
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

      {/* === 3. BENEFITS — Bento Grid === */}
      {benefitsSection && (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
                <Award size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-700" data-tina-field={tinaField(benefitsSection, 'badge')}>{benefitsSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(benefitsSection, 'title')}>
                {benefitsSection.title.replace(benefitsSection.titleHighlight, '')}
                <span className="gradient-text">{benefitsSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(benefitsSection, 'subtitle')}>{benefitsSection.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {benefitsSection.smallCards?.map((card: any, i: number) => {
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

              {benefitsSection.largeCard && (() => {
                const Icon = iconMap[benefitsSection.largeCard.icon] || UserCheck;
                return (
                  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className={`lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-br ${benefitsSection.largeCard.color} p-7 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                      <Users size={160} className="text-white" />
                    </motion.div>
                    <div className="relative h-full flex flex-col justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                        <Icon size={30} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(benefitsSection.largeCard, 'title')}>{benefitsSection.largeCard.title}</h3>
                        <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-md" data-tina-field={tinaField(benefitsSection.largeCard, 'description')}>{benefitsSection.largeCard.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}

              {benefitsSection.smallCard2 && (() => {
                const Icon = iconMap[benefitsSection.smallCard2.icon] || MapPin;
                return (
                  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className={`lg:col-span-5 group relative p-6 rounded-3xl bg-gradient-to-br ${benefitsSection.smallCard2.color} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                      <MapPin size={140} className="text-white" />
                    </motion.div>
                    <div className="relative h-full flex flex-col justify-between min-h-[280px]">
                      <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(benefitsSection.smallCard2, 'title')}>{benefitsSection.smallCard2.title}</h3>
                        <p className="text-sm text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(benefitsSection.smallCard2, 'description')}>{benefitsSection.smallCard2.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </div>
        </section>
      )}

      {/* === 4. LICENSE TYPES === */}
      {licensesSection && (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <FileText size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(licensesSection, 'badge')}>{licensesSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(licensesSection, 'title')}>
                {licensesSection.title.replace(licensesSection.titleHighlight, '')}
                <span className="gradient-text">{licensesSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(licensesSection, 'subtitle')}>{licensesSection.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* === 5. FACILITIES === */}
      {facilitiesSection && (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
                <Building2 size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-700" data-tina-field={tinaField(facilitiesSection, 'badge')}>{facilitiesSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(facilitiesSection, 'title')}>
                {facilitiesSection.title.replace(facilitiesSection.titleHighlight, '')}
                <span className="gradient-text">{facilitiesSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(facilitiesSection, 'subtitle')}>{facilitiesSection.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {facilitiesSection.items?.map((facility: any, i: number) => {
                const Icon = iconMap[facility.icon] || Building2;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative rounded-3xl bg-white border border-border overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                    <div className="relative h-40 overflow-hidden">
                      <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" data-tina-field={tinaField(facility, 'image')} />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/70 to-blue-700/60 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-11 h-11 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                          <Icon size={20} className="text-white" strokeWidth={2.2} />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(facility, 'title')}>{facility.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(facility, 'description')}>{facility.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === 6. HOW WE HELP === */}
      {howWeHelpSection && (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <ClipboardCheck size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(howWeHelpSection, 'badge')}>{howWeHelpSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(howWeHelpSection, 'title')}>
                {howWeHelpSection.title.replace(howWeHelpSection.titleHighlight, '')}
                <span className="gradient-text">{howWeHelpSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(howWeHelpSection, 'subtitle')}>{howWeHelpSection.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {howWeHelpSection.steps?.map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || FileText;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                    <div className="absolute top-3 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className={`text-6xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent leading-none`}>{item.step}</span>
                    </div>
                    <div className="relative mb-4">
                      <div className={`absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} blur-md opacity-40 group-hover:opacity-70 transition-opacity`} />
                      <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <h3 className="relative text-base font-black text-[#0A0F1F] mb-2 leading-tight pr-12" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="relative text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </motion.div>
                );
              })}

              {howWeHelpSection.ctaCard && (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="group relative p-6 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative h-full flex flex-col justify-between min-h-[200px]">
                    <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                      <Rocket size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white mb-2 leading-tight" data-tina-field={tinaField(howWeHelpSection.ctaCard, 'title')}>{howWeHelpSection.ctaCard.title}</h3>
                      <a href={getWhatsAppLink(howWeHelpSection.ctaCard.whatsappMessage || '')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                        {howWeHelpSection.ctaCard.ctaText}
                        <ArrowRight size={12} strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* === 7. DIGITAL SCALE (DARK) === */}
      {digitalScaleSection && (
        <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: `url(${hero.image})` }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-indigo-600 opacity-30 blur-[80px] rounded-full" />
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <img src={digitalScaleSection.image} alt={digitalScaleSection.title} className="w-full h-[520px] object-cover" data-tina-field={tinaField(digitalScaleSection, 'image')} />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                        <TrendingUp size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(digitalScaleSection, 'imageBadgeTitle')}>{digitalScaleSection.imageBadgeTitle}</div>
                        <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(digitalScaleSection, 'imageBadgeText')}>{digitalScaleSection.imageBadgeText}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                  <Rocket size={14} className="text-cyan-300" />
                  <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(digitalScaleSection, 'badge')}>{digitalScaleSection.badge}</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6" data-tina-field={tinaField(digitalScaleSection, 'title')}>
                  {digitalScaleSection.title.replace(digitalScaleSection.titleHighlight, '')}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">{digitalScaleSection.titleHighlight}</span>
                </h2>

                <p className="text-base text-white/80 font-medium leading-relaxed mb-6" data-tina-field={tinaField(digitalScaleSection, 'intro')}>{digitalScaleSection.intro}</p>

                <div className="space-y-2.5">
                  {digitalScaleSection.items?.map((item: any, i: number) => {
                    const Icon = iconMap[item.icon] || TrendingUp;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon size={16} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-sm font-black text-white mb-0.5" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                          <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* === 8. ACTIVITIES CLOUD === */}
      {activitiesCloudSection && (
        <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
                <Target size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-700" data-tina-field={tinaField(activitiesCloudSection, 'badge')}>{activitiesCloudSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(activitiesCloudSection, 'title')}>
                {activitiesCloudSection.title.replace(activitiesCloudSection.titleHighlight, '')}
                <span className="gradient-text">{activitiesCloudSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(activitiesCloudSection, 'subtitle')}>{activitiesCloudSection.subtitle}</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {activitiesCloudSection.items?.map((activity: any, i: number) => {
                const Icon = iconMap[activity.icon] || Code;
                return (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 border border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-default">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                        <Icon size={12} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold text-[#0A0F1F]" data-tina-field={tinaField(activity, 'label')}>{activity.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* === 9. FAQ === */}
      {faqsSection && (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                  <MessageCircle size={14} className="text-cyan-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(faqsSection, 'badge')}>{faqsSection.badge}</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(faqsSection, 'title')}>
                  {faqsSection.title.replace(faqsSection.titleHighlight, '')}
                  <span className="gradient-text">{faqsSection.titleHighlight}</span>
                </h2>

                <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(faqsSection, 'subtitle')}>{faqsSection.subtitle}</p>

                <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                    <Cpu size={80} className="text-white" />
                  </motion.div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                      <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                    <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our DIC specialists.</p>
                    <div className="flex flex-wrap gap-3">
                      <a href={getWhatsAppLink('Hi! I have a question about Dubai Internet City.')} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                {faqsSection.items?.map((faq: any, i: number) => (
                  <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                    <summary className="flex items-start gap-4 p-6 list-none">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                        <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-cyan-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                      </div>
                      <div className="relative flex-shrink-0 pt-1">
                        <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-cyan-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                          <span className="text-cyan-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {relatedServicesSection && (
            <>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
                  {relatedServicesSection.title.replace(relatedServicesSection.titleHighlight, '')}
                  <span className="gradient-text">{relatedServicesSection.titleHighlight}</span>
                </h2>
                <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(relatedServicesSection, 'subtitle')}>{relatedServicesSection.subtitle}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {relatedServicesSection.items?.map((service: any, i: number) => (
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
                          <ArrowRight size={14} className="text-cyan-600 group-hover:translate-x-1 transition-transform" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-blue-900/70 to-indigo-900/50" />
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
                      <span className="text-cyan-300">{finalCTA.titleHighlight}</span>
                    </h2>

                    <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(finalCTA, 'subtitle')}>{finalCTA.subtitle}</p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <a href={getWhatsAppLink(finalCTA.whatsappMessage || '')} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
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
                          <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
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
                        <ArrowRight size={18} className="text-txt-muted group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.a>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Building2 size={22} className="text-white" strokeWidth={2.2} />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1" data-tina-field={tinaField(finalCTA.office, 'label')}>{finalCTA.office.label}</p>
                          <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1" data-tina-field={tinaField(finalCTA.office, 'line1')}>{finalCTA.office.line1}</p>
                          <p className="text-xs text-[#64748B] font-medium leading-snug" data-tina-field={tinaField(finalCTA.office, 'line2')}>{finalCTA.office.line2}</p>
                          <a href={finalCTA.office.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-cyan-600 hover:text-cyan-700 transition">
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