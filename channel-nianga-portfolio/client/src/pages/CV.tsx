import { useLanguage } from "@/contexts/LanguageContext";
import { SvgDivider } from "@/components/SvgDivider";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Streamdown } from "streamdown";

export function CV() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">{t.cv.title}</h1>
            <p className="text-lg opacity-90">{t.description}</p>
            <Button
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold flex items-center gap-2"
              asChild
            >
              <a href="#" download>
                <Download size={20} />
                {t.cv.download}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="text-indigo-50">
        <SvgDivider variant="wave" flip />
      </div>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Education */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">🎓</span>
                  {t.cv.education}
                </h2>
                <div className="prose prose-sm max-w-none">
                  <Streamdown>{t.cv.educationContent}</Streamdown>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  {t.cv.skills}
                </h2>
                <div className="prose prose-sm max-w-none">
                  <Streamdown>{t.cv.skillsContent}</Streamdown>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Experience */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">💼</span>
                  {t.cv.experience}
                </h2>
                <div className="prose prose-sm max-w-none">
                  <Streamdown>{t.cv.experienceContent}</Streamdown>
                </div>
              </div>

              {/* Tech Stack Visual */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">
                  Domaines d'expertise
                </h3>
                <div className="space-y-3">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision",
                    "NLP",
                    "Data Analysis",
                    "Python & SQL",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="text-indigo-100">
        <SvgDivider variant="curve" />
      </div>

      {/* Download CTA */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Télécharger le CV complet
          </h2>
          <p className="text-lg text-gray-700">
            Accédez à la version complète de mon CV avec tous les détails de mon
            parcours et mes réalisations.
          </p>
          <Button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto"
            asChild
          >
            <a href="#" download>
              <Download size={20} />
              {t.cv.download}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
