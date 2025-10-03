# 📝 Writing Portfolio - Professional Writer Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Perfect for writers, content creators, and copywriters to showcase their work and attract clients.

## ✨ Features

- **🎨 Modern Design** - Clean, professional layout with dark green theme
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile
- **⚡ Fast Performance** - Built with Vite for lightning-fast loading
- **♿ Accessible** - WCAG 2.1 AA compliant with screen reader support
- **📧 Contact Form** - Integrated EmailJS for client inquiries
- **🔍 SEO Optimized** - Meta tags, structured data, and sitemap
- **🚀 Easy Deploy** - One-click deployment to Vercel

## 🏗️ Built With

- **React 19** - Modern UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration
- **Vercel** - Deployment platform

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd writing-portfolio
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local with your details
```

### 3. Start Development

```bash
npm run dev
```

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Deployment
npm run deploy          # Deploy to Vercel (production)
npm run deploy:preview  # Deploy preview to Vercel

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
```

## 🎨 Customization

### Quick Customization Checklist

- [ ] Update personal info in `src/data/contactInfo.js`
- [ ] Add your photo to `src/components/AboutSection.jsx`
- [ ] Update portfolio items in `src/data/portfolioItems.js`
- [ ] Add blog posts in `src/data/blogPosts.js`
- [ ] Configure EmailJS in `src/config/emailjs.js`
- [ ] Customize colors in `tailwind.config.js`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection.jsx
│   ├── PortfolioSection.jsx
│   ├── ContactSection.jsx
│   └── ...
├── data/               # Content data
│   ├── portfolioItems.js
│   ├── blogPosts.js
│   └── contactInfo.js
├── config/             # Configuration
│   └── emailjs.js
├── styles/             # Global styles
│   └── globals.css
└── utils/             # Utility functions
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google rankings
- **Bundle Size**: < 200KB gzipped
- **Load Time**: < 2 seconds on 3G

## 📈 SEO Features

- Meta tags and Open Graph
- Structured data markup
- XML sitemap
- Robots.txt
- Fast loading speeds
- Mobile-first design

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Screen reader compatible
- Keyboard navigation
- High contrast support
- Focus management
- ARIA labels

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes locally
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️from Daffa Haidar**
