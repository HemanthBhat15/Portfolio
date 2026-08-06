import projects from "@/data/project.json";

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-surface-container px-6 py-24 text-on-surface">
        <div className="mx-auto max-w-4xl rounded-3xl border border-outline-variant/60 bg-[#0f172e]/80 p-8 text-center shadow-2xl shadow-black/20">
          <h1 className="text-3xl font-bold">Project not found.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-container px-6 py-24 text-on-surface sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-outline-variant/60 bg-[#0f172e]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-12">
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b4c5ff]">
            Project Detail
          </span>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
            {project.description}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        {project.image && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-outline-variant/40">
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover"
            />
          </div>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          View Live Project
        </a>
      </div>
    </div>
  );
}