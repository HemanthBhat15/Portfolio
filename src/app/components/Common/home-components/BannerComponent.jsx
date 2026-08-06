"use client";
import React, { useState } from "react";
import { ArrowRight, Download } from "lucide-react";

function BannerComponent() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white p-6 rounded-lg w-80 animate-modal-in shadow-xl">
            <p className="text-lg font-semibold mb-4 text-gray-800">
              Let&apos;s Connect
            </p>
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-600">Name</label>
              <input
                type="text"
                className="border-2 rounded w-full p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={() => setModal(false)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section
        className="min-h-[70vh] flex flex-col items-center justify-center text-center px-gutter py-20 bg-[#0b1326]"
        id="home"
      >
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-xs text-on-surface-variant mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="">Available for new opportunities</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6">
            Hi, I&apos;m <span className="text-primary">Hemanth Bhat</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed">
            Frontend Developer specializing in
            <span className="text-white font-medium">React.js</span>,
            <span className="text-white font-medium">Next.js</span>, and
            <span className="text-white font-medium">TypeScript</span>. Building
            high-performance, scalable web architectures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              onClick={() => setModal(true)}
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
            <a
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold border border-outline-variant text-on-surface hover:bg-surface-container transition-all flex items-center justify-center gap-2"
              href="/Hemanth-Bhat-Resume.pdf"
              download="Hemanth-Bhat-Resume.pdf"
            >
              <Download className="mr-2 inline h-4 w-4" strokeWidth={2} />
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerComponent;
 
