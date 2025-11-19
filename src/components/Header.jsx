import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/projects", label: "Projects" },
  { to: "/writing",  label: "Writing"  },
  { to: "/about",    label: "About"    },
  { to: "/resume",   label: "Resume"   },
  { to: "/contact",  label: "Contact"  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const base = "block px-3 py-2 rounded-md text-sm text-pb-ivory/80 hover:text-pb-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pb-copper/60";
  const active = ({ isActive }) => (isActive ? `${base} text-pb-copper` : base);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-blackletter text-xl   leading-none">
          Peter Burke
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => <NavLink key={n.to} to={n.to} className={active}>{n.label}</NavLink>)}
        </nav>

        <button
          className="md:hidden p-2 rounded-md text-pb-ivory/80 hover:text-pb-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pb-copper/60"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-pb-bg/95">
          <nav className="mx-auto max-w-6xl px-2 py-2">
            {NAV.map(n => (
              <NavLink key={n.to} to={n.to}
                className="block px-3 py-3 rounded-md text-pb-ivory/80 hover:text-pb-copper transition-colors"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
