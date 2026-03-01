import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Award,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";
import icvrHeroImage from "figma:asset/288f230a9b7fee0a70ca4dce070cc6c26a0e06a6.png";
import selectsgHeroImage from "figma:asset/b5961788d9f6ea7adabbd818f48ed77a2bf304b5.png";
import nyneHeroImage from "figma:asset/b3f05aa50e46344817f5851cc82c5cbdc699f657.png";
import dmitroImage from "figma:asset/d8f278b8e6af43621dae5ce575a16f48ee2e891c.png";
import brianHornImage from "figma:asset/dab3f72db8b2640d2d37317456ae494c26cd8e8b.png";
import samRabbaniImage from "figma:asset/03b327abe3e6f56aee58a69470ae9742e0b2256a.png";
import andreaDegasperiImage from "figma:asset/d4db724ecb7f9f0eef4be8ac049b1c50810b055b.png";
import luxoitaliaHeroImage from "figma:asset/8ab23a4f36f7fd20979c22db118e5c4d087561fa.png";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  url: string;
  duration: string;
  team: string;
  emoji: string;
  heroImage: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: { label: string; value: string; icon: any }[];
  keyFeatures: string[];
  testimonial: { quote: string; author: string; role: string; image: string };
  processImage?: string;
}

const caseStudies: Record<string, CaseStudy> = {
  icvr: {
    id: "icvr",
    title: "ICVR.io - Creative Studio & Game Development",
    subtitle: "Cutting Edge Software, Art, and Games",
    client: "ICVR Technologies",
    industry: "Creative Technology & Gaming",
    url: "https://icvr.io",
    duration: "12 months",
    team: "10 specialists",
    emoji: "🎮",
    heroImage: icvrHeroImage,
    challenge:
      "ICVR needed a comprehensive digital presence to showcase their cutting-edge work in game development, interactive experiences, and creative software. The platform had to reflect their award-winning status and attract major clients like Qualcomm, Paramount, Disney, Spotify, Citrix, and Perforce while highlighting their Best Tech Work Culture award.",
    solution:
      "We developed a stunning WordPress-based portfolio platform with high-quality custom animations and interactive elements. The site features dynamic project showcases with GSAP-powered transitions, scroll-triggered animations, custom parallax effects, and immersive video backgrounds. Custom post types showcase their Roblox experiences, branded activations for Tostitos and Away, and creative projects for Qualcomm, Paramount, and Disney with fluid, eye-catching animations.",
    technologies: ["WordPress", "PHP", "MySQL", "High Quality Custom Animations", "Custom Plugins", "GSAP"],
    results: [
      { label: "Major Clients", value: "50+", icon: Users },
      { label: "Industry Awards", value: "12+", icon: Award },
      { label: "Projects", value: "100+", icon: Zap },
      { label: "Roblox Experiences", value: "15+", icon: TrendingUp },
    ],
    keyFeatures: [
      "Custom WordPress theme with interactive portfolio showcase",
      "High-quality custom animations with GSAP and smooth transitions",
      "Dynamic project galleries with parallax scrolling effects",
      "Custom post types for games and interactive experiences",
      "Award and recognition showcase with animated counters",
      "Client logo wall featuring Qualcomm, Paramount, Disney, Spotify, Citrix, Perforce",
      "Scroll-triggered animations and video backgrounds",
      "Blog and insights section with custom taxonomies",
    ],
    testimonial: {
      quote:
        "KindSoft understood our creative vision perfectly. They built a platform that truly represents our cutting-edge work in games and interactive experiences. Our client inquiries increased significantly after launch.",
      author: "Dmytro",
      role: "ICVR Interactive",
      image: dmitroImage,
    },
    processImage:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzE0NjA3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  nyne: {
    id: "nyne",
    title: "NYNE.com - Premium Audio E-commerce",
    subtitle: "Elevating Online Shopping Experience",
    client: "NYNE Audio",
    industry: "Consumer Electronics",
    url: "https://nyne.com",
    duration: "6 months",
    team: "8 specialists",
    emoji: "🔊",
    heroImage: nyneHeroImage,
    challenge:
      "NYNE needed a sophisticated e-commerce platform that could showcase their premium audio products with immersive experiences while handling high traffic volumes during product launches. The platform required integration with multiple payment gateways, global shipping providers, and a 4-year warranty management system for their lifestyle-inspired audio accessories.",
    solution:
      "We built a comprehensive WordPress-based e-commerce platform with WooCommerce integration, featuring 360° product views, audio sample players, AR visualization, and personalized recommendations. The platform was optimized for performance with advanced caching, CDN distribution, and includes warranty registration, multi-location support (California HQ and China office), and advanced product catalog management.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Stripe", "ACF"],
    results: [
      { label: "Product Range", value: "150+", icon: Award },
      { label: "Sales Increase", value: "+280%", icon: TrendingUp },
      { label: "Customer Rating", value: "4.9/5", icon: Users },
      { label: "Conversion Rate", value: "+165%", icon: Zap },
    ],
    keyFeatures: [
      "Interactive 360° product visualization",
      "High-quality audio sample player",
      "AR product preview for mobile devices",
      "Personalized product recommendations",
      "Multi-currency and multi-language support",
      "Advanced search with filters",
      "Wishlist and comparison tools",
      "4-year warranty management system",
    ],
    testimonial: {
      quote:
        "The new platform transformed our online presence. Sales increased by 280% in the first quarter, and customer feedback has been overwhelmingly positive. KindSoft truly understood our brand vision.",
      author: "Sam Rabbani",
      role: "NYNE Audio",
      image: samRabbaniImage,
    },
    processImage:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzE0MTE5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  selectsg: {
    id: "selectsg",
    title: "SelectSG.com - Construction Materials Platform",
    subtitle: "Dirt, Sand, and Gravel Delivered Right On Time",
    client: "Select Sand & Gravel",
    industry: "Construction Materials",
    url: "https://selectsg.com",
    duration: "3 months",
    team: "7 specialists",
    emoji: "🚚",
    heroImage: selectsgHeroImage,
    challenge:
      "Select Sand & Gravel, serving builders since 1983, needed a modern digital platform to streamline their construction materials delivery business. The challenge was to create an easy-to-use system for ordering dirt, sand, gravel, crushed stone, and topsoil while showcasing their flagship projects and multiple locations across the Dallas area.",
    solution:
      "We developed a comprehensive WordPress-based platform with custom quote request functionality, featuring product catalogs for rock, crushed stone, gravel, topsoil, fill dirt, sandy loam, and landscaping materials. The site includes location finder with Google Maps integration, flagship project showcase, advanced contact forms with quote calculator, and delivery scheduling functionality with custom post types.",
    technologies: ["WordPress", "PHP", "MySQL", "Advanced Custom Fields", "Google Maps API", "Custom Plugins"],
    results: [
      { label: "Since", value: "1983", icon: Award },
      { label: "Product Types", value: "50+", icon: Users },
      { label: "Locations", value: "5+", icon: Zap },
      { label: "Projects Completed", value: "1000+", icon: TrendingUp },
    ],
    keyFeatures: [
      "Comprehensive product catalog with detailed specifications",
      "Interactive location finder with Google Maps integration",
      "Flagship projects showcase gallery with custom post types",
      "Quote request system with estimate calculator",
      "Custom delivery scheduling functionality",
      "Mobile-responsive design for on-site access",
      "Product comparison and selection tools",
      "Advanced Custom Fields for flexible content management",
    ],
    testimonial: {
      quote:
        "KindSoft modernized our 40-year-old business with a platform that perfectly serves both our contractors and retail customers. The quote system alone has saved us countless hours, and our online orders have tripled.",
      author: "Brian Horn",
      role: "Select Sand & Gravel",
      image: brianHornImage,
    },
  },
  luxoitalia: {
    id: "luxoitalia",
    title: "LuxoItalia.com - Luxury Italian Travel Experience",
    subtitle: "Curated Excellence in Italian Hospitality",
    client: "Luxo Italia Travel",
    industry: "Luxury Travel & Tourism",
    url: "https://luxoitalia.com",
    duration: "4 months",
    team: "6 specialists",
    emoji: "✨",
    heroImage: luxoitaliaHeroImage,
    challenge:
      "Luxo Italia Travel needed an elegant digital platform to showcase exclusive luxury travel experiences across Italy. The challenge was to create a sophisticated booking system that reflects the premium nature of their curated tours, private villas, yacht charters, and bespoke itineraries while providing seamless concierge services and personalized journey planning for discerning international travelers.",
    solution:
      "We developed a stunning WordPress-based platform with WooCommerce for bookings and Advanced Custom Fields for flexible content management. The site features immersive destination galleries, custom booking forms with real-time availability, integrated payment processing, and multilingual support using WPML. Custom post types manage exclusive experiences, villa listings, and yacht charters. Personalized itinerary builder with dynamic pricing calculator and live chat integration for 24/7 concierge support.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Advanced Custom Fields", "WPML"],
    results: [
      { label: "Experiences", value: "150+", icon: Award },
      { label: "Bookings Increase", value: "+320%", icon: TrendingUp },
      { label: "Customer Rating", value: "4.9/5", icon: Users },
      { label: "Return Clients", value: "78%", icon: Zap },
    ],
    keyFeatures: [
      "Custom WordPress theme with elegant, luxury-focused design",
      "WooCommerce integration for seamless booking and payments",
      "Immersive destination galleries with high-resolution imagery",
      "Custom post types for villas, yachts, and curated experiences",
      "Advanced Custom Fields for flexible content management",
      "WPML multilingual support for international clientele",
      "Interactive itinerary builder with real-time pricing calculator",
      "Live chat integration with 24/7 concierge support",
    ],
    testimonial: {
      quote:
        "KindSoft transformed our vision into an exquisite digital experience. The WordPress platform perfectly captures the elegance and exclusivity of our brand. Our bookings increased by 320% within six months, and clients consistently praise the seamless booking experience.",
      author: "Andrea Degasperi",
      role: "Luxo Italia Travel",
      image: andreaDegasperiImage,
    },
  },
};

