import { useLanguage } from "@/contexts/LanguageContext";
import { SvgDivider } from "@/components/SvgDivider";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─────────────────────────────────────────────────────────────────────────────
// 🔑 Remplacez par votre endpoint Formspree
//    formspree.io → New Form → copiez l'URL "https://formspree.io/f/xxxxxxxx"
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success(t.contact.successMessage);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        toast.error(t.contact.errorMessage);
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error(t.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold">{t.contact.title}</h1>
          <p className="text-lg opacity-90 mt-4">{t.contact.subtitle}</p>
        </div>
      </section>

      <div className="text-indigo-50">
        <SvgDivider variant="wave" flip />
      </div>

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* ── Formulaire ─────────────────────────────────────────────── */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.contact.formTitle}
                </h2>
                <p className="text-gray-600">{t.contact.formSubtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      {t.contact.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t.contact.submitButton}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* ── Infos de contact ───────────────────────────────────────── */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {t.contact.infoTitle}
                </h2>

                <div className="space-y-4">
                  <a
                    href={`mailto:${t.email}`}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-indigo-50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600 hover:text-indigo-600 transition-colors">
                        {t.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-lg">
                    <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {t.contact.locationLabel}
                      </p>
                      <p className="text-gray-600">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {t.contact.connectTitle}
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={t.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors group"
                  >
                    <Github
                      size={24}
                      className="text-gray-700 group-hover:text-indigo-600 transition-colors"
                    />
                    <span className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      GitHub
                    </span>
                  </a>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors group"
                  >
                    <Linkedin
                      size={24}
                      className="text-gray-700 group-hover:text-indigo-600 transition-colors"
                    />
                    <span className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <div className="text-indigo-100">
        <SvgDivider variant="curve" />
      </div>

      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.contact.ctaTitle}
          </h2>
          <p className="text-lg text-gray-700">{t.contact.ctaText}</p>
        </div>
      </section>
    </div>
  );
}