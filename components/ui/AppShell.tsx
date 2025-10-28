import { ReactNode } from "react";
import { AppNav } from "./AppNav";

export function AppShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <AppNav />
      <section className="px-6 lg:px-12">
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_45px_rgba(59,130,246,0.15)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white lg:text-3xl">{title}</h2>
            {subtitle ? <p className="mt-2 text-sm text-slate-300/80">{subtitle}</p> : null}
          </div>
          {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
        </div>
      </section>
      <main className="relative z-10 flex-1 px-6 pb-20 pt-8 lg:px-12 lg:pb-16">
        <div className="grid gap-8">{children}</div>
      </main>
    </div>
  );
}
