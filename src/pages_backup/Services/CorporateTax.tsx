// File: src/pages/services/CorporateTax.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Receipt, ArrowRight, Sparkles, CheckCircle2, AlertTriangle,
  Building2, Globe, TrendingUp, Briefcase, FileCheck, ShieldCheck,
  Calculator, FileText, Phone, MessageCircle, Home as HomeIcon,
  Clock, Percent, Users, Award,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import corporateTaxData from '../../content/services/corporate-tax-vat.json';
import WhatsAppIcon from "../../components/icons/WhatsAppIcon";
const iconMap: any = {
  Receipt, Percent, TrendingUp, Users, Building2, Globe, Briefcase,
  FileCheck, ShieldCheck, Calculator, FileText, Clock, Award,
  CheckCircle2, AlertTriangle, Sparkles, ArrowRight, Phone,
  MessageCircle, HomeIcon,
};

export default function CorporateTax({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.services || corporateTaxData;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} data-tina-field={tinaField(data, 'heroImage')} />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Receipt size={100} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block">
          <Calculator size={80} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Services</span><span>/</span>
                <span className="text-white font-bold">Corporate Tax & VAT</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data, 'heroTitle')}>
                {data.heroTitle.replace(data.heroTitleHighlight, '')}
                <span className="text-amber-300">{data.heroTitleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data, 'heroSubtitle')}>
                {data.heroSubtitle}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I need help with Corporate Tax & VAT services for my UAE business.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.heroChips.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Floating Cards */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-[100px]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-amber-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-cyan-300" />
              </motion.div>

              {/* Card 1 */}
              <motion.div initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-0 right-0 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[260px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="absolute -top-2.5 -right-2.5">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-teal-600 text-white shadow-md">Live Rate</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                        <Percent size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Corporate Tax</p>
                        <h3 className="text-base font-black text-[#0A0F1F]">UAE Rate</h3>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-black text-[#0A0F1F]">9%</span>
                      <span className="text-sm font-bold text-emerald-600">on profits</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-emerald-200 to-transparent mb-3" />
                    <p className="text-xs text-[#64748B] font-medium">Above AED 375,000 net profit</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 */}
              <motion.div initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 1.0, type: 'spring', stiffness: 80 }} className="absolute top-48 left-0 z-20">
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[240px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
                        <ShieldCheck size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Certified</p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">FTA Registered</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-bold text-emerald-600">Active & Compliant</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 */}
              <motion.div initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 1.2, type: 'spring', stiffness: 80 }} className="absolute bottom-0 right-8 z-10">
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[250px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                        <Clock size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Next Deadline</p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">VAT Filing</h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">Q1 2026</div>
                    <p className="text-xs text-[#64748B] font-medium">Due in 28 days — we handle it</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. STATS ROW === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {data.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Percent;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                    <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.08] blur-xl`} />
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-none mb-1.5" data-tina-field={tinaField(stat, 'value')}>{stat.value}</div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider" data-tina-field={tinaField(stat, 'label')}>{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHAT IS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.whatIsSection.image} alt="Corporate Tax" className="w-full h-[500px] object-cover" data-tina-field={tinaField(data.whatIsSection, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Receipt size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.whatIsSection, 'imageBadgeTitle')}>{data.whatIsSection.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.whatIsSection, 'imageBadgeText')}>{data.whatIsSection.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.whatIsSection, 'badge')}>{data.whatIsSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.whatIsSection, 'title')}>
                {data.whatIsSection.title.replace(data.whatIsSection.titleHighlight, '')}
                <span className="gradient-text">{data.whatIsSection.titleHighlight}</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                {data.whatIsSection.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {data.whatIsSection.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
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

      {/* === 4. WHO NEEDS IT (BENTO) === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Users size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.whoNeedsSection, 'badge')}>{data.whoNeedsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whoNeedsSection, 'title')}>
              {data.whoNeedsSection.title.replace(data.whoNeedsSection.titleHighlight, '')}
              <span className="gradient-text">{data.whoNeedsSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whoNeedsSection, 'subtitle')}>{data.whoNeedsSection.subtitle}</p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
            {/* Card 1 — Big with image */}
            {(() => {
              const item = data.whoNeedsSection.items[0];
              const Icon = iconMap[item.icon] || Building2;
              return (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500 min-h-[300px]">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="relative h-full p-7 md:p-8 flex flex-col justify-between min-h-[300px]">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 text-[10px] font-bold uppercase tracking-widest text-white">{item.badge}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight mb-3" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                      <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* Card 2 — Small */}
            {(() => {
              const item = data.whoNeedsSection.items[1];
              const Icon = iconMap[item.icon] || TrendingUp;
              return (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-border bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-sky-100 opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-7 md:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <span className="text-5xl font-black text-sky-100 leading-none">02</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-5" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200">
                        <span className="text-xs font-black text-sky-700">{item.miniStat}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#64748B]">{item.miniStatLabel}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* Card 3 — Small */}
            {(() => {
              const item = data.whoNeedsSection.items[2];
              const Icon = iconMap[item.icon] || Receipt;
              return (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-border bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-600" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-amber-100 opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-7 md:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <span className="text-5xl font-black text-amber-100 leading-none">03</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-5" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200">
                        <span className="text-xs font-black text-amber-700">{item.miniStat}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#64748B]">{item.miniStatLabel}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* Card 4 — Big with image */}
            {(() => {
              const item = data.whoNeedsSection.items[3];
              const Icon = iconMap[item.icon] || Globe;
              return (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500 min-h-[300px]">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="relative h-full p-7 md:p-8 flex flex-col justify-between min-h-[300px]">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 text-[10px] font-bold uppercase tracking-widest text-white">{item.badge}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight mb-3" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                      <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>

          {/* Indicators */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {data.whoNeedsSection.indicators.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-soft">
                  <Icon size={14} className="text-slate-600" strokeWidth={2.5} />
                  <span className="text-xs font-black text-[#0A0F1F]" data-tina-field={tinaField(item, 'label')}>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* === 5. SERVICES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/30 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/30 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileCheck size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.servicesSection, 'badge')}>{data.servicesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.servicesSection, 'title')}>
              {data.servicesSection.title.replace(data.servicesSection.titleHighlight, '')}
              <span className="gradient-text">{data.servicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.servicesSection, 'subtitle')}>{data.servicesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.servicesSection.items.map((service: any, i: number) => {
              const Icon = iconMap[service.icon] || FileCheck;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-5 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600" />
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={20} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-snug" data-tina-field={tinaField(service, 'title')}>{service.title}</h3>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(service, 'description')}>{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Award size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.whyChooseUsSection, 'badge')}>{data.whyChooseUsSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.whyChooseUsSection, 'title')}>
                {data.whyChooseUsSection.title.replace(data.whyChooseUsSection.titleHighlight, '')}
                <span className="gradient-text">{data.whyChooseUsSection.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6" data-tina-field={tinaField(data.whyChooseUsSection, 'subtitle')}>{data.whyChooseUsSection.subtitle}</p>

              <div className="space-y-3">
                {data.whyChooseUsSection.features.map((item: string, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.whyChooseUsSection.image} alt="Tax Experts" className="w-full h-[500px] object-cover" data-tina-field={tinaField(data.whyChooseUsSection, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />

                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-5 right-5 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Award size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-txt-muted uppercase" data-tina-field={tinaField(data.whyChooseUsSection.floatingCards.experience, 'label')}>{data.whyChooseUsSection.floatingCards.experience.label}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.whyChooseUsSection.floatingCards.experience, 'value')}>{data.whyChooseUsSection.floatingCards.experience.value}</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-5 left-5 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <Users size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-txt-muted uppercase" data-tina-field={tinaField(data.whyChooseUsSection.floatingCards.clients, 'label')}>{data.whyChooseUsSection.floatingCards.clients.label}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.whyChooseUsSection.floatingCards.clients, 'value')}>{data.whyChooseUsSection.floatingCards.clients.value}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. PENALTIES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-red-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-200 shadow-soft mb-6">
              <AlertTriangle size={14} className="text-red-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-red-700" data-tina-field={tinaField(data.penaltiesSection, 'badge')}>{data.penaltiesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.penaltiesSection, 'title')}>
              {data.penaltiesSection.title.replace(data.penaltiesSection.titleHighlight, '')}
              <span className="text-red-600">{data.penaltiesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.penaltiesSection, 'subtitle')}>{data.penaltiesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.penaltiesSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Clock;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }} className="relative p-6 rounded-3xl bg-white border-2 border-red-100 shadow-[0_10px_40px_rgba(239,68,68,0.1)] hover:shadow-[0_20px_60px_rgba(239,68,68,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-500" />
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-400 to-orange-600 flex items-center justify-center shadow-lg mb-4">
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-base font-black text-[#0A0F1F] mb-1" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                  <div className="text-2xl font-black text-red-600 mb-3" data-tina-field={tinaField(item, 'amount')}>{item.amount}</div>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. FREE ZONE RULES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Building2 size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.freeZoneSection, 'badge')}>{data.freeZoneSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.freeZoneSection, 'title')}>
              {data.freeZoneSection.title.replace(data.freeZoneSection.titleHighlight, '')}
              <span className="gradient-text">{data.freeZoneSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.freeZoneSection, 'subtitle')}>{data.freeZoneSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.freeZoneSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || CheckCircle2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }} className="group relative p-7 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-[0.06] blur-2xl`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={24} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A0F1F] mb-3 leading-snug tracking-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqsSection, 'badge')}>{data.faqsSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqsSection, 'title')}>
                {data.faqsSection.title.replace(data.faqsSection.titleHighlight, '')}
                <span className="gradient-text">{data.faqsSection.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqsSection, 'subtitle')}>{data.faqsSection.subtitle}</p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 shadow-[0_20px_60px_rgba(16,185,129,0.3)]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <MessageCircle size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'title')}>{data.faqsSection.sidebarCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'text')}>{data.faqsSection.sidebarCard.text}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Corporate Tax & VAT.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-emerald-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
                      <WhatsAppIcon size={14} className="text-emerald-600" />
