import { motion } from "motion/react";
import { Award, Users, TrendingUp, Heart, Target, Lightbulb, Shield, Rocket, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import officeImage from "figma:asset/c51b5260bbdedd657e002ec585d59acb9c4c0439.png";

const values = [
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our success. We're committed to delivering solutions that exceed expectations.",
    emoji: "❤️",
  },
  {
    icon: Target,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every line of code and every pixel of design.",
    emoji: "🎯",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with cutting-edge technologies and creative problem-solving.",
    emoji: "💡",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "We work as an extension of your team, ensuring seamless communication and partnership.",
    emoji: "🤝",
  },
];

const milestones = [
  { year: "2011", event: "KindSoft Founded", description: "Started our journey in Poltava, Ukraine", emoji: "🌱" },
  { year: "2014", event: "50 Projects Milestone", description: "Reached our first major milestone", emoji: "🎉" },
  { year: "2017", event: "International Expansion", description: "Opened offices and served clients globally", emoji: "🌍" },
  { year: "2020", event: "60+ Team Members", description: "Grew our talented team significantly", emoji: "👥" },
  { year: "2023", event: "200+ Projects Delivered", description: "Celebrated our 200th successful project", emoji: "🚀" },
  { year: "2011-2026", event: "15 Years of Excellence", description: "Continuing to innovate and lead", emoji: "⭐" },
];

const team = [
  {
    name: "Alexander Ivanov",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzcxMzU3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "15 years leading digital transformation initiatives",
  },
  {
    name: "Kateryna Shevchenko",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1762341116197-fb94a4f37173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjI4Mzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Technology visionary with expertise in scalable systems",
  },
  {
    name: "Andriy Kovalenko",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1a3JhaW5pYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzIyODM3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Award-winning designer creating exceptional user experiences",
  },
  {
    name: "Olena Bondarenko",
    role: "VP of Operations",
    image: "https://images.unsplash.com/photo-1743835549820-2eb0710175a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1a3JhaW5pYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3NzIyODM3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Ensuring excellence in every project delivery",
  },
];

const stats = [
  { icon: Award, label: "Industry Awards", value: "12+", color: "text-yellow-500" },
  { icon: Users, label: "Team Members", value: "60+", color: "text-green-500" },
  { icon: TrendingUp, label: "Client Retention", value: "95%", color: "text-purple-500" },
];

export function AboutPage() {
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
              About KindSoft <span className="text-5xl md:text-6xl">🌟</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 years of creating digital solutions from Poltava, Ukraine to the world 🇺🇦
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our Story <span className="text-4xl">📖</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2011 in the heart of Poltava, Ukraine, KindSoft began with a simple
                  mission: to create exceptional digital solutions that make a real difference for
                  businesses worldwide.
                </p>
                <p>
                  Over the past 15 years, we've grown from a small team of passionate developers
                  into an international web studio serving clients across 45 countries. Our journey
                  has been marked by continuous innovation, unwavering commitment to quality, and
                  the trust of over 150 satisfied clients.
                </p>
                <p>
                  Today, we're proud to be recognized as a leading software development partner,
                  trusted by Fortune 500 companies and innovative startups alike. With 200+
                  successfully delivered projects and a team of 60+ talented professionals, we
                  continue to push the boundaries of what's possible in digital innovation.
                </p>
                <p>
                  Our success is built on three pillars: technical excellence, client satisfaction,
                  and a genuine passion for solving complex problems with elegant solutions. 💪
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={officeImage}
                  alt="KindSoft office"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg"
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Core Values <span className="text-4xl">💎</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {value.title} <span className="text-xl">{value.emoji}</span>
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Journey <span className="text-4xl">🛤️</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              15 years of milestones and achievements
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block">
                      <div className="text-yellow-400 font-bold text-2xl mb-2 flex items-center gap-2 justify-end">
                        {milestone.year} <span className="text-2xl">{milestone.emoji}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                      <p className="text-blue-100">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-blue-600 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Meet Our Leadership <span className="text-4xl">👥</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals guiding KindSoft to new heights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Work With Us? <span className="text-4xl">🤔</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Partnering with KindSoft means choosing excellence, reliability, and innovation
              </p>
              <div className="space-y-4">
                {[
                  "Proven track record with 200+ successful projects",
                  "Dedicated teams focused on your success",
                  "Transparent communication and agile methodology",
                  "Competitive pricing without compromising quality",
                  "24/7 support and long-term partnerships",
                  "Expertise across diverse industries and technologies",
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758520144661-73849bde0da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXNpYW4lMjBwcm9mZXNzaW9uYWxzJTIwY2VsZWJyYXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzcxNDgyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team celebration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
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
              Join Our Success Story <span className="text-4xl md:text-5xl">✨</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's build something amazing together. Get in touch with our team today!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all text-lg"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}