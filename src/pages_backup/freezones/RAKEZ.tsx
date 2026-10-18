// File: src/pages/freezones/RAKEZ.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock, Users,
  Award, FileText, DollarSign, Zap, Target, Crown, Store, Package,
  ShoppingCart, UserCheck, Factory, Warehouse, Truck, Ship, CreditCard,
  BadgeCheck, Scale, Layers, Database, Shield, Rocket, Percent, Wallet,
  Code, Megaphone, Palette, BarChart3, Leaf, GraduationCap, RefreshCw,
  HeartHandshake, ClipboardCheck, Microscope,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import rakezData from '../../content/freezones/rakez-free-zone.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const iconMap: any = {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, HomeIcon, Clock, Users, Award,
  FileText, DollarSign, Zap, Target, Crown, Store, Package, ShoppingCart,
  UserCheck, Factory, Warehouse, Truck, Ship, CreditCard, BadgeCheck,
  Scale, Layers, Database, Shield, Rocket, Percent, Wallet, Code,
  Megaphone, Palette, BarChart3, Leaf, GraduationCap, RefreshCw,
  HeartHandshake, ClipboardCheck, Microscope,
};

export default function RAKEZ({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.freezones || rakezData;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} data-tina-field={tinaField(data, 'heroImage')} />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-red-900/75 to-orange-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Factory size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Ship size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">RAKEZ Free Zone</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-rose-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data, 'heroTitle')}>
                {data.heroTitle.replace(data.heroTitleHighlight, '')}
                <span className="text-rose-300">{data.heroTitleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data, 'heroSubtitle')}>{data.heroSubtitle}</motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in RAKEZ Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.heroChips.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — RAKEZ Ecosystem Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-rose-400 to-red-600 opacity-40 blur-[100px]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-rose-300 shadow-[0_0_20px_rgba(251,113,133,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-red-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-orange-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-red-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Factory size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">RAKEZ</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg">
                          <Building2 size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Location</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Ras Al Khaimah, UAE</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Companies</div>
                          <div className="text-lg font-black text-rose-600">18K+</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Countries</div>
                          <div className="text-lg font-black text-red-600">100+</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Factory size={18} className="text-rose-500" />
                        <Warehouse size={18} className="text-red-500" />
                        <Truck size={18} className="text-orange-500" />
                        <Ship size={18} className="text-amber-500" />
                        <ShoppingCart size={18} className="text-yellow-500" />
                        <GraduationCap size={18} className="text-lime-500" />
                      </div>
                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center">
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
            {data.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,113,133,0.15)] hover:-translate-y-1">
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

      {/* === 3. INTRO === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-rose-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.introSection.image} alt="RAKEZ Free Zone" className="w-full h-[500px] object-cover" data-tina-field={tinaField(data.introSection, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.introSection, 'imageBadgeTitle')}>{data.introSection.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.introSection, 'imageBadgeText')}>{data.introSection.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.introSection, 'badge')}>{data.introSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.introSection, 'title')}>
                {data.introSection.title.replace(data.introSection.titleHighlight, '')}
                <span className="gradient-text">{data.introSection.titleHighlight}</span>
              </h2>
              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                {data.introSection.paragraphs.map((p: string, i: number) => (<p key={i}>{p}</p>))}
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.introSection.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center">
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

      {/* === 4. WHY CHOOSE === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-rose-950 via-red-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.whyChooseSection, 'badge')}>{data.whyChooseSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyChooseSection, 'title')}>
              {data.whyChooseSection.title.replace(data.whyChooseSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">{data.whyChooseSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/70 font-medium" data-tina-field={tinaField(data.whyChooseSection, 'subtitle')}>{data.whyChooseSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyChooseSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Globe;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-3 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. LICENSE TYPES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <FileText size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700" data-tina-field={tinaField(data.licenseTypesSection, 'badge')}>{data.licenseTypesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.licenseTypesSection, 'title')}>
              {data.licenseTypesSection.title.replace(data.licenseTypesSection.titleHighlight, '')}
              <span className="gradient-text">{data.licenseTypesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.licenseTypesSection, 'subtitle')}>{data.licenseTypesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.licenseTypesSection.items.map((license: any, i: number) => {
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

      {/* === 6. FACILITIES — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Building2 size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.facilitiesSection, 'badge')}>{data.facilitiesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.facilitiesSection, 'title')}>
              {data.facilitiesSection.title.replace(data.facilitiesSection.titleHighlight, '')}
              <span className="gradient-text">{data.facilitiesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.facilitiesSection, 'subtitle')}>{data.facilitiesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {data.facilitiesSection.items.map((facility: any, i: number) => {
              const Icon = iconMap[facility.icon] || Building2;
              const isLarge = facility.size === 'large';
              const isLast = i === data.facilitiesSection.items.length - 1;

              if (isLarge) {
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="lg:col-span-4 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-500 via-red-600 to-orange-700 p-6 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <motion.div animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                      <Icon size={140} className="text-white" />
                    </motion.div>
                    <div className="relative h-full flex flex-col justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(facility, 'title')}>{facility.title}</h3>
                        <p className="text-sm text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(facility, 'description')}>{facility.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (isLast) {
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-gradient-to-br from-yellow-500 via-lime-600 to-emerald-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                      <Icon size={140} className="text-white" />
                    </motion.div>
                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-white mb-1.5" data-tina-field={tinaField(facility, 'title')}>{facility.title}</h3>
                        <p className="text-xs text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(facility, 'description')}>{facility.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              const colSpan = i === 3 ? 'lg:col-span-6' : 'lg:col-span-4';
              const iconSize = i === 3 ? 22 : 26;
              const cardPadding = i === 3 ? 'p-6' : 'p-6';

              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`${colSpan} group relative ${cardPadding} rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${facility.color}`} />
                  <div className={`w-${i === 3 ? '12' : '14'} h-${i === 3 ? '12' : '14'} rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-lg mb-${i === 3 ? '4' : '5'} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={iconSize} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className={`font-black text-[#0A0F1F] mb-${i === 3 ? '1.5' : '2'} ${i === 3 ? 'text-base' : 'text-lg'}`} data-tina-field={tinaField(facility, 'title')}>{facility.title}</h3>
                  <p className={`text-[#64748B] font-medium leading-relaxed ${i === 3 ? 'text-xs' : 'text-sm'}`} data-tina-field={tinaField(facility, 'description')}>{facility.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. VISA SERVICES === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Shield size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.visaServicesSection, 'badge')}>{data.visaServicesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.visaServicesSection, 'title')}>
              {data.visaServicesSection.title.replace(data.visaServicesSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">{data.visaServicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/70 font-medium" data-tina-field={tinaField(data.visaServicesSection, 'subtitle')}>{data.visaServicesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.visaServicesSection.items.map((service: any, i: number) => {
              const Icon = iconMap[service.icon] || UserCheck;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group">
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-white leading-tight" data-tina-field={tinaField(service, 'label')}>{service.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. FORMATION SERVICES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <Rocket size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700" data-tina-field={tinaField(data.formationServicesSection, 'badge')}>{data.formationServicesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.formationServicesSection, 'title')}>
              {data.formationServicesSection.title.replace(data.formationServicesSection.titleHighlight, '')}
              <span className="gradient-text">{data.formationServicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.formationServicesSection, 'subtitle')}>{data.formationServicesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.formationServicesSection.items.map((service: any, i: number) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-bold text-[#0A0F1F] leading-tight" data-tina-field={tinaField(service, 'label')}>{service.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. TAX BENEFITS === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-rose-950 via-red-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <DollarSign size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.taxBenefitsSection, 'badge')}>{data.taxBenefitsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.taxBenefitsSection, 'title')}>
              {data.taxBenefitsSection.title.replace(data.taxBenefitsSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">{data.taxBenefitsSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/70 font-medium" data-tina-field={tinaField(data.taxBenefitsSection, 'subtitle')}>{data.taxBenefitsSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.taxBenefitsSection.items.map((benefit: any, i: number) => {
              const Icon = iconMap[benefit.icon] || Percent;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-rose-400 to-orange-600 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500" />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-2 leading-tight" data-tina-field={tinaField(benefit, 'label')}>{benefit.label}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(benefit, 'detail')}>{benefit.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. DIGITAL GROWTH SERVICES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.digitalServicesSection, 'badge')}>{data.digitalServicesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.digitalServicesSection, 'title')}>
              {data.digitalServicesSection.title.replace(data.digitalServicesSection.titleHighlight, '')}
              <span className="gradient-text">{data.digitalServicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.digitalServicesSection, 'subtitle')}>{data.digitalServicesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.digitalServicesSection.items.map((service: any, i: number) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-3 leading-tight" data-tina-field={tinaField(service, 'title')}>{service.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(service, 'description')}>{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-sm text-[#64748B] font-medium mt-8 max-w-2xl mx-auto" data-tina-field={tinaField(data.digitalServicesSection, 'footerText')}>
            {data.digitalServicesSection.footerText}
          </motion.p>
        </div>
      </section>

      {/* === 11. POST-LICENSE + BUSINESS ACTIVITIES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-rose-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Post-License Support */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-6">
                  <Shield size={14} className="text-rose-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-rose-700" data-tina-field={tinaField(data.postLicenseSupportSection, 'badge')}>{data.postLicenseSupportSection.badge}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.postLicenseSupportSection, 'title')}>
                  {data.postLicenseSupportSection.title.replace(data.postLicenseSupportSection.titleHighlight, '')}
                  <span className="gradient-text">{data.postLicenseSupportSection.titleHighlight}</span>
                </h2>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-6" data-tina-field={tinaField(data.postLicenseSupportSection, 'subtitle')}>{data.postLicenseSupportSection.subtitle}</p>
                <div className="space-y-3">
                  {data.postLicenseSupportSection.items.map((item: any, i: number) => {
                    const Icon = iconMap[item.icon] || FileText;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-rose-50/50 to-red-50/50 border border-rose-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0">
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold text-[#0A0F1F]" data-tina-field={tinaField(item, 'label')}>{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Business Activities */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
                  <Target size={14} className="text-orange-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-orange-700" data-tina-field={tinaField(data.businessActivitiesSection, 'badge')}>{data.businessActivitiesSection.badge}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.businessActivitiesSection, 'title')}>
                  {data.businessActivitiesSection.title.replace(data.businessActivitiesSection.titleHighlight, '')}
                  <span className="gradient-text">{data.businessActivitiesSection.titleHighlight}</span>
                </h2>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-6" data-tina-field={tinaField(data.businessActivitiesSection, 'subtitle')}>{data.businessActivitiesSection.subtitle}</p>
                <div className="space-y-3">
                  {data.businessActivitiesSection.items.map((activity: any, i: number) => {
                    const Icon = iconMap[activity.icon] || Store;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-orange-50/50 to-amber-50/50 border border-orange-100">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold text-[#0A0F1F]" data-tina-field={tinaField(activity, 'label')}>{activity.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 12. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.growthStatsSection, 'badge')}>{data.growthStatsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.growthStatsSection, 'title')}>
              {data.growthStatsSection.title.replace(data.growthStatsSection.titleHighlight, '')}
              <span className="gradient-text">{data.growthStatsSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.growthStatsSection, 'subtitle')}>{data.growthStatsSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {data.growthStatsSection.items.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(251,113,133,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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

      {/* === 13. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqsSection, 'badge')}>{data.faqsSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqsSection, 'title')}>
                {data.faqsSection.title.replace(data.faqsSection.titleHighlight, '')}
                <span className="gradient-text">{data.faqsSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqsSection, 'subtitle')}>{data.faqsSection.subtitle}</p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-rose-500 via-red-600 to-orange-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Factory size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'title')}>{data.faqsSection.sidebarCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'text')}>{data.faqsSection.sidebarCard.text}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink(data.faqsSection.sidebarCard.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-rose-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-rose-200 hover:shadow-[0_20px_60px_rgba(251,113,133,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-red-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-400 to-red-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-rose-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-rose-400 group-open:to-red-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-rose-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 14. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
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
                      <ArrowRight size={14} className="text-rose-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-red-900/70 to-orange-900/50" />
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
                    <span className="text-rose-300">{data.finalCTA.titleHighlight}</span>
                  </h2>
                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>{data.finalCTA.subtitle}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
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
                        <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink(data.finalCTA.whatsappCardMessage)} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <WhatsAppIcon size={22} className="text-emerald-600" />

                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-rose-600 hover:text-rose-700 transition">
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