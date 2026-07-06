"use client";

import { useState } from "react";
import Link from "next/link";
import { PostItem } from "@/sanity/fallbackData";
import { ArrowRight, Calendar } from "lucide-react";

interface ThinkingSectionProps {
  posts: PostItem[];
}

export default function ThinkingSection({ posts }: ThinkingSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Filter categories dynamically based on actual categories in the posts + "All"
  const categories = ["All", "Future of Work", "Longevity", "Leadership", "Academic"];

  // Filter posts based on selection
  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => {
        // match category string loosely (slug or value)
        const postCat = post.category?.toLowerCase() || "";
        const activeCat = activeCategory.toLowerCase();
        if (activeCat === "longevity" && postCat.includes("longevity")) return true;
        return postCat === activeCat;
      });

  return (
    <section className="section" id="thinking">
      <div className="container">
        {/* Intro */}
        <div className="section-intro">
          <span className="hero-tag">Insights</span>
          <h2 className="section-title">Latest Thinking</h2>
          <p>
            Key research articles, executive papers, and editorial notes on building future-fit organizations.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="thinking-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              const formattedDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : null;

              return (
                <article className="post-card" key={post._id} style={cardAnimationStyle}>
                  {/* Image Column */}
                  {post.mainImageUrl && (
                    <div className="post-image-container">
                      <img src={post.mainImageUrl} alt={post.title} loading="lazy" />
                    </div>
                  )}
                  
                  {/* Content Column */}
                  <div className="post-content">
                    <span className="post-category">{post.category}</span>
                    <h3>
                      <Link href={`/thinking/${post.slug?.current || post._id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    {/* Footer / Date & Link */}
                    <div className="post-footer">
                      {formattedDate && (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                          <Calendar size={14} />
                          {formattedDate}
                        </span>
                      )}
                      
                      <Link
                        href={`/thinking/${post.slug?.current || post._id}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontWeight: 600, color: "var(--color-gold)" }}
                      >
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div style={noPostsStyle}>
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Inline Animation support
const cardAnimationStyle: React.CSSProperties = {
  animation: "fadeIn 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards"
};

const noPostsStyle: React.CSSProperties = {
  gridColumn: "1 / -1",
  textAlign: "center",
  padding: "4rem 0",
  color: "var(--text-secondary)",
  fontFamily: "var(--font-sans)",
  fontSize: "1.1rem"
};
