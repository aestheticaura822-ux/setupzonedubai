// File: src/pages/About.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, Building2, Users, Award, Target,
  Sparkles, CheckCircle2, MessageCircle, ArrowRight, Rocket, Globe,
  TrendingUp, ShieldCheck, Handshake, Star, Briefcase, Eye,
  Zap, DollarSign, UserCheck, Factory, Layers, MapPin, Phone, Mail,
  Laptop, Crown, Scale, FileText, RefreshCw,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import aboutData from '../content/pages/about.json';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';


// Icon map — JSON me string hota hai, yahan actual icon
const iconMap: any = {
  Building2, Globe, Award, Users, Briefcase, Crown, ShieldCheck,
  Rocket, Laptop, Factory, UserCheck, FileText, Scale, DollarSign,
  Zap, RefreshCw, TrendingUp, Target, Eye, Layers, Handshake,
  Sparkles, MessageCircle, Phone, Mail, MapPin, Star,
};

// Gradient colors (index wise rotate)
const softColors = [
  'from-amber-400 to-orange-600',
  'from-orange-400 to-red-600',
  'from-red-400 to-rose-600',
  'from-rose-400 to-pink-600',
  'from-pink-400 to-fuchsia-600',
  'from-fuchsia-400 to-purple-600',
  'from-purple-400 to-violet-600',
  'from-violet-400 to-indigo-600',
];

