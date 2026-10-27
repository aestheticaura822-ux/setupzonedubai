// File: src/pages/free-zones/AjmanFreeZone.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store, Package, BarChart3,
  ShoppingCart, UserCheck, Percent, Cpu, Factory, Warehouse, Container, Truck, Ship,
  Anchor,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import ajmanData from '../../content/freezones/ajman-free-zone.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
const iconMap: any = {
  Clock, Globe, DollarSign, Target, Store, Briefcase, Factory, UserCheck,
  Package, Truck, Cpu, Warehouse, ShoppingCart, Building2, TrendingUp,
  BarChart3, Crown, Users, Percent, Ship, Anchor, Container, Award,
  Sparkles, ArrowRight, CheckCircle2, HomeIcon,
};

export default function AjmanFreeZone({ tinaData }: { tinaData?: any }) {
  const { language } = useLanguage();
  const ajmanFallback = loadContent('freezones/ajman-free-zone', language);
  const data = tinaData?.data?.freeZones || ajmanFallback;

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.hero.image})` }} data-tina-field={tinaField(data.hero, 'image')} />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-blue-900/75 to-sky-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 end-[35%] opacity-15 hidden lg:block">
          <Ship size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>{data.hero.breadcrumbParent}</span><span>/</span>
                <span className="text-white font-bold" data-tina-field={tinaField(data.hero, 'breadcrumbLabel')}>{data.hero.breadcrumbLabel}</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-sky-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.hero, 'badge')}>{data.hero.badge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data.hero, 'title')}>
                {data.hero.title.replace(data.hero.titleHighlight, '')}
                <span className="text-sky-300">{data.hero.titleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data.hero, 'subtitle')}>
                {data.hero.subtitle}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href={data.hero.ctaPrimaryLink} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  <span data-tina-field={tinaField(data.hero, 'ctaPrimaryText')}>{data.hero.ctaPrimaryText}</span>
                  <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink(data.hero.ctaSecondaryMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />

                  <span data-tina-field={tinaField(data.hero, 'ctaSecondaryText')}>{data.hero.ctaSecondaryText}</span>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.hero.badges.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-sky-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            
          </div>
        </div>
      </section>

      {/* ============ 2. STATS ============ */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {data.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Clock;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] hover:-translate-y-1">
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

      {/* ============ 3. GROW YOUR BUSINESS ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-sky-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.growBusiness.image} alt="AFZ Port" className="w-full h-[500px] object-cover" data-tina-field={tinaField(data.growBusiness, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 start-5 end-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <Anchor size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.growBusiness, 'imageBadgeTitle')}>{data.growBusiness.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.growBusiness, 'imageBadgeText')}>{data.growBusiness.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.growBusiness, 'badge')}>{data.growBusiness.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.growBusiness, 'title')}>
                {data.growBusiness.title.replace(data.growBusiness.titleHighlight, '')}
                <span className="gradient-text">{data.growBusiness.titleHighlight}</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p data-tina-field={tinaField(data.growBusiness, 'paragraph1')}>{data.growBusiness.paragraph1}</p>
                <p data-tina-field={tinaField(data.growBusiness, 'paragraph2')}>{data.growBusiness.paragraph2}</p>
                <p data-tina-field={tinaField(data.growBusiness, 'paragraph3')}>{data.growBusiness.paragraph3}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.growBusiness.features.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 4. LICENSE TYPES ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-soft mb-6">
              <FileText size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-sky-700" data-tina-field={tinaField(data.licenseTypes, 'badge')}>{data.licenseTypes.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.licenseTypes, 'title')}>
              {data.licenseTypes.title.replace(data.licenseTypes.titleHighlight, '')}
              <span className="gradient-text">{data.licenseTypes.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.licenseTypes, 'subtitle')}>{data.licenseTypes.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.licenseTypes.items.map((license: any, i: number) => {
              const Icon = iconMap[license.icon] || Store;
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

      {/* ============ 5. WHO SHOULD CONSIDER ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Users size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.whoShouldConsider, 'badge')}>{data.whoShouldConsider.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whoShouldConsider, 'title')}>
              {data.whoShouldConsider.title.replace(data.whoShouldConsider.titleHighlight, '')}
              <span className="gradient-text">{data.whoShouldConsider.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whoShouldConsider, 'subtitle')}>{data.whoShouldConsider.subtitle}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {data.whoShouldConsider.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Truck;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform">
                      <Icon size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(item, 'label')}>{item.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center text-sm text-[#64748B] font-medium mt-8 max-w-2xl mx-auto" data-tina-field={tinaField(data.whoShouldConsider, 'footerNote')}>
            {data.whoShouldConsider.footerNote}
          </motion.p>
        </div>
      </section>

      {/* ============ 6. INFRASTRUCTURE (BENTO) ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 start-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-soft mb-6">
              <Building2 size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-sky-700" data-tina-field={tinaField(data.infrastructure, 'badge')}>{data.infrastructure.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.infrastructure, 'title')}>
              {data.infrastructure.title.replace(data.infrastructure.titleHighlight, '')}
              <span className="gradient-text">{data.infrastructure.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.infrastructure, 'subtitle')}>{data.infrastructure.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {data.infrastructure.smallItems.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Briefcase;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                </motion.div>
              );
            })}

            {/* Large Customizable Leasing */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-6 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-6 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -end-6 opacity-15">
                <FileText size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <FileText size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(data.infrastructure.largeItem, 'title')}>{data.infrastructure.largeItem.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(data.infrastructure.largeItem, 'description')}>{data.infrastructure.largeItem.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Violet Card — VAT */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-600 to-violet-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -end-6 opacity-15">
                <Percent size={140} className="text-white" />
              </motion.div>
              <div className="relative flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Percent size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2" data-tina-field={tinaField(data.infrastructure.violetCard, 'title')}>{data.infrastructure.violetCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(data.infrastructure.violetCard, 'description')}>{data.infrastructure.violetCard.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 7. WHY DIFFERENT (DARK) ============ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-sky-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: `url(${data.hero.image})` }} />
        <div className="absolute top-0 end-0 w-[700px] h-[700px] rounded-full bg-sky-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 start-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src={data.whyDifferent.image} alt="AFZ Warehouse" className="w-full h-[520px] object-cover" data-tina-field={tinaField(data.whyDifferent, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 start-5 end-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <Warehouse size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.whyDifferent, 'imageBadgeTitle')}>{data.whyDifferent.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.whyDifferent, 'imageBadgeText')}>{data.whyDifferent.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Zap size={14} className="text-sky-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.whyDifferent, 'badge')}>{data.whyDifferent.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6" data-tina-field={tinaField(data.whyDifferent, 'title')}>
                {data.whyDifferent.title.replace(data.whyDifferent.titleHighlight, '')}
                <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">{data.whyDifferent.titleHighlight}</span>
              </h2>

              <div className="space-y-5 text-base text-white/80 font-medium leading-relaxed">
                <p data-tina-field={tinaField(data.whyDifferent, 'paragraph1')}>{data.whyDifferent.paragraph1}</p>
                <p data-tina-field={tinaField(data.whyDifferent, 'paragraph2')}>{data.whyDifferent.paragraph2}</p>
                <p data-tina-field={tinaField(data.whyDifferent, 'paragraph3')}>{data.whyDifferent.paragraph3}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.whyDifferent.features.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 8. GROWTH STATS ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.growthStats, 'badge')}>{data.growthStats.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.growthStats, 'title')}>
              {data.growthStats.title.replace(data.growthStats.titleHighlight, '')}
              <span className="gradient-text">{data.growthStats.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.growthStats, 'subtitle')}>{data.growthStats.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {data.growthStats.items.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>

                  <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-none mb-2 tracking-tight" data-tina-field={tinaField(stat, 'value')}>{stat.value}</div>
                  <div className="text-xs font-bold text-[#64748B] uppercase tracking-widest" data-tina-field={tinaField(stat, 'label')}>{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 9. OUR SERVICES ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-sky-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Award size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.ourServices, 'badge')}>{data.ourServices.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.ourServices, 'title')}>
                {data.ourServices.title.replace(data.ourServices.titleHighlight, '')}
                <span className="gradient-text">{data.ourServices.titleHighlight}</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p data-tina-field={tinaField(data.ourServices, 'paragraph1')}>{data.ourServices.paragraph1}</p>
                <p data-tina-field={tinaField(data.ourServices, 'paragraph2')}>{data.ourServices.paragraph2}</p>
                <p data-tina-field={tinaField(data.ourServices, 'paragraph3')}>{data.ourServices.paragraph3}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.ourServices.features.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.ourServices.image} alt="Our Services" className="w-full h-[500px] object-cover" data-tina-field={tinaField(data.ourServices, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 start-5 end-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <Award size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.ourServices, 'imageBadgeTitle')}>{data.ourServices.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.ourServices, 'imageBadgeText')}>{data.ourServices.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 10. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 start-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqs, 'badge')}>{data.faqs.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqs, 'title')}>
                {data.faqs.title.replace(data.faqs.titleHighlight, '')}
                <span className="gradient-text">{data.faqs.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqs, 'subtitle')}>{data.faqs.subtitle}</p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -end-3 opacity-20">
                  <Ship size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our AFZ specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Ajman Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
              {data.faqs.items.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute start-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 start-0 end-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pe-4 group-hover:text-sky-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-sky-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-sky-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* ============ 11. RELATED + FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3" data-tina-field={tinaField(data.relatedServices, 'title')}>
              {data.relatedServices.title.replace(data.relatedServices.titleHighlight, '')}
              <span className="gradient-text">{data.relatedServices.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.relatedServices, 'subtitle')}>{data.relatedServices.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {data.relatedServices.items.map((service: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link to={`/services/${service.slug}`} className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 start-5 end-5 text-xl font-black text-white" data-tina-field={tinaField(service, 'title')}>{service.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4" data-tina-field={tinaField(service, 'description')}>{service.description}</p>
                    <div className="flex items-center gap-2 text-sm font-black">
                      <span className="gradient-text">Read More</span>
                      <ArrowRight size={14} className="rtl:rotate-180 text-sky-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

         
        </div>
      </section>

    </div>
  );
}