// Blog posts data structure with real Medium articles
export const blogPosts = [
  // ========================================
  // 🚀 TEMPLATE ARTIKEL BARU - TINGGAL UNCOMMENT & EDIT!
  // ========================================
  // Copy dari sini sampai komentar penutup, uncomment, dan edit sesuai artikel lo
  {
    id: 11, // Ganti dengan nomor berikutnya (cek artikel terakhir + 1)
    title: "The Psychology Behind Viral Web3 Campaigns", // Max 60 karakter
    slug: "psychology-behind-viral-web3", // Huruf kecil, pakai dash (-)
    excerpt: "Every viral Web3 campaign looks like magic — but behind the hype lies engineered psychology. Here’s how emotion, identity, and data create lasting user engagement.", // Max 200 karakter
    content:
      "An in-depth look at the psychological patterns and storytelling frameworks that drive viral success in Web3 marketing. Blending emotion, on-chain data, and user identity, this article reveals why every viral campaign isn’t luck — it’s designed behavior.", // Paragraf pertama
    publishedDate: "2025-11-03", // Format: YYYY-MM-DD (tanggal hari ini)
    lastModified: "2025-11-03", // Sama dengan publishedDate untuk artikel baru
    readTime: "5 min read", // Estimasi: jumlah kata ÷ 200 = menit
    category: "Content Strategy", // Pilih: "Technical Writing", "Copywriting", atau "Industry Insights"
    tags: ["Web3 Marketing", "Content Strategy", "Crypto Psychology", "Copywriting"], // 3-5 keywords relevan
    featured: true, // true = tampil di homepage (max 3), false = tidak
    image: "https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop", // Cari di pexels.com, ukuran 800x400
    author: {
      name: "Daffa Haidar", // Jangan ganti
      avatar: "/images/author-avatar.jpg", // Jangan ganti
    },
    seo: {
      metaDescription: "Every viral Web3 campaign looks like magic — but behind the hype lies engineered psychology. Here’s how emotion, identity, and data create lasting user engagement.", // Untuk search results
      keywords: ["Web3 Marketing", "Content Strategy", "Crypto Psychology", "Copywriting"], // 3-5 keywords untuk SEO
    },
    link: "https://www.linkedin.com/pulse/psychology-behind-viral-web3-campaigns-muhammad-daffa-haidar-falah-rdehc", // URL artikel lengkap (LinkedIn/Medium)
  },
  // ========================================
  // 📝 CONTOH ARTIKEL YANG SUDAH DIISI
  // ========================================
  {
    id: 12,
    title: "Smart Tech, Dumb Text: When Innovation Outpaces Understanding",
    slug: "smart-tech-dump-text",
    excerpt: "From blockchain to basic grammar, why humanity’s next upgrade isn’t AI — it’s articulation.",
    content: "From blockchain to basic grammar, why humanity’s biggest bottleneck isn’t technology — it’s thinking.",
    publishedDate: "2025-11-05",
    lastModified: "2025-11-05",
    readTime: "5 min read",
    category: "Content Strategy",
    tags: ["Web3", "Technology", "Philosophy", "Linguistics", "Blockchain", "Digital Literacy", "Culture", "Critical Thinking"],
    featured: true,
    image: "https://images.pexels.com/photos/34578076/pexels-photo-34578076.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "Smart Tech, Dumb Text: When Innovation Outpaces Understanding",
      keywords: ["Web3", "Technology", "Philosophy", "Linguistics", "Blockchain", "Digital Literacy", "Culture", "Critical Thinking"],
    },
    link: "https://www.linkedin.com/pulse/smart-tech-dumb-text-when-innovation-outpaces-falah-sxuvc",
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
    title: "From Airdrops to Advocacy: The New Era of Web3 User Growth",
    slug: "from-airdrop-to-advocacy",
    excerpt:
      "Airdrops can buy attention — but they can’t buy loyalty. In 2024–2025, Web3 entered an identity crisis where hype overshadowed trust. As projects like zkSync and Starknet reshaped the meta, one question emerged: what does real user growth mean in the next era of crypto?",
    content: "I’ve been in Web3 long enough to see cycles — not just in prices, but in people. From the DeFi Summer of 2020 to the airdrop wars of 2024–2025, I’ve seen what greed, hope, and community really look like.",
    publishedDate: "2025-11-03",
    lastModified: "2025-11-03",
    readTime: "4 min read",
    category: "Content Strategy",
    tags: ["Web3 Marketing", "Content Strategy", "Community Growth", "Copywriting"],
    featured: true,
    image: "https://images.pexels.com/photos/6771120/pexels-photo-6771120.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: {
      name: "Daffa Haidar",
      avatar: "/images/author-avatar.jpg",
    },
    seo: {
      metaDescription: "From Airdrops to Advocacy: The New Era of Web3 User Growth",
      keywords: ["Web3 Marketing", "Content Strategy", "Community Growth", "Copywriting"],
    },
    link: "https://www.linkedin.com/pulse/from-airdrops-advocacy-new-era-web3-user-growth-falah-tvmsc",
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
