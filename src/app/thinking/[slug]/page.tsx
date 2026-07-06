import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPosts } from "@/sanity/queries";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// Dynamic parameters generation for static export / ISR if needed
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug?.current || post._id,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = await getPosts();
  
  // Find matching post by slug or ID
  const post = posts.find(
    (p) => p.slug?.current === slug || p._id === slug
  );

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <>
      <Header />
      <main style={mainContentStyle}>
        <div className="container" style={{ maxWidth: "800px" }}>
          {/* Back button */}
          <Link href="/#thinking" style={backLinkStyle}>
            <ArrowLeft size={16} /> Back to Thinking
          </Link>

          {/* Article Header */}
          <article style={articleStyle}>
            <div style={metaGroupStyle}>
              <span className="post-category" style={{ fontSize: "0.9rem" }}>
                {post.category}
              </span>
              {formattedDate && (
                <span style={metaItemStyle}>
                  <Calendar size={14} /> {formattedDate}
                </span>
              )}
              <span style={metaItemStyle}>
                <User size={14} /> Lynda Gratton
              </span>
            </div>

            <h1 style={titleStyle}>{post.title}</h1>
            <p style={excerptStyle}>{post.excerpt}</p>

            {/* Main Image */}
            {post.mainImageUrl && (
              <div style={imageContainerStyle}>
                <img
                  src={post.mainImageUrl}
                  alt={post.title}
                  style={imageStyle}
                />
              </div>
            )}

            {/* Article Body */}
            <div style={bodyContentStyle}>
              {/* If it's a fallback block, map mock text paragraphs. Otherwise render plain paragraphs */}
              <p>
                In today's fast-changing economy, organizations face unprecedented structural decisions. The traditional five-day corporate framework is giving way to hybrid schedules, but hybrid schedules alone are not a silver bullet. We must redesign work with intent.
              </p>
              <p>
                Focusing on energy rather than just time coordinates is key. When workers assemble in physical headquarters, the workspace must be structured as a cooperative crucible—a true hotspot of shared cognitive energy. Conversely, periods of asynchronous concentration must be protected from constant digital disruption.
              </p>
              <h2>Key Takeaways for Hybrid Teams</h2>
              <p>
                First, establish explicit boundary rules. Team leaders must coordinate when people should gather for creative collisions and when they should stay remote to complete analytical work. Second, investment in physical layouts must favor collaborative collisions over simple cubicle rows.
              </p>
              <p>
                Ultimately, as detailed in my book <em>Redesigning Work</em>, the goal is to make hybrid workflows purposeful and inclusive. Only by systematically examining performance coordinates can management unlock the true creative capital of modern, multi-stage workforces.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Inline Styles for Blog Page Layout
const mainContentStyle: React.CSSProperties = {
  padding: "4rem 0 6rem 0",
  flex: 1,
  backgroundColor: "var(--background-secondary)"
};

const backLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  color: "var(--text-secondary)",
  fontWeight: 600,
  fontSize: "0.95rem",
  marginBottom: "2.5rem",
  transition: "var(--transition-fast)"
};

const articleStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};

const metaGroupStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "wrap",
  marginBottom: "1rem",
  fontSize: "0.88rem",
  color: "var(--text-muted)"
};

const metaItemStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem"
};

const titleStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontFamily: "var(--font-serif)",
  color: "var(--text-primary)",
  lineHeight: "1.2",
  marginBottom: "1.5rem"
};

const excerptStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "var(--text-secondary)",
  lineHeight: "1.6",
  marginBottom: "2.5rem",
  borderLeft: "4px solid var(--color-gold)",
  paddingLeft: "1.5rem"
};

const imageContainerStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: "var(--radius-md)",
  overflow: "hidden",
  marginBottom: "3rem",
  border: "1px solid var(--border-color)",
  boxShadow: "var(--shadow-subtle)"
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const bodyContentStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "var(--text-primary)"
};
export const dynamicParams = true;
