"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/invest", label: "Home" },
  { href: "/invest#products", label: "Invest" },
  { href: "/team", label: "Team" },
  { href: "/mine", label: "Mine" },
];

export default function TabBar() {
  const pathname = usePathname() || "/";
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl grid grid-cols-4">
        {tabs.map((t) => {
          const active =
            pathname.startsWith(t.href) ||
            (t.href.includes("#") && pathname.startsWith("/invest"));
          return (
            <Link
              key={t.href}
              href={t.href.replace("#products","")}
              className={`flex items-center justify-center py-3 text-sm transition ${active ? "text-white" : "text-white/60 hover:text-white"}`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
