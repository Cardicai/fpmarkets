"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/invest", label: "Invest", icon: "💼" },
  { href: "/team", label: "Team", icon: "🤝" },
  { href: "/mine", label: "Profile", icon: "👤" },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="tab-bar" aria-label="Primary">
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`tab-bar__link${isActive ? " tab-bar__link--active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="tab-bar__icon" aria-hidden>{link.icon}</span>
            <span className="tab-bar__label">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
