// Blog posts data structure with real Medium articles
export const blogPosts = [
  // ========================================
  // 🚀 TEMPLATE ARTIKEL BARU - TINGGAL UNCOMMENT & EDIT!
  // ========================================
  // Copy dari sini sampai komentar penutup, uncomment, dan edit sesuai artikel lo
  {
    id: 11, // Ganti dengan nomor berikutnya (cek artikel terakhir + 1)
    title: "Web3 Marketing Strategy That Increased User Engagement by 300%", // Max 60 karakter
    slug: "web3-marketing-strategy", // Huruf kecil, pakai dash (-)
    excerpt: "How I helped a DeFi startup achieve 300% engagement growth through authentic storytelling and data-backed Web3 marketing.", // Max 200 karakter
    content: "Explored how a data-driven Web3 marketing approach helped a DeFi startup grow community engagement by 300%.", // Paragraf pertama
    publishedDate: "2025-10-30", // Format: YYYY-MM-DD (tanggal hari ini)
    lastModified: "2025-10-30", // Sama dengan publishedDate untuk artikel baru
    readTime: "5 min read", // Estimasi: jumlah kata ÷ 200 = menit
    category: "Content Strategy", // Pilih: "Technical Writing", "Copywriting", atau "Industry Insights"
    tags: ["Web3 Marketing", "DeFi", "Community Growth", "Content Strategy"], // 3-5 keywords relevan
    featured: true, // true = tampil di homepage (max 3), false = tidak
    image: "https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop", // Cari di pexels.com, ukuran 800x400
    author: {
      name: "Daffa Haidar", // Jangan ganti
      avatar: "/images/author-avatar.jpg", // Jangan ganti
    },
    seo: {
      metaDescription: "How I helped a DeFi startup achieve 300% engagement growth through authentic storytelling and data-backed Web3 marketing.", // Untuk search results
      keywords: ["Web3 Marketing", "DeFi", "Community Growth", "Content Strategy"], // 3-5 keywords untuk SEO
    },
    link: "https://www.linkedin.com/pulse/how-web3-marketing-strategy-increased-user-engagement-falah-8nv9c", // URL artikel lengkap (LinkedIn/Medium)
  },
  // ========================================
  // 📝 CONTOH ARTIKEL YANG SUDAH DIISI
  // ========================================
  {
    id: 12,
    title: "Beyond BTC: 5 Cryptocurrencies Worth Watching in 2026",
    slug: "5-Cryptocurrencies-Worth-in-2026",
    excerpt: "Looking past Bitcoin: discover five crypto projects with promise for the next wave of growth.",
    content: "In a market still dominated by Bitcoin, this article highlights five lesser-known cryptocurrencies with strong fundamentals, real-world use-cases, and growing ecosystems that are positioned to perform in 2026 and beyond.",
    publishedDate: "2025-10-30",
    lastModified: "2025-10-30",
    readTime: "4 min read",
    category: "Copywriting",
    tags: ["Cryptocurrency", "Crypto Investing", "Altcoins", "Blockchain Fundamentals"],
    featured: true,
    image: "https://images.pexels.com/photos/6771613/pexels-photo-6771613.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "5 Cryptocurrencies Worth Watching in 2026",
      keywords: ["Cryptocurrency", "Crypto Investing", "Altcoins", "Blockchain Fundamentals"],
    },
    link: "https://www.linkedin.com/pulse/beyond-btc-5-cryptocurrencies-worth-watching-2026-falah-tqr9c",
  },
  // ========================================
  // 🎯 CARA PAKAI TEMPLATE:
  // 1. Copy template di atas (yang ada /* */)
  // 2. Paste di bawah komentar ini
  // 3. Hapus /* dan */ (uncomment)
  // 4. Edit semua nilai sesuai artikel lo
  // 5. Ganti id dengan nomor berikutnya (sekarang: 11)
  // 6. Save file - website otomatis reload!
  // ========================================
  {
    id: 1,
    title: "Cloud Architecture Showcase: Two Patterns That Always Work",
    slug: "cloud-architecture-showcase-two-patterns",
    excerpt: "Exploring proven cloud architecture patterns that consistently deliver results. A deep dive into scalable, reliable cloud infrastructure design principles.",
    content: "In the world of cloud architecture, certain patterns have proven their worth time and again. These aren't just theoretical concepts—they're battle-tested solutions that work...",
    publishedDate: "2025-08-08",
    lastModified: "2025-10-09",
    readTime: "6 min read",
    category: "Technical Writing",
    tags: ["Cloud Architecture", "Infrastructure", "DevOps", "System Design"],
    featured: true,
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Learn about two proven cloud architecture patterns that consistently deliver scalable and reliable results.",
      keywords: ["cloud architecture", "infrastructure patterns", "system design", "devops"],
    },
    link: "https://github.com/daffhaidar/cloud-architecture-showcase",
  },
  {
    id: 2,
    title: "Can Crypto Really Create Financial Freedom in 2026?",
    slug: "can-crypto-create-financial-freedom",
    excerpt: "Crypto promised us freedom — but are we any closer to achieving it? Let’s explore what financial independence really means in Web3.",
    content:
      "Explores whether cryptocurrency can genuinely lead to financial freedom by 2026. The article breaks down the difference between profit-seeking and true ownership, analyzing how DeFi, staking, and tokenized income streams are reshaping the definition of wealth.",
    publishedDate: "2025-10-30",
    lastModified: "2025-10-30",
    readTime: "5 min read",
    category: "Content Strategy",
    tags: ["Crypto", "Web3", "Financial Freedom", "DeFi"],
    featured: true,
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Can Crypto Really Create Financial Freedom in 2026?",
      keywords: ["Crypto", "Web3", "Financial Freedom", "DeFi"],
    },
    link: "https://www.linkedin.com/pulse/can-crypto-truly-bring-financial-freedom-2026-falah-vf32c",
  },
  {
    id: 3,
    title: "Why Memes Drive Web3 Marketing Success: Lessons from a Digital Marketer",
    slug: "memes-best-growth-hack-web3-marketing",
    excerpt: "How memes became the secret weapon for Web3 marketing success. Real insights from the trenches of crypto and blockchain marketing.",
    content: "In Web3 marketing, traditional strategies often fall flat. But there's one approach that consistently works: memes. Here's why they're more powerful than you think...",
    publishedDate: "2025-10-03",
    lastModified: "2025-10-03",
    readTime: "1 min read",
    category: "Industry Insights",
    tags: ["Web3 Marketing", "Memes", "Digital Strategy", "Community Building"],
    featured: true,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Learn how memes drive Web3 marketing success and how to leverage them for community building.",
      keywords: ["web3 marketing", "meme marketing", "digital strategy", "community building"],
    },
    link: "https://www.linkedin.com/pulse/why-memes-your-best-growth-hack-lessons-from-haidar-falah-9s32c",
  },
  {
    id: 4,
    title: "tes hahaahayuk",
    slug: "blockchain-btc-understanding-crypto-ecosystem",
    excerpt: "A comprehensive look at blockchain technology and Bitcoin's role in the evolving cryptocurrency landscape. Technical insights made accessible.",
    content: "The blockchain and cryptocurrency space continues to evolve rapidly. Understanding the fundamentals is crucial for anyone looking to navigate this complex ecosystem...",
    publishedDate: "2024-08-15",
    lastModified: "2024-08-15",
    readTime: "5 min read",
    category: "Technical Writing",
    tags: ["Blockchain", "Bitcoin", "Cryptocurrency", "Technology"],
    featured: true,
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Learn about blockchain technology and Bitcoin's role in the cryptocurrency ecosystem with clear, technical insights.",
      keywords: ["blockchain", "bitcoin", "cryptocurrency", "crypto technology"],
    },
    link: "https://www.linkedin.com/posts/daffhaidar_blockchain-btc-crypto-activity-7120087756852101120-FyOP",
  },
  {
    id: 5,
    title: "Web3 Marketing Strategies That Actually Work",
    slug: "web3-marketing-strategies-that-work",
    excerpt: "Real-world Web3 marketing insights from the trenches. What works, what doesn't, and how to build authentic communities in the decentralized space.",
    content: "Web3 marketing is fundamentally different from traditional digital marketing. Community-first approaches and authentic engagement are key to success...",
    publishedDate: "2024-08-10",
    lastModified: "2024-08-10",
    readTime: "4 min read",
    category: "Industry Insights",
    tags: ["Web3", "Marketing", "Community Building", "Strategy"],
    featured: true,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Discover effective Web3 marketing strategies and community building techniques that drive real results.",
      keywords: ["web3 marketing", "community building", "decentralized marketing", "crypto marketing"],
    },
    link: "https://www.linkedin.com/posts/daffhaidar_activity-7120090319915778049-2RpC",
  },
  {
    id: 6,
    title: "The Future of Decentralized Technology",
    slug: "future-decentralized-technology",
    excerpt: "Exploring the trajectory of decentralized technologies and their impact on traditional business models and user experiences.",
    content: "Decentralization is reshaping how we think about technology, ownership, and digital interactions. The implications go far beyond just cryptocurrency...",
    publishedDate: "2024-08-05",
    lastModified: "2024-08-05",
    readTime: "6 min read",
    category: "Technical Writing",
    tags: ["Decentralization", "Technology", "Future Tech", "Innovation"],
    featured: true,
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Explore the future of decentralized technology and its impact on business models and user experiences.",
      keywords: ["decentralized technology", "future tech", "innovation", "blockchain technology"],
    },
    link: "https://www.linkedin.com/posts/daffhaidar_activity-7120092535166828544-khAa",
  },
  {
    id: 7,
    title: "Building Resilient Systems: Lessons from Production",
    slug: "building-resilient-systems-production-lessons",
    excerpt: "Real-world insights on building systems that can handle production challenges. Practical lessons learned from managing high-availability infrastructure.",
    content: "Building resilient systems isn't just about theory—it's about learning from real production challenges and implementing solutions that actually work...",
    publishedDate: "2024-07-30",
    lastModified: "2024-07-30",
    readTime: "4 min read",
    category: "Technical Writing",
    tags: ["System Design", "Production", "Infrastructure", "Reliability"],
    featured: false,
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Learn practical lessons for building resilient systems that can handle real production challenges and maintain high availability.",
      keywords: ["system design", "production systems", "infrastructure", "reliability engineering"],
    },
    link: "https://www.linkedin.com/posts/daffhaidar_activity-7120830074962001920-YKWK",
  },
  {
    id: 8,
    title: "DevOps Culture: Beyond Tools and Automation",
    slug: "devops-culture-beyond-tools-automation",
    excerpt: "Understanding that DevOps is more than just tools—it's about culture, collaboration, and continuous improvement in software delivery.",
    content: "Many organizations focus on DevOps tools but miss the cultural transformation that's essential for true DevOps success...",
    publishedDate: "2024-07-25",
    lastModified: "2024-07-25",
    readTime: "5 min read",
    category: "Industry Insights",
    tags: ["DevOps", "Culture", "Team Collaboration", "Software Delivery"],
    featured: false,
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Explore how DevOps culture and collaboration are more important than tools for successful software delivery transformation.",
      keywords: ["devops culture", "team collaboration", "software delivery", "organizational transformation"],
    },
    link: "https://www.linkedin.com/posts/daffhaidar_activity-7120836153896812545-Ch3w",
  },
  {
    id: 9,
    title: "Modern Software Architecture: Microservices vs Monoliths",
    slug: "modern-software-architecture-microservices-monoliths",
    excerpt: "Practical comparison of microservices and monolithic architectures, helping teams choose the right approach for their specific needs.",
    content: "The microservices vs monolith debate continues, but the real question isn't which is better—it's which fits your specific context and constraints...",
    publishedDate: "2024-06-15",
    lastModified: "2024-06-15",
    readTime: "6 min read",
    category: "Technical Writing",
    tags: ["Software Architecture", "Microservices", "Monoliths", "System Design"],
    featured: false,
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Compare microservices and monolithic architectures to make informed decisions about software system design.",
      keywords: ["software architecture", "microservices", "monolithic architecture", "system design"],
    },
    link: "https://www.linkedin.com/posts/daffhaidar_activity-7158333146776670208-2aFO",
  },
  {
    id: 10,
    title: "API Design Best Practices: Developer-First Approach",
    slug: "api-design-best-practices-developer-first",
    excerpt: "Essential principles for designing APIs that developers love to use. Focus on developer experience, consistency, and clear documentation.",
    content: "Great API design starts with understanding your developers' needs. It's not just about functionality—it's about creating an experience that developers enjoy...",
    publishedDate: "2024-06-10",
    lastModified: "2024-06-10",
    readTime: "7 min read",
    category: "Technical Writing",
    tags: ["API Design", "Developer Experience", "Software Development", "Best Practices"],
    featured: false,
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Learn API design best practices that prioritize developer experience and create APIs that developers love to use.",
      keywords: ["API design", "developer experience", "software development", "API best practices"],
    },
    link: "https://www.linkedin.com/posts/daffhaidar_activity-7158334582449172480-abzk",
  },
];

// Blog categories for filtering
export const blogCategories = ["All", "Technical Writing", "Copywriting", "Industry Insights"];

// Get featured blog posts (for homepage display)
export const getFeaturedPosts = () => {
  return blogPosts.filter((post) => post.featured).slice(0, 3);
};

// Get recent blog posts
export const getRecentPosts = (limit = 3) => {
  return blogPosts.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)).slice(0, limit);
};

// Get posts by category
export const getPostsByCategory = (category) => {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
};

// Blog statistics
export const blogStats = {
  totalPosts: blogPosts.length,
  categoryCounts: {
    "Technical Writing": blogPosts.filter((post) => post.category === "Technical Writing").length,
    Copywriting: blogPosts.filter((post) => post.category === "Copywriting").length,
    "Industry Insights": blogPosts.filter((post) => post.category === "Industry Insights").length,
  },
  totalReadTime: blogPosts.reduce((total, post) => {
    const minutes = parseInt(post.readTime.match(/\d+/)[0]);
    return total + minutes;
  }, 0),
};
