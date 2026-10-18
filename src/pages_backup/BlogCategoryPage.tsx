// File: src/pages/BlogCategoryPage.tsx

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, ChevronRight, Calendar, Clock, Tag,
  ArrowRight, Star, Sparkles, Phone, Headset,
  Search, Folder, ArrowUpRight, MessageCircle,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import postsData from '../content/blog/posts.json';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';


export default function BlogCategoryPage({ tinaData }: { tinaData?: any }) {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  // Tina se ya local JSON se data
  const allPosts = tinaData?.data?.blogPosts?.posts || postsData.posts;
  const categories = tinaData?.data?.blogPosts?.categories || postsData.categories;
  const archiveNames = tinaData?.data?.blogPosts?.archiveNames || postsData.archiveNames;
  const popularTags = tinaData?.data?.blogPosts?.popularTags || postsData.popularTags;

  // Find current category
  const category = categories.find((c: any) => c.slug === slug) || categories[0];

  // Filter posts by category
  const categoryPosts = allPosts.filter(
    (p: any) => p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  // Fallback: if no posts, show first few
  const displayPosts = categoryPosts.length > 0 ? categoryPosts : allPosts.slice(0, 3);

  // Show top 8 archives in sidebar
  const sidebarArchives = archiveNames.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-fuchsia-950 to-purple-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <Folder size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white font-bold">Category</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Folder size={14} className="text-fuchsia-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">Category</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mb-6" data-tina-field={tinaField(category, 'name')}>
            {category.name}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mb-6" data-tina-field={tinaField(category, 'description')}>
            {category.description}
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30">
            <span className="text-xs font-bold text-white">{displayPosts.length} Article{displayPosts.length !== 1 ? 's' : ''}</span>
          </motion.div>
        </div>
      </section>

      {/* ============ 2. POSTS + SIDEBAR ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-fuchsia-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

            {/* POSTS GRID */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-black text-[#0A0F1F] mb-1">Articles in {category.name}</h2>
                  <p className="text-sm text-slate-500 font-medium">Showing {displayPosts.length} article{displayPosts.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {displayPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displayPosts.map((post: any, i: number) => (
                    <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }} className="group relative">
                      <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-tina-field={tinaField(post, 'image')} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-white text-[10px] font-black text-fuchsia-700 uppercase tracking-wider shadow-lg" data-tina-field={tinaField(post, 'category')}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-3">
                            <span className="flex items-center gap-1.5"><Calendar size={11} /><span data-tina-field={tinaField(post, 'date')}>{post.date}</span></span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="flex items-center gap-1.5"><Clock size={11} /><span data-tina-field={tinaField(post, 'readTime')}>{post.readTime}</span></span>
                          </div>
                          <h3 className="text-base font-black text-[#0A0F1F] leading-snug mb-3 group-hover:text-fuchsia-700 transition-colors line-clamp-2" data-tina-field={tinaField(post, 'title')}>
                            {post.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4 line-clamp-3 flex-1" data-tina-field={tinaField(post, 'excerpt')}>
                            {post.excerpt}
                          </p>
                          <Link to={`/blog/${post.slug}`} className="group/btn inline-flex items-center gap-2 text-xs font-black text-fuchsia-700 hover:text-fuchsia-900 uppercase tracking-widest transition-colors">
                            Read More
                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 rounded-3xl bg-white border border-slate-200">
                  <Folder size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 font-bold text-lg">No articles in this category yet</p>
                  <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-sm text-fuchsia-600 font-bold hover:underline">
                    <ArrowRight size={14} className="rotate-180" />
                    Back to all posts
                  </Link>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Search */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} className="text-fuchsia-600" /> Search
                </h3>
                <div className="relative">
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search articles..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-fuchsia-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock size={14} className="text-fuchsia-600" /> Recent Posts
                </h3>
                <div className="space-y-3">
                  {allPosts.slice(0, 5).map((p: any, i: number) => (
                    <Link key={i} to={`/blog/${p.slug}`} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-fuchsia-50 transition-colors">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-[#0A0F1F] leading-snug mb-1 line-clamp-2 group-hover:text-fuchsia-700 transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                          <Calendar size={9} /> {p.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Archives */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar size={14} className="text-fuchsia-600" /> Archives
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {sidebarArchives.map((month: string, i: number) => (
                    <Link key={i} to={`/blog/archive/${month.toLowerCase().replace(' ', '-')}`} className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-fuchsia-700 hover:bg-fuchsia-50 transition-colors">
                      <span className="flex items-center gap-2">
                        <ChevronRight size={11} className="text-fuchsia-500 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                        {month}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* All Categories */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Folder size={14} className="text-fuchsia-600" /> All Categories
                </h3>
                <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                  {categories.map((cat: any, i: number) => {
                    const isActive = cat.slug === slug;
                    return (
                      <Link key={i} to={`/blog/category/${cat.slug}`} className={`group flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-colors ${isActive ? 'bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200' : 'text-slate-600 hover:text-fuchsia-700 hover:bg-fuchsia-50'}`}>
                        <span className="flex items-center gap-2 truncate">
                          <Tag size={11} className={`flex-shrink-0 ${isActive ? 'text-fuchsia-700' : 'text-fuchsia-500'}`} />
                          <span className="truncate" data-tina-field={tinaField(cat, 'name')}>{cat.name}</span>
                        </span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full flex-shrink-0 ${isActive ? 'bg-fuchsia-600 text-white' : 'text-fuchsia-600 bg-fuchsia-100'}`} data-tina-field={tinaField(cat, 'count')}>
                          {cat.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-fuchsia-600" /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag: string, i: number) => (
                    <Link key={i} to={`/blog/tag/${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-fuchsia-50 hover:border-fuchsia-300 hover:text-fuchsia-700 transition-all">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-fuchsia-600 via-purple-700 to-fuchsia-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Sparkles size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Headset size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight mb-2">Need Help with Setup?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Talk to our experts — free consultation for your UAE business.</p>
                  <a href={getWhatsAppLink("Hi! I need help with UAE business setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-fuchsia-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
<WhatsAppIcon size={14} className="text-emerald-600" />Ask Expert
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ 3. OTHER CATEGORIES ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-fuchsia-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-fuchsia-200 shadow-sm mb-6">
              <Folder size={14} className="text-fuchsia-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-fuchsia-700">Browse Categories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Explore Other <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Categories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {categories.filter((c: any) => c.slug !== slug).slice(0, 9).map((cat: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link to={`/blog/category/${cat.slug}`} className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-fuchsia-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <Folder size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-black text-[#0A0F1F] leading-tight group-hover:text-fuchsia-700 transition-colors truncate">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{cat.count} articles</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all flex-shrink-0" strokeWidth={2.5} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-700 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-5">
                <Star size={14} className="text-amber-300" fill="currentColor" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">Ready to Start?</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
                Ready to Start Your <span className="text-fuchsia-200">Dubai Business</span>?
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium mb-8 max-w-2xl mx-auto">
                Contact SetupZoneDubai for a free consultation and personalized cost estimate.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-fuchsia-700 font-bold text-sm shadow-xl hover:scale-105 transition-all">
<WhatsAppIcon size={16} className="text-emerald-600" />WhatsApp Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all">
                  <Phone size={16} />Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}