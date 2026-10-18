// File: src/pages/Contact.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, Phone, Mail, MapPin, MessageCircle,
  Send, Clock, ShieldCheck, Star, User, Building2, FileText, Sparkles,
  ArrowRight, CheckCircle2, Globe, Award, Headset, MessageSquare,
  Briefcase, Gift,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import contactData from '../content/pages/contact.json';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

// Icon map — JSON me string hoti hai, yahan actual icon
const iconMap: any = {
  Headset, Building2, Globe, Phone, Mail, MapPin, MessageCircle,
  User, FileText, Sparkles, Send, Clock, ShieldCheck, Star,
  Award, MessageSquare, Briefcase, Gift, ArrowRight, CheckCircle2,
  HomeIcon,
};

export default function Contact({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.pages || contactData;

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = `Hi! I'd like to get in touch.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
      window.open(getWhatsAppLink(text), '_blank');
    }, 800);
  };

  // Resolve WhatsApp action link
  const resolveActionLink = (link: string) => {
    if (link === 'whatsapp') return getWhatsAppLink('Hi! I would like to reach out.');
    return link;
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
<WhatsAppIcon size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-20 left-[10%] opacity-10 hidden lg:block">
          <Mail size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <span>/</span><span>Contact Us</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Sparkles size={14} className="text-rose-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6" data-tina-field={tinaField(data, 'heroTitle')}>
            {data.heroTitle.replace(data.heroTitleHighlight, '')}
            <span className="text-rose-300">{data.heroTitleHighlight}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl" data-tina-field={tinaField(data, 'heroSubtitle')}>
            {data.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ============ 2. CONTACT INFO CARDS ============ */}
      <section className="relative py-14 md:py-16 bg-white -mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {data.contactCards.map((info: any, i: number) => {
              const Icon = iconMap[info.icon] || Headset;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden flex flex-col">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3" data-tina-field={tinaField(info, 'title')}>{info.title}</h3>
                    <div className="space-y-1.5 mb-5 flex-1">
                      {info.lines.map((line: string, li: number) => (
                        <p key={li} className="text-sm font-bold text-[#0A0F1F] leading-snug break-words">{line}</p>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {info.actions.map((action: any, ai: number) => {
                        const ActionIcon = iconMap[action.icon] || Phone;
                        const resolvedLink = resolveActionLink(action.link);
                        return (
                          <a key={ai} href={resolvedLink} target={resolvedLink.startsWith('http') ? '_blank' : undefined} rel={resolvedLink.startsWith('http') ? 'noreferrer' : undefined} className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r ${info.color} text-white font-black text-[10px] uppercase tracking-widest shadow-md hover:scale-105 transition-transform`}>
                            <ActionIcon size={12} strokeWidth={2.5} />
                            {action.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 3. TRUST BAR ============ */}
      <section className="relative py-8 bg-gradient-to-r from-slate-50 via-rose-50 to-pink-50 border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <div>
                <div className="text-sm font-black text-[#0A0F1F] leading-none" data-tina-field={tinaField(data.trustBar, 'ratingText')}>{data.trustBar.ratingText}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5" data-tina-field={tinaField(data.trustBar, 'scoreLabel')}>
                  {data.trustBar.scoreLabel}
                </div>
              </div>
            </div>
            <div className="w-px h-8 bg-rose-200 hidden md:block" />
            <div className="flex items-center gap-3">
              <Award size={22} className="text-rose-600" />
              <span className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.trustBar, 'awardText')}>{data.trustBar.awardText}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. CONTACT FORM + SIDEBAR ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-rose-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* LEFT: FORM */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-sm mb-6">
                <MessageSquare size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-rose-700" data-tina-field={tinaField(data.formSection, 'badge')}>{data.formSection.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6" data-tina-field={tinaField(data.formSection, 'title')}>
                {data.formSection.title.replace(data.formSection.titleHighlight, '')}
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">{data.formSection.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8 max-w-xl" data-tina-field={tinaField(data.formSection, 'subtitle')}>
                {data.formSection.subtitle}
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500" />
                  <div className="p-6 md:p-8 space-y-5">

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                          <User size={12} className="inline mr-1.5 text-rose-600" />
                          Full Name *
                        </label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white outline-none transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                          <Mail size={12} className="inline mr-1.5 text-rose-600" />
                          Email Address *
                        </label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white outline-none transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                          <Phone size={12} className="inline mr-1.5 text-rose-600" />
                          Phone Number *
                        </label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+971 56 655 6645" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white outline-none transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                          <Briefcase size={12} className="inline mr-1.5 text-rose-600" />
                          Subject *
                        </label>
                        <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white outline-none transition-colors text-sm font-medium text-slate-900 cursor-pointer">
                          <option value="">Select a topic...</option>
                          {data.formSection.subjects.map((subject: string, si: number) => (
                            <option key={si} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                        <MessageSquare size={12} className="inline mr-1.5 text-rose-600" />
                        Your Message *
                      </label>
                      <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your business needs..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white outline-none transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400 resize-none" />
                    </div>

                    <button type="submit" className="group/btn relative w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-black text-sm uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      <Send size={16} className="relative" strokeWidth={2.5} />
                      <span className="relative" data-tina-field={tinaField(data.formSection, 'submitButton')}>{data.formSection.submitButton}</span>
                      <ArrowRight size={16} className="relative group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </button>

                    <div className="flex items-center justify-center gap-2 pt-2">
                      <ShieldCheck size={14} className="text-emerald-500" strokeWidth={2.5} />
                      <span className="text-xs font-bold text-slate-500" data-tina-field={tinaField(data.formSection, 'secureNote')}>
                        {data.formSection.secureNote}
                      </span>
                    </div>
                  </div>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-xl p-10 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg mb-6">
                    <CheckCircle2 size={40} className="text-white" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="text-2xl font-black text-[#0A0F1F] mb-3" data-tina-field={tinaField(data.formSection, 'successTitle')}>{data.formSection.successTitle}</h3>
                  <p className="text-base text-slate-600 font-medium mb-6" data-tina-field={tinaField(data.formSection, 'successText')}>
                    {data.formSection.successText}
                  </p>
                  <a href={getWhatsAppLink(data.formSection.successWhatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition">
<WhatsAppIcon size={16} strokeWidth={2.5} />
                    <span data-tina-field={tinaField(data.formSection, 'successWhatsappText')}>{data.formSection.successWhatsappText}</span>
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* RIGHT: SIDEBAR */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 space-y-5">

              {/* Instant Contact Card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-rose-500 via-pink-600 to-rose-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Headset size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-4">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest" data-tina-field={tinaField(data.sidebar.instantCard, 'availableBadge')}>{data.sidebar.instantCard.availableBadge}</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2" data-tina-field={tinaField(data.sidebar.instantCard, 'title')}>{data.sidebar.instantCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium mb-5" data-tina-field={tinaField(data.sidebar.instantCard, 'text')}>
                    {data.sidebar.instantCard.text}
                  </p>

                  <div className="space-y-3">
                    <a href={data.sidebar.instantCard.callHref} className="flex items-center gap-3 p-3 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Phone size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest" data-tina-field={tinaField(data.sidebar.instantCard, 'callLabel')}>{data.sidebar.instantCard.callLabel}</div>
                        <div className="text-sm font-black text-white" data-tina-field={tinaField(data.sidebar.instantCard, 'callNumber')}>{data.sidebar.instantCard.callNumber}</div>
                      </div>
                    </a>
                    <a href={getWhatsAppLink(data.sidebar.instantCard.whatsappMessage)} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white text-rose-700 hover:scale-[1.02] transition-all shadow-lg">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md">
<WhatsAppIcon size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-rose-500 uppercase tracking-widest" data-tina-field={tinaField(data.sidebar.instantCard, 'whatsappLabel')}>{data.sidebar.instantCard.whatsappLabel}</div>
                        <div className="text-sm font-black text-[#0A0F1F]" data-tina-field={tinaField(data.sidebar.instantCard, 'whatsappValue')}>{data.sidebar.instantCard.whatsappValue}</div>
                      </div>
                      <ArrowRight size={16} className="text-rose-500" strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Info Card */}
              <div className="rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />
                <div className="p-6 space-y-5">
                  <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={16} className="text-amber-600" />
                    <span data-tina-field={tinaField(data.sidebar.officeCard, 'title')}>{data.sidebar.officeCard.title}</span>
                  </h3>

                  {/* Office */}
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Building2 size={16} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-black text-amber-700 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.sidebar.officeCard, 'officeLabel')}>
                        {data.sidebar.officeCard.officeLabel}
                      </div>
                      <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1" data-tina-field={tinaField(data.sidebar.officeCard, 'addressLine1')}>
                        {data.sidebar.officeCard.addressLine1}
                      </p>
                      <p className="text-xs text-slate-600 font-medium leading-snug mb-2" data-tina-field={tinaField(data.sidebar.officeCard, 'addressLine2')}>
                        {data.sidebar.officeCard.addressLine2}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a href={data.sidebar.officeCard.phoneHref} className="inline-flex items-center gap-1 text-[10px] font-black text-amber-700 uppercase tracking-widest hover:text-amber-800 transition">
                          <Phone size={10} strokeWidth={3} /> {data.sidebar.officeCard.phone}
                        </a>
                        <a href={data.sidebar.officeCard.directionsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] font-black text-amber-700 uppercase tracking-widest hover:text-amber-800 transition">
                          <MapPin size={10} strokeWidth={3} /> Directions
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Mail size={16} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-black text-sky-700 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.sidebar.officeCard, 'emailLabel')}>
                        {data.sidebar.officeCard.emailLabel}
                      </div>
                      <a href={data.sidebar.officeCard.email1Href} className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1 hover:text-sky-700 transition break-all block" data-tina-field={tinaField(data.sidebar.officeCard, 'email1')}>
                        {data.sidebar.officeCard.email1}
                      </a>
                      <a href={data.sidebar.officeCard.email2Href} className="text-xs text-slate-600 font-medium leading-snug hover:text-sky-700 transition break-all block" data-tina-field={tinaField(data.sidebar.officeCard, 'email2')}>
                        {data.sidebar.officeCard.email2}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Clock size={16} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-black text-rose-700 uppercase tracking-widest mb-1" data-tina-field={tinaField(data.sidebar.officeCard, 'hoursLabel')}>
                        {data.sidebar.officeCard.hoursLabel}
                      </div>
                      <div className="space-y-0.5">
                        {data.sidebar.officeCard.hours.map((h: any, hi: number) => (
                          <div key={hi} className="flex justify-between text-xs">
                            <span className="text-slate-600 font-medium" data-tina-field={tinaField(h, 'day')}>{h.day}</span>
                            <span className={`font-black ${h.closed ? 'text-red-500' : 'text-[#0A0F1F]'}`} data-tina-field={tinaField(h, 'time')}>{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 5. FAQ + RELATED SERVICES ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<WhatsAppIcon size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500" data-tina-field={tinaField(data.faqs, 'badge')}>{data.faqs.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqs, 'title')}>
                {data.faqs.title.replace(data.faqs.titleHighlight, '')}
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">{data.faqs.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqs, 'subtitle')}>
                {data.faqs.subtitle}
              </p>

              <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles size={14} className="text-rose-600" />
                <span data-tina-field={tinaField(data.faqs, 'relatedServicesTitle')}>{data.faqs.relatedServicesTitle}</span>
              </h3>
              <div className="space-y-3">
                {data.faqs.relatedServices.map((service: any, i: number) => {
                  const Icon = iconMap[service.icon] || FileText;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative">
                      <div className={`absolute -inset-2 rounded-[24px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />
                      <Link to={service.link} className="relative flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-transparent shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                          <Icon size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1" data-tina-field={tinaField(service, 'title')}>{service.title}</h4>
                          <p className="text-xs text-slate-500 font-medium" data-tina-field={tinaField(service, 'desc')}>{service.desc}</p>
                        </div>
                        <ArrowRight size={14} className="text-rose-500 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-2" strokeWidth={2.5} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {data.faqs.items.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-rose-200 hover:shadow-[0_20px_60px_rgba(244,63,94,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-pink-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-400 to-pink-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-rose-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-rose-400 group-open:to-pink-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-rose-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* ============ 6. FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-rose-950/70 to-pink-950/50" />
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

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>
                    {data.finalCTA.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={data.finalCTA.phoneHref} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <Phone size={16} />
                      <span data-tina-field={tinaField(data.finalCTA, 'phone')}>{data.finalCTA.phone}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href={getWhatsAppLink(data.finalCTA.whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
<WhatsAppIcon size={16} />
                      <span data-tina-field={tinaField(data.finalCTA, 'whatsappText')}>{data.finalCTA.whatsappText}</span>
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
                  <motion.a href={data.finalCTA.cards.call.href} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Phone size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5" data-tina-field={tinaField(data.finalCTA.cards.call, 'label')}>{data.finalCTA.cards.call.label}</p>
                        <p className="text-base font-black text-[#0A0F1F]" data-tina-field={tinaField(data.finalCTA.cards.call, 'value')}>{data.finalCTA.cards.call.value}</p>
                        <p className="text-[11px] text-rose-600 font-semibold mt-0.5" data-tina-field={tinaField(data.finalCTA.cards.call, 'note')}>{data.finalCTA.cards.call.note}</p>
                      </div>
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.a href={data.finalCTA.cards.email.href} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Mail size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5" data-tina-field={tinaField(data.finalCTA.cards.email, 'label')}>{data.finalCTA.cards.email.label}</p>
                        <p className="text-base font-black text-[#0A0F1F] break-all" data-tina-field={tinaField(data.finalCTA.cards.email, 'value')}>{data.finalCTA.cards.email.value}</p>
                        <p className="text-[11px] text-sky-600 font-semibold mt-0.5" data-tina-field={tinaField(data.finalCTA.cards.email, 'note')}>{data.finalCTA.cards.email.note}</p>
                      </div>
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <MapPin size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1" data-tina-field={tinaField(data.finalCTA.cards.office, 'label')}>{data.finalCTA.cards.office.label}</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1" data-tina-field={tinaField(data.finalCTA.cards.office, 'line1')}>{data.finalCTA.cards.office.line1}</p>
                        <p className="text-xs text-slate-500 font-medium leading-snug" data-tina-field={tinaField(data.finalCTA.cards.office, 'line2')}>{data.finalCTA.cards.office.line2}</p>
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