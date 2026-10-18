// File: src/pages/packages/CreativeCitySetup.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, Phone, MessageCircle,
  Home as HomeIcon, Clock, Users, Award, DollarSign, Zap, Target, Crown,
  UserCheck, Landmark, Rocket, Wallet, Plane, RefreshCw, ShieldCheck, Heart,
  Calculator, Package, Gift, Laptop, Store as StoreIcon, ChevronRight,
  FileSignature, ClipboardCheck, ScrollText, Camera, Palette, ShoppingCart, Dumbbell,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import creativeCityData from '../../content/packages/creative-city.json';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

// Icon map — JSON me string hota hai, yahan actual icon
const iconMap: any = {
  Plane, Camera, ShoppingCart, Palette, Dumbbell, Laptop, Crown, Landmark, Heart, StoreIcon,
};

export default function CreativeCitySetup({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.packages || creativeCityData;

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
          data-tina-field={tinaField(data, 'heroImage')}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-purple-950/80 to-violet-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Palette size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Packages</span><span>/</span>
                <span className="text-white font-bold">Creative City Fujairah</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-purple-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>
                  {data.heroBadge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg"
                data-tina-field={tinaField(data, 'heroTitle')}
              >
                {data.heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
                data-tina-field={tinaField(data, 'heroSubtitle')}
              >
                {data.heroSubtitle}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#packages" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-purple-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  View Packages
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Creative City Free Zone Setup in Fujairah.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp
                </a>
              </motion.div>
            </div>

            {/* RIGHT — Calculator Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-400 to-violet-600 opacity-40 blur-[100px]" />

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-600 opacity-40 blur-2xl rounded-3xl" />
                  <Link to="/calculator" className="block group">
                    <div className="relative w-[340px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                      <div className="bg-gradient-to-r from-purple-500 to-violet-600 px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calculator size={16} className="text-white" strokeWidth={2.5} />
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">Cost Calculator</span>
                        </div>
                        <span className="text-[10px] font-black text-white/80 uppercase tracking-widest group-hover:text-white transition">Try Now →</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center shadow-lg">
                            <Calculator size={26} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-0.5">Instant Estimate</div>
                            <div className="text-base font-black text-[#0A0F1F]">Calculate Your Cost</div>
                          </div>
                        </div>
                        <div className="pt-5 border-t border-dashed border-purple-200">
                          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <Calculator size={16} className="text-white" strokeWidth={2.5} />
                            <span className="text-xs font-black text-white uppercase tracking-widest">Open Calculator</span>
                            <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                          </div>
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

      {/* === 2. STATS ROW === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {data.stats.map((stat: any, i: number) => {
              const colors = ['from-purple-400 to-violet-600', 'from-violet-400 to-indigo-600', 'from-indigo-400 to-blue-600', 'from-blue-400 to-cyan-600'];
              const icons = [DollarSign, Package, Clock, Globe];
              const Icon = icons[i % 4];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-md hover:shadow-xl hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${colors[i % 4]}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[i % 4]} flex items-center justify-center shadow-md flex-shrink-0`}>
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

      {/* === 3. PACKAGES GRID === */}
      <section id="packages" className="relative py-14 md:py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-soft mb-6">
              <Package size={14} className="text-purple-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-purple-700">Fujairah Setup Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Our <span className="gradient-text">Creative City Packages</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Packages designed for creative professionals. All customizable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.packages.map((pkg: any, i: number) => {
              const Icon = iconMap[pkg.icon] || Package;
              const colors = ['from-purple-500 to-violet-700', 'from-violet-500 to-indigo-700', 'from-indigo-500 to-blue-700'];
              const color = colors[i % 3];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl bg-white border border-border overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    <div className={`relative h-32 bg-gradient-to-br ${color} p-5 overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      <div className="absolute top-4 right-4">
                        <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${color} border border-white/30 text-[9px] font-black text-white uppercase tracking-widest shadow-lg`} data-tina-field={tinaField(pkg, 'badge')}>
                          {pkg.badge}
                        </span>
                      </div>
                      <div className="relative flex items-start gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                          <Icon size={26} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                      <div className="relative mt-4">
                        <div className="text-[9px] font-black text-white/80 uppercase tracking-widest mb-1">{pkg.category} Package</div>
                        <h3 className="text-lg font-black text-white leading-tight drop-shadow-lg" data-tina-field={tinaField(pkg, 'title')}>{pkg.title}</h3>
                      </div>
                    </div>

                    <div className="p-5 border-b border-dashed border-border">
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-1">Starting from</div>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent tracking-tight`} data-tina-field={tinaField(pkg, 'price')}>
                          {pkg.price}
                        </span>
                      </div>
                      <div className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mt-1" data-tina-field={tinaField(pkg, 'tagline')}>{pkg.tagline}</div>
                    </div>

                    <div className="p-5 flex-1">
                      <div className="text-[10px] font-black text-[#0A0F1F] uppercase tracking-widest mb-3">Includes:</div>
                      <ul className="space-y-2">
                        {pkg.includes.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle2 size={10} className="text-white" strokeWidth={3} />
                            </div>
                            <span className="text-xs font-medium text-[#475569] leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 pt-0">
                      <a
                        href={getWhatsAppLink(`Hi! I'm interested in the Creative City ${pkg.title} package.`)}
                        target="_blank"
                        rel="noreferrer"
                        className={`group/cta flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${color} text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300`}
                      >
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
        </div>
      </section>

      {/* === 4. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
<WhatsAppIcon size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-5">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq: any, i: number) => (
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-purple-200 transition-all duration-500 overflow-hidden cursor-pointer">
                <summary className="flex items-start gap-4 p-6 list-none">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                  </div>
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-purple-400 group-open:to-violet-600 group-open:border-transparent transition-all duration-300">
                      <span className="text-purple-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      </section>
    </div>
  );
}