export default function About({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.pages || aboutData;

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} data-tina-field={tinaField(data, 'heroImage')} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-amber-950/80 to-orange-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Sparkles size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>About Us</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-amber-300" />
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
                <a href={getWhatsAppLink("Hi! I'd like to know more about SetupZoneDubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
<WhatsAppIcon size={16} className="text-emerald-600" />
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  Free Consultation
                </Link>
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

            <div className="lg:col-span-5 hidden lg:block">
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-30 blur-2xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img src={data.heroImageCard} alt="Team" className="w-full h-[420px] object-cover" data-tina-field={tinaField(data, 'heroImageCard')} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                        <Handshake size={24} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-amber-300 uppercase tracking-widest" data-tina-field={tinaField(data, 'heroCardBadge')}>{data.heroCardBadge}</div>
                        <div className="text-lg font-black text-white" data-tina-field={tinaField(data, 'heroCardTitle')}>{data.heroCardTitle}</div>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 font-medium leading-relaxed" data-tina-field={tinaField(data, 'heroCardText')}>
                      {data.heroCardText}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. STATS ROW ============ */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {data.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.icon] || Building2;
              const color = softColors[i % softColors.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,146,60,0.15)] hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${color}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
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

      {/* ============ 3. WHO WE ARE — Split ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-amber-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src={data.whoWeAre.image} alt="Team meeting" className="w-full h-[500px] object-cover" data-tina-field={tinaField(data.whoWeAre, 'image')} />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider" data-tina-field={tinaField(data.whoWeAre, 'imageBadgeTitle')}>{data.whoWeAre.imageBadgeTitle}</div>
                      <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.whoWeAre, 'imageBadgeText')}>{data.whoWeAre.imageBadgeText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <Users size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500" data-tina-field={tinaField(data.whoWeAre, 'badge')}>{data.whoWeAre.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.whoWeAre, 'title')}>
                {data.whoWeAre.title.replace(data.whoWeAre.titleHighlight, '')}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{data.whoWeAre.titleHighlight}</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                {data.whoWeAre.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {data.whoWeAre.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
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

      {/* ============ 4. WHAT MAKES US DIFFERENT — Dark ============ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.whatMakesUsDifferent, 'badge')}>{data.whatMakesUsDifferent.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whatMakesUsDifferent, 'title')}>
              {data.whatMakesUsDifferent.title.replace(data.whatMakesUsDifferent.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{data.whatMakesUsDifferent.titleHighlight}</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-5xl mx-auto">
            <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="space-y-5 text-base md:text-lg text-white/90 font-medium leading-relaxed">
                {data.whatMakesUsDifferent.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
                {data.whatMakesUsDifferent.features.map((item: any, i: number) => {
                  const Icon = iconMap[item.icon] || DollarSign;
                  return (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md mb-2">
                        <Icon size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-xs font-black text-white uppercase tracking-wider">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 5. WHAT WE DO ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Briefcase size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700" data-tina-field={tinaField(data.whatWeDo, 'badge')}>{data.whatWeDo.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whatWeDo, 'title')}>
              {data.whatWeDo.title.replace(data.whatWeDo.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{data.whatWeDo.titleHighlight}</span>
              {data.whatWeDo.title.includes('In') ? ' In' : ''}
            </h2>
            <p className="text-base text-[#475569] font-medium" data-tina-field={tinaField(data.whatWeDo, 'subtitle')}>{data.whatWeDo.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whatWeDo.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Globe;
              const color = softColors[i % softColors.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'desc')}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="group relative">
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 opacity-20">
                  <Rocket size={100} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg mb-5">
                    <Rocket size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 leading-tight" data-tina-field={tinaField(data.whatWeDo.ctaCard, 'title')}>{data.whatWeDo.ctaCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5" data-tina-field={tinaField(data.whatWeDo.ctaCard, 'text')}>{data.whatWeDo.ctaCard.text}</p>
                </div>
                <a href={getWhatsAppLink("Hi! I want a free consultation.")} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-amber-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition">
<WhatsAppIcon size={14} className="text-emerald-600" />
                  <span data-tina-field={tinaField(data.whatWeDo.ctaCard, 'buttonText')}>{data.whatWeDo.ctaCard.buttonText}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 6. WHO WE SERVE ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Users size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700" data-tina-field={tinaField(data.whoWeServe, 'badge')}>{data.whoWeServe.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whoWeServe, 'title')}>
              {data.whoWeServe.title.replace(data.whoWeServe.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{data.whoWeServe.titleHighlight}</span>
              {' With'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {data.whoWeServe.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Rocket;
              const color = softColors[i % softColors.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full text-center overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
                    <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed" data-tina-field={tinaField(item, 'desc')}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 7. MISSION & VISION ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Target size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700" data-tina-field={tinaField(data.missionVision, 'badge')}>{data.missionVision.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.missionVision, 'title')}>
              {data.missionVision.title.replace(data.missionVision.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{data.missionVision.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="group relative">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-amber-50 border border-amber-100 shadow-lg h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg">
                    <Target size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-amber-600 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.missionVision.mission, 'number')}>{data.missionVision.mission.number}</div>
                    <h3 className="text-2xl font-black text-[#0A0F1F]" data-tina-field={tinaField(data.missionVision.mission, 'title')}>{data.missionVision.mission.title}</h3>
                  </div>
                </div>
                <p className="text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data.missionVision.mission, 'text')}>
                  {data.missionVision.mission.text}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="group relative">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-orange-400 to-rose-600 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-orange-50 border border-orange-100 shadow-lg h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-600 flex items-center justify-center shadow-lg">
                    <Eye size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-orange-600 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.missionVision.vision, 'number')}>{data.missionVision.vision.number}</div>
                    <h3 className="text-2xl font-black text-[#0A0F1F]" data-tina-field={tinaField(data.missionVision.vision, 'title')}>{data.missionVision.vision.title}</h3>
                  </div>
                </div>
                <p className="text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data.missionVision.vision, 'text')}>
                  {data.missionVision.vision.text}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 8. WHY CHOOSE US ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Star size={14} className="text-amber-600" fill="currentColor" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700" data-tina-field={tinaField(data.whyChooseUs, 'badge')}>{data.whyChooseUs.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.whyChooseUs, 'title')}>
              {data.whyChooseUs.title.replace(data.whyChooseUs.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{data.whyChooseUs.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {data.whyChooseUs.items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
                  <div className="relative p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                      <p className="text-sm font-bold text-[#1E293B] leading-snug pt-1" data-tina-field={tinaField(item, 'text')}>{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 9. SETUP SIMPLIFIED — Growth Features ============ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Layers size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data.setupSimplified, 'badge')}>{data.setupSimplified.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.setupSimplified, 'title')}>
              {data.setupSimplified.title.replace(data.setupSimplified.titleHighlight, '')}
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{data.setupSimplified.titleHighlight}</span>
              {' So You Focus on Growth'}
            </h2>
            <p className="text-base text-white/70 font-medium max-w-2xl mx-auto" data-tina-field={tinaField(data.setupSimplified, 'subtitle')}>
              {data.setupSimplified.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {data.setupSimplified.features.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || FileText;
              const color = softColors[i % softColors.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative">
                  <div className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full text-center">
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xs font-black text-white mb-1 leading-tight" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <p className="text-[10px] text-white/60 font-medium leading-relaxed" data-tina-field={tinaField(item, 'desc')}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-center text-sm md:text-base text-white/70 font-medium leading-relaxed max-w-3xl mx-auto mt-12" data-tina-field={tinaField(data.setupSimplified, 'footerText')}>
            {data.setupSimplified.footerText}
          </motion.p>
        </div>
      </section>

      {/* ============ 10. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<WhatsAppIcon size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500" data-tina-field={tinaField(data.faqs, 'badge')}>{data.faqs.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqs, 'title')}>
                {data.faqs.title.replace(data.faqs.titleHighlight, '')}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{data.faqs.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqs, 'subtitle')}>
                {data.faqs.subtitle}
              </p>

              {/* Contact Card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-amber-500 via-orange-600 to-rose-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Phone size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
<WhatsAppIcon size={16} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqs.contactCard, 'title')}>{data.faqs.contactCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4" data-tina-field={tinaField(data.faqs.contactCard, 'text')}>{data.faqs.contactCard.text}</p>

                  <div className="space-y-3">
                    <a href={data.faqs.contactCard.phoneHref} className="flex items-center gap-2.5 text-white hover:text-amber-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Phone size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold" data-tina-field={tinaField(data.faqs.contactCard, 'phone')}>{data.faqs.contactCard.phone}</span>
                    </a>
                    <a href={data.faqs.contactCard.emailHref} className="flex items-center gap-2.5 text-white hover:text-amber-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Mail size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold break-all" data-tina-field={tinaField(data.faqs.contactCard, 'email')}>{data.faqs.contactCard.email}</span>
                    </a>
                    <a href={getWhatsAppLink(data.faqs.contactCard.whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-amber-700 font-bold text-xs shadow-lg hover:scale-105 transition-transform">
<WhatsAppIcon size={16} className="text-emerald-600" />
                      <span data-tina-field={tinaField(data.faqs.contactCard, 'whatsappText')}>{data.faqs.contactCard.whatsappText}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {data.faqs.items.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(251,146,60,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
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
                    <div className="pt-2 border-t border-dashed border-slate-200">
                      <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(faq, 'a')}>{faq.a}</p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 11. FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-amber-950/70 to-orange-950/50" />
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

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>
                    {data.finalCTA.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <span data-tina-field={tinaField(data.finalCTA.buttons, 'primary')}>{data.finalCTA.buttons.primary}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
<WhatsAppIcon size={16} className="text-emerald-600" />
                      <span data-tina-field={tinaField(data.finalCTA.buttons, 'secondary')}>{data.finalCTA.buttons.secondary}</span>
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
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss UAE business setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<WhatsAppIcon size={16} className="text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5" data-tina-field={tinaField(data.finalCTA.whatsapp, 'label')}>{data.finalCTA.whatsapp.label}</p>
                        <p className="text-base font-black text-[#0A0F1F]" data-tina-field={tinaField(data.finalCTA.whatsapp, 'value')}>{data.finalCTA.whatsapp.value}</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5" data-tina-field={tinaField(data.finalCTA.whatsapp, 'note')}>{data.finalCTA.whatsapp.note}</p>
                      </div>
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Mail size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1" data-tina-field={tinaField(data.finalCTA.email, 'label')}>{data.finalCTA.email.label}</p>
                        <p className="text-sm font-bold text-[#0A0F1F] break-all" data-tina-field={tinaField(data.finalCTA.email, 'value')}>{data.finalCTA.email.value}</p>
                        <p className="text-xs text-slate-500 font-medium mt-1" data-tina-field={tinaField(data.finalCTA.email, 'note')}>{data.finalCTA.email.note}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <MapPin size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1" data-tina-field={tinaField(data.finalCTA.office, 'label')}>{data.finalCTA.office.label}</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1" data-tina-field={tinaField(data.finalCTA.office, 'line1')}>{data.finalCTA.office.line1}</p>
                        <p className="text-xs text-slate-500 font-medium leading-snug" data-tina-field={tinaField(data.finalCTA.office, 'line2')}>{data.finalCTA.office.line2}</p>
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