import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                CN
              </div>
              <span className="font-bold">Channel</span>
            </div>
            <p className="text-gray-400 text-sm">
              Data Scientist & AI Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  CV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="font-semibold">Expertise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>NLP</li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connectez-vous</h3>
            <div className="flex gap-4">
              <a
                href={t.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700 hover:bg-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700 hover:bg-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${t.email}`}
                className="p-2 rounded-lg bg-gray-700 hover:bg-indigo-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {currentYear} Channel NIANGA. All rights reserved.
          </p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500" /> by Channel
          </p>
        </div>
      </div>
    </footer>
  );
}