export function CaseStudyPage() {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO title="Case Study Not Found - KindSoft" />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/portfolio" className="text-blue-600 hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <SEO
        title={`${study.title} - KindSoft`}
        description={`Read about our success story with ${study.title} and how we solved their digital challenges.`}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-6xl">{study.emoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{study.title}</h1>
                <p className="text-xl text-gray-600 mt-2">{study.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={study.heroImage}
              alt={study.title}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Client", value: study.client },
              { icon: Target, label: "Industry", value: study.industry },
              { icon: Calendar, label: "Duration", value: study.duration },
              { icon: Users, label: "Team Size", value: study.team },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                <div className="font-semibold text-lg">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                The Challenge 🎯
              </h2>
              <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                Our Solution 💡
              </h2>
              <p className="text-gray-700 leading-relaxed">{study.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Results & Impact <span className="text-4xl">📊</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable success metrics that demonstrate the project's impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {study.results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <result.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {result.value}
                </div>
                <div className="text-gray-700 font-medium">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Key Features <span className="text-4xl">⚡</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Innovative features that make this project stand out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
              >
                <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-blue-50">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Technologies Used <span className="text-4xl">🛠️</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern tech stack powering this solution
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {study.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 font-semibold text-blue-700 hover:shadow-lg transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Image */}
      {study.processImage && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Development Process <span className="text-4xl">🚀</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={study.processImage}
                alt="Development Process"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Client Testimonial <span className="text-3xl">💬</span>
              </h2>
            </div>

            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ⭐
                </span>
              ))}
            </div>

            <p className="text-xl text-gray-700 italic mb-8 text-center leading-relaxed">
              "{study.testimonial.quote}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={study.testimonial.image}
                  alt={study.testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg">{study.testimonial.author}</div>
                <div className="text-gray-600">{study.testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Success Story? <span className="text-4xl md:text-5xl">🎯</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg font-semibold"
              >
                Start Your Project
              </Link>
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all text-lg font-semibold"
              >
                Visit Live Site <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}