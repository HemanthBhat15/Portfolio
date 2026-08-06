import projects from "@/data/project.json";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="pt-20 pb-20 px-gutter  bg-surface-container">
      <section className="mb-15">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
          Crafted Solutions
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          A curated selection of technical explorations, architectural
          designs, and functional applications built with precision and
          modern engineering principles.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <div className="project-card flex flex-col bg-surface-container border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 h-full">
              {project.image && (
                <div className="h-56 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}