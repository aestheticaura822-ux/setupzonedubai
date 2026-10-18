// File: src/pages/BlogArchivePage.tsx

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, ChevronRight, Calendar, Clock, Tag as TagIcon,
  ArrowRight, Star, Sparkles, Phone, Headset, BookOpen,
  Search, Folder, ArrowUpRight, MessageCircle, User,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

import postsData from '../content/blog/posts.json';
import archivesData from '../content/blog/archives.json';

export default function BlogArchivePage({ tinaData }: { tinaData?: any }) {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  // Tina se ya local JSON se data
  const posts = tinaData?.data?.blog?.posts || postsData.posts;
  const categories = tinaData?.data?.blog?.categories || postsData.categories;
  const archiveNames = tinaData?.data?.blog?.archiveNames || postsData.archiveNames;
  const popularTags = tinaData?.data?.blog?.popularTags || postsData.popularTags;
  const archivesList = tinaData?.data?.blogArchives?.archives || archivesData.archives;
const archive = archivesList.find((a: any) => a.monthKey === slug) 
  || archivesList.find((a: any) => a.monthKey === 'october-2026')
  || archivesList[0];

  const monthShort = archive.name.slice(0, 3);
  const archivePosts = posts.filter((p: any) => {
    const [postMonth, , postYear] = p.date.replace(',', '').split(' ');
    return postMonth === monthShort && postYear === archive.year;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <Calendar size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white font-bold">Archive</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Calendar size={14} className="text-indigo-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">Archive</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            {archive.name} <span className="text-indigo-300" data-tina-field={tinaField(archive, 'year')}>{archive.year}</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30">
            <span className="text-xs font-bold text-white">{archive.featuredPosts.length + archivePosts.length} Article{archive.featuredPosts.length + archivePosts.length !== 1 ? 's' : ''}</span>
          </motion.div>
        </div>
      </section>

      {/* LONG INTRO */}
      <section className="relative py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-6 md:p-10 shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-500 rounded-t-3xl" />
            <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] mb-5">About {archive.name} {archive.year}</h2>
            <div className="space-y-4">
              {archive.intro.map((para: string, i: number) => (
                <p key={i} className="text-base md:text-lg text-[#475569] font-medium leading-relaxed" data-tina-field={tinaField(archive, 'intro')}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-sm mb-4">
              <Sparkles size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Featured Articles</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight">
              In-Depth Guides from {archive.name} {archive.year}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {archive.featuredPosts.map((post: any, pi: number) => (
              <motion.article key={pi} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: pi * 0.1 }} className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-500" />
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold mb-4">
                    <span className="flex items-center gap-1.5"><User size={12} /> <span data-tina-field={tinaField(post, 'author')}>{post.author}</span></span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> <span data-tina-field={tinaField(post, 'date')}>{post.date}</span></span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> <span data-tina-field={tinaField(post, 'readTime')}>{post.readTime}</span></span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest" data-tina-field={tinaField(post, 'category')}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight mb-5" data-tina-field={tinaField(post, 'title')}>{post.title}</h3>

                  <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" data-tina-field={tinaField(post, 'image')} />
                  </div>

                  <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-6" data-tina-field={tinaField(post, 'intro')}>{post.intro}</p>

                  <div className="space-y-6 mb-6">
                    {post.sections.map((section: any, si: number) => (
                      <div key={si}>
                        <h4 className="text-lg md:text-xl font-black text-[#0A0F1F] mb-3" data-tina-field={tinaField(section, 'heading')}>{section.heading}</h4>
                        <div className="space-y-3">
                          {section.content.map((para: string, pi2: number) => (
                            <p key={pi2} className="text-base text-[#475569] font-medium leading-relaxed">{para}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-black text-[#0A0F1F] mb-3">Frequently Asked Questions</h4>
                    <div className="space-y-3">
                      {post.faq.map((faq: any, fi: number) => (
                        <details key={fi} className="group rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border border-slate-200 hover:border-indigo-200 transition-all overflow-hidden">
                          <summary className="flex items-start gap-3 p-4 cursor-pointer list-none">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-black text-white mt-0.5">
                              {String(fi + 1).padStart(2, '0')}
                            </div>
                            <h5 className="flex-1 text-sm md:text-base font-black text-[#0A0F1F] leading-snug group-hover:text-indigo-700 transition-colors" data-tina-field={tinaField(faq, 'q')}>{faq.q}</h5>
                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 group-open:bg-gradient-to-br group-open:from-indigo-400 group-open:to-blue-600 transition-all">
                              <span className="text-indigo-600 font-black text-sm group-open:text-white group-open:rotate-45 transition-all inline-block">+</span>
                            </div>
                          </summary>
                          <div className="px-4 pb-4 pl-14">
                            <p className="text-sm text-[#475569] font-medium leading-relaxed pt-2 border-t border-dashed border-slate-200" data-tina-field={tinaField(faq, 'a')}>{faq.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-600 shadow-lg">
                    <p className="text-base text-white font-medium leading-relaxed">
                      Need help with your UAE business? <span className="font-black">SetupZoneDubai</span> offers free consultations to help you plan your {archive.name.toLowerCase()} {archive.year} strategy.
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID + SIDEBAR */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-black text-[#0A0F1F] mb-1">All Posts in {archive.name} {archive.year}</h2>
                  <p className="text-sm text-slate-500 font-medium">Showing {archivePosts.length} article{archivePosts.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {archivePosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {archivePosts.map((post: any, i: number) => (
                    <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }} className="group relative">
                      <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-tina-field={tinaField(post, 'image')} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-white text-[10px] font-black text-indigo-700 uppercase tracking-wider shadow-lg" data-tina-field={tinaField(post, 'category')}>{post.category}</span>
                          </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-3">
                            <span className="flex items-center gap-1.5"><Calendar size={11} /><span data-tina-field={tinaField(post, 'date')}>{post.date}</span></span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="flex items-center gap-1.5"><Clock size={11} /><span data-tina-field={tinaField(post, 'readTime')}>{post.readTime}</span></span>
                          </div>
                          <h3 className="text-base font-black text-[#0A0F1F] leading-snug mb-3 group-hover:text-indigo-700 transition-colors line-clamp-2" data-tina-field={tinaField(post, 'title')}>{post.title}</h3>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4 line-clamp-3 flex-1" data-tina-field={tinaField(post, 'excerpt')}>{post.excerpt}</p>
                          <Link to={`/blog/${post.slug}`} className="group/btn inline-flex items-center gap-2 text-xs font-black text-indigo-700 hover:text-indigo-900 uppercase tracking-widest transition-colors">
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
                  <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 font-bold text-lg">Featured articles for this month are shown above</p>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} className="text-indigo-600" /> Search
                </h3>
                <div className="relative">
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search articles..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock size={14} className="text-indigo-600" /> Recent Posts
                </h3>
                <div className="space-y-3">
                  {posts.slice(0, 5).map((p: any, i: number) => (
                    <Link key={i} to={`/blog/${p.slug}`} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-indigo-50 transition-colors">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-[#0A0F1F] leading-snug mb-1 line-clamp-2 group-hover:text-indigo-700 transition-colors">{p.title}</h4>
                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1"><Calendar size={9} /> {p.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar size={14} className="text-indigo-600" /> All Archives
                </h3>
                <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                  {archiveNames.map((month: string, i: number) => {
                    const mSlug = month.toLowerCase().replace(' ', '-');
                    const isActive = mSlug === slug;
                    return (
                      <Link key={i} to={`/blog/archive/${mSlug}`} className={`group flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-colors ${isActive ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'text-slate-600 hover:text-indigo-700 hover:bg-indigo-50'}`}>
                        <span className="flex items-center gap-2">
                          <ChevronRight size={11} className={isActive ? 'text-indigo-700' : 'text-indigo-500'} strokeWidth={3} />
                          {month}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Folder size={14} className="text-indigo-600" /> Categories
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {categories.map((cat: any, i: number) => (
                    <Link key={i} to={`/blog/category/${cat.slug}`} className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors">
                      <span className="flex items-center gap-2 truncate"><TagIcon size={11} className="text-indigo-500 flex-shrink-0" /><span className="truncate" data-tina-field={tinaField(cat, 'name')}>{cat.name}</span></span>
                      <span className="text-[10px] font-black text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full flex-shrink-0" data-tina-field={tinaField(cat, 'count')}>{cat.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-indigo-600" /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((t: string, i: number) => (
                    <Link key={i} to={`/blog/tag/${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700 transition-all">
                      #{t}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Headset size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight mb-2">Need Help with Setup?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Talk to our experts — free consultation for your UAE business.</p>
                  <a href={getWhatsAppLink("Hi! I need help with UAE business setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-indigo-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
                    <WhatsAppIcon size={14} className="text-emerald-600" />
Ask Expert
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* OTHER ARCHIVES */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-sm mb-6">
              <Calendar size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Browse Archives</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Explore Other <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">Months</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {archiveNames.filter((m: string) => m.toLowerCase().replace(' ', '-') !== slug).map((m: string, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
                <Link to={`/blog/archive/${m.toLowerCase().replace(' ', '-')}`} className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <Calendar size={14} className="text-indigo-500" />
                  <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">{m}</span>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" strokeWidth={2.5} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-700 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-5">
                <Star size={14} className="text-amber-300" fill="currentColor" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">Ready to Start?</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
                Ready to Start Your <span className="text-indigo-200">Dubai Business</span>?
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium mb-8 max-w-2xl mx-auto">
                Contact SetupZoneDubai for a free consultation and personalized cost estimate.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all">
                  <WhatsAppIcon size={16} className="text-emerald-600" />
WhatsApp Us
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