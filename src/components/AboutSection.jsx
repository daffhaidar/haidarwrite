import { useState, useEffect } from "react";
import LazyImage from "./LazyImage";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  // Trigger entrance animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Skills data with interactive descriptions
  const skills = [
    {
      name: "Technical Writing",
      level: "Expert",
      description: "Translating complex cybersecurity and cloud concepts into accessible content",
      icon: "📝",
    },
    {
      name: "Storytelling",
      level: "Advanced",
      description: "Crafting compelling narratives that connect technology with human experiences",
      icon: "📖",
    },
    {
      name: "Cybersecurity Content",
      level: "Expert",
      description: "Creating security-focused content based on hands-on professional experience",
      icon: "🔒",
    },
    {
      name: "Content Strategy",
      level: "Advanced",
      description: "Developing comprehensive content strategies that align with business goals",
      icon: "🎯",
    },
    {
      name: "Public Speaking",
      level: "Intermediate",
      description: "Delivering engaging presentations and workshops to diverse audiences",
      icon: "🎤",
    },
    {
      name: "SEO Writing",
      level: "Advanced",
      description: "Creating content optimized for search engines while maintaining readability",
      icon: "🔍",
    },
  ];

  // Tech stack with hover effects
  const techStack = [
    { name: "Python", category: "Programming", color: "bg-blue-600" },
    { name: "Medium", category: "Publishing", color: "bg-gray-600" },
    { name: "Notion", category: "Documentation", color: "bg-purple-600" },
    { name: "AWS", category: "Cloud", color: "bg-orange-600" },
    { name: "Linux", category: "Systems", color: "bg-yellow-600" },
    { name: "Git", category: "Version Control", color: "bg-cyan-600" },
    { name: "Grammarly", category: "Writing Tools", color: "bg-green-600" },
    { name: "VS Code", category: "Development", color: "bg-red-600" },
  ];

  return (
    <section id="about" className="section-padding bg-dark-green-900/5">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center space-responsive-lg">
          <h2 className={`text-responsive-3xl font-bold text-light mb-4 sm:mb-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            About <span className="text-dark-green-400">Me</span>
          </h2>
          <p className={`text-responsive-base text-gray-custom max-w-3xl mx-auto leading-mobile transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Passionate about the power of words to inform, inspire, and influence
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Profile Image Column */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ease-out delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                <div className="aspect-responsive-square rounded-2xl overflow-hidden bg-dark-green-900/20 border-2 border-dark-green-800/30">
                  <LazyImage
                    src="/images/profile.jpg"
                    alt="Daffa Haidar - Professional Writer"
                    className="w-full h-full"
                    fallback={`data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#022c22"/>
                        <circle cx="200" cy="160" r="60" fill="#10b981" opacity="0.3"/>
                        <rect x="140" y="240" width="120" height="80" rx="10" fill="#10b981" opacity="0.3"/>
                        <text x="200" y="340" font-family="Arial" font-size="16" fill="#10b981" text-anchor="middle">
                          Daffa Haidar
                        </text>
                      </svg>
                    `)}`}
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-dark-green-400/20 rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-dark-green-300/30 rounded-full animate-pulse delay-500" />
              </div>
            </div>
          </div>

          {/* Bio Content Column */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 ease-out delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="space-responsive-sm">
              <h3 className="text-responsive-xl font-bold text-light mb-4">
                Hi, I'm <span className="text-dark-green-400">Daffa Haidar</span>
              </h3>

              <div className="space-responsive-sm text-gray-custom leading-mobile">
                <p>I started my career behind the scenes, tinkering with servers and managing cybersecurity. But along the way, I realized my true passion was elsewhere: connecting technology with people through stories.</p>

                <p>
                  I have a unique skill for translating complex technical subjects into accessible narratives. Whether I’m writing about cloud infrastructure, blockchain concepts, or personal growth, I bring both a foundation in technical
                  accuracy and a flair for authentic storytelling to every piece.
                </p>

                <p>When I’m not writing, you’ll find me catching up on the latest marketing trends, experimenting with new content formats, or speaking at industry events about the power of effective communication.</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-dark-green-800/20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-dark-green-400">10+</div>
                  <div className="text-xs sm:text-sm text-gray-custom">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-dark-green-400">3+</div>
                  <div className="text-xs sm:text-sm text-gray-custom">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-dark-green-400">5+</div>
                  <div className="text-xs sm:text-sm text-gray-custom">Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-responsive-xl font-bold text-light mb-6 sm:mb-8 text-center">
            My <span className="text-dark-green-400">Skills</span>
          </h3>

          <div className="grid-responsive-1-2-3 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-dark-green-900/10 border border-dark-green-800/20 rounded-xl p-4 sm:p-6 hover:border-dark-green-600/40 interactive-hover hover-lift cursor-pointer"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-xl sm:text-2xl">{skill.icon}</span>
                    <h4 className="font-semibold text-light group-hover:text-dark-green-300 transition-colors text-sm sm:text-base">{skill.name}</h4>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${skill.level === "Expert" ? "bg-dark-green-600 text-white" : skill.level === "Advanced" ? "bg-dark-green-700 text-dark-green-200" : "bg-dark-green-800 text-dark-green-300"}`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Skill Description */}
                <p className={`text-xs sm:text-sm text-gray-custom transition-all duration-300 leading-mobile ${activeSkill === skill.name ? "opacity-100 max-h-20" : "opacity-70 max-h-16"} overflow-hidden`}>{skill.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-dark-green-600/0 group-hover:bg-dark-green-600/5 rounded-xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`transition-all duration-1000 ease-out delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-responsive-xl font-bold text-light mb-6 sm:mb-8 text-center">
            Tools & <span className="text-dark-green-400">Technologies</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techStack.map((tech, index) => (
              <div key={tech.name} className="group relative bg-dark-green-900/10 border border-dark-green-800/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:border-dark-green-600/40 pulse-on-hover hover-glow">
                {/* Tech Badge */}
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${tech.color} group-hover:animate-pulse`} />
                  <span className="text-light font-medium group-hover:text-dark-green-300 transition-colors text-xs sm:text-sm">{tech.name}</span>
                </div>

                {/* Tooltip */}
                <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-dark-green-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
