import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Code2,
  Smartphone,
  Laptop,
  Rocket,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";
import icvrHeroImage from "figma:asset/288f230a9b7fee0a70ca4dce070cc6c26a0e06a6.png";
import selectsgHeroImage from "figma:asset/b5961788d9f6ea7adabbd818f48ed77a2bf304b5.png";

const stats = [
  { icon: Award, label: "Years Experience", value: "15+", color: "text-yellow-500" },
  { icon: CheckCircle2, label: "Projects Delivered", value: "200+", color: "text-blue-500" },
  { icon: Users, label: "Happy Clients", value: "150+", color: "text-green-500" },
  { icon: Star, label: "Clutch Rating", value: "5.0", color: "text-yellow-500" },
];

const services = [
  {
    id: "web-development",
    icon: Laptop,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    emoji: "🌐",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android",
    emoji: "📱",
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software",
    description: "Tailored software solutions designed for your unique business needs",
    emoji: "⚙️",
  },
];

const technologies = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "WordPress",
  "PostgreSQL",
  "MongoDB",
];

export function HomePage() {
  return (
    <div className="overflow-hidden">
      <SEO
        title="KindSoft - Web Development Company"
        description="KindSoft delivers world-class web development, mobile apps, and custom software solutions to businesses globally. Based in Poltava, Ukraine."
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Rocket size={16} className="text-blue-600" />
                <span className="text-sm text-blue-700">Trusted by Enterprise Clients</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Creating Digital
                <span className="block bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
                  <span className="border-b-4 border-yellow-400">Solutions</span>
                </span>
                Since 2011 ✨
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                KindSoft delivers world-class web development, mobile apps, and custom software
                solutions to businesses globally. Based in Poltava, Ukraine 🇺🇦
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMG9mZmljZXxlbnwxfHx8fDE3NzE0MzM4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern development office"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="text-yellow-500" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">5.0</div>
                    <div className="text-sm text-gray-600">Clutch Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Services <span className="text-4xl">🚀</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  {service.title} <span className="text-2xl">{service.emoji}</span>
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={`/services#${service.id}`}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZXVyb3BlYW4lMjB0ZWFtJTIwaGFwcHklMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTQ4MjYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Choose KindSoft? <span className="text-4xl">💎</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just developers – we're your strategic technology partner committed to
                your success.
              </p>
              <div className="space-y-4">
                {[
                  "15 years of proven expertise in software development",
                  "200+ successfully delivered projects worldwide",
                  "Experience with Fortune 500 and enterprise clients",
                  "Agile methodology and transparent communication",
                  "Dedicated teams and personalized approach",
                  "Cutting-edge technologies and best practices",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured Projects <span className="text-4xl">🌟</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise in delivering cutting-edge digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ICVR Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={icvrHeroImage}
                  alt="ICVR.io - Creative Studio & Game Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
                    Web Apps
                  </span>
                  <h3 className="text-white font-bold text-xl">
                    ICVR.io <span className="text-2xl">🎮</span>
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Creative Studio & Game Development</h4>
                <p className="text-gray-600 mb-4">
                  Award-winning creative studio platform showcasing game development, interactive
                  experiences for Qualcomm, Paramount, Disney, Spotify, and more.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["WordPress", "PHP", "MySQL", "High Quality Custom Animations"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>👥 50+ clients</span>
                    <span>🏆 12+ awards</span>
                  </div>
                  <Link
                    to="/case-study/icvr"
                    className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* SelectSG Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={selectsgHeroImage}
                  alt="SelectSG.com - Construction Materials Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-2">
                    Enterprise
                  </span>
                  <h3 className="text-white font-bold text-xl">
                    SelectSG.com <span className="text-2xl">🚚</span>
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Construction Materials Platform</h4>
                <p className="text-gray-600 mb-4">
                  Comprehensive digital platform for construction materials delivery. Trusted
                  partner for reliable sand, gravel, fill dirt, and topsoil delivery since 1983.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["WordPress", "PHP", "MySQL", "Advanced Custom Fields"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📅 Since 1983</span>
                    <span>📦 50+ products</span>
                  </div>
                  <Link
                    to="/case-study/selectsg"
                    className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Technologies We Master <span className="text-4xl">⚡</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Working with cutting-edge tools to build exceptional digital products
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              >
                {tech}
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
              Ready to Start Your Project? <span className="text-4xl md:text-5xl">🎯</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help bring your vision to life with our expertise and
              dedication.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}