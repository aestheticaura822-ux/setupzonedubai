// File: src/pages/freezones/JAFZA.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Rocket, Store,
  FileCheck, MapPin, BadgeCheck, Factory, ShoppingCart, CreditCard,
  Scale, Warehouse, Plane, RefreshCw, Monitor, ClipboardCheck, Ship,
  FileSignature, Truck, Vault, Lightbulb,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import jafzaData from '../../content/freezones/jafza-free-zone.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const iconMap: any = {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, HomeIcon, Clock, Users,
  Award, FileText, DollarSign, Zap, Target, Rocket, Store, FileCheck,
  MapPin, BadgeCheck, Factory, ShoppingCart, CreditCard, Scale, Warehouse,
  Plane, RefreshCw, Monitor, ClipboardCheck, Ship, FileSignature, Truck,
  Vault, Lightbulb,
};

export default function JAFZA({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.freezones || jafzaData;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO — Container Ship Card === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} data-tina-field={tinaField(data, 'heroImage')} />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/95 via-orange-900/75 to-amber-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Ship size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">JAFZA</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Ship size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg" data-tina-field={tinaField(data, 'heroTitle')}>
                {data.heroTitle.replace(data.heroTitleHighlight, '')}
                <span className="text-amber-300">{data.heroTitleHighlight}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow" data-tina-field={tinaField(data, 'heroSubtitle')}>{data.heroSubtitle}</motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in JAFZA Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {data.heroChips.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Container Ship Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-400 to-orange-600 opacity-40 blur-[100px]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-orange-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-sky-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Ship size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">JAFZA Port</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest mb-1">Location</div>
                          <div className="text-2xl font-black text-[#0A0F1F] leading-none">Jebel Ali</div>
                        </div>
                        <div className="flex-1 mx-3 relative">
                          <div className="border-t-2 border-dashed border-amber-300" />
                          <motion.div animate={{ x: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-2 left-1/2 -translate-x-1/2">
                            <Ship size={14} className="text-amber-500" fill="currentColor" />
                          </motion.div>
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest mb-1">Reach</div>
                          <div className="text-2xl font-black text-[#0A0F1F] leading-none">Global</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-5">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-0.5">Companies</div>
                          <div className="text-sm font-black text-amber-600">8K+</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-0.5">Countries</div>
                          <div className="text-sm font-black text-orange-600">100+</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-0.5">Tax</div>
                          <div className="text-sm font-black text-emerald-600">0%</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-5">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <div key={i} className="flex-1 h-6 rounded-sm" style={{
                            background: i % 3 === 0
                              ? 'linear-gradient(135deg, #F59E0B, #EA580C)'
                              : i % 3 === 1
                              ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                              : 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                          }} />
                        ))}
                      </div>
                      <div className="flex items-end gap-0.5 h-10">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <div key={i} className="bg-[#0A0F1F]" style={{ width: i % 3 === 0 ? '4px' : '2px', height: `${60 + (i % 5) * 8}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. STATS — Warehouse Cards === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {data.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 shadow-md hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] hover:-translate-y-1">
                    <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                    <div className="flex h-[2px]">
                      {Array.from({ length: 12 }).map((_, j) => (
                        <div key={j} className={`flex-1 ${j % 2 === 0 ? 'bg-black/10' : 'bg-transparent'}`} />
                      ))}
                    </div>
                    <div className="p-5 flex items-center gap-4">
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

      {/* === 3. WHY JAFZA — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <Award size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700" data-tina-field={tinaField(data.whyJafzaSection, 'badge')}>{data.whyJafzaSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyJafzaSection, 'title')}>
              {data.whyJafzaSection.title.replace(data.whyJafzaSection.titleHighlight, '')}
              <span className="gradient-text">{data.whyJafzaSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whyJafzaSection, 'subtitle')}>{data.whyJafzaSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Large card 1 — Port */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-sky-700 p-7 min-h-[260px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Ship size={160} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Ship size={30} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Next to Jebel Ali Port</h3>
                  <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-md">The Middle East's largest and busiest port — direct access to global supply chains and 100+ countries.</p>
                </div>
              </div>
            </motion.div>

            {/* Small cards column */}
            <div className="lg:col-span-5 space-y-5">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-600" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Globe size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-black text-[#0A0F1F] mb-1.5">100% Foreign Ownership</h3>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed">Full ownership — no local sponsor required.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <DollarSign size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-black text-[#0A0F1F] mb-1.5">0% Tax</h3>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed">No personal or corporate income tax.</p>
              </motion.div>
            </div>

            {/* Large card 2 — Industrial */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-12 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-orange-700 p-7 min-h-[200px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-6 -right-6 opacity-15">
                <Factory size={180} className="text-white" />
              </motion.div>
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Factory size={30} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Industrial Infrastructure</h3>
                  <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-3xl">
                    World-class facilities for logistics, manufacturing, and trading — powered by high-speed internet, 24/7 security, and all utilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. SERVICES — Checklist Card === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <ClipboardCheck size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.servicesSection, 'badge')}>{data.servicesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.servicesSection, 'title')}>
              {data.servicesSection.title.replace(data.servicesSection.titleHighlight, '')}
              <span className="gradient-text">{data.servicesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.servicesSection, 'subtitle')}>{data.servicesSection.subtitle}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl bg-white border border-border shadow-[0_15px_50px_rgba(245,158,11,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />
              <div className="p-6 md:p-8">
                <div className="space-y-3">
                  {data.servicesSection.items.map((service: any, i: number) => {
                    const Icon = iconMap[service.icon] || MessageCircle;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-50/50 to-transparent hover:from-amber-50 hover:to-orange-50/50 transition-all duration-300 border border-transparent hover:border-amber-200">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                            <Icon size={18} className="text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-black text-amber-600 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="text-base font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(service, 'title')}>{service.title}</h3>
                          </div>
                          <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(service, 'description')}>{service.description}</p>
                        </div>
                        <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 5. LICENSE TYPES — Container Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-950 via-orange-950 to-red-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <FileText size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.licensesSection, 'badge')}>{data.licensesSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.licensesSection, 'title')}>
              {data.licensesSection.title.replace(data.licensesSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{data.licensesSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/75 font-medium" data-tina-field={tinaField(data.licensesSection, 'subtitle')}>{data.licensesSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.licensesSection.items.map((license: any, i: number) => {
              const Icon = iconMap[license.icon] || Store;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${license.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6">
                    <div className={`h-2 rounded-t-xl bg-gradient-to-r ${license.color} -mx-6 -mt-6 mb-4`} />
                    <div className="flex h-[2px] -mx-6 mb-5">
                      {Array.from({ length: 20 }).map((_, j) => (
                        <div key={j} className={`flex-1 ${j % 2 === 0 ? 'bg-white/10' : 'bg-transparent'}`} />
                      ))}
                    </div>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${license.color} shadow-md`}>
                        <span className="text-[9px] font-black text-white uppercase tracking-widest" data-tina-field={tinaField(license, 'code')}>{license.code}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-black text-white mb-2 leading-tight" data-tina-field={tinaField(license, 'title')}>{license.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(license, 'description')}>{license.description}</p>
                    <div className="flex h-1 mt-5">
                      {Array.from({ length: 16 }).map((_, j) => (
                        <div key={j} className={`flex-1 ${j % 2 === 0 ? 'bg-white/10' : 'bg-transparent'}`} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. INFRASTRUCTURE === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Warehouse size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.infrastructureSection, 'badge')}>{data.infrastructureSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.infrastructureSection, 'title')}>
              {data.infrastructureSection.title.replace(data.infrastructureSection.titleHighlight, '')}
              <span className="gradient-text">{data.infrastructureSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.infrastructureSection, 'subtitle')}>{data.infrastructureSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {data.infrastructureSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Monitor;
              const isLarge = item.size === 'large';
              const isLast = i === data.infrastructureSection.items.length - 1;

              if (isLarge) {
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="relative h-full">
                      <img src={data.infrastructureSection.image} alt={item.title} className="w-full h-[320px] object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-0 p-7 flex flex-col justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                          <Icon size={30} className="text-white" strokeWidth={2.2} />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                          <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-md" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (isLast) {
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`lg:col-span-5 group relative p-7 rounded-3xl bg-gradient-to-br ${item.color} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                      <Icon size={140} className="text-white" />
                    </motion.div>
                    <div className="relative h-full flex flex-col justify-between min-h-[280px]">
                      <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                        <Icon size={30} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                        <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

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
          </div>
        </div>
      </section>

      {/* === 7. LIQUIDATION (DARK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: `url(${data.liquidationSection.image})` }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src={data.liquidationSection.image} alt="Liquidation" className="w-full h-[520px] object-cover" data-tina-field={tinaField(data.liquidationSection, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <CheckCircle2 size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider" data-tina-field={tinaField(data.liquidationSection, 'imageBadgeTitle')}>{data.liquidationSection.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.liquidationSection, 'imageBadgeText')}>{data.liquidationSection.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Scale size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.liquidationSection, 'badge')}>{data.liquidationSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6" data-tina-field={tinaField(data.liquidationSection, 'title')}>
                {data.liquidationSection.title.replace(data.liquidationSection.titleHighlight, '')}
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{data.liquidationSection.titleHighlight}</span>
              </h2>
              <div className="space-y-5 text-base text-white/80 font-medium leading-relaxed">
                {data.liquidationSection.paragraphs.map((p: string, i: number) => (<p key={i}>{p}</p>))}
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.liquidationSection.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={11} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 8. JAFZA OFFSHORE (DARK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Vault size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.offshoreSection, 'badge')}>{data.offshoreSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.offshoreSection, 'title')}>
              {data.offshoreSection.title.replace(data.offshoreSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{data.offshoreSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/75 font-medium max-w-2xl mx-auto" data-tina-field={tinaField(data.offshoreSection, 'subtitle')}>{data.offshoreSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {data.offshoreSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Building2;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex gap-5 group">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-black text-white mb-1.5 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <Award size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700" data-tina-field={tinaField(data.whyChooseUsSection, 'badge')}>{data.whyChooseUsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyChooseUsSection, 'title')}>
              {data.whyChooseUsSection.title.replace(data.whyChooseUsSection.titleHighlight, '')}
              <span className="gradient-text">{data.whyChooseUsSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whyChooseUsSection, 'subtitle')}>{data.whyChooseUsSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.whyChooseUsSection.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative flex items-start gap-4 p-5 rounded-2xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-base font-black text-[#0A0F1F] mb-1 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'description')}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. COST BREAKDOWN + COMPARISON === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-950 via-orange-950 to-red-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <DollarSign size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.costBreakdownSection, 'badge')}>{data.costBreakdownSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.costBreakdownSection, 'title')}>
              {data.costBreakdownSection.title.replace(data.costBreakdownSection.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{data.costBreakdownSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-white/75 font-medium" data-tina-field={tinaField(data.costBreakdownSection, 'subtitle')}>{data.costBreakdownSection.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {data.costBreakdownSection.items.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
                <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 overflow-hidden shadow-2xl p-5 hover:-translate-y-2 transition-all duration-500">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-3" data-tina-field={tinaField(item, 'item')}>{item.item}</div>
                  <div className="text-xs font-bold text-white/40 mb-1">AED</div>
                  <div className={`text-lg md:text-xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent leading-tight mb-3`} data-tina-field={tinaField(item, 'cost')}>{item.cost}</div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest pt-3 border-t border-white/10" data-tina-field={tinaField(item, 'notes')}>{item.notes}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto mb-12">
            <div className="relative rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 backdrop-blur-2xl border-2 border-amber-400/40 p-6 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg">
                  <DollarSign size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-amber-300 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.costBreakdownSection, 'yearTotalLabel')}>{data.costBreakdownSection.yearTotalLabel}</div>
                  <div className="text-sm font-bold text-white/70" data-tina-field={tinaField(data.costBreakdownSection, 'yearTotalNote')}>{data.costBreakdownSection.yearTotalNote}</div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-[10px] font-black text-amber-300 uppercase tracking-widest mb-1">From</div>
                <div className="text-3xl md:text-4xl font-black text-white leading-none" data-tina-field={tinaField(data.costBreakdownSection, 'yearTotalFrom')}>
                  {data.costBreakdownSection.yearTotalFrom}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1" data-tina-field={tinaField(data.comparisonSection, 'title')}>{data.comparisonSection.title}</h3>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest" data-tina-field={tinaField(data.comparisonSection, 'subtitle')}>{data.comparisonSection.subtitle}</p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-2xl">
              <div className="grid grid-cols-4 gap-2 p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-b border-white/10">
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest">Factor</div>
                <div className="text-[10px] font-black text-amber-300 uppercase tracking-widest text-center">JAFZA</div>
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest text-center">DMCC</div>
                <div className="text-[10px] font-black text-white/60 uppercase tracking-widest text-center">IFZA</div>
              </div>
              {data.comparisonSection.items.map((row: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }} className={`grid grid-cols-4 gap-2 p-4 items-center ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-b-0`}>
                  <div className="text-xs font-bold text-white/70" data-tina-field={tinaField(row, 'factor')}>{row.factor}</div>
                  <div className="text-xs font-black text-amber-300 text-center" data-tina-field={tinaField(row, 'jafza')}>{row.jafza}</div>
                  <div className="text-xs font-bold text-white/60 text-center" data-tina-field={tinaField(row, 'dmcc')}>{row.dmcc}</div>
                  <div className="text-xs font-bold text-white/60 text-center" data-tina-field={tinaField(row, 'ifza')}>{row.ifza}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-white/50 font-medium mt-4 max-w-2xl mx-auto" data-tina-field={tinaField(data.comparisonSection, 'verdict')}>
              {data.comparisonSection.verdict}
            </p>
          </motion.div>
        </div>
      </section>

      {/* === 11. SETUP PROCESS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Rocket size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.setupStepsSection, 'badge')}>{data.setupStepsSection.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.setupStepsSection, 'title')}>
              {data.setupStepsSection.title.replace(data.setupStepsSection.titleHighlight, '')}
              <span className="gradient-text">{data.setupStepsSection.titleHighlight}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.setupStepsSection, 'subtitle')}>{data.setupStepsSection.subtitle}</p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-orange-200 to-red-200" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {data.setupStepsSection.steps.map((step: any, i: number) => {
                const Icon = iconMap[step.icon] || Target;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative">
                    <div className="hidden lg:flex justify-center mb-6">
                      <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon size={26} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                    <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest" data-tina-field={tinaField(step, 'step')}>Step {step.step}</span>
                      </div>
                      <div className="lg:hidden w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md mb-4">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(step, 'title')}>{step.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(step, 'description')}>{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 12. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data.faqsSection, 'badge')}>{data.faqsSection.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqsSection, 'title')}>
                {data.faqsSection.title.replace(data.faqsSection.titleHighlight, '')}
                <span className="gradient-text">{data.faqsSection.titleHighlight}</span>
              </h2>
              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqsSection, 'subtitle')}>{data.faqsSection.subtitle}</p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Ship size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'title')}>{data.faqsSection.sidebarCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5" data-tina-field={tinaField(data.faqsSection.sidebarCard, 'text')}>{data.faqsSection.sidebarCard.text}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink(data.faqsSection.sidebarCard.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-amber-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-amber-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-amber-400 group-open:to-orange-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-amber-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-amber-50/40 overflow-hidden">
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
                      <ArrowRight size={14} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-orange-900/70 to-amber-900/50" />
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
                    <span className="text-amber-300">{data.finalCTA.titleHighlight}</span>
                  </h2>
                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>{data.finalCTA.subtitle}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
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
                        <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
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
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-amber-600 hover:text-amber-700 transition">
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