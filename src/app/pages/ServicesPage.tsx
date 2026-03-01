import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  Code2,
  Smartphone,
  Laptop,
  Globe,
  Database,
  Cloud,
  ShoppingCart,
  Paintbrush,
  Settings,
  Layers,
  Zap,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const mainServices = [
  {
    id: "web-development",
    icon: Laptop,
    title: "Web Development",
    emoji: "🌐",
    description:
      "Custom websites and web applications built with cutting-edge technologies and best practices.",
    features: [
      "Responsive & Mobile-First Design",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Single Page Applications",
      "API Integration",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    emoji: "📱",
    description:
      "Native and cross-platform mobile solutions that deliver exceptional user experiences on iOS and Android.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "In-App Purchases",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store APIs"],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    emoji: "⚙️",
    description:
      "Tailored software solutions designed specifically for your unique business requirements and workflows.",
    features: [
      "Enterprise Software Solutions",
      "Business Process Automation",
      "Legacy System Modernization",
      "Third-Party Integrations",
      "Microservices Architecture",
      "Scalable Backend Systems",
    ],
    technologies: ["Python", "Java", "C#", ".NET", "PostgreSQL", "MongoDB"],
  },
];

const additionalServices = [
  {
    icon: Globe,
    title: "Web Design & UX/UI",
    emoji: "🎨",
    description: "Beautiful, intuitive designs that engage users and drive conversions",
  },
  {
    icon: Database,
    title: "Database Solutions",
    emoji: "💾",
    description: "Robust database architecture and optimization for high performance",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    emoji: "☁️",
    description: "Scalable cloud solutions with AWS, Azure, and Google Cloud Platform",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    emoji: "🛒",
    description: "Complete online stores with payment gateways and inventory management",
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    emoji: "🔄",
    description: "Automated deployment pipelines and infrastructure as code",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    emoji: "🔒",
    description: "Security audits, penetration testing, and compliance implementation",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a comprehensive project roadmap",
    icon: Layers,
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes and interactive prototypes for your approval",
    icon: Paintbrush,
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Smooth deployment and ongoing maintenance and optimization",
    icon: Zap,
  },
];

export function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    const currentId = location.hash.replace("#", "");
    if (currentId) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(currentId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

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
              Our Services <span className="text-5xl md:text-6xl">🚀</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions powered by 15 years of expertise and cutting-edge
              technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                    {service.title} <span className="text-4xl">{service.emoji}</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>

                  <h3 className="font-semibold text-lg mb-4">Key Features:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-semibold text-lg mb-4">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzcxNDE1NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1vY2t1cCUyMGFwcCUyMGRlc2lnbiUyMHNjcmVlbnxlbnwxfHx8fDE3NzIyODg5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          : "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTMyMjAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                      }
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Additional Services <span className="text-4xl">💼</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to cover all your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {service.title} <span className="text-xl">{service.emoji}</span>
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Development Process <span className="text-4xl">⚙️</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4 -mt-12">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing? <span className="text-4xl md:text-5xl">✨</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and create a solution that exceeds your expectations.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all"
            >
              Start Your Project Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}