WhatsApp
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all duration-300">
                      <Phone size={14} />Call Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {data.faqsSection.miniStats.map((s: any, si: number) => (
                  <div key={si} className="p-4 rounded-2xl bg-white border border-border shadow-soft">
                    <div className="text-2xl font-black gradient-text leading-none mb-1" data-tina-field={tinaField(s, 'value')}>{s.value}</div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider" data-tina-field={tinaField(s, 'label')}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {data.faqsSection.items.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative rounded-3xl bg-white border border-border hover:border-emerald-200 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-emerald-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-emerald-400 group-open:to-teal-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-emerald-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 10. RELATED SERVICES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              {data.relatedServicesSection.title.replace(data.relatedServicesSection.titleHighlight, '')}
              <span className="gradient-text">{data.relatedServicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.relatedServicesSection, 'subtitle')}>{data.relatedServicesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <ArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === 11. FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-emerald-900/60 to-emerald-900/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-[45%] opacity-15 hidden lg:block">
              <Receipt size={100} className="text-white" />
            </motion.div>

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.finalCTA, 'badge')}>{data.finalCTA.badge}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg" data-tina-field={tinaField(data.finalCTA, 'title')}>
                    {data.finalCTA.title.replace(data.finalCTA.titleHighlight, '')}
                    <span className="text-amber-300">{data.finalCTA.titleHighlight}</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>{data.finalCTA.subtitle}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
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
                        <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <WhatsAppIcon size={22} className="text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-sky-600 hover:text-sky-700 transition">
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
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Mon – Fri</span><span className="font-black text-[#0A0F1F]">9:00 AM – 6:00 PM</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Saturday</span><span className="font-black text-[#0A0F1F]">10:00 AM – 5:00 PM</span></div>
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