import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  index?: number;
}

const gradients = [
  "from-indigo-500 to-purple-600",
  "from-purple-500 to-pink-600",
  "from-blue-500 to-indigo-600",
  "from-indigo-600 to-blue-500",
  "from-purple-600 to-indigo-500",
];

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  index = 0,
}: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Top Accent Bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${gradient}`}
      />

      {/* Content */}
      <div className="relative p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm group/link"
        >
          <Github size={16} className="group-hover/link:scale-110 transition-transform" />
          <span>Voir le code</span>
          <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
}
