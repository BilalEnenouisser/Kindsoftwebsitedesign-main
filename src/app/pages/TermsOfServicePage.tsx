import { motion } from "motion/react";
import { FileText, Scale, UserCheck, AlertCircle, Gavel, Info } from "lucide-react";

const sections = [
  {
    icon: UserCheck,
    title: "Acceptance of Terms",
    content: `By accessing and using the KindSoft website (kindsoft.com) and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, users, and others who access or use our services, including clients who engage us for web development, mobile app development, or custom software development projects.

We reserve the right to modify these terms at any time. Your continued use of our services after such modifications constitutes acceptance of the updated terms.`,
  },
  {
    icon: FileText,
    title: "Services Description",
    content: `KindSoft provides professional software development services, including but not limited to:

• Web Development: Custom websites, web applications, e-commerce platforms, and content management systems
• Mobile App Development: Native iOS and Android apps, cross-platform solutions
• Custom Software Development: Enterprise software, business automation, API integrations
• UI/UX Design: User interface and user experience design services
• Consulting: Technical consulting and architecture planning

All projects are subject to separate project agreements that detail scope, deliverables, timelines, and payment terms. These Terms of Service govern the general relationship between KindSoft and clients.`,
  },
  {
    icon: Scale,
    title: "Intellectual Property Rights",
    content: `Ownership of deliverables and intellectual property rights will be specified in individual project agreements. Generally:

Client-Owned Work:
• Upon full payment, clients receive ownership of custom code and designs created specifically for their project
• Clients receive necessary licenses to use the delivered software and materials

KindSoft-Owned Property:
• Pre-existing tools, frameworks, libraries, and components remain KindSoft property
• KindSoft retains the right to showcase completed projects in our portfolio unless otherwise agreed
• Generic solutions and methodologies developed remain KindSoft property

Third-Party Components:
• Open-source and third-party components are subject to their respective licenses
• We ensure all third-party components are properly licensed for commercial use`,
  },
  {
    icon: Gavel,
    title: "Payment Terms",
    content: `Payment terms are specified in individual project agreements. Standard terms include:

Project-Based Payments:
• Initial deposit (typically 30-50%) due before project commencement
• Milestone payments as specified in project agreement
• Final payment due upon project completion and before delivery

Hourly/Retainer Arrangements:
• Monthly invoicing for time and materials
• Payment due within 30 days of invoice date
• Detailed time tracking and reporting provided

Late Payments:
• Invoices not paid within agreed terms may incur late fees
• We reserve the right to suspend work on overdue accounts
• Continued non-payment may result in project termination

All payments are non-refundable except as specified in project agreements.`,
  },
  {
    icon: AlertCircle,
    title: "Warranties and Disclaimers",
    content: `Service Warranties:
• We warrant that services will be performed in a professional and workmanlike manner
• We warrant that delivered software will substantially conform to agreed specifications
• We provide warranty period (typically 30-90 days) for bug fixes on delivered work

Disclaimers:
• Services are provided "as is" without warranties beyond those explicitly stated
• We do not guarantee uninterrupted or error-free operation
• We are not responsible for third-party services, hosting, or infrastructure
• Client is responsible for content, data, and compliance with applicable laws
• We do not warrant that software will meet all business objectives

The client acknowledges that software development involves inherent uncertainties and that outcomes may vary from initial estimates.`,
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law:

• KindSoft's total liability for any claim shall not exceed the total amount paid by the client for the specific project or service
• We are not liable for indirect, incidental, consequential, or punitive damages
• We are not liable for loss of profits, revenue, data, or business opportunities
• We are not liable for damages resulting from client's use or inability to use deliverables

Exceptions:
• This limitation does not apply to liability for gross negligence or willful misconduct
• This limitation does not apply to liabilities that cannot be excluded by law

Client Indemnification:
• Client agrees to indemnify KindSoft against claims arising from client's content, data, or use of deliverables in violation of law or third-party rights`,
  },
  {
    icon: FileText,
    title: "Confidentiality",
    content: `Both parties agree to maintain confidentiality of proprietary information:

KindSoft will:
• Keep client's business information, data, and project details confidential
• Not disclose confidential information to third parties without permission
• Use confidential information only for providing agreed services
• Return or destroy confidential information upon project completion

Client acknowledges:
• KindSoft may use standard development tools and environments
• Generic methodologies and solutions are not considered confidential
• Public information or information in KindSoft's prior possession is not confidential

For highly sensitive projects, separate Non-Disclosure Agreements (NDAs) can be executed.`,
  },
  {
    icon: Info,
    title: "Project Changes and Termination",
    content: `Change Requests:
• Changes to project scope require written approval and may affect timeline and cost
• We will provide estimates for change requests before implementation
• Significant scope changes may require project agreement amendments

Project Termination:
• Either party may terminate a project with written notice
• Client remains responsible for payment for work completed
• Upon termination, client receives work completed to date (upon payment)
• KindSoft reserves the right to terminate projects for non-payment or material breach

Force Majeure:
• Neither party is liable for delays due to circumstances beyond reasonable control
• This includes natural disasters, war, pandemics, or government actions`,
  },
];

export function TermsOfServicePage() {
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
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service <span className="text-5xl md:text-6xl">📋</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using KindSoft's services. These terms
              govern your use of our website and services.
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
              Welcome to KindSoft. These Terms of Service ("Terms") constitute a legally binding
              agreement between you (the "Client") and KindSoft ("we," "us," or "our"), governing
              your use of our website and services. By engaging our services or using our website,
              you acknowledge that you have read, understood, and agree to be bound by these Terms.
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

      {/* Governing Law */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Governing Law and Jurisdiction ⚖️</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of Ukraine, without regard to its conflict of law provisions. Any disputes arising
              from or relating to these Terms or our services shall be subject to the exclusive
              jurisdiction of the courts of Poltava, Ukraine.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For international clients, we encourage resolution of disputes through negotiation
              and mediation before pursuing formal legal proceedings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms? 💬</h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
              If you have any questions, concerns, or require clarification about these Terms of
              Service, please don't hesitate to contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> legal@kindsoft.com
              </p>
              <p>
                <strong>Address:</strong> KindSoft Web Studio, Poltava, Ukraine
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agreement Acceptance */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-blue-500 pl-6"
          >
            <p className="text-gray-700 leading-relaxed italic">
              By using KindSoft's website or services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              These terms constitute the entire agreement between you and KindSoft regarding the
              use of our services.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
