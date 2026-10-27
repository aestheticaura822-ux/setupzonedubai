// File: src/pages/freezones/DubaiAirportFreeZone.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Plane, Truck, Store,
  BarChart3, Factory, Heart, ShoppingCart,
  CreditCard, Scale, FileBadge, UserCheck, Wallet, Percent,
  Warehouse, Compass, RefreshCw,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import dafzaData from '../../content/freezones/dafza-free-zone.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
const iconMap: any = {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, HomeIcon, Clock, Users,
  Award, FileText, DollarSign, Zap, Plane, Truck, Store, BarChart3, Factory,
  Heart, ShoppingCart, CreditCard, Scale, FileBadge, UserCheck, Wallet,
  Percent, Warehouse, Compass, RefreshCw,
};

export default function DubaiAirportFreeZone({ tinaData }: { tinaData?: any }) {
  const { language } = useLanguage();
  const dafzaFallback = loadContent('freezones/dafza-free-zone', language);
  const data = tinaData?.data?.freeZones || dafzaFallback;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO — Boarding Pass === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} data-tina-field={tinaField(data, 'heroImage')} />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/95 via-blue-900/75 to-cyan-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 end-[35%] opacity-15 hidden lg:block">
          <Plane size={120} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">DAFZA</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-cyan-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data, 'heroTitle')}>
                {data.heroTitle.replace(data.heroTitleHighlight, '')}
                <span className="text-cyan-300">{data.heroTitleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data, 'heroSubtitle')}>{data.heroSubtitle}</motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Dubai Airport Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.heroChips.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1">
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

      {/* === 3. WHY DAFZA — Bento === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Award size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700" data-tina-field={tinaField(data.whyDafzaSection, 'badge')}>{data.whyDafzaSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyDafzaSection, 'title')}>
              {data.whyDafzaSection.title.replace(data.whyDafzaSection.titleHighlight, '')}
              <span className="gradient-text">{data.whyDafzaSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whyDafzaSection, 'subtitle')}>{data.whyDafzaSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {data.whyDafzaSection.cards.map((card: any, i: number) => {
              const Icon = iconMap[card.icon] || Globe;

              if (card.size === 'large' && i === 0) {
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-700 p-7 min-h-[260px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <motion.div animate={{ y: [0, -10, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -bottom-6 -end-6 opacity-15">
                      <Plane size={140} className="text-white" />
                    </motion.div>
                    <div className="relative h-full flex flex-col justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg">
                        <Icon size={30} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(card, 'title')}>{card.title}</h3>
                        <p className="text-sm md:text-base text-white/85 font-medium leading-relaxed max-w-md" data-tina-field={tinaField(card, 'description')}>{card.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (card.size === 'small' && i <= 2) {
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 * i }} className={`${i === 1 ? 'lg:col-span-5' : 'lg:col-span-12 hidden lg:hidden'} group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xl font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(card, 'title')}>{card.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(card, 'description')}>{card.description}</p>
                  </motion.div>
                );
              }

              return null;
            })}

            {/* Small cards column — hand-rolled from data.cards[1] and data.cards[2] */}
            <div className="lg:col-span-5 space-y-5">
              {[data.whyDafzaSection.cards[1], data.whyDafzaSection.cards[2]].map((card: any, i: number) => {
                const Icon = iconMap[card.icon] || DollarSign;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xl font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(card, 'title')}>{card.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(card, 'description')}>{card.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Fullwidth industrial card — data.cards[3] */}
            {(() => {
              const card = data.whyDafzaSection.cards[3];
              const Icon = iconMap[card.icon] || Building2;
              return (
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-12 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 p-7 min-h-[200px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <motion.div animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-6 -end-6 opacity-15">
                    <Icon size={160} className="text-white" />
                  </motion.div>
                  <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon size={30} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(card, 'title')}>{card.title}</h3>
                      <p className="text-sm md:text-base text-white/85 font-medium leading-relaxed max-w-3xl" data-tina-field={tinaField(card, 'description')}>{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* === 4. TAKE OFF — Image + Text === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.takeOffSection.image} alt="DAFZA" className="w-full h-[550px] object-cover" data-tina-field={tinaField(data.takeOffSection, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 start-5 end-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <Plane size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.takeOffSection, 'imageBadgeTitle')}>{data.takeOffSection.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.takeOffSection, 'imageBadgeText')}>{data.takeOffSection.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Plane size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.takeOffSection, 'badge')}>{data.takeOffSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.takeOffSection, 'title')}>
                {data.takeOffSection.title.replace(data.takeOffSection.titleHighlight, '')}
                <span className="gradient-text">{data.takeOffSection.titleHighlight}</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                {data.takeOffSection.paragraphs.map((p: string, i: number) => (<p key={i}>{p}</p>))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.takeOffSection.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
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

      {/* === 5. LICENSE TYPES — Boarding Pass Tickets === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-950 via-blue-950 to-cyan-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 start-0 w-[700px] h-[700px] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 end-0 w-[700px] h-[700px] rounded-full bg-blue-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <FileText size={14} className="text-cyan-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.licensesSection, 'badge')}>{data.licensesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.licensesSection, 'title')}>
              {data.licensesSection.title.replace(data.licensesSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">{data.licensesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/75 font-medium" data-tina-field={tinaField(data.licensesSection, 'subtitle')}>{data.licensesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.licensesSection.items.map((license: any, i: number) => {
              const Icon = iconMap[license.icon] || Store;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500" />
                  <div className="relative flex items-stretch rounded-3xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-all duration-500">
                    <div className={`relative bg-gradient-to-br ${license.color} w-24 flex flex-col items-center justify-center p-3 shadow-lg`}>
                      <Icon size={28} className="text-white mb-2" strokeWidth={2.5} />
                      <div className="text-white font-black text-sm uppercase tracking-widest" data-tina-field={tinaField(license, 'code')}>{license.code}</div>
                      <div className="absolute -right-px top-3 bottom-3 w-px border-r-2 border-dashed border-white/40" />
                    </div>

                    <div className="flex-1 p-5">
                      <h3 className="text-lg font-black text-[#0A0F1F] mb-1.5" data-tina-field={tinaField(license, 'title')}>{license.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(license, 'description')}>{license.description}</p>
                    </div>

                    <div className="hidden md:flex items-end gap-0.5 p-4">
                      {Array.from({ length: 12 }).map((_, j) => (
                        <div key={j} className="bg-[#0A0F1F]/20" style={{ width: j % 2 === 0 ? '3px' : '1.5px', height: `${40 + Math.random() * 60}%` }} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-sm text-white/60 font-medium mt-8" data-tina-field={tinaField(data.licensesSection, 'footerNote')}>
            {data.licensesSection.footerNote}
          </motion.p>
        </div>
      </section>

      {/* === 6. VISA SERVICES — Passport Stamp === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <UserCheck size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700" data-tina-field={tinaField(data.visaSection, 'badge')}>{data.visaSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.visaSection, 'title')}>
              {data.visaSection.title.replace(data.visaSection.titleHighlight, '')}
              <span className="gradient-text">{data.visaSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium max-w-2xl mx-auto" data-tina-field={tinaField(data.visaSection, 'subtitle')}>{data.visaSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.visaSection.items.map((visa: any, i: number) => {
              const Icon = iconMap[visa.icon] || UserCheck;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80 }} className="group relative">
                  <div className="relative aspect-[4/3] rounded-3xl bg-white border-2 border-dashed border-cyan-200 hover:border-cyan-400 p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-dashed bg-gradient-to-br ${visa.stampColor} opacity-30 group-hover:opacity-60 group-hover:rotate-12 transition-all duration-700 flex items-center justify-center`}>
                      <span className="text-[8px] font-black text-white uppercase tracking-widest text-center leading-tight">APPROVED</span>
                    </div>

                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${visa.stampColor} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>

                    <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(visa, 'title')}>{visa.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(visa, 'description')}>{visa.description}</p>

                    <div className="mt-4 pt-3 border-t border-dashed border-cyan-100 flex items-center gap-2">
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-300 to-transparent rounded" />
                      <Plane size={10} className="text-cyan-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. WHY IDEAL (DARK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-cyan-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 start-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 end-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Compass size={14} className="text-cyan-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.whyIdealSection, 'badge')}>{data.whyIdealSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyIdealSection, 'title')}>
              {data.whyIdealSection.title.replace(data.whyIdealSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">{data.whyIdealSection.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {data.whyIdealSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Plane;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex gap-5 group">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg md:text-xl font-black text-white mb-2 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. WHO SHOULD — Horizontal Scroll === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Users size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700" data-tina-field={tinaField(data.whoShouldSection, 'badge')}>{data.whoShouldSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whoShouldSection, 'title')}>
              {data.whoShouldSection.title.replace(data.whoShouldSection.titleHighlight, '')}
              <span className="gradient-text">{data.whoShouldSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whoShouldSection, 'subtitle')}>{data.whoShouldSection.subtitle}</p>
          </motion.div>

          <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {data.whoShouldSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Plane;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start group relative rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} data-tina-field={tinaField(item, 'image')} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 start-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 start-4 end-4">
                      <h3 className="text-xl font-black text-white leading-tight drop-shadow-md" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-xs text-[#94A3B8] font-bold uppercase tracking-widest mt-4" data-tina-field={tinaField(data.whoShouldSection, 'scrollHint')}>
            {data.whoShouldSection.scrollHint}
          </motion.p>
        </div>
      </section>

      {/* === 9. SUPPORT — Numbered List === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 start-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Award size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700" data-tina-field={tinaField(data.supportSection, 'badge')}>{data.supportSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.supportSection, 'title')}>
              {data.supportSection.title.replace(data.supportSection.titleHighlight, '')}
              <span className="gradient-text">{data.supportSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.supportSection, 'subtitle')}>{data.supportSection.subtitle}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {data.supportSection.items.map((service: any, i: number) => {
              const Icon = iconMap[service.icon] || CreditCard;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative flex items-center gap-6 p-5 rounded-2xl bg-white border border-border hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)] hover:-translate-x-1 transition-all duration-500 overflow-hidden">
                  <div className="relative flex-shrink-0">
                    <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-1 leading-tight" data-tina-field={tinaField(service, 'title')}>{service.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(service, 'description')}>{service.description}</p>
                  </div>

                  <div className="hidden md:flex flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-border flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-transparent transition-all">
                      <ArrowRight size={14} className="rtl:rotate-180 text-[#64748B] group-hover:text-white group-hover:translate-x-0.5 transition-all" strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 start-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqsSection, 'badge')}>{data.faqsSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqsSection, 'title')}>
                {data.faqsSection.title.replace(data.faqsSection.titleHighlight, '')}
                <span className="gradient-text">{data.faqsSection.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqsSection, 'subtitle')}>{data.faqsSection.subtitle}</p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -end-3 opacity-20">
                  <Plane size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'title')}>{data.faqsSection.sidebarCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'text')}>{data.faqsSection.sidebarCard.text}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink(data.faqsSection.sidebarCard.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative rounded-3xl bg-white border border-border hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute start-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 start-0 end-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pe-4 group-hover:text-cyan-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-cyan-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-cyan-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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