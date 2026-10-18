// File: src/pages/Blog.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, ChevronRight, BookOpen, Search, Calendar, Tag,
  ArrowRight, Clock, MessageCircle, Phone, Mail,
  Sparkles, TrendingUp, Folder, ArrowUpRight,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import blogData from '../content/pages/blog.json';
import postsData from '../content/blog/posts.json';
export default function Blog({ tinaData }: { tinaData?: any }) {
  const data = tinaData?.data?.pages || blogData;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = postsData.posts.filter((post: any) =>
  post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  post.category.toLowerCase().includes(searchQuery.toLowerCase())
);

  const slugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <BookOpen size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <span>/</span><span>Blog</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Sparkles size={14} className="text-violet-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(data, 'heroBadge')}>{data.heroBadge}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6" data-tina-field={tinaField(data, 'heroTitle')}>
            {data.heroTitle.replace(data.heroTitleHighlight, '')}
            <span className="text-violet-300">{data.heroTitleHighlight}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl" data-tina-field={tinaField(data, 'heroSubtitle')}>
            {data.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ============ 2. MAIN CONTENT — 2 COLUMN ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-violet-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

            {/* ========== LEFT: BLOG POSTS GRID ========== */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-black text-[#0A0F1F] mb-1" data-tina-field={tinaField(data, 'latestArticlesTitle')}>{data.latestArticlesTitle}</h2>
                  <p className="text-sm text-slate-500 font-medium">
                    {searchQuery ? `${filteredPosts.length} results for "${searchQuery}"` : `Showing ${data.blogPosts.length} articles`}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200">
                  <TrendingUp size={14} className="text-violet-600" />
                  <span className="text-xs font-bold text-violet-700 uppercase tracking-wider" data-tina-field={tinaField(data, 'trendingLabel')}>{data.trendingLabel}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post: any, i: number) => (
                  <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }} className="group relative">
                    <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-tina-field={tinaField(post, 'image')} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-white text-[10px] font-black text-violet-700 uppercase tracking-wider shadow-lg" data-tina-field={tinaField(post, 'category')}>
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} />
                            <span data-tina-field={tinaField(post, 'date')}>{post.date}</span>
                          </span>
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                          <span className="flex items-center gap-1.5">
                            <Clock size={11} />
                            <span data-tina-field={tinaField(post, 'readTime')}>{post.readTime}</span> read
                          </span>
                        </div>

                        <h3 className="text-base font-black text-[#0A0F1F] leading-snug mb-3 group-hover:text-violet-700 transition-colors line-clamp-2" data-tina-field={tinaField(post, 'title')}>
                          {post.title}
                        </h3>

                        <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4 line-clamp-3 flex-1" data-tina-field={tinaField(post, 'excerpt')}>
                          {post.excerpt}
                        </p>

                        <Link to={`/blog/${slugify(post.title)}`} className="group/btn inline-flex items-center gap-2 text-xs font-black text-violet-700 hover:text-violet-900 uppercase tracking-widest transition-colors">
                          <span data-tina-field={tinaField(data, 'readMoreLabel')}>{data.readMoreLabel}</span>
                          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <Search size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 font-bold">No articles found</p>
                  <button onClick={() => setSearchQuery('')} className="mt-4 text-sm text-violet-600 font-bold hover:underline">
                    Clear search
                  </button>
                </div>
              )}
            </div>

            {/* ========== RIGHT: SIDEBAR ========== */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Search */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} className="text-violet-600" />
                  <span data-tina-field={tinaField(data.sidebar, 'searchTitle')}>{data.sidebar.searchTitle}</span>
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={data.sidebar.searchPlaceholder}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-400 focus:bg-white outline-none transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400"
                  />
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock size={14} className="text-violet-600" />
                  <span data-tina-field={tinaField(data.sidebar, 'recentPostsTitle')}>{data.sidebar.recentPostsTitle}</span>
                </h3>
                <div className="space-y-3">
                  {postsData.posts.slice(0, 5).map((post: any, i: number) => (
                    <Link key={i} to={`/blog/${slugify(post.title)}`} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-violet-50 transition-colors">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-[#0A0F1F] leading-snug mb-1 line-clamp-2 group-hover:text-violet-700 transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                          <Calendar size={9} /> {post.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Archives */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar size={14} className="text-violet-600" />
                  <span data-tina-field={tinaField(data.sidebar, 'archivesTitle')}>{data.sidebar.archivesTitle}</span>
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {data.archives.map((month: string, i: number) => (
                    <Link key={i} to={`/blog/archive/${slugify(month)}`} className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-colors">
                      <span className="flex items-center gap-2">
                        <ChevronRight size={11} className="text-violet-500 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                        {month}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Folder size={14} className="text-violet-600" />
                  <span data-tina-field={tinaField(data.sidebar, 'categoriesTitle')}>{data.sidebar.categoriesTitle}</span>
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {data.categories.map((cat: any, i: number) => (
                    <Link key={i} to={`/blog/category/${slugify(cat.name)}`} className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-colors">
                      <span className="flex items-center gap-2 truncate">
                        <Tag size={11} className="text-violet-500 flex-shrink-0" />
                        <span className="truncate" data-tina-field={tinaField(cat, 'name')}>{cat.name}</span>
                      </span>
                      <span className="text-[10px] font-black text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full flex-shrink-0" data-tina-field={tinaField(cat, 'count')}>
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-violet-600" />
                  <span data-tina-field={tinaField(data.sidebar, 'tagsTitle')}>{data.sidebar.tagsTitle}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.popularTags.map((tag: string, i: number) => (
                    <Link key={i} to={`/blog/tag/${slugify(tag)}`} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-700 transition-all">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Sparkles size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
<WhatsAppIcon size={22} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight mb-2" data-tina-field={tinaField(data.sidebar.ctaCard, 'title')}>{data.sidebar.ctaCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4" data-tina-field={tinaField(data.sidebar.ctaCard, 'text')}>{data.sidebar.ctaCard.text}</p>
                  <a href={getWhatsAppLink(data.sidebar.ctaCard.whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-violet-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
<WhatsAppIcon size={14} className="text-emerald-600" />
                    <span data-tina-field={tinaField(data.sidebar.ctaCard, 'buttonText')}>{data.sidebar.ctaCard.buttonText}</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ 3. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<WhatsAppIcon size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500" data-tina-field={tinaField(data.faqs, 'badge')}>{data.faqs.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5" data-tina-field={tinaField(data.faqs, 'title')}>
                {data.faqs.title.replace(data.faqs.titleHighlight, '')}
                <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">{data.faqs.titleHighlight}</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8" data-tina-field={tinaField(data.faqs, 'subtitle')}>
                {data.faqs.subtitle}
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Phone size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
<WhatsAppIcon size={22} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2" data-tina-field={tinaField(data.faqs.contactCard, 'title')}>{data.faqs.contactCard.title}</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4" data-tina-field={tinaField(data.faqs.contactCard, 'text')}>{data.faqs.contactCard.text}</p>

                  <div className="space-y-3">
                    <a href={data.faqs.contactCard.phoneHref} className="flex items-center gap-2.5 text-white hover:text-violet-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Phone size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold" data-tina-field={tinaField(data.faqs.contactCard, 'phone')}>{data.faqs.contactCard.phone}</span>
                    </a>
                    <a href={data.faqs.contactCard.emailHref} className="flex items-center gap-2.5 text-white hover:text-violet-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Mail size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold break-all" data-tina-field={tinaField(data.faqs.contactCard, 'email')}>{data.faqs.contactCard.email}</span>
                    </a>
                    <a href={getWhatsAppLink(data.faqs.contactCard.whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-violet-700 font-bold text-xs shadow-lg hover:scale-105 transition-transform">
<WhatsAppIcon size={14} className="text-emerald-600" />
                      <span data-tina-field={tinaField(data.faqs.contactCard, 'whatsappText')}>{data.faqs.contactCard.whatsappText}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {data.faqs.items.map((faq: any, i: number) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-violet-200 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-purple-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 to-purple-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-violet-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-violet-400 group-open:to-purple-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-violet-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* ============ 4. FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.heroImage})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-violet-950/70 to-purple-950/50" />
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
                    From <span className="text-violet-300" data-tina-field={tinaField(data.finalCTA, 'titleHighlight')}>{data.finalCTA.titleHighlight}</span> — Calculate Your Cost
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow" data-tina-field={tinaField(data.finalCTA, 'subtitle')}>
                    {data.finalCTA.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
<WhatsAppIcon size={16} className="text-emerald-600" />
                      <span data-tina-field={tinaField(data.finalCTA.buttons, 'primary')}>{data.finalCTA.buttons.primary}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <span data-tina-field={tinaField(data.finalCTA.buttons, 'secondary')}>{data.finalCTA.buttons.secondary}</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="grid grid-cols-2 gap-4">
                    {data.finalCTA.stats.map((stat: any, i: number) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center">
                        <div className="text-2xl md:text-3xl font-black text-white leading-none mb-1.5" data-tina-field={tinaField(stat, 'value')}>{stat.value}</div>
                        <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest" data-tina-field={tinaField(stat, 'label')}>{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}