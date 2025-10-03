// Portfolio items data structure with professional placeholder content
export const portfolioItems = [
  {
    id: 1,
    title: "SaaS Product Launch Campaign",
    category: "Copywriting",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Complete marketing copy suite for a B2B SaaS product launch, including landing pages, email sequences, and sales materials that achieved 40% conversion rate.",
    excerpt: "Comprehensive copywriting project that drove significant user acquisition and engagement for a technology startup...",
    link: "#",
    tags: ["SaaS", "Product Launch", "Conversion Copy"],
    publishedDate: "2024-09-15",
    readTime: "Case Study",
  },
  {
    id: 2,
    title: "🚀 Cloud Architecture Showcase: Two Patterns That Always Work",
    category: "Technical Writing",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Complete overhaul of API documentation for a fintech platform, improving developer onboarding time by 60% through clear examples and interactive guides.",
    excerpt: "Transformed complex technical documentation into developer-friendly resources that accelerated integration times...",
    link: "#",
    tags: ["Cloud", "Developer Experience", "Fintech"],
    publishedDate: "2024-08-28",
    readTime: "Documentation",
  },
  {
    id: 3,
    title: "Brand Storytelling Strategy",
    category: "Content Strategy",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Developed comprehensive brand narrative and content strategy for sustainable fashion brand, resulting in 200% increase in social media engagement.",
    excerpt: "Strategic storytelling approach that connected brand values with audience emotions and drove meaningful engagement...",
    link: "#",
    tags: ["Brand Strategy", "Storytelling", "Sustainability"],
    publishedDate: "2024-08-10",
    readTime: "Strategy Guide",
  },
  {
    id: 4,
    title: "E-commerce Email Marketing Campaign",
    category: "Copywriting",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Multi-touch email marketing campaign for fashion e-commerce brand, featuring personalized product recommendations and storytelling that increased revenue by 35%.",
    excerpt: "Strategic email campaign that combined data-driven personalization with compelling storytelling to drive sales...",
    link: "#",
    tags: ["Email Marketing", "E-commerce", "Personalization"],
    publishedDate: "2024-06-15",
    readTime: "Campaign Analysis",
  },
  {
    id: 5,
    title: "Software User Guide Redesign",
    category: "Technical Writing",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Complete redesign of user documentation for project management software, incorporating user feedback and usability testing to improve user onboarding experience.",
    excerpt: "User-centered documentation redesign that reduced support tickets by 45% and improved user satisfaction scores...",
    link: "#",
    tags: ["User Documentation", "UX Writing", "Software"],
    publishedDate: "2024-05-20",
    readTime: "Documentation",
  },
  {
    id: 6,
    title: "Thought Leadership Content Series",
    category: "Content Strategy",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "12-part thought leadership content series for C-suite executives in the healthcare industry, establishing brand authority and generating qualified leads.",
    excerpt: "Strategic content series that positioned executives as industry thought leaders and generated high-quality business opportunities...",
    link: "#",
    tags: ["Thought Leadership", "Healthcare", "Executive Content"],
    publishedDate: "2024-04-10",
    readTime: "Content Series",
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
