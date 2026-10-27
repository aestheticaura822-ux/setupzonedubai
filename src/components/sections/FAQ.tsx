// File: src/components/Home/FAQ.tsx

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Sparkles,
  Search,
  ChevronDown,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
  Lightbulb,
  X,
  Plus,
  Minus,
  Building2,
  Receipt,
  Crown,
  Landmark,
  ShieldCheck,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { tinaField } from 'tinacms/dist/react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent';

const iconMap: any = {
  HelpCircle, Building2, Receipt, Crown, Landmark, ShieldCheck, Lightbulb,
};

export default function FAQ({ tinaData }: { tinaData?: any }) {
  const { language } = useLanguage();
  const faqFallback = loadContent('home/faq', language);
  const data = tinaData?.data?.home || faqFallback;

  const isRTL = language === 'ar';

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(0);
  const [expandAll, setExpandAll] = useState(false);

  const ContactIcon = iconMap[data.contactCard.icon] || Lightbulb;
  const BottomIcon = iconMap[data.bottomCTA.icon] || HelpCircle;

  const filteredFaqs = useMemo(() => {
    return data.faqs.filter((faq: any) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [data.faqs, activeCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    setOpenId(openId === index ? null : index);
  };

  const toggleAll = () => {
    setExpandAll(!expandAll);
    setOpenId(expandAll ? null : 0);
  };

  return (
    <section
      id="faq"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white"
    >
      <div className="absolute top-0 start-0 w-[700px] h-[700px] rounded-full bg-sky-100/50 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-[700px] h-[700px] rounded-full bg-violet-100/50 blur-[150px] pointer-events-none" />

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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT SIDE (visually starts from left in LTR, right in RTL) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Sparkles size={14} className="text-brand-sky" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted" data-tina-field={tinaField(data, 'badge')}>
                {data.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.05] tracking-tight mb-5">
              <span data-tina-field={tinaField(data.heading, 'line1')}>{data.heading.line1}</span>{' '}
              <span className="relative inline-block">
                <span className="gradient-text" data-tina-field={tinaField(data.heading, 'highlight')}>{data.heading.highlight}</span>
                <svg className="absolute -bottom-1 start-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                  <path d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8" stroke="url(#faqUnderline)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="faqUnderline" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#0EA5E9" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span data-tina-field={tinaField(data, 'headingLine3')}>{data.headingLine3}</span>
            </h2>

            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data, 'description')}>
              {data.description}
            </p>

            {/* Contact Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(14,165,233,0.25)] mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-violet-700" />
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-3 -end-3 opacity-20"
              >
                <WhatsAppIcon size={90} className="text-white" />
              </motion.div>

              <div className="relative p-6 md:p-7">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4 shadow-lg">
                  <ContactIcon size={24} className="text-white" strokeWidth={2.2} />
                </div>

                <h3 className="text-2xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.contactCard, 'title')}>
                  {data.contactCard.title}
                </h3>
                <p className="text-sm text-white/90 font-medium leading-relaxed mb-6" data-tina-field={tinaField(data.contactCard, 'subtitle')}>
                  {data.contactCard.subtitle}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href={getWhatsAppLink(data.contactCard.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <WhatsAppIcon size={14} />
                    <span data-tina-field={tinaField(data.contactCard, 'whatsappText')}>{data.contactCard.whatsappText}</span>
                  </a>
                  <a
                    href={data.contactCard.phoneHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all duration-300"
                  >
                    <Phone size={14} />
                    <span data-tina-field={tinaField(data.contactCard, 'callText')}>{data.contactCard.callText}</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/20">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock size={12} className="text-white/80" strokeWidth={2.5} />
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest" data-tina-field={tinaField(data.contactCard, 'statsResponseLabel')}>
                        {data.contactCard.statsResponseLabel}
                      </span>
                    </div>
                    <div className="text-xl font-black text-white leading-none" data-tina-field={tinaField(data.contactCard, 'statsResponseValue')}>
                      {data.contactCard.statsResponseValue}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <CheckCircle2 size={12} className="text-white/80" strokeWidth={2.5} />
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest" data-tina-field={tinaField(data.contactCard, 'statsConsultLabel')}>
                        {data.contactCard.statsConsultLabel}
                      </span>
                    </div>
                    <div className="text-xl font-black text-white leading-none" data-tina-field={tinaField(data.contactCard, 'statsConsultValue')}>
                      {data.contactCard.statsConsultValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Search */}
            <div className="relative mb-5">
              <div className="absolute inset-y-0 start-0 ps-5 flex items-center pointer-events-none">
                <Search size={18} className="text-[#94A3B8]" strokeWidth={2.5} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={data.searchPlaceholder}
                className="w-full ps-14 pe-12 py-4 rounded-2xl bg-white border border-border shadow-soft text-sm font-semibold text-[#0A0F1F] placeholder:text-[#94A3B8] focus:outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 end-0 pe-5 flex items-center">
                  <X size={18} className="text-[#94A3B8] hover:text-[#0A0F1F] transition" />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {data.categories.map((cat: any) => {
                const Icon = iconMap[cat.icon] || HelpCircle;
                const isActive = activeCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'text-white shadow-lg'
                        : 'bg-white border border-border text-[#64748B] hover:border-sky-200 hover:text-[#0A0F1F]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 bg-gradient-to-r from-sky-500 to-violet-600"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon size={13} className="relative" strokeWidth={2.5} />
                    <span className="relative">{cat.name}</span>
                    <span
                      className={`relative inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-black ${
                        isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-[#64748B]'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Expand All + Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? data.questionSingular : data.questionPlural}
              </p>
              <button
                onClick={toggleAll}
                className="inline-flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-sky-700 uppercase tracking-widest transition"
              >
                {expandAll ? (
                  <><Minus size={12} strokeWidth={3} /><span data-tina-field={tinaField(data, 'collapseAllLabel')}>{data.collapseAllLabel}</span></>
                ) : (
                  <><Plus size={12} strokeWidth={3} /><span data-tina-field={tinaField(data, 'expandAllLabel')}>{data.expandAllLabel}</span></>
                )}
              </button>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.length === 0 ? (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative p-8 rounded-3xl bg-white border-2 border-dashed border-border text-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                      <Search size={28} className="text-[#94A3B8]" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-2" data-tina-field={tinaField(data, 'noResultsTitle')}>{data.noResultsTitle}</h3>
                    <p className="text-sm text-[#64748B] font-medium mb-4" data-tina-field={tinaField(data, 'noResultsSubtitle')}>{data.noResultsSubtitle}</p>
                    <button
                      onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-white font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <span data-tina-field={tinaField(data, 'resetFiltersText')}>{data.resetFiltersText}</span>
                    </button>
                  </motion.div>
                ) : (
                  filteredFaqs.map((faq: any, index: number) => {
                    const globalIndex = data.faqs.indexOf(faq);
                    const isOpen = openId === globalIndex || (expandAll && openId === null);

                    return (
                      <motion.div
                        key={`${faq.category}-${index}`}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.03 }}
                        className={`group relative rounded-3xl bg-white border overflow-hidden transition-all duration-500 ${
                          isOpen ? 'border-sky-200 shadow-[0_20px_60px_rgba(14,165,233,0.15)]' : 'border-border hover:border-sky-200 hover:shadow-[0_10px_40px_rgba(15,23,42,0.06)]'
                        }`}
                      >
                        <div className={`absolute start-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-violet-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        <div className={`absolute top-0 start-0 end-0 h-[2px] bg-gradient-to-r from-sky-400 to-violet-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

                        <button onClick={() => toggleFaq(globalIndex)} className="relative w-full flex items-start gap-4 p-5 md:p-6 text-start">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 transition-all duration-500 ${
                            isOpen ? 'bg-gradient-to-br from-sky-500 to-violet-600 scale-110' : 'bg-gradient-to-br from-sky-400 to-violet-500 group-hover:scale-110'
                          }`}>
                            <span className="text-sm font-black text-white">{String(index + 1).padStart(2, '0')}</span>
                          </div>

                          <div className="flex-1 pt-1 pe-2">
                            <h3 className={`font-black text-base md:text-lg leading-snug tracking-tight transition-colors duration-300 ${
                              isOpen ? 'text-sky-700' : 'text-[#0A0F1F] group-hover:text-sky-700'
                            }`} data-tina-field={tinaField(faq, 'q')}>
                              {faq.q}
                            </h3>
                          </div>

                          <div className={`relative flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isOpen ? 'bg-gradient-to-br from-sky-500 to-violet-600 rotate-180' : 'bg-sky-50 border border-sky-200'
                          }`}>
                            <ChevronDown size={16} className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-sky-600'}`} strokeWidth={3} />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 md:px-6 pb-5 md:pb-6 ps-[72px] md:ps-[88px]">
                                <div className="pt-3 border-t border-dashed border-border">
                                  <p className="pt-3 text-sm md:text-base text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(faq, 'a')}>
                                    {faq.a}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className={`absolute -bottom-16 -end-16 w-32 h-32 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 blur-2xl transition-opacity duration-500 pointer-events-none ${isOpen ? 'opacity-[0.08]' : 'opacity-0'}`} />
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 relative rounded-3xl overflow-hidden p-6 bg-gradient-to-r from-slate-50 to-sky-50/40 border border-sky-100"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center sm:text-start">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <BottomIcon size={20} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0A0F1F] mb-0.5" data-tina-field={tinaField(data.bottomCTA, 'title')}>
                      {data.bottomCTA.title}
                    </h4>
                    <p className="text-xs text-[#64748B] font-medium" data-tina-field={tinaField(data.bottomCTA, 'subtitle')}>
                      {data.bottomCTA.subtitle}
                    </p>
                  </div>
                </div>
                <a
                  href={getWhatsAppLink(data.bottomCTA.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <span data-tina-field={tinaField(data.bottomCTA, 'buttonText')}>{data.bottomCTA.buttonText}</span>
                  <ArrowRight size={14} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}