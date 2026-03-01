import { motion } from "motion/react";
import { Shield, Lock, Eye, Database, Bell, Mail } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: `We collect information that you provide directly to us, including:
    
• Contact information (name, email address, phone number, company name)
• Project details and requirements when you request a quote
• Communication preferences and feedback
• Technical information such as IP address, browser type, and device information
• Cookies and similar tracking technologies to enhance user experience

We collect this information when you fill out contact forms, request services, subscribe to our newsletter, or interact with our website.`,
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process and respond to your inquiries and service requests
• Send you technical notices, updates, and support messages
• Communicate about products, services, offers, and events
• Monitor and analyze trends, usage, and activities
• Detect, prevent, and address technical issues and security threats
• Comply with legal obligations and enforce our terms

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    icon: Shield,
    title: "Data Security",
    content: `We take the security of your personal information seriously and implement appropriate technical and organizational measures:

• SSL/TLS encryption for data transmission
• Secure servers with regular security updates
• Access controls and authentication mechanisms
• Regular security audits and vulnerability assessments
• Employee training on data protection and privacy
• Incident response procedures

While we strive to protect your personal information, no method of transmission over the Internet is 100% secure.`,
  },
  {
    icon: Eye,
    title: "Your Rights and Choices",
    content: `You have the following rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information
• Objection: Object to processing of your personal information
• Portability: Request transfer of your information to another service
• Withdrawal: Withdraw consent for processing at any time

To exercise these rights, please contact us at privacy@kindsoft.com.`,
  },
  {
    icon: Bell,
    title: "Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Understand how you use our website
• Improve website performance and user experience
• Analyze traffic and user behavior

You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.

Types of cookies we use:
• Essential cookies (required for website operation)
• Analytics cookies (Google Analytics for usage statistics)
• Preference cookies (remember your settings)`,
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: privacy@kindsoft.com
Address: KindSoft Web Studio, Poltava, Ukraine
Phone: Available upon request

We will respond to your inquiry within 30 days.

This Privacy Policy is effective as of February 28, 2026, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.`,
  },
];

export function PrivacyPolicyPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy <span className="text-5xl md:text-6xl">🔒</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how KindSoft collects, uses,
              and protects your personal information.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last Updated: February 28, 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At KindSoft, we are committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Policy describes how we collect, use, store,
              and protect your information when you visit our website or use our services. By
              accessing our website or using our services, you agree to the terms of this Privacy
              Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GDPR & Compliance */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">GDPR Compliance 🇪🇺</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KindSoft is committed to compliance with the General Data Protection Regulation
              (GDPR) and other applicable data protection laws. We process personal data lawfully,
              fairly, and transparently, and only for specified, explicit, and legitimate purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you are a resident of the European Economic Area (EEA), you have specific rights
              under GDPR, including the right to access, rectify, erase, restrict processing, data
              portability, and to object to processing. Please contact us to exercise these rights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal requirements. We will notify you of any material changes by
              posting the new Privacy Policy on this page and updating the "Last Updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
