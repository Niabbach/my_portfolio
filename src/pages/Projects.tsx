import { useLanguage } from "@/contexts/LanguageContext";
import { SvgDivider } from "@/components/SvgDivider";
import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("0");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold">{t.projects.title}</h1>
          <p className="text-lg opacity-90 mt-4">
            Découvrez mes projets en IA, développement et recherche académique
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="text-indigo-50">
        <SvgDivider variant="wave" flip />
      </div>

      {/* Projects Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tabs List */}
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-1 rounded-lg">
              {t.projects.tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* AI Projects */}
            <TabsContent value="0" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {t.projects.ia.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Development Projects */}
            <TabsContent value="1" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {t.projects.dev.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    index={index + t.projects.ia.length}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Academic Projects */}
            <TabsContent value="2" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {t.projects.academic.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    index={index + t.projects.ia.length + t.projects.dev.length}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Divider */}
      <div className="text-indigo-100">
        <SvgDivider variant="curve" />
      </div>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t.projects.ia.length + t.projects.dev.length + t.projects.academic.length}
              </div>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                3
              </div>
              <p className="text-gray-600">Catégories</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-gray-600">Open Source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="text-white">
        <SvgDivider variant="wave" flip />
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Intéressé par mes projets ?
          </h2>
          <p className="text-lg opacity-90">
            Consultez mon GitHub pour voir le code source complet et contribuer si vous le souhaitez.
          </p>
          <a
            href={t.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Visiter mon GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
