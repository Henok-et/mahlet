"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookItem } from "@/sanity/fallbackData";

interface BooksSectionProps {
  books: BookItem[];
}

export default function BooksSection({ books }: BooksSectionProps) {
  const ref = useScrollReveal();
  if (!books || books.length === 0) return null;

  return (
    <section className="section" id="books" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Books</h2>
          <p className="section-subtitle">Published works available for purchase.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {books.map((book, i) => (
            <div
              key={book._id}
              className={`book-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              {/* Book Cover */}
              {book.coverUrl && (
                <div className="book-cover-wrapper">
                  <img
                    src={book.coverUrl}
                    alt={`Cover of ${book.title}`}
                    style={{ width: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Book Info */}
              <div>
                <h3
                  style={{
                    margin: "0 0 1rem 0",
                    fontSize: "1.5rem",
                    lineHeight: 1.3,
                    color: "var(--color-text)",
                  }}
                >
                  {book.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 1.75rem 0",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                  }}
                >
                  {book.description}
                </p>
                {book.purchaseUrl && (
                  <a
                    href={book.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: "inline-flex", textDecoration: "none" }}
                  >
                    Buy on Amazon
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
