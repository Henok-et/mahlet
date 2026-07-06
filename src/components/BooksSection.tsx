import { BookItem } from "@/sanity/fallbackData";

interface BooksSectionProps {
  books: BookItem[];
}

export default function BooksSection({ books }: BooksSectionProps) {
  return (
    <section className="section section-alt" id="books">
      <div className="container">
        <div className="section-intro">
          <span className="section-tag">Publications</span>
          <h2 className="section-title">Selected Books</h2>
          <p>
            Exploring the critical themes of longevity, the future of work,
            organisational energy, and strategic workforce change.
          </p>
        </div>

        <div className="books-grid">
          {books.map((book) => {
            const publishYear = book.publishDate
              ? new Date(book.publishDate).getFullYear()
              : null;

            return (
              <div className="book-card" key={book._id}>
                {/* Book Cover */}
                <div className="book-cover-container">
                  {book.coverUrl ? (
                    <img
                      src={book.coverUrl}
                      alt={`${book.title} book cover`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="book-cover-placeholder">
                      <span>{book.title}</span>
                    </div>
                  )}
                </div>

                {/* Metadata */}
                <div className="book-meta">
                  {publishYear ? `Published ${publishYear}` : "Book"}
                </div>
                <h3>{book.title}</h3>
                <p className="book-desc">{book.description}</p>

                {/* Framework Steps */}
                {book.framework && book.framework.length > 0 && (
                  <div className="framework-steps">
                    {book.framework.map((step, idx) => (
                      <div className="framework-step" key={idx}>
                        {step.stepNumber || `Step ${idx + 1}`}
                        <span>{step.title}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Buy CTA */}
                {book.purchaseUrl && (
                  <a
                    href={book.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-link"
                  >
                    Purchase Book
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
