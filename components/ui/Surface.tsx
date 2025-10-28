import { ReactNode } from "react";

export default function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_50px_rgba(14,116,144,0.12)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:shadow-[0_0_60px_rgba(56,189,248,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}
