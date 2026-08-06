import React from "react";
import Link from "next/link";
import projects from "@/data/project.json";
function LatestComponent() {
  const featuredProjects = projects.slice(0, 2);
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript ES6+",
    "Redux Toolkit",
    "Tailwind CSS",
    "REST",
  ];
  return (
    <div className="bg-[#0b1326]">
      <section className="max-w-7xl  px-gutter py-10" id="about">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              My Tech Stack
            </h2>
            <p className="text-on-surface-variant">
              I leverage a modern toolset to build resilient, fast, and
              accessible digital products.
            </p>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap gap-3">
            <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-2">
              <span className="text-sm font-medium text-white">React.js</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-2">
              <span className="text-sm font-medium text-white">Next.js</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-2">
              <span className="text-sm font-medium text-white ">
                TypeScript
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-2">
              <span className="text-sm font-medium text-white">
                JavaScript ES6+
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-2">
              <span className="text-sm font-medium text-white">
                Redux Toolkit
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-2">
              <span className="text-sm font-medium text-white">
                Tailwind CSS
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant flex items-center gap-2">
              <span className="text-sm font-medium text-white">REST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-[#0f172a]  py-20">
         <div className="max-w-7xl  px-gutter">
            <div className=" mb-12">
              <span
                className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block"
                >Portfolio</span
              >
              <h2 className="font-display text-4xl font-bold text-white">
                Featured Projects
              </h2>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <div className="border-2 rounded p-4 hover:shadow-md transition-shadow cursor-pointer bg-surface-container">
                <h3 className="text-xl font-bold text-white mb-2 ">{project.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/project"
          className="inline-block mt-6 text-blue-600 underline"
        >
          View All Projects
        </Link>
        </div>
      </section>
    </div>
  );
}

export default LatestComponent;
