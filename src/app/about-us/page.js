"use client";

import { Code2, Rocket } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Code2,
    value: "3+ Years",
    label: "Exp. Building",
  },
  {
    icon: Rocket,
    value: "3+ Projects",
    label: "Launched",
  },
];

export default function AboutSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0b1326] px-6 py-32 text-[#dae2fd] selection:bg-[#b4c5ff]/30 selection:text-[#b4c5ff]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10 [background-image:radial-gradient(1px_1px_at_20px_30px,#fff,transparent),radial-gradient(1px_1px_at_40px_70px,#fff,transparent),radial-gradient(1px_1px_at_50px_160px,#fff,transparent),radial-gradient(2px_2px_at_90px_40px,#fff,transparent),radial-gradient(2px_2px_at_130px_80px,#fff,transparent)] [background-size:200px_200px] [background-repeat:repeat]" />
      <div className="pointer-events-none absolute -right-64 -top-64 -z-10 h-[600px] w-[600px] rounded-full bg-[#2563eb]/30 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-56 -left-56 -z-10 h-[500px] w-[500px] rounded-full bg-[#0566d9]/20 blur-[80px]" />

      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1 space-y-8">
          <div>
            <span className="mb-4 block text-sm font-medium uppercase leading-none tracking-[0.01em] text-[#b4c5ff]">
              About Me
            </span>
            <h1 className="mb-6 max-w-3xl font-sans text-[32px] font-bold leading-[1.2] text-[#dae2fd] sm:text-[48px] sm:leading-[1.1] sm:tracking-[-0.02em]">
              Architecting Digital{" "}
              <span className="text-[#2563eb]">Realms.</span>
            </h1>
            <p className="max-w-2xl text-[18px] font-normal leading-[1.6] text-[#c3c6d7]">
              Hello! I&apos;m{" "}
              <span className="font-semibold text-[#dae2fd]">Hemanth Bhat</span>,
              a Frontend Developer with a passion for building immersive,
              high-performance web applications. My work exists at the
              intersection of technical precision and artistic expression, much
              like the vast, orderly complexity of deep space.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-xl border border-[#434655]/30 bg-[#171f33]/70 px-6 py-4 backdrop-blur-xl"
              >
                <Icon className="h-6 w-6 text-[#2563eb]" strokeWidth={2} />
                <div>
                  <p className="font-bold text-[#dae2fd]">{value}</p>
                  <p className="text-sm font-medium leading-none tracking-[0.01em] text-[#c3c6d7]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-[#2563eb]/20 bg-[#171f33]/70 backdrop-blur-xl">
            <Image
              alt="A professional, artistic portrait of Hemanth Bhat set against a dark navy cinematic studio background with blue neon rim lighting."
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0B7h0RAga2526uJrNBWZaUV69TG2bG9SlzZpEukxIw4yK46o8AEK2Y-1PRKioK0xG0XxWlvkMj3MPUqdcsSS_DFA82I_9n4HEhyAfHVbaU-d-dHAVm9v3AMinnyDUvuMqWpYTWJDCFKqB5SVTE-58LaFfPgTx1h3bjZJZ2X8okeAt2viSIlv198QfrO-nhajFAcWJ4CbzldtSvDSC3N_THEj0uIx4qE93WA64kHzf78L3KZHQYg2s3vMPUz48D-q0BoLe4R9eaSsd"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-[#434655]/30 bg-[#171f33]/70 p-4 backdrop-blur-xl">
              <p className="font-bold text-[#b4c5ff]">Hemanth Bhat</p>
              <p className="text-sm font-medium leading-none tracking-[0.01em] text-[#c3c6d7]">
                Principal Frontend Architect
              </p>
            </div>
          </div>

          <div className="absolute -right-10 -top-10 h-32 w-32 animate-spin rounded-full border border-[#b4c5ff]/20 [animation-duration:20s]" />
          <div className="absolute -bottom-5 -left-5 h-20 w-20 animate-spin rounded-full border border-[#adc6ff]/20 [animation-direction:reverse] [animation-duration:15s]" />
        </div>
      </div>
    </section>
  );
}
