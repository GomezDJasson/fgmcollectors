import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import nerdBot from "../../nerdbot.png";

const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/tienda" },
  { label: "Contacto", to: "/#contacto" },
];

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#100d18] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100d18]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Nerdybles, ir al inicio"
            onClick={closeMenu}
          >
            <img src={nerdBot} alt="" className="h-11 w-11 rounded-xl object-contain" />
            <span className="brand-name text-xl font-bold tracking-tight">Nerdybles</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>


          <button
            type="button"
            className="rounded-xl p-2 text-white md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#171222] px-5 py-4 md:hidden"
            aria-label="Navegación móvil"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <Outlet />

      <footer id="contacto" className="scroll-mt-20 border-t border-white/10 bg-[#0b0910]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={nerdBot} alt="" className="h-10 w-10 object-contain" />
            <span className="brand-name text-lg font-bold tracking-tight">Nerdybles</span>
          </Link>
          <p className="text-sm text-white/40">
            Un universo para quienes disfrutan coleccionar.
          </p>
          <span className="text-sm font-medium text-white/40">
            Canales de contacto próximamente
          </span>
        </div>
        <div className="border-t border-white/[0.06] px-5 py-5 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Nerdybles. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
