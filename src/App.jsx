import "./styles/globals.css";

// Component imports (to be implemented in future tasks)
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark text-light scroll-smooth-mobile">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="safe-area-padding">
        {/* Hero Section */}
        <HeroSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Blog Section */}
        <BlogSection />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
