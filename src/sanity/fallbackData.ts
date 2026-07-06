export interface BookItem {
  _id: string;
  title: string;
  coverUrl?: string;
  cover?: any;
  publishDate?: string;
  purchaseUrl?: string;
  description: string;
  framework?: {
    stepNumber?: string;
    title: string;
    description: string;
  }[];
}

export interface PostItem {
  _id: string;
  title: string;
  slug: { current: string };
  mainImageUrl?: string;
  mainImage?: any;
  category: string;
  publishedAt: string;
  excerpt: string;
  body?: any;
}

export interface HeroData {
  title: string;
  subtitle: string;
  bio: string;
  profileImageUrl?: string;
  profileImage?: any;
  ctaPrimaryText?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryText?: string;
  ctaSecondaryUrl?: string;
}

export interface SpeakingData {
  title: string;
  intro: string;
  topics: {
    title: string;
    description: string;
  }[];
  contactEmail: string;
}

export const fallbackHero: HeroData = {
  title: "Professor Lynda Gratton",
  subtitle: "Professor of Management Practice at London Business School & Founder of HSM Advisory",
  bio: "Lynda Gratton is a world-leading expert on the future of work. As a Professor of Management Practice at London Business School, she teaches the Future of Work elective and directs the school's executive programs. In 2009, she founded HSM Advisory, a research-based advisory practice that collaborates with global companies to build innovative workforces. Lynda has authored ten books on people, strategy, and organizational change, and is ranked among the top management thinkers globally.",
  profileImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // placeholder portrait of professional academic woman
  ctaPrimaryText: "Latest Book: Redesigning Work",
  ctaPrimaryUrl: "#books",
  ctaSecondaryText: "Speaking Requests",
  ctaSecondaryUrl: "#contact"
};

export const fallbackBooks: BookItem[] = [
  {
    _id: "book-1",
    title: "Redesigning Work",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop", // book cover placeholder
    publishDate: "2022-03-01",
    purchaseUrl: "https://www.amazon.com/Redesigning-Work-Transform-Organisation-Everyone/dp/0241551322",
    description: "In Redesigning Work, Lynda Gratton presents a practical four-step framework to help leaders reimagine how their business works and design hybrid structures that make work purposeful, productive, and inclusive for everyone.",
    framework: [
      { stepNumber: "Step 1", title: "Understand", description: "Identify what drives employee performance and performance blockers." },
      { stepNumber: "Step 2", title: "Reimagine", description: "Design creative new approaches to workflow, space, and time configurations." },
      { stepNumber: "Step 3", title: "Model & Test", description: "Experiment with and model pilot designs before widespread launch." },
      { stepNumber: "Step 4", title: "Act & Create", description: "Implement structural changes based on objective, data-led feedback." }
    ]
  },
  {
    _id: "book-2",
    title: "The 100-Year Life",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop",
    publishDate: "2016-06-02",
    purchaseUrl: "https://www.amazon.com/100-Year-Life-Living-Working-Longevity/dp/1472932024",
    description: "Co-authored with Andrew J. Scott, this landmark book explores the profound implications of living to 100. It shows how we must shift from a traditional three-stage life (education, career, retirement) to a multi-stage life filled with constant transitions, retraining, and personal rejuvenation."
  },
  {
    _id: "book-3",
    title: "The New Long Life",
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
    publishDate: "2020-05-28",
    purchaseUrl: "https://www.amazon.com/New-Long-Life-Flourishing-Changing/dp/1526615174",
    description: "A practical guide to flourishing in an era of rapid technological acceleration and rising life expectancies. It addresses how we can redesign our careers, relationships, and finance models to cope with longer, tech-enabled lifespans."
  },
  {
    _id: "book-4",
    title: "The Shift",
    coverUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&auto=format&fit=crop",
    publishDate: "2011-06-01",
    purchaseUrl: "https://www.amazon.com/Shift-Future-Work-Already-Here/dp/0091940177",
    description: "The Shift highlights five global forces (technology, globalization, demography, society, and low carbon) that are altering work. It outlines three major personal shifts needed to avoid falling behind and build high-value skill clusters."
  }
];

export const fallbackPosts: PostItem[] = [
  {
    _id: "post-1",
    title: "Why Hybrid Work Requires Split Management Roles",
    slug: { current: "why-hybrid-work-requires-split-management-roles" },
    mainImageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    category: "Future of Work",
    publishedAt: "2026-06-15T09:00:00Z",
    excerpt: "Hybrid models demand new ways of leading. In this article, I discuss why organizations should separate operational management from people-development leaders."
  },
  {
    _id: "post-2",
    title: "The Multi-Stage Life: Navigating Transitions After Fifty",
    slug: { current: "multi-stage-life-navigating-transitions" },
    mainImageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    category: "Longevity",
    publishedAt: "2026-05-22T10:00:00Z",
    excerpt: "Living longer means transitioning more frequently. Here's a guide to retraining and building intangible assets in the third act of your career."
  },
  {
    _id: "post-3",
    title: "Designing Workplaces for Cognitive Energy and Buzz",
    slug: { current: "designing-workplaces-for-cognitive-energy" },
    mainImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    category: "Leadership",
    publishedAt: "2026-04-10T14:30:00Z",
    excerpt: "How can we create office hubs that act as true 'Hot Spots'? I explore layout changes and schedule coordinates that maximize creative collaborations."
  }
];

export const fallbackSpeaking: SpeakingData = {
  title: "Speaking & Advisory Services",
  intro: "Lynda is in high demand as a speaker, keynote presenter, and strategic advisor for corporate leadership events, global summits, and board retreats. Her keynotes bring a unique blend of deep academic research and direct corporate experience to help organizations think strategically about their workforce structures.",
  topics: [
    {
      title: "Redesigning Work for Hybrid Efficiency",
      description: "How companies can build a hybrid work strategy that balances productivity, focus, and collaboration. Lynda reviews her four-step framework and lessons learned from advisory partnerships."
    },
    {
      title: "The 100-Year Life: Longevity and the Career Horizon",
      description: "What it means for societies, governments, and corporations when individuals live to 100. Key insights on shifting from a three-stage life to a multi-stage life."
    },
    {
      title: "Building Hot Spots: Corporate Innovation and Collaboration",
      description: "Why some organizations buzz with energy while others feel stagnant. Lynda discusses practical ways to break silos, design creative colliders, and foster cross-functional synergy."
    }
  ],
  contactEmail: "speaking@hsm-advisory.com"
};
