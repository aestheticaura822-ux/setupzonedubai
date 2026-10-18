// File: src/pages/Calculator.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, ChevronRight, Globe, Building2, Briefcase,
  Ship, Laptop, Camera, ShoppingCart, Store, ArrowRight, ArrowLeft,
  Sparkles, CheckCircle2, Check, Package, Users, FileText, Wallet,
  Phone, MessageCircle, Calculator as CalcIcon, DollarSign,
  UserCheck, ShieldCheck, Award, Heart, Crown,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import calculatorData from '../content/pages/calculator.json';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

// Icon map — JSON me string hoti hai, yahan actual icon
const iconMap: any = {
  FileText, Briefcase, Building2, Package, Phone,
  Globe, Ship, Laptop, ShoppingCart, Store, Camera, Heart, Sparkles,
  Users, UserCheck, Wallet, ShieldCheck, DollarSign, Award, Crown,
};

export default function Calculator({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.pages || calculatorData;

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLicense, setSelectedLicense] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [contactForm, setContactForm] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const { licenseTypes, activities, officeOptions, extrasList, steps, quickAnswers, stepTitles } = data;

  // Calculate total
  const calculateTotal = () => {
    let total = 0;
    const license = licenseTypes.find((l: any) => l.id === selectedLicense);
    const activity = activities.find((a: any) => a.id === selectedActivity);
    const office = officeOptions.find((o: any) => o.id === selectedOffice);

    if (license) total += license.basePrice;
    if (activity) total += activity.price;
    if (office) total += office.price;
    selectedExtras.forEach(id => {
      const extra = extrasList.find((e: any) => e.id === id);
      if (extra) total += extra.price;
    });
    return total;
  };

  const handleNext = () => { if (currentStep < 5) setCurrentStep(currentStep + 1); };
  const handleBack = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const license = licenseTypes.find((l: any) => l.id === selectedLicense)?.title || 'N/A';
    const activity = activities.find((a: any) => a.id === selectedActivity)?.title || 'N/A';
    const office = officeOptions.find((o: any) => o.id === selectedOffice)?.title || 'N/A';
    const extras = selectedExtras.map(id => extrasList.find((e: any) => e.id === id)?.title).filter(Boolean).join(', ') || 'None';
    const total = calculateTotal();

    const message = `Hi! I'd like a business setup quote.%0A%0A📋 *My Selections:*%0A▪️ License: ${license}%0A▪️ Activity: ${activity}%0A▪️ Office: ${office}%0A▪️ Extras: ${extras}%0A%0A💰 *Estimated Total:* AED ${total.toLocaleString()}%0A%0A👤 Name: ${contactForm.name}%0A📞 Phone: ${contactForm.phone}`;

    setTimeout(() => {
      window.open(getWhatsAppLink(message), '_blank');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <CalcIcon size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-bold">Business Setup Cost Calculator</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Sparkles size={14} className="text-amber-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6" data-tina-field={tinaField(data, 'heroTitle')}>
            {data.heroTitle.replace(data.heroTitleHighlight, '')}
            <span className="text-amber-300">{data.heroTitleHighlight}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl" data-tina-field={tinaField(data, 'heroSubtitle')}>
            {data.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ============ CALCULATOR ============ */}
      <section className="relative py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step: any, i: number) => {
                const Icon = iconMap[step.icon] || FileText;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                return (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center gap-2">
                      <motion.div initial={false} animate={{ scale: isActive ? 1.1 : 1 }} transition={{ duration: 0.3 }} className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${isCompleted ? 'bg-gradient-to-br from-emerald-400 to-green-600' : isActive ? 'bg-gradient-to-br from-amber-400 to-orange-600' : 'bg-slate-200'}`}>
                        {isCompleted ? (
                          <Check size={20} className="text-white" strokeWidth={3} />
                        ) : (
                          <Icon size={20} className={isActive ? 'text-white' : 'text-slate-500'} strokeWidth={2.5} />
                        )}
                      </motion.div>
                      <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest ${isActive ? 'text-amber-600' : isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} data-tina-field={tinaField(step, 'label')}>
                        {step.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-2 rounded-full ${isCompleted ? 'bg-gradient-to-r from-emerald-400 to-green-600' : 'bg-slate-200'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step Content */}
          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />
            <div className="p-6 md:p-10">
              <AnimatePresence mode="wait">

                {/* STEP 1: LICENSE */}
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(stepTitles.license, 'title')}>{stepTitles.license.title}</h2>
                      <p className="text-sm text-slate-500 font-medium" data-tina-field={tinaField(stepTitles.license, 'subtitle')}>{stepTitles.license.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {licenseTypes.map((license: any) => {
                        const Icon = iconMap[license.icon] || Globe;
                        const isSelected = selectedLicense === license.id;
                        return (
                          <motion.button key={license.id} onClick={() => setSelectedLicense(license.id)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 ${isSelected ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg' : 'border-slate-200 hover:border-amber-300 bg-white hover:shadow-md'}`}>
                            {license.badge && (
                              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[9px] font-black uppercase tracking-widest shadow-sm" data-tina-field={tinaField(license, 'badge')}>{license.badge}</span>
                            )}
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 ${isSelected ? 'bg-gradient-to-br from-amber-400 to-orange-600' : 'bg-slate-100'}`}>
                                <Icon size={22} className={isSelected ? 'text-white' : 'text-slate-600'} strokeWidth={2.5} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-base font-black leading-tight mb-1 ${isSelected ? 'text-amber-900' : 'text-[#0A0F1F]'}`} data-tina-field={tinaField(license, 'title')}>{license.title}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-snug mb-2" data-tina-field={tinaField(license, 'desc')}>{license.desc}</p>
                                <div className={`text-sm font-black ${isSelected ? 'text-amber-700' : 'text-slate-700'}`}>From AED {license.basePrice.toLocaleString()}</div>
                              </div>
                              {isSelected && (<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm"><Check size={14} className="text-white" strokeWidth={3.5} /></motion.div>)}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="flex justify-end">
                      <button onClick={handleNext} disabled={!selectedLicense} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300">
                        Continue
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: ACTIVITY */}
                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(stepTitles.activity, 'title')}>{stepTitles.activity.title}</h2>
                      <p className="text-sm text-slate-500 font-medium" data-tina-field={tinaField(stepTitles.activity, 'subtitle')}>{stepTitles.activity.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      {activities.map((activity: any) => {
                        const Icon = iconMap[activity.icon] || Briefcase;
                        const isSelected = selectedActivity === activity.id;
                        return (
                          <motion.button key={activity.id} onClick={() => setSelectedActivity(activity.id)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={`relative text-center p-4 rounded-2xl border-2 transition-all duration-300 ${isSelected ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg' : 'border-slate-200 hover:border-amber-300 bg-white hover:shadow-md'}`}>
                            <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center shadow-md mb-3 ${isSelected ? `bg-gradient-to-br ${activity.color}` : 'bg-slate-100'}`}>
                              <Icon size={22} className={isSelected ? 'text-white' : 'text-slate-600'} strokeWidth={2.5} />
                            </div>
                            <h3 className={`text-xs font-black leading-tight mb-1 ${isSelected ? 'text-amber-900' : 'text-[#0A0F1F]'}`} data-tina-field={tinaField(activity, 'title')}>{activity.title}</h3>
                            <p className="text-[10px] text-slate-500 font-medium leading-snug mb-2 line-clamp-2" data-tina-field={tinaField(activity, 'desc')}>{activity.desc}</p>
                            <div className={`text-[10px] font-black ${isSelected ? 'text-amber-700' : 'text-slate-500'}`}>
                              {activity.price > 0 ? `+ AED ${activity.price.toLocaleString()}` : 'Included'}
                            </div>
                            {isSelected && (<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-sm"><Check size={14} className="text-white" strokeWidth={3.5} /></motion.div>)}
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between gap-3">
                      <button onClick={handleBack} className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-sm uppercase tracking-widest transition-all duration-300">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        Back
                      </button>
                      <button onClick={handleNext} disabled={!selectedActivity} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300">
                        Continue
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: OFFICE */}
                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(stepTitles.office, 'title')}>{stepTitles.office.title}</h2>
                      <p className="text-sm text-slate-500 font-medium" data-tina-field={tinaField(stepTitles.office, 'subtitle')}>{stepTitles.office.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {officeOptions.map((office: any) => {
                        const Icon = iconMap[office.icon] || Building2;
                        const isSelected = selectedOffice === office.id;
                        return (
                          <motion.button key={office.id} onClick={() => setSelectedOffice(office.id)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 ${isSelected ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg' : 'border-slate-200 hover:border-amber-300 bg-white hover:shadow-md'}`}>
                            {office.badge && (
                              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[9px] font-black uppercase tracking-widest shadow-sm" data-tina-field={tinaField(office, 'badge')}>{office.badge}</span>
                            )}
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 ${isSelected ? 'bg-gradient-to-br from-amber-400 to-orange-600' : 'bg-slate-100'}`}>
                                <Icon size={22} className={isSelected ? 'text-white' : 'text-slate-600'} strokeWidth={2.5} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-base font-black leading-tight mb-1 ${isSelected ? 'text-amber-900' : 'text-[#0A0F1F]'}`} data-tina-field={tinaField(office, 'title')}>{office.title}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-snug mb-2" data-tina-field={tinaField(office, 'desc')}>{office.desc}</p>
                                <div className={`text-sm font-black ${isSelected ? 'text-amber-700' : 'text-slate-700'}`}>
                                  {office.price > 0 ? `+ AED ${office.price.toLocaleString()}` : 'Included'}
                                </div>
                              </div>
                              {isSelected && (<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm"><Check size={14} className="text-white" strokeWidth={3.5} /></motion.div>)}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between gap-3">
                      <button onClick={handleBack} className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-sm uppercase tracking-widest transition-all">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        Back
                      </button>
                      <button onClick={handleNext} disabled={!selectedOffice} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all">
                        Continue
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: EXTRAS */}
                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(stepTitles.extras, 'title')}>{stepTitles.extras.title}</h2>
                      <p className="text-sm text-slate-500 font-medium" data-tina-field={tinaField(stepTitles.extras, 'subtitle')}>{stepTitles.extras.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {extrasList.map((extra: any) => {
                        const Icon = iconMap[extra.icon] || Package;
                        const isSelected = selectedExtras.includes(extra.id);
                        return (
                          <motion.button key={extra.id} onClick={() => toggleExtra(extra.id)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-300 ${isSelected ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg' : 'border-slate-200 hover:border-amber-300 bg-white hover:shadow-md'}`}>
                            {extra.badge && (
                              <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[8px] font-black uppercase tracking-widest" data-tina-field={tinaField(extra, 'badge')}>{extra.badge}</span>
                            )}
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 ${isSelected ? 'bg-gradient-to-br from-amber-400 to-orange-600' : 'bg-slate-100'}`}>
                                <Icon size={18} className={isSelected ? 'text-white' : 'text-slate-600'} strokeWidth={2.5} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-sm font-black leading-tight mb-0.5 ${isSelected ? 'text-amber-900' : 'text-[#0A0F1F]'}`} data-tina-field={tinaField(extra, 'title')}>{extra.title}</h3>
                                <p className="text-[11px] text-slate-500 font-medium leading-snug mb-1" data-tina-field={tinaField(extra, 'desc')}>{extra.desc}</p>
                                <div className={`text-xs font-black ${isSelected ? 'text-amber-700' : 'text-slate-700'}`}>
                                  {extra.price > 0 ? `+ AED ${extra.price.toLocaleString()}` : 'Free'}
                                </div>
                              </div>
                              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? 'bg-gradient-to-br from-amber-400 to-orange-600 border-amber-400' : 'border-slate-300 bg-white'}`}>
                                {isSelected && <Check size={14} className="text-white" strokeWidth={3.5} />}
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between gap-3">
                      <button onClick={handleBack} className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-sm uppercase tracking-widest transition-all">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        Back
                      </button>
                      <button onClick={handleNext} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
                        Continue
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: CONTACT */}
                {currentStep === 5 && (
                  <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    {!submitted ? (
                      <>
                        <div className="text-center mb-8">
                          <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(stepTitles.contact, 'title')}>{stepTitles.contact.title}</h2>
                          <p className="text-sm text-slate-500 font-medium" data-tina-field={tinaField(stepTitles.contact, 'subtitle')}>{stepTitles.contact.subtitle}</p>
                        </div>

                        {/* Summary Card */}
                        <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border border-amber-200">
                          <div className="flex items-center justify-between mb-3 pb-3 border-b border-amber-200/50">
                            <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Your Estimate</span>
                            <CalcIcon size={16} className="text-amber-600" strokeWidth={2.5} />
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600 font-semibold">License:</span>
                              <span className="font-black text-[#0A0F1F]">{licenseTypes.find((l: any) => l.id === selectedLicense)?.title}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 font-semibold">Activity:</span>
                              <span className="font-black text-[#0A0F1F]">{activities.find((a: any) => a.id === selectedActivity)?.title}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 font-semibold">Office:</span>
                              <span className="font-black text-[#0A0F1F]">{officeOptions.find((o: any) => o.id === selectedOffice)?.title}</span>
                            </div>
                            {selectedExtras.length > 0 && (
                              <div className="flex justify-between">
                                <span className="text-slate-600 font-semibold">Extras:</span>
                                <span className="font-black text-[#0A0F1F]">{selectedExtras.length} selected</span>
                              </div>
                            )}
                            <div className="flex justify-between items-center pt-3 mt-3 border-t border-amber-200/50">
                              <span className="text-sm font-black text-amber-900 uppercase tracking-wider">Total Estimate:</span>
                              <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                AED {calculateTotal().toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5 mb-8">
                          <div>
                            <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">Your Name *</label>
                            <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="Enter your full name" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                          </div>
                          <div>
                            <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">Phone Number *</label>
                            <div className="flex gap-2">
                              <div className="flex items-center gap-2 px-3 py-3.5 rounded-xl bg-slate-100 border border-slate-200">
                                <span className="text-sm font-bold text-slate-700">+971</span>
                              </div>
                              <input type="tel" required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} placeholder="50 123 4567" className="flex-1 px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                            </div>
                          </div>
                        </form>

                        <div className="flex justify-between gap-3">
                          <button onClick={handleBack} className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-sm uppercase tracking-widest transition-all">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                            Back
                          </button>
                          <button onClick={handleSubmit} className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
<WhatsAppIcon size={16} className="relative" />
                            <span className="relative">Get Free Estimate</span>
                            <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                          </button>
                        </div>
                      </>
                    ) : (
                      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg mb-6">
                          <CheckCircle2 size={40} className="text-white" strokeWidth={2.5} />
                        </motion.div>
                        <h3 className="text-2xl font-black text-[#0A0F1F] mb-3">Thank You!</h3>
                        <p className="text-base text-slate-600 font-medium mb-6 max-w-md mx-auto">Your estimate has been sent via WhatsApp. Our team will contact you shortly.</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
                          <span className="text-sm font-black text-amber-700">Estimated Total: AED {calculateTotal().toLocaleString()}</span>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

          {/* QUICK ANSWERS */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
<WhatsAppIcon size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Quick Answers</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight">
                Common <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {quickAnswers.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
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
    </div>
  );
}