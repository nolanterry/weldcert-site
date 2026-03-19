import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact WeldCert for questions about welder certification software, enterprise pricing, or AWS D1.1 compliance. We're here to help.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Questions about WeldCert? Need enterprise pricing? Want a demo? We&apos;re here to help.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                      <Mail className="text-brand" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-gray-600">support@weldcert.io</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                      <Phone className="text-brand" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-sm text-gray-600">Mon-Fri, 8am-6pm CT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                      <MapPin className="text-brand" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Based In</p>
                      <p className="text-sm text-gray-600">Houston, Texas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-semibold mb-2">Looking for a demo?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    The fastest way to see WeldCert in action is to start a free trial.
                    No credit card required.
                  </p>
                  <a
                    href="https://app.weldcert.io/sign-up"
                    className="block text-center bg-brand text-white font-medium py-2.5 rounded-lg hover:bg-brand-dark transition-colors text-sm"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
