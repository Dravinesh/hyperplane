"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { blogPostsData, blogCategories, type BlogPost } from "@/data/blog";
import {
  BookOpen,
  Search,
  Clock,
  User,
  ArrowRight,
  X,
  Share2,
  Bookmark,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPostsData.find((p) => p.featured) || blogPostsData[0];

  return (
    <main className="hp-noise pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-3xl"
          />
          <Container>
            <div className="flex flex-col items-center text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--hp-border-strong)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[var(--hp-accent-secondary)]">
                <BookOpen className="size-3.5" /> Engineering & Tech Insights
              </span>
              <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
                Perspectives on AI, Systems & <span className="hp-gradient-text">Architecture</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg">
                Technical write-ups, engineering benchmarks, and architectural analyses written directly by our senior team.
              </p>
            </div>
          </Container>
        </section>

        {/* SEARCH AND CATEGORY FILTER BAR */}
        <section className="py-6 border-y border-[var(--hp-border)] bg-[var(--hp-surface)]/60 backdrop-blur-md sticky top-[72px] z-40">
          <Container className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[var(--hp-accent-primary)] text-white shadow-[var(--hp-shadow-glow-violet)]"
                      : "bg-white/[0.04] text-[var(--hp-text-secondary)] hover:text-white border border-[var(--hp-border)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[var(--hp-text-tertiary)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[var(--hp-border)] bg-black/50 pl-10 pr-4 py-1.5 text-xs text-white placeholder:text-[var(--hp-text-tertiary)] focus:border-[var(--hp-accent-secondary)] focus:outline-none transition-colors"
              />
            </div>
          </Container>
        </section>

        {/* FEATURED POST BANNER (IF NO SEARCH) */}
        {selectedCategory === "All" && !searchQuery && (
          <section className="py-12">
            <Container>
              <div
                onClick={() => setActiveArticle(featuredPost)}
                className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-12 border border-[var(--hp-border-strong)] cursor-pointer group hover:border-[var(--hp-accent-secondary)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-[var(--hp-accent-primary)]/20 px-3 py-1 text-xs font-semibold text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30">
                    Featured Insight
                  </span>
                  <span className="text-xs font-mono text-[var(--hp-text-tertiary)]">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="font-display text-2xl md:text-4xl font-medium text-white group-hover:text-[var(--hp-accent-secondary)] transition-colors mb-4 max-w-3xl">
                  {featuredPost.title}
                </h2>
                <p className="text-sm md:text-base text-[var(--hp-text-secondary)] leading-relaxed max-w-3xl mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--hp-border)] pt-6">
                  <div className="flex items-center gap-4 text-xs text-[var(--hp-text-tertiary)]">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <User className="size-3.5 text-[var(--hp-accent-secondary)]" />
                      {featuredPost.author.name}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--hp-accent-secondary)] group-hover:translate-x-1 transition-transform">
                    <span>Read Full Article</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* ARTICLES GRID */}
        <section className="hp-section">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveArticle(post)}
                  className="cursor-pointer"
                >
                  <Card className="h-full flex flex-col justify-between p-7 border border-[var(--hp-border)]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] font-mono text-[var(--hp-accent-secondary)] border border-[var(--hp-border)]">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-[var(--hp-text-tertiary)] flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-medium text-white mb-3 group-hover:text-[var(--hp-accent-secondary)] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-[var(--hp-text-secondary)] line-clamp-3 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-[var(--hp-border)] pt-4 text-xs text-[var(--hp-text-tertiary)]">
                      <span>{post.author.name}</span>
                      <span className="text-[11px]">{post.publishedAt}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ARTICLE READER MODAL */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArticle(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[var(--hp-radius-xl)] border border-[var(--hp-border-strong)] bg-[var(--hp-card)] p-6 md:p-10 shadow-2xl hp-noise"
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute right-6 top-6 flex size-9 items-center justify-center rounded-full border border-[var(--hp-border)] bg-black/40 text-[var(--hp-text-secondary)] hover:text-white"
                >
                  <X className="size-4" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-[var(--hp-accent-primary)]/20 px-3 py-1 text-xs font-semibold text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-[var(--hp-text-tertiary)] flex items-center gap-1 font-mono">
                    <Clock className="size-3" /> {activeArticle.readTime}
                  </span>
                </div>

                <h1 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
                  {activeArticle.title}
                </h1>

                <div className="flex items-center gap-4 text-xs text-[var(--hp-text-tertiary)] border-b border-[var(--hp-border)] pb-6 mb-8">
                  <span className="text-white font-medium">{activeArticle.author.name} ({activeArticle.author.role})</span>
                  <span>•</span>
                  <span>{activeArticle.publishedAt}</span>
                </div>

                {/* Article Body */}
                <div className="flex flex-col gap-5 text-sm text-[var(--hp-text-secondary)] leading-relaxed mb-10">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-[var(--hp-border)] pt-6">
                  <Button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert("Article link copied to clipboard!");
                    }}
                    variant="secondary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    <Share2 className="size-4" />
                    <span>Share Article</span>
                  </Button>

                  <Button
                    onClick={() => setActiveArticle(null)}
                    variant="primary"
                    size="md"
                  >
                    Close Reader
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <CTASection />
      </main>
  );
}
