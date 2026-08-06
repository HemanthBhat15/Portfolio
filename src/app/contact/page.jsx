'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  }

  return (
    <section className="min-h-screen bg-surface-container px-6 py-24 text-on-surface sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-outline-variant/60 bg-[#0f172e]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur md:flex-row md:p-12">
        <div className="flex-1 space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b4c5ff]">
            Contact
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s build something remarkable.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
            Have a project in mind or want to collaborate on a bold digital experience?
            I&apos;d love to hear from you.
          </p>
          <div className="space-y-3 text-sm text-on-surface-variant">
            <p>📧 bhathemanth988@gmail.com</p>
            <p>📍 Delhi, India</p>
          </div>
        </div>

        <div className="flex-1">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-emerald-200">
              <h2 className="mb-2 text-xl font-semibold">Thanks for reaching out!</h2>
              <p>I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-outline-variant/40 bg-[#171f33]/70 p-6 shadow-lg">
              <div>
                <label className="mb-2 block text-sm font-medium text-on-surface">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-outline-variant/50 bg-[#0f172e] px-4 py-3 text-on-surface outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-on-surface">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-outline-variant/50 bg-[#0f172e] px-4 py-3 text-on-surface outline-none transition focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-on-surface">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-outline-variant/50 bg-[#0f172e] px-4 py-3 text-on-surface outline-none transition focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-primary px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}