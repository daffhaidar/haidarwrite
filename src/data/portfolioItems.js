// Portfolio items data structure with professional placeholder content
export const portfolioItems = [
  {
    id: 1,
    title: "Blockchain Awareness Campaign",
    category: "Copywriting",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Crafted a compelling long-form article designed to educate and engage audiences about blockchain technology. The piece simplifies complex technical concepts into clear, persuasive language that resonates with both newcomers and industry professionals.",
    excerpt: "Positioned as an educational yet persuasive narrative, this article serves as a copy-driven campaign to raise awareness of blockchain’s real-world applications...",
    link: "https://www.linkedin.com/pulse/blockchain-muhammad-daffa-haidar-falah-uwbkc",
    tags: ["Copywriting", "Blockchain", "Technology", "Content Marketing"],
    publishedDate: "2023-10-17",
    readTime: "Case Study",
  },
  {
    id: 2,
    title: "🚀 Cloud Architecture Showcase: Two Patterns That Always Work",
    category: "Technical Writing",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "A curated showcase of cloud architecture implementations, illustrating best practices in scalability, resilience, and cost optimization—all presented through an accessible narrative that persuades readers to explore more.",
    excerpt: "Discover how thoughtfully designed cloud architectures can transform infrastructure reliability and performance—this is more than code, it's storytelling in systems…",
    link: "https://github.com/daffhaidar/cloud-architecture-showcase",
    tags: ["Cloud", "Developer Experience", "Fintech"],
    publishedDate: "2025-08-09",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "From Hacking Servers to Hacking Words: My Journey of Changing Paths",
    category: "Copywriting",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "A compelling personal story about pivoting from managing servers and infrastructure to mastering the art of storytelling. This piece highlights the transformation, the mindset shift, and the power of communication in tech.",
    excerpt: "I used to live in terminals, now I thrive with words. Join me as I share how I turned my love for tech into a passion for writing—simplifying complexity, connecting ideas, and crafting narratives that matter.",
    link: "https://medium.com/@daffahaidar1501/from-hacking-servers-to-hacking-words-my-journey-of-changing-paths-31245f6cae96",
    tags: ["Brand Strategy", "Storytelling", "Sustainability"],
    publishedDate: "2025-09-30",
    readTime: "1 min read",
  },
  {
    id: 4,
    title: "Various Types of Altcoins: Exploring the Crypto Landscape",
    category: "Copywriting",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    description:
      "An accessible yet persuasive article designed to introduce readers to the different types of altcoins—ranging from smart contract platforms and privacy coins to DeFi tokens and NFTs. Written to simplify complexity and spark curiosity in crypto newcomers.",
    excerpt: "From Ethereum to Monero, from gaming tokens to DeFi—this article breaks down the diverse categories of altcoins and what makes each unique in today’s evolving blockchain ecosystem.",
    link: "https://www.linkedin.com/pulse/various-types-alt-coins-muhammad-daffa-haidar-falah-7knmc/?trackingId=mqIdSr1IeO7czC7Eh0llyw%3D%3D",
    tags: ["Altcoins", "Cryptocurrency", "Blockchain", "Crypto Education", "Copywriting"],
    publishedDate: "2023-10-18",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "From Waiting for a Reply to Learning to Appreciate the Process",
    category: "Copywriting",
    image: "https://images.pexels.com/photos/3825583/pexels-photo-3825583.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "A heartfelt narrative that reframes waiting—not as an anxious pause, but as part of a meaningful journey. This piece subtly reinforces the value of persistence, growth, and process over outcome.",
    excerpt: "Waiting used to be agony—every proposal, every message felt like a paused heartbeat. But over time, I realized the real value lies in every step we take along the way.",
    link: "https://medium.com/@daffahaidar1501/from-waiting-for-a-reply-to-learning-to-appreciate-the-process-a-reflection-812d6c1c8bf9",
    tags: ["Reflection", "Process", "Journey", "Personal Growth", "Copywriting"],
    publishedDate: "2025-10-01",
    readTime: "1 min read",
  },
  {
    id: 6,
    title: "Building a Server in the Cloud Is Like Cooking: Why Python Is a Must",
    category: "Thought Leadership",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "An engaging analogy-driven article that compares cloud server building to cooking, to demonstrate why Python is an essential tool for cloud and backend developers. Written to simplify complexity and persuade technical readers to embrace Python.",
    excerpt: "When setting up servers in the cloud felt complex, I realized Python is like the master chef’s knife—versatile, reliable, and powerful. Let me show you how it turns chaos into clarity.",
    link: "https://medium.com/@daffahaidar1501/building-a-server-in-the-cloud-is-like-cooking-why-python-is-a-must-eefbbefb4130",
    tags: ["Python", "Cloud Computing", "Thought Leadership", "Technical Writing", "Backend"],
    publishedDate: "2025-10-01",
    readTime: "1 min read",
  },
];

// Portfolio categories for filtering
export const portfolioCategories = ["All", "Copywriting", "Technical Writing", "Content Strategy"];

// Portfolio statistics
export const portfolioStats = {
  totalProjects: portfolioItems.length,
  categoryCounts: {
    Copywriting: portfolioItems.filter((item) => item.category === "Copywriting").length,
    "Technical Writing": portfolioItems.filter((item) => item.category === "Technical Writing").length,
    "Content Strategy": portfolioItems.filter((item) => item.category === "Content Strategy").length,
  },
};
