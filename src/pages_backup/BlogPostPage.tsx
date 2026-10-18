// File: src/pages/BlogPostPage.tsx

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTina, tinaField } from 'tinacms/dist/react';
import {
  Home as HomeIcon, ChevronRight, Calendar, Clock, Tag,
  MessageCircle, ArrowRight, Star, Sparkles, Phone, Headset, BookOpen, Send,
  CheckCircle2, User, Search, Folder, ArrowUpRight,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import postsData from '../content/blog/posts.json';
import postContentData from '../content/blog/postContent.json';

export default function BlogPostPage({ tinaData }: { tinaData?: any }) {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [commentForm, setCommentForm] = useState({ name: '', email: '', website: '', message: '' });
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Tina se ya local JSON se data
  const allPosts = tinaData?.data?.blogPosts?.posts || postsData.posts;
  const categories = tinaData?.data?.blogPosts?.categories || postsData.categories;
  const archiveNames = tinaData?.data?.blogPosts?.archiveNames || postsData.archiveNames;
  const popularTags = tinaData?.data?.blogPosts?.popularTags || postsData.popularTags;

  // Post content
  const postContents = tinaData?.data?.postContent?.postContents || postContentData.postContents;

  // Find post basic info + content
  const post = allPosts.find((p: any) => p.slug === slug) || allPosts[0];
  const contentBlock = postContents.find((pc: any) => pc.slug === post.slug);
  const content = contentBlock?.content || [];

  const relatedPosts = allPosts.filter((p: any) => p.slug !== post.slug).slice(0, 3);
  const recentPosts = allPosts.slice(0, 5);
  const sidebarArchives = archiveNames.slice(0, 8);

  // Comment submit → WhatsApp
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I just left a comment on your blog post: "${post.title}"%0A%0A📝 Comment: ${commentForm.message}%0A%0A👤 Name: ${commentForm.name}%0A📧 Email: ${commentForm.email}${commentForm.website ? `%0A🌐 Website: ${commentForm.website}` : ''}`;
    window.open(getWhatsAppLink(text), '_blank');
    setCommentSubmitted(true);
    setCommentForm({ name: '', email: '', website: '', message: '' });
    setTimeout(() => setCommentSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <BookOpen size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight size={14} />
            <Link to={`/blog/category/${post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-white">{post.category}</Link>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Tag size={14} className="text-violet-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white" data-tina-field={tinaField(post, 'category')}>{post.category}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight mb-6" data-tina-field={tinaField(post, 'title')}>
            {post.title}
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-wrap items-center gap-5 text-sm text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-md">
                <User size={15} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white">SetupZoneDubai Team</span>
            </div>
            <span className="flex items-center gap-1.5"><Calendar size={14} /><span data-tina-field={tinaField(post, 'date')}>{post.date}</span></span>
            <span className="flex items-center gap-1.5"><Clock size={14} /><span data-tina-field={tinaField(post, 'readTime')}>{post.readTime}</span> read</span>
          </motion.div>
        </div>
      </section>

      {/* ============ 2. MAIN CONTENT ============ */}
      <section className="relative py-14 md:py-16 bg-gradient-to-b from-white to-violet-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

            <article className="lg:col-span-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" data-tina-field={tinaField(post, 'image')} />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500" />
                <div className="p-6 md:p-10 space-y-6 text-base md:text-lg text-[#475569] font-medium leading-relaxed">

                  {content.map((block: any, i: number) => {
                    if (block.type === 'paragraph') return <p key={i}>{block.text}</p>;
                    if (block.type === 'h2') return <h2 key={i} className="text-xl md:text-2xl font-black text-[#0A0F1F] pt-4">{block.text}</h2>;
                    if (block.type === 'h3') return <h3 key={i} className="text-lg md:text-xl font-black text-[#0A0F1F] pt-2">{block.text}</h3>;
                    if (block.type === 'callout') return (
                      <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border-l-4 border-violet-400">
                        <p className="text-sm text-violet-900 font-medium leading-relaxed">{block.text}</p>
                      </div>
                    );
                    if (block.type === 'list') return (
                      <div key={i} className="grid sm:grid-cols-2 gap-3 my-4">
                        {block.items?.map((item: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100">
                            <CheckCircle2 size={16} className="text-violet-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-sm text-slate-700 font-medium leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    );
                    if (block.type === 'steps') return (
                      <ol key={i} className="space-y-3 my-4">
                        {block.items?.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-violet-50/50 border border-slate-100">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0 text-sm font-black text-white">
                              {String(idx + 1).padStart(2, '0')}
                            </div>
                            <span className="text-sm md:text-base text-slate-700 font-medium leading-snug pt-1.5">{item}</span>
                          </li>
                        ))}
                      </ol>
                    );
                    if (block.type === 'faq') return (
                      <div key={i} className="space-y-3 my-4">
                        {block.faqItems?.map((faq: any, idx: number) => (
                          <details key={idx} className="group rounded-2xl bg-gradient-to-br from-slate-50 to-violet-50/50 border border-slate-200 hover:border-violet-200 transition-all overflow-hidden">
                            <summary className="flex items-start gap-3 p-4 cursor-pointer list-none">
                              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0 text-xs font-black text-white mt-0.5">
                                {String(idx + 1).padStart(2, '0')}
                              </div>
                              <h3 className="flex-1 text-sm md:text-base font-black text-[#0A0F1F] leading-snug group-hover:text-violet-700 transition-colors">{faq.q}</h3>
                              <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 group-open:bg-gradient-to-br group-open:from-violet-400 group-open:to-purple-600 transition-all">
                                <span className="text-violet-600 font-black text-sm group-open:text-white group-open:rotate-45 transition-all inline-block">+</span>
                              </div>
                            </summary>
                            <div className="px-4 pb-4 pl-14">
                              <p className="text-sm text-[#475569] font-medium leading-relaxed pt-2 border-t border-dashed border-slate-200">{faq.a}</p>
                            </div>
                          </details>
                        ))}
                      </div>
                    );
                    if (block.type === 'closing') return (
                      <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 shadow-lg mt-6">
                        <p className="text-base text-white font-medium leading-relaxed">{block.text}</p>
                      </div>
                    );
                    return null;
                  })}

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Tags:</span>
                      {post.tags?.map((tag: string, i: number) => (
                        <Link key={i} to={`/blog/tag/${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-[11px] font-bold text-violet-700 hover:bg-violet-100 transition">
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* COMMENT FORM → WHATSAPP */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-10 relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-500" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md">
<WhatsAppIcon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#0A0F1F]">Leave a Reply</h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Your comment will be sent to us via <span className="font-bold text-emerald-600">WhatsApp</span>
                      </p>
                    </div>
                  </div>

                  {!commentSubmitted ? (
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">Comment *</label>
                        <textarea required rows={5} value={commentForm.message}
                          onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                          placeholder="Write your comment..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400 resize-none" />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { label: 'Name *', key: 'name', type: 'text', placeholder: 'John Doe', required: true },
                          { label: 'Email *', key: 'email', type: 'email', placeholder: 'john@example.com', required: true },
                          { label: 'Website', key: 'website', type: 'url', placeholder: 'https://...', required: false },
                        ].map((field) => (
                          <div key={field.key}>
                            <label className="block text-xs font-black text-[#0A0F1F] uppercase tracking-widest mb-2">{field.label}</label>
                            <input type={field.type} required={field.required} value={(commentForm as any)[field.key]}
                              onChange={(e) => setCommentForm({ ...commentForm, [field.key]: e.target.value })}
                              placeholder={field.placeholder}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                          </div>
                        ))}
                      </div>
                      <button type="submit" className="group/btn relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-600 text-white font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                        <Send size={14} className="relative" strokeWidth={2.5} />
                        <span className="relative">Send via WhatsApp</span>
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
                        className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mb-3 shadow-lg">
                        <CheckCircle2 size={32} className="text-white" strokeWidth={2.5} />
                      </motion.div>
                      <h4 className="text-lg font-black text-[#0A0F1F] mb-2">Thank You!</h4>
                      <p className="text-sm text-slate-600 font-medium mb-4">Your comment has been sent via WhatsApp.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} className="text-violet-600" /> Search
                </h3>
                <div className="relative">
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock size={14} className="text-violet-600" /> Recent Posts
                </h3>
                <div className="space-y-3">
                  {recentPosts.map((p: any, i: number) => (
                    <Link key={i} to={`/blog/${p.slug}`} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-violet-50 transition-colors">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-[#0A0F1F] leading-snug mb-1 line-clamp-2 group-hover:text-violet-700 transition-colors">{p.title}</h4>
                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                          <Calendar size={9} /> {p.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar size={14} className="text-violet-600" /> Archives
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {sidebarArchives.map((month: string, i: number) => (
                    <Link key={i} to={`/blog/archive/${month.toLowerCase().replace(' ', '-')}`}
                      className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-colors">
                      <span className="flex items-center gap-2">
                        <ChevronRight size={11} className="text-violet-500 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                        {month}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Folder size={14} className="text-violet-600" /> Categories
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {categories.map((cat: any, i: number) => (
                    <Link key={i} to={`/blog/category/${cat.slug}`}
                      className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-colors">
                      <span className="flex items-center gap-2 truncate">
                        <Tag size={11} className="text-violet-500 flex-shrink-0" />
                        <span className="truncate" data-tina-field={tinaField(cat, 'name')}>{cat.name}</span>
                      </span>
                      <span className="text-[10px] font-black text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full flex-shrink-0" data-tina-field={tinaField(cat, 'count')}>{cat.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-violet-600" /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag: string, i: number) => (
                    <Link key={i} to={`/blog/tag/${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-700 transition-all">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Headset size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight mb-2">Need Help with Setup?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Talk to our experts — free consultation for your UAE business.</p>
                  <a href={getWhatsAppLink("Hi! I need help with UAE business setup.")} target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-violet-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
<WhatsAppIcon size={14} className="text-emerald-600" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 shadow-sm mb-6">
              <BookOpen size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-violet-700">Related Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              You May Also <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Like</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((p: any, i: number) => (
              <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
                <Link to={`/blog/${p.slug}`} className="block">
                  <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-white text-[10px] font-black text-violet-700 uppercase tracking-wider shadow-lg">{p.category}</span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-3">
                        <span className="flex items-center gap-1.5"><Calendar size={11} />{p.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1.5"><Clock size={11} />{p.readTime}</span>
                      </div>
                      <h3 className="text-base font-black text-[#0A0F1F] leading-snug mb-3 group-hover:text-violet-700 transition-colors line-clamp-2">{p.title}</h3>
                      <span className="inline-flex items-center gap-2 text-xs font-black text-violet-700 uppercase tracking-widest mt-auto">
                        Read More <ArrowUpRight size={14} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-5">
                <Star size={14} className="text-amber-300" fill="currentColor" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">Ready to Start?</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
                Ready to Start Your <span className="text-violet-200">Dubai Business</span>?
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium mb-8 max-w-2xl mx-auto">
                Contact SetupZoneDubai for a free consultation and personalized cost estimate.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm shadow-xl hover:scale-105 transition-all">
<WhatsAppIcon size={16} className="text-emerald-600" />
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