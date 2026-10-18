// File: src/pages/PrivacyPolicy.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, ShieldCheck, FileText, Lock, Cookie, Users,
  Share2, Globe, AlertCircle, CheckCircle2, Mail, ArrowRight,
  Sparkles, Scale, Server, Eye, Edit3, RefreshCw, Building2,
  Phone, MessageCircle, Star, Info, ClipboardList,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import privacyData from '../content/pages/privacy-policy.json';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

// Icon map — JSON me string hoti hai, yahan actual icon
const iconMap: any = {
  Lock, Server, ShieldCheck, CheckCircle2, FileText, Share2, Eye,
  Cookie, Globe, Users, Edit3, RefreshCw, Mail, Phone, MessageCircle,
  Info, ClipboardList, AlertCircle, Sparkles, Star, Building2, Scale,
};

export default function PrivacyPolicy({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.pages || privacyData;

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <ShieldCheck size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-20 left-[10%] opacity-10 hidden lg:block">
          <Lock size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <span>/</span><span>Privacy Policy</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Sparkles size={14} className="text-indigo-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6" data-tina-field={tinaField(data, 'heroTitle')}>
            {data.heroTitle.replace(data.heroTitleHighlight, '')}
            <span className="text-indigo-300">{data.heroTitleHighlight}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-3xl" data-tina-field={tinaField(data, 'heroSubtitle')}>
            {data.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ============ 2. TRUST BADGES ============ */}
      <section className="relative py-8 bg-white -mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.trustBadges.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(item, 'label')}>{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 3. MAIN CONTENT ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* LEFT: TABLE OF CONTENTS */}
            <motion.aside initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500" />
                <div className="p-6">
                  <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-5 flex items-center gap-2">
                    <ClipboardList size={16} className="text-indigo-600" />
                    <span data-tina-field={tinaField(data, 'tocTitle')}>{data.tocTitle}</span>
                  </h3>
                  <nav className="space-y-1">
                    {data.tocSections.map((section: any, i: number) => (
                      <a key={section.id} href={`#${section.id}`} className="group flex items-center gap-2.5 p-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-200">
                        <span className="w-5 h-5 rounded-md bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-slate-500 group-hover:text-indigo-700 transition-colors">
                          {i + 1}
                        </span>
                        <span className="flex-1 leading-snug" data-tina-field={tinaField(section, 'title')}>{section.title}</span>
                      </a>
                    ))}
                  </nav>

                  {/* Contact Card */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 p-5 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                      <motion.div animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                        <ShieldCheck size={60} className="text-white" />
                      </motion.div>
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-3">
                          <Mail size={18} className="text-white" strokeWidth={2.2} />
                        </div>
                        <h4 className="text-sm font-black text-white leading-tight mb-1" data-tina-field={tinaField(data.sidebarCard, 'title')}>{data.sidebarCard.title}</h4>
                        <p className="text-[11px] text-white/80 font-medium mb-3 leading-relaxed" data-tina-field={tinaField(data.sidebarCard, 'text')}>
                          {data.sidebarCard.text}
                        </p>
                        <a href={data.sidebarCard.emailHref} className="inline-flex items-center gap-1.5 w-full justify-center px-3 py-2 rounded-lg bg-white text-indigo-700 font-black text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
                          <Mail size={11} strokeWidth={2.5} />
                          <span data-tina-field={tinaField(data.sidebarCard, 'buttonText')}>{data.sidebarCard.buttonText}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* RIGHT: CONTENT */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-8 space-y-8">

              {/* Intro */}
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 absolute top-0 left-0 right-0" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Info size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.intro, 'heading')}>{data.intro.heading}</h2>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-0.5" data-tina-field={tinaField(data.intro, 'subheading')}>{data.intro.subheading}</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  {data.intro.paragraphs.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 text-amber-900">
                    <span className="font-black">Important: </span>
                    <span data-tina-field={tinaField(data.intro, 'importantNote')}>{data.intro.importantNote}</span>
                  </p>
                </div>
              </div>

              {/* SECTION 01: Information Collection */}
              <div id="info-collection" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-blue-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <FileText size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section01, 'label')}>{data.section01.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section01, 'title')}>{data.section01.title}</h2>
                  </div>
                </div>

                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  <p data-tina-field={tinaField(data.section01, 'intro')}>{data.section01.intro}</p>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                    <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center text-white text-xs font-black">a</span>
                      <span data-tina-field={tinaField(data.section01.personalInfo, 'title')}>{data.section01.personalInfo.title}</span>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3" data-tina-field={tinaField(data.section01.personalInfo, 'text')}>
                      {data.section01.personalInfo.text}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {data.section01.personalInfo.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={11} className="text-white" strokeWidth={3} />
                          </span>
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100">
                    <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center text-white text-xs font-black">b</span>
                      <span data-tina-field={tinaField(data.section01.aggregateInfo, 'title')}>{data.section01.aggregateInfo.title}</span>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed" data-tina-field={tinaField(data.section01.aggregateInfo, 'text')}>
                      {data.section01.aggregateInfo.text}
                    </p>
                  </div>

                  <p className="p-4 rounded-xl bg-slate-50 border-l-4 border-slate-300 text-sm">
                    <span className="font-black text-[#0A0F1F]">Note: </span>
                    <span data-tina-field={tinaField(data.section01, 'note')}>{data.section01.note}</span>
                  </p>
                </div>
              </div>

              {/* SECTION 02: Disclosure */}
              <div id="disclosure" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-sky-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-sky-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Share2 size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section02, 'label')}>{data.section02.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section02, 'title')}>{data.section02.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed mb-4" data-tina-field={tinaField(data.section02, 'intro')}>
                  {data.section02.intro}
                </p>
                <ol className="space-y-3">
                  {data.section02.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-sky-600 flex items-center justify-center flex-shrink-0 text-white text-[11px] font-black">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-600 font-medium leading-snug pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* SECTION 03: Use of Information */}
              <div id="use-of-info" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-cyan-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Eye size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-sky-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section03, 'label')}>{data.section03.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section03, 'title')}>{data.section03.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed mb-4" data-tina-field={tinaField(data.section03, 'intro')}>
                  {data.section03.intro}
                </p>
                <ol className="space-y-3">
                  {data.section03.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center flex-shrink-0 text-white text-[11px] font-black">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-600 font-medium leading-snug pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* SECTION 04: Cookies */}
              <div id="cookies" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-teal-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Cookie size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section04, 'label')}>{data.section04.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section04, 'title')}>{data.section04.title}</h2>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  {data.section04.paragraphs.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100">
                    <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-wider mb-3" data-tina-field={tinaField(data.section04.cookieUses, 'title')}>
                      {data.section04.cookieUses.title}
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {data.section04.cookieUses.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={11} className="text-white" strokeWidth={3} />
                          </span>
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 text-sm text-amber-900">
                    <span className="font-black">Note: </span>
                    <span data-tina-field={tinaField(data.section04, 'note')}>{data.section04.note}</span>
                  </p>
                  <p data-tina-field={tinaField(data.section04, 'analyticsText')}>{data.section04.analyticsText}</p>
                </div>
              </div>

              {/* SECTION 05: Content Providers */}
              <div id="content-providers" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-emerald-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Globe size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section05, 'label')}>{data.section05.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section05, 'title')}>{data.section05.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data.section05, 'text')}>
                  {data.section05.text}
                </p>
              </div>

              {/* SECTION 06: Opting In/Out */}
              <div id="opting" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Users size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section06, 'label')}>{data.section06.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section06, 'title')}>{data.section06.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed mb-4" data-tina-field={tinaField(data.section06, 'intro')}>
                  {data.section06.intro}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.section06.options.map((item: any, i: number) => (
                    <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
                      <h3 className="text-sm font-black text-emerald-700 uppercase tracking-wider mb-2" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed" data-tina-field={tinaField(item, 'desc')}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 07: Protection */}
              <div id="protection" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-lime-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 to-lime-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Lock size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section07, 'label')}>{data.section07.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section07, 'title')}>{data.section07.title}</h2>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  {data.section07.paragraphs.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="grid md:grid-cols-3 gap-3">
                    {data.section07.protectionBadges.map((item: any, i: number) => {
                      const Icon = iconMap[item.icon] || Lock;
                      return (
                        <div key={i} className="p-4 rounded-2xl bg-gradient-to-br from-green-50 to-lime-50 border border-green-100 text-center">
                          <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-green-400 to-lime-600 flex items-center justify-center shadow-md mb-2">
                            <Icon size={18} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div className="text-[10px] font-black text-green-700 uppercase tracking-wider" data-tina-field={tinaField(item, 'label')}>{item.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 text-sm text-amber-900">
                    <span className="font-black">Important: </span>
                    <span data-tina-field={tinaField(data.section07, 'importantNote')}>{data.section07.importantNote}</span>
                  </p>
                </div>
              </div>

              {/* SECTION 08: Overseas */}
              <div id="overseas" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 to-yellow-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-lime-400 to-yellow-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Globe size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-lime-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section08, 'label')}>{data.section08.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section08, 'title')}>{data.section08.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data.section08, 'text')}>
                  {data.section08.text}
                </p>
              </div>

              {/* SECTION 09: Holding */}
              <div id="holding" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Edit3 size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section09, 'label')}>{data.section09.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section09, 'title')}>{data.section09.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data.section09, 'text')}>
                  {data.section09.text}
                </p>
              </div>

              {/* SECTION 10: Amendments */}
              <div id="amendments" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-rose-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-rose-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <RefreshCw size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section10, 'label')}>{data.section10.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section10, 'title')}>{data.section10.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data.section10, 'text')}>
                  {data.section10.text}
                </p>
              </div>

              {/* SECTION 11: Acceptance */}
              <div id="acceptance" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-pink-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section11, 'label')}>{data.section11.label}</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.section11, 'title')}>{data.section11.title}</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data.section11, 'text')}>
                  {data.section11.text}
                </p>
              </div>

              {/* SECTION 12: Contact (CTA) */}
              <div id="contact" className="relative rounded-3xl overflow-hidden shadow-2xl scroll-mt-32">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Mail size={100} className="text-white" />
                </motion.div>
                <div className="relative p-6 md:p-10">
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-md flex-shrink-0">
                      <Mail size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.section12, 'label')}>{data.section12.label}</div>
                      <h2 className="text-xl md:text-2xl font-black text-white leading-tight" data-tina-field={tinaField(data.section12, 'title')}>{data.section12.title}</h2>
                    </div>
                  </div>
                  <p className="text-base text-white/90 font-medium leading-relaxed mb-6" data-tina-field={tinaField(data.section12, 'intro')}>
                    {data.section12.intro}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <a href={data.section12.emailHref} className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Mail size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest" data-tina-field={tinaField(data.section12, 'emailLabel')}>{data.section12.emailLabel}</div>
                        <div className="text-sm font-black text-white break-all" data-tina-field={tinaField(data.section12, 'email')}>{data.section12.email}</div>
                      </div>
                    </a>
                    <a href={data.section12.phoneHref} className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Phone size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest" data-tina-field={tinaField(data.section12, 'phoneLabel')}>{data.section12.phoneLabel}</div>
                        <div className="text-sm font-black text-white" data-tina-field={tinaField(data.section12, 'phone')}>{data.section12.phone}</div>
                      </div>
                    </a>
                    <a href={getWhatsAppLink(data.section12.whatsappMessage)} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white text-indigo-700 hover:scale-[1.02] transition-all shadow-lg md:col-span-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md">
<WhatsAppIcon size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest" data-tina-field={tinaField(data.section12, 'whatsappLabel')}>{data.section12.whatsappLabel}</div>
                        <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.section12, 'whatsappValue')}>{data.section12.whatsappValue}</div>
                      </div>
                      <ArrowRight size={16} className="text-indigo-500" strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 4. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<WhatsAppIcon size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-slate-500" data-tina-field={tinaField(data.faqs, 'badge')}>{data.faqs.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4" data-tina-field={tinaField(data.faqs, 'title')}>
              {data.faqs.title.replace(data.faqs.titleHighlight, '')}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{data.faqs.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {data.faqs.items.map((faq: any, i: number) => (
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-purple-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                <summary className="flex items-start gap-4 p-6 list-none">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                    <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-indigo-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                  </div>
                  <div className="relative flex-shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-indigo-400 group-open:to-purple-600 group-open:border-transparent transition-all duration-300">
                      <span className="text-indigo-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      </section>

    </div>
  );
}