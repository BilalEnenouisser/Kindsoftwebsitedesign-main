import { motion } from "motion/react";
import { ExternalLink, Award, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { Link } from "react-router";
import icvrHeroImage from "figma:asset/288f230a9b7fee0a70ca4dce070cc6c26a0e06a6.png";
import selectsgHeroImage from "figma:asset/b5961788d9f6ea7adabbd818f48ed77a2bf304b5.png";
import nyneHeroImage from "figma:asset/b3f05aa50e46344817f5851cc82c5cbdc699f657.png";
import luxoitaliaHeroImage from "figma:asset/8ab23a4f36f7fd20979c22db118e5c4d087561fa.png";
import dmitroImage from "figma:asset/d8f278b8e6af43621dae5ce575a16f48ee2e891c.png";
import brianHornImage from "figma:asset/dab3f72db8b2640d2d37317456ae494c26cd8e8b.png";
import samRabbaniImage from "figma:asset/03b327abe3e6f56aee58a69470ae9742e0b2256a.png";
import andreaDegasperiImage from "figma:asset/d4db724ecb7f9f0eef4be8ac049b1c50810b055b.png";

const categories = ["All", "Web Apps", "Mobile Apps", "E-commerce", "Enterprise"];

const projects = [
  {
    id: "icvr",
    title: "ICVR.io - Creative Studio & Game Development",
    category: "Web Apps",
    client: "ICVR Technologies",
    description:
      "Cutting edge portfolio platform for award-winning creative studio. Showcasing game development, interactive experiences, and branded activations for Qualcomm, Paramount, Disney, Spotify, Citrix, Perforce. Best Tech Work Culture award winner.",
    image: icvrHeroImage,
    technologies: ["WordPress", "PHP", "MySQL", "High Quality Custom Animations"],
    emoji: "🎮",
    stats: { clients: "50+", awards: "12+", projects: "100+" },
    url: "icvr.io",
  },
  {
    id: "nyne",
    title: "NYNE.com - Premium Audio E-commerce",
    category: "E-commerce",
    client: "NYNE Audio",
    description:
      "Sophisticated e-commerce platform for premium audio products. Lifestyle-inspired speakers, headphones, and audio accessories with 4-year warranty. Global presence with headquarters in California and China office.",
    image: nyneHeroImage,
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    emoji: "🔊",
    stats: { products: "150+", sales: "+280%", rating: "4.9/5" },
    url: "nyne.com",
  },
  {
    id: "selectsg",
    title: "SelectSG.com - Construction Materials Platform",
    category: "Enterprise",
    client: "Select Sand & Gravel",
    description:
      "Comprehensive digital platform for construction materials delivery. Sand, gravel, fill dirt, crushed stone and topsoil delivery. Trusted partner for reliable material & delivery solutions since 1983.",
    image: selectsgHeroImage,
    technologies: ["WordPress", "PHP", "MySQL", "Advanced Custom Fields"],
    emoji: "🚚",
    stats: { since: "1983", products: "50+", locations: "5+" },
    url: "selectsg.com",
  },
  {
    id: "luxoitalia",
    title: "LuxoItalia.com - Luxury Italian Travel Experience",
    category: "Web Apps",
    client: "Luxo Italia Travel",
    description:
      "Elegant platform for exclusive luxury travel experiences across Italy. Curated tours, private villas, yacht charters, and bespoke itineraries. Premium concierge services with personalized journey planning for discerning travelers seeking authentic Italian luxury.",
    image: luxoitaliaHeroImage,
    technologies: ["WordPress", "PHP", "MySQL", "WooCommerce", "ACF"],
    emoji: "✨",
    stats: { experiences: "150+", bookings: "+320%", rating: "4.9/5" },
    url: "luxoitalia.com",
  },
];

const achievements = [
  { icon: Award, label: "Industry Awards", value: "12+", color: "text-yellow-500" },
  { icon: Users, label: "Enterprise Clients", value: "30+", color: "text-blue-500" },
  { icon: Zap, label: "Projects Delivered", value: "200+", color: "text-green-500" },
];

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio <span className="text-5xl md:text-6xl">🎯</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing 200+ successful projects delivered to clients worldwide over 15 years of
              excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute top-4 left-4 text-4xl">{project.emoji}</div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.client}</p>
                  <p className="text-gray-700 mb-6 flex-grow">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white rounded-xl">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-blue-600 text-lg">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/case-study/${project.id}`}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    View Case Study <ExternalLink size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              What Our Clients Say <span className="text-4xl">💬</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Real testimonials from our satisfied clients across different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                quote:
                  "KindSoft understood our creative vision perfectly. They built a platform that truly represents our cutting-edge work in games and interactive experiences.",
                author: "Dmytro",
                role: "ICVR Interactive",
                image: dmitroImage,
                rating: 5,
              },
              {
                quote:
                  "The new platform transformed our online presence. Sales increased by 280% in the first quarter, and customer feedback has been overwhelmingly positive.",
                author: "Sam Rabbani",
                role: "NYNE Audio",
                image: samRabbaniImage,
                rating: 5,
              },
              {
                quote:
                  "KindSoft modernized our 40-year-old business with a platform that perfectly serves both our contractors and retail customers.",
                author: "Brian Horn",
                role: "Select Sand & Gravel",
                image: brianHornImage,
                rating: 5,
              },
              {
                quote:
                  "KindSoft transformed our vision into an exquisite digital experience. Our bookings increased by 320% within six months.",
                author: "Andrea Degasperi",
                role: "Luxo Italia Travel",
                image: andreaDegasperiImage,
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-blue-50 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-blue-200">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Your Success Story <span className="text-4xl md:text-5xl">🚀</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our list of satisfied clients and bring your vision to life with KindSoft
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg font-semibold"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}