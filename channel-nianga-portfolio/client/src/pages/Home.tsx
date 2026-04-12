import { useLanguage } from "@/contexts/LanguageContext";
import { SvgDivider } from "@/components/SvgDivider";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  CN
                </div>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                {t.name}
              </h1>
              <p className="text-2xl md:text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {t.title}
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t.home.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.home.intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => onNavigate("projects")}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group"
              >
                {t.nav.projects}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => onNavigate("contact")}
                variant="outline"
                className="px-8 py-3 rounded-lg font-semibold"
              >
                {t.nav.contact}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8">
              <a
                href={t.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${t.email}`}
                className="p-3 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="text-indigo-100">
        <SvgDivider variant="wave" />
      </div>

      {/* About Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Who Am I */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {t.home.whoAmI.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.home.whoAmI.content}
              </p>
            </div>

            {/* What You'll Find */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {t.home.whatYouWillFind.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.home.whatYouWillFind.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="text-white">
        <SvgDivider variant="curve" flip />
      </div>

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <blockquote className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white italic">
              "{t.home.quote}"
            </p>
          </blockquote>
        </div>
      </section>

      {/* Divider */}
      <div className="text-indigo-50">
        <SvgDivider variant="wave" flip />
      </div>

      {/* Contact CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t.home.contact.title}
          </h2>
          <p className="text-lg text-gray-700">
            {t.home.contact.content}
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            {t.nav.contact}
          </Button>
        </div>
      </section>
    </div>
  );
}
