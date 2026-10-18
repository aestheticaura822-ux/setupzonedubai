// File: src/pages/packages/SHAMSSetupPackage.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store,
  UserCheck, Landmark, Scale, Layers, Rocket, Wallet, Plane, HeartHandshake,
  RefreshCw, ShieldCheck, Handshake, Heart, Calculator, Package, Gift,
  Laptop, Store as StoreIcon, ChevronRight,
  FileSignature, ClipboardCheck, ScrollText,
  Camera, Music, Palette, PenTool, Film, Megaphone,
  ShoppingCart, Dumbbell, Tv,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import shamsPackageData from '../../content/packages/shams-setup-package.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const iconMap: any = {
  Globe, Building2, Briefcase, Phone, MessageCircle, Clock, Users, Award,
  FileText, DollarSign, Zap, Target, Crown, Store: StoreIcon, UserCheck,
  Landmark, Scale, Layers, Rocket, Wallet, Plane, HeartHandshake,
  RefreshCw, ShieldCheck, Handshake, Heart, Calculator, Package, Gift,
  Laptop, ChevronRight, FileSignature, ClipboardCheck, ScrollText,
  Camera, Music, Palette, PenTool, Film, Megaphone,
  ShoppingCart, Dumbbell, Tv,
  Sparkles, ArrowRight, CheckCircle2, HomeIcon, TrendingUp,
};

export default function SHAMSSetupPackage({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.packages || shamsPackageData;

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.hero.image})` }} data-tina-field={tinaField(data.hero, 'image')} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-orange-950/80 to-red-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Tv size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Film size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Packages</span><span>/</span>
                <span className="text-white font-bold" data-tina-field={tinaField(data.hero, 'breadcrumbLabel')}>{data.hero.breadcrumbLabel}</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-orange-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.hero, 'badge')}>{data.hero.badge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data.hero, 'title')}>
                {data.hero.title.replace(data.hero.titleHighlight, '')}
                <span className="text-orange-300">{data.hero.titleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data.hero, 'subtitle')}>
                {data.hero.subtitle}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href={data.hero.ctaPrimaryLink} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-orange-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  <span data-tina-field={tinaField(data.hero, 'ctaPrimaryText')}>{data.hero.ctaPrimaryText}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink(data.hero.ctaSecondaryMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />

                  <span data-tina-field={tinaField(data.hero, 'ctaSecondaryText')}>{data.hero.ctaSecondaryText}</span>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.hero.badges.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-orange-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Calculator Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-40 blur-[100px]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-orange-300 shadow-[0_0_20px_rgba(251,146,60,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-red-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-rose-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-40 blur-2xl rounded-3xl" />
                  <Link to="/calculator" className="block group">
                    <div className="relative w-[340px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calculator size={16} className="text-white" strokeWidth={2.5} />
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">Cost Calculator</span>
                        </div>
                        <span className="text-[10px] font-black text-white/80 uppercase tracking-widest group-hover:text-white transition">Try Now →</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            <Calculator size={26} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-0.5">Instant Estimate</div>
                            <div className="text-base font-black text-[#0A0F1F]">Calculate Your Cost</div>
                          </div>
                        </div>
                        <div className="space-y-3 mb-5">
                          {[{ icon: Package, label: 'Choose Package' }, { icon: Users, label: 'Select Visa Count' }, { icon: DollarSign, label: 'Get Instant Price' }].map((row, i) => {
                            const Icon = row.icon;
                            return (
                              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                                <div className="flex items-center gap-2">
                                  <Icon size={16} className="text-orange-600" strokeWidth={2.5} />
                                  <span className="text-xs font-bold text-[#0A0F1F]">{row.label}</span>
                                </div>
                                <ChevronRight size={14} className="text-orange-600" strokeWidth={2.5} />
                              </div>
                            );
                          })}
                        </div>
                        <div className="pt-5 border-t border-dashed border-orange-200">
                          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <Calculator size={16} className="text-white" strokeWidth={2.5} />
                            <span className="text-xs font-black text-white uppercase tracking-widest">Open Calculator</span>
                            <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                          </div>
                          <p className="text-center text-[10px] font-semibold text-slate-500 mt-3">💡 Get instant quote in seconds</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
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
              const Icon = iconMap[stat.icon] || DollarSign;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,146,60,0.15)] hover:-translate-y-1">
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

      {/* ============ 3. INTRO ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-orange-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.intro.image} alt="SHAMS Sharjah" className="w-full h-[500px] object-cover" data-tina-field={tinaField(data.intro, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                      <Tv size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.intro, 'imageBadgeTitle')}>{data.intro.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.intro, 'imageBadgeText')}>{data.intro.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-orange-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.intro, 'badge')}>{data.intro.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.intro, 'title')}>
                {data.intro.title.replace(data.intro.titleHighlight, '')}
                <span className="gradient-text">{data.intro.titleHighlight}</span>
              </h2>
              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p data-tina-field={tinaField(data.intro, 'paragraph1')}>{data.intro.paragraph1}</p>
                <p data-tina-field={tinaField(data.intro, 'paragraph2')}>{data.intro.paragraph2}</p>
                <p data-tina-field={tinaField(data.intro, 'paragraph3')}>{data.intro.paragraph3}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.intro.features.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
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

      {/* ============ 4. BUSINESS INDUSTRIES — Dark ============ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: `url(${data.hero.image})` }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Tv size={14} className="text-orange-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.businessIndustries, 'badge')}>{data.businessIndustries.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.businessIndustries, 'title')}>
              {data.businessIndustries.title.replace(data.businessIndustries.titleHighlight, '')}
              <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">{data.businessIndustries.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/70 font-medium" data-tina-field={tinaField(data.businessIndustries, 'subtitle')}>{data.businessIndustries.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.businessIndustries.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Film;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-3 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'desc')}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 5. PACKAGES GRID ============ */}
      <section id="packages" className="relative py-14 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-soft mb-6">
              <Package size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-orange-700" data-tina-field={tinaField(data.packages, 'badge')}>{data.packages.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.packages, 'title')}>
              {data.packages.title.replace(data.packages.titleHighlight, '')}
              <span className="gradient-text">{data.packages.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.packages, 'subtitle')}>{data.packages.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.packages.items.map((pkg: any, i: number) => {
              const Icon = iconMap[pkg.icon] || Package;
              return (
                <motion.div key={pkg.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl bg-white border border-border overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    <div className={`relative h-32 bg-gradient-to-br ${pkg.color} p-5 overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      <div className="absolute top-4 right-4">
                        <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${pkg.badgeColor} border border-white/30 text-[9px] font-black text-white uppercase tracking-widest shadow-lg`} data-tina-field={tinaField(pkg, 'badge')}>{pkg.badge}</span>
                      </div>
                      <div className="relative flex items-start gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0">
                          <Icon size={26} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                      <div className="relative mt-4">
                        <div className="text-[9px] font-black text-white/80 uppercase tracking-widest mb-1" data-tina-field={tinaField(pkg, 'category')}>{pkg.category} Package</div>
                        <h3 className="text-lg font-black text-white leading-tight drop-shadow-lg" data-tina-field={tinaField(pkg, 'title')}>{pkg.title}</h3>
                      </div>
                    </div>
                    <div className="p-5 border-b border-dashed border-border">
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-1">Starting from</div>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent tracking-tight`} data-tina-field={tinaField(pkg, 'price')}>{pkg.price}</span>
                      </div>
                      <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mt-1" data-tina-field={tinaField(pkg, 'tagline')}>{pkg.tagline}</div>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="text-[10px] font-black text-[#0A0F1F] uppercase tracking-widest mb-3">Includes:</div>
                      <ul className="space-y-2">
                        {pkg.includes.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle2 size={10} className="text-white" strokeWidth={3} />
                            </div>
                            <span className="text-xs font-medium text-[#475569] leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {pkg.exampleActivities && pkg.exampleActivities.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-dashed border-border">
                          <div className="text-[10px] font-black text-[#0A0F1F] uppercase tracking-widest mb-2">Example Activities:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {pkg.exampleActivities.map((activity: string, idx: number) => (
                              <span key={idx} className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold text-[#475569]">{activity}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-5 pt-0">
                      <a href={getWhatsAppLink(`Hi! I'm interested in the SHAMS ${pkg.title} package (${pkg.price}).`)} target="_blank" rel="noreferrer" className={`group/cta flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300`}>
                        <WhatsAppIcon size={14} className="text-emerald-600" />

                        Enquire Now
                        <ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Package CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 max-w-3xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-orange-500 via-red-600 to-rose-700 p-8 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Gift size={28} className="text-white" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white leading-tight mb-1" data-tina-field={tinaField(data.customPackageCTA, 'title')}>{data.customPackageCTA.title}</h3>
                  <p className="text-sm text-white/90 font-medium" data-tina-field={tinaField(data.customPackageCTA, 'subtitle')}>{data.customPackageCTA.subtitle}</p>
                </div>
                <a href={getWhatsAppLink(data.customPackageCTA.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-orange-700 font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0">
                  <WhatsAppIcon size={15} className="text-emerald-600" />

                  <span data-tina-field={tinaField(data.customPackageCTA, 'buttonText')}>{data.customPackageCTA.buttonText}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 6. BENEFITS — Light ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-soft mb-6">
              <Award size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-orange-700" data-tina-field={tinaField(data.benefits, 'badge')}>{data.benefits.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.benefits, 'title')}>
              {data.benefits.title.replace(data.benefits.titleHighlight, '')}
              <span className="gradient-text">{data.benefits.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.benefits, 'subtitle')}>{data.benefits.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {data.benefits.items.map((benefit: any, i: number) => {
              const Icon = iconMap[benefit.icon] || Globe;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full text-center overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`} />
                    <div className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xs font-black text-[#0A0F1F] mb-1 leading-tight" data-tina-field={tinaField(benefit, 'title')}>{benefit.title}</h3>
                    <p className="text-[10px] text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(benefit, 'desc')}>{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 7. PROCESS ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-soft mb-6">
              <Rocket size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-orange-700" data-tina-field={tinaField(data.process, 'badge')}>{data.process.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.process, 'title')}>
              {data.process.title.replace(data.process.titleHighlight, '')}
              <span className="gradient-text">{data.process.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.process, 'subtitle')}>{data.process.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.process.steps.map((step: any, i: number) => {
              const Icon = iconMap[step.icon] || Target;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg opacity-15">
                      <span className="text-lg font-black text-orange-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-orange-600 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(step, 'title')}>{step.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(step, 'description')}>{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 8. WHY CHOOSE US — Dark ============ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${data.hero.image})` }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-orange-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.whyChooseUs, 'badge')}>{data.whyChooseUs.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyChooseUs, 'title')}>
              {data.whyChooseUs.title.replace(data.whyChooseUs.titleHighlight, '')}
              <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">{data.whyChooseUs.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/70 font-medium" data-tina-field={tinaField(data.whyChooseUs, 'subtitle')}>{data.whyChooseUs.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.whyChooseUs.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group">
                  <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-sm font-black text-white leading-tight mb-1" data-tina-field={tinaField(item, 'label')}>{item.label}</h3>
                        <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'desc')}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 9. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-orange-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqs, 'badge')}>{data.faqs.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqs, 'title')}>
                {data.faqs.title.replace(data.faqs.titleHighlight, '')}
                <span className="gradient-text">{data.faqs.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqs, 'subtitle')}>{data.faqs.subtitle}</p>

              <Link to="/calculator" className="group block relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Calculator size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calculator size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Estimate Your Cost</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Use our calculator to get an instant quote for your SHAMS package.</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-orange-700 font-bold text-xs shadow-lg group-hover:scale-105 transition-transform">
                    Open Calculator
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {data.faqs.items.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-orange-200 hover:shadow-[0_20px_60px_rgba(251,146,60,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-orange-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-orange-400 group-open:to-red-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-orange-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* ============ 10. FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.hero.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-orange-950/70 to-red-950/50" />
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
                    <span className="text-orange-300">{data.finalCTA.titleHighlight}</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>
                    {data.finalCTA.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-orange-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <WhatsAppIcon size={16} className="text-emerald-600" />

                      <span data-tina-field={tinaField(data.finalCTA, 'primaryCta')}>{data.finalCTA.primaryCta}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href={data.finalCTA.phoneHref} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {data.finalCTA.badges.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-orange-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <WhatsAppIcon size={22} className="text-emerald-600" />

                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]" data-tina-field={tinaField(data.finalCTA, 'phone')}>{data.finalCTA.phone}</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1" data-tina-field={tinaField(data.finalCTA.office, 'label')}>{data.finalCTA.office.label}</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1" data-tina-field={tinaField(data.finalCTA.office, 'line1')}>{data.finalCTA.office.line1}</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug" data-tina-field={tinaField(data.finalCTA.office, 'line2')}>{data.finalCTA.office.line2}</p>
                        <a href={data.finalCTA.office.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-orange-600 hover:text-orange-700 transition">
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
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1" data-tina-field={tinaField(data.finalCTA.hours, 'label')}>{data.finalCTA.hours.label}</p>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Mon – Fri</span><span className="font-black text-[#0A0F1F]" data-tina-field={tinaField(data.finalCTA.hours, 'monFri')}>{data.finalCTA.hours.monFri}</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Saturday</span><span className="font-black text-[#0A0F1F]" data-tina-field={tinaField(data.finalCTA.hours, 'saturday')}>{data.finalCTA.hours.saturday}</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Sunday</span><span className="font-black text-red-500" data-tina-field={tinaField(data.finalCTA.hours, 'sunday')}>{data.finalCTA.hours.sunday}</span></div>
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