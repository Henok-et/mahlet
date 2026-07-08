import { BookItem } from "@/sanity/fallbackData";

interface BooksSectionProps {
  books: BookItem[];
}

export default function BooksSection({ books }: BooksSectionProps) {
  if (!books || books.length === 0) return null;

  return (
    <section className="section" id="books">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Books</h2>
          <p className="section-subtitle">Published works available for purchase.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {books.map((book) => (
            <div
              key={book._id}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "2.5rem",
                alignItems: "flex-start",
                background: "var(--color-bg)",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                border: "1px solid var(--color-light)",
              }}
            >
              {/* Book Cover */}
              {book.coverUrl && (
                <div
                  style={{
                    width: "180px",
                    flexShrink: 0,
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                  }}
                >
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
