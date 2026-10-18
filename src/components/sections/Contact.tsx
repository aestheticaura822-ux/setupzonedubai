// File: src/components/Home/Contact.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  User,
  FileText,
  Briefcase,
  Send,
  Zap,
  Lock,
  Globe,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { useTina, tinaField } from 'tinacms/dist/react';
import contactData from '../../content/home/contact.json';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';
const iconMap: any = {
  Phone, Mail, MapPin, Zap, Lock, CheckCircle2,
};

export default function Contact({ tinaData }: { tinaData?: any }) {
const { language } = useLanguage();
const contactFallback = loadContent('home/contact', language);
const data = tinaData?.data?.home || contactFallback;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    service: '',
    preference: 'whatsapp',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Contact Form Submission* 🎯

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Nationality:* ${formData.nationality || 'Not specified'}
*Service:* ${formData.service}
*Preferred Contact:* ${formData.preference.toUpperCase()}

*Message:*
${formData.message}

---
${data.form.whatsappSenderLine}`;

    const whatsappUrl = `https://wa.me/${data.form.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);

    setFormData({
      name: '',
      email: '',
      phone: '',
      nationality: '',
      service: '',
      preference: 'whatsapp',
      message: '',
    });
  };

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const F = data.form.fields;

  return (
    <section id="contact" className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-sky-100/50 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-100/50 blur-[150px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
            <Sparkles size={14} className="text-brand-sky" />
            <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data, 'badge')}>
              {data.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
            <span data-tina-field={tinaField(data.heading, 'line1')}>{data.heading.line1}</span>{' '}
            <span className="relative inline-block">
              <span className="gradient-text" data-tina-field={tinaField(data.heading, 'highlight')}>{data.heading.highlight}</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8" stroke="url(#contactUnderline)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="contactUnderline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(data, 'subtitle')}>
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-5"
          >
            {data.contactCards.map((card: any, i: number) => {
              const Icon = iconMap[card.icon] || Phone;
              return (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative block"
                  style={{ perspective: '1000px' }}
                >
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500" style={{ background: card.glow }} />

                  <div className="relative flex items-start gap-4 p-5 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] group-hover:-translate-y-1 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={24} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    <div className="relative flex-1 pt-1">
                      <p className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-1" data-tina-field={tinaField(card, 'label')}>
                        {card.label}
                      </p>
                      <p className="text-base font-black text-[#0A0F1F] leading-tight mb-1 break-all" data-tina-field={tinaField(card, 'value')}>
                        {card.value}
                      </p>
                      <p className="text-xs text-[#64748B] font-medium leading-snug" data-tina-field={tinaField(card, 'sub')}>
                        {card.sub}
                      </p>
                    </div>

                    <div className="relative flex-shrink-0 pt-2">
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-border flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-violet-500 group-hover:border-transparent transition-all duration-300">
                        <ArrowRight size={14} className="text-[#64748B] group-hover:text-white group-hover:translate-x-0.5 transition-all" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Working Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md">
                  <Clock size={20} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-base font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.workingHoursCard, 'title')}>
                    {data.workingHoursCard.title}
                  </h3>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest" data-tina-field={tinaField(data.workingHoursCard, 'timezoneLabel')}>
                    {data.workingHoursCard.timezoneLabel}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {data.workingHoursCard.hours.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                    className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 ${
                      item.active ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.active && (
                        <span className="relative flex w-2 h-2">
                          <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                          <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                        </span>
                      )}
                      <span className={`text-xs font-bold ${item.active ? 'text-emerald-700' : 'text-[#475569]'}`}>
                        {item.day}
                      </span>
                      {item.active && (
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-white px-1.5 py-0.5 rounded">
                          {data.workingHoursCard.todayBadge}
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-black ${item.closed ? 'text-red-500' : item.active ? 'text-emerald-700' : 'text-[#0A0F1F]'}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3"
            >
              {data.trustBadges.map((badge: any, i: number) => {
                const Icon = iconMap[badge.icon] || Zap;
                return (
                  <div key={i} className="relative p-3 rounded-2xl bg-white border border-border text-center shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center shadow-sm">
                      <Icon size={14} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-sm font-black text-[#0A0F1F] leading-none mb-0.5">{badge.label}</div>
                    <div className="text-[9px] font-bold text-[#64748B] uppercase tracking-widest">{badge.sub}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[32px] overflow-hidden bg-white border border-border shadow-[0_20px_70px_rgba(15,23,42,0.1)]">
              <div className="h-1.5 bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500" />

              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #0EA5E9 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />

              <div className="relative p-7 md:p-9">
                <div className="flex items-start justify-between gap-4 mb-7">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.form, 'title')}>
                      {data.form.title}
                    </h3>
                    <p className="text-sm text-[#64748B] font-medium" data-tina-field={tinaField(data.form, 'subtitle')}>
                      {data.form.subtitle}
                    </p>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 items-center justify-center shadow-lg flex-shrink-0">
                    <Send size={20} className="text-white" strokeWidth={2.2} />
                  </div>
                </div>

                {/* SUCCESS STATE */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="relative mb-6 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0"
                        >
                          <CheckCircle2 size={24} className="text-white" strokeWidth={2.5} />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-base font-black text-emerald-800 mb-0.5" data-tina-field={tinaField(data.form, 'successTitle')}>
                            {data.form.successTitle}
                          </h4>
                          <p className="text-xs text-emerald-700 font-semibold" data-tina-field={tinaField(data.form, 'successMessage')}>
                            {data.form.successMessage}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 — Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                        <User size={12} className="text-sky-500" strokeWidth={2.5} />
                        {F.name.label} {F.name.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        required={F.name.required}
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder={F.name.placeholder}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white border-2 transition-all duration-300 text-sm font-semibold text-[#0A0F1F] placeholder:text-[#94A3B8] focus:outline-none ${
                          focused === 'name' ? 'border-sky-400 shadow-[0_0_0_4px_rgba(14,165,233,0.1)]' : 'border-border hover:border-sky-200'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                        <Mail size={12} className="text-violet-500" strokeWidth={2.5} />
                        {F.email.label} {F.email.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="email"
                        required={F.email.required}
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder={F.email.placeholder}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white border-2 transition-all duration-300 text-sm font-semibold text-[#0A0F1F] placeholder:text-[#94A3B8] focus:outline-none ${
                          focused === 'email' ? 'border-violet-400 shadow-[0_0_0_4px_rgba(139,92,246,0.1)]' : 'border-border hover:border-violet-200'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Row 2 — Phone + Nationality */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                        <Phone size={12} className="text-amber-500" strokeWidth={2.5} />
                        {F.phone.label} {F.phone.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="tel"
                        required={F.phone.required}
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        placeholder={F.phone.placeholder}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white border-2 transition-all duration-300 text-sm font-semibold text-[#0A0F1F] placeholder:text-[#94A3B8] focus:outline-none ${
                          focused === 'phone' ? 'border-amber-400 shadow-[0_0_0_4px_rgba(245,158,11,0.1)]' : 'border-border hover:border-amber-200'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                        <Globe size={12} className="text-emerald-500" strokeWidth={2.5} />
                        {F.nationality.label} {F.nationality.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        value={formData.nationality}
                        onChange={(e) => updateField('nationality', e.target.value)}
                        onFocus={() => setFocused('nationality')}
                        onBlur={() => setFocused(null)}
                        placeholder={F.nationality.placeholder}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white border-2 transition-all duration-300 text-sm font-semibold text-[#0A0F1F] placeholder:text-[#94A3B8] focus:outline-none ${
                          focused === 'nationality' ? 'border-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]' : 'border-border hover:border-emerald-200'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Service Select */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                      <Briefcase size={12} className="text-pink-500" strokeWidth={2.5} />
                      {F.service.label} {F.service.required && <span className="text-red-500">*</span>}
                    </label>
                    <div className="relative">
                      <select
                        required={F.service.required}
                        value={formData.service}
                        onChange={(e) => updateField('service', e.target.value)}
                        onFocus={() => setFocused('service')}
                        onBlur={() => setFocused(null)}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white border-2 transition-all duration-300 text-sm font-semibold text-[#0A0F1F] focus:outline-none cursor-pointer appearance-none ${
                          focused === 'service' ? 'border-pink-400 shadow-[0_0_0_4px_rgba(236,72,153,0.1)]' : 'border-border hover:border-pink-200'
                        } ${!formData.service ? 'text-[#94A3B8]' : ''}`}
                      >
                        <option value="" disabled>{F.service.placeholder}</option>
                        {data.form.services.map((service: string, i: number) => (
                          <option key={i} value={service} className="text-[#0A0F1F]">{service}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="w-6 h-6 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center">
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">
                      <FileText size={12} className="text-sky-500" strokeWidth={2.5} />
                      {F.message.label} {F.message.required && <span className="text-red-500">*</span>}
                    </label>
                    <textarea
                      required={F.message.required}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder={F.message.placeholder}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white border-2 transition-all duration-300 text-sm font-semibold text-[#0A0F1F] placeholder:text-[#94A3B8] focus:outline-none resize-none ${
                        focused === 'message' ? 'border-sky-400 shadow-[0_0_0_4px_rgba(14,165,233,0.1)]' : 'border-border hover:border-sky-200'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-brand text-white font-black text-sm shadow-[0_15px_40px_rgba(14,165,233,0.4)] hover:shadow-[0_20px_60px_rgba(14,165,233,0.5)] hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Send size={16} className="relative" strokeWidth={2.5} />
                    <span className="relative" data-tina-field={tinaField(data.form, 'submitText')}>{data.form.submitText}</span>
                    <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest text-center">
                    <Lock size={11} strokeWidth={2.5} />
                    <span data-tina-field={tinaField(data.form, 'privacyNote')}>{data.form.privacyNote}</span>
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GOOGLE MAPS EMBED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(15,23,42,0.15)] border border-border"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 z-20" />

          <div className="relative h-[400px] md:h-[450px]">
            <iframe
              title="Setup Zone Dubai Location"
              src={data.map.embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay — Head Office */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-5 left-5 md:top-6 md:left-6 max-w-[280px] p-5 rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.2)] border border-white"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <Building2 size={18} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.map, 'title')}>
                    {data.map.title}
                  </p>
                  <h4 className="text-sm font-black text-[#0A0F1F] leading-tight" data-tina-field={tinaField(data.map, 'address1')}>
                    {data.map.address1}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed mb-3" data-tina-field={tinaField(data.map, 'address2')}>
                {data.map.address2}
              </p>
              <a
                href={data.map.directionsLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-sky-700"
              >
                <MapPin size={12} strokeWidth={2.5} />
                <span data-tina-field={tinaField(data.map, 'directionsText')}>{data.map.directionsText}</span>
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </a>
            </motion.div>

            {/* Overlay — Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-5 right-5 md:top-6 md:right-6 hidden md:block p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.2)] border border-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <WhatsAppIcon size={18} className="text-white" />                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-0.5" data-tina-field={tinaField(data.map, 'quickContactLabel')}>
                    {data.map.quickContactLabel}
                  </p>
                  <a
                    href={getWhatsAppLink(data.map.quickContactMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-black text-[#0A0F1F] hover:text-emerald-600 transition-colors"
                  >
                    {data.map.quickContactPhone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}