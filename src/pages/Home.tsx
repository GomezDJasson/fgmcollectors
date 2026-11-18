import { useMemo } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useCatalog } from "../context/CatalogContext";
import nerdBot from "../../nerdbot.png";

function Home() {
  const { catalog, loading, error } = useCatalog();

  const newestProducts = useMemo(
    () =>
      (catalog?.products ?? [])
        .filter(
          (product) =>
            product.dateAdded &&
            !Number.isNaN(Date.parse(product.dateAdded))
        )
        .sort(
          (a, b) =>
            Date.parse(b.dateAdded) - Date.parse(a.dateAdded)
        )
        .slice(0, 4),
    [catalog?.products]
  );

  const categories = useMemo(() => {
    const counts = new Map<string, number>();

    (catalog?.products ?? []).forEach((product) => {
      const category = product.category.trim();
      if (category) {
        counts.set(category, (counts.get(category) ?? 0) + 1);
      }
    });

    return Array.from(counts, ([name, count]) => ({ name, count })).sort(
      (a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" })
    );
  }, [catalog?.products]);

  return (
    <main>

        <section
          id="inicio"
          className="relative isolate scroll-mt-20"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,rgba(111,58,190,0.28),transparent_42%),radial-gradient(ellipse_at_10%_90%,rgba(246,201,69,0.08),transparent_35%)]" />
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/25 bg-[#7c3aed]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#c4b5fd]">
                <Sparkles size={14} />
                UN UNIVERSO PARA COLECCIONISTAS
              </div>

              <h1 className="text-5xl font-black leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Tu próximo
                <br />
                favorito está
                <br />
                <span className="bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#f6c945] bg-clip-text text-transparent">
                  aquí.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
                Figuras, personajes y objetos que conectan con eso que tanto te gusta.
                Descubre un espacio hecho para quienes disfrutan coleccionar.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#colecciones"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f6c945] px-7 py-4 text-sm font-extrabold text-[#211807] shadow-[0_10px_35px_rgba(246,201,69,0.16)] transition-all hover:-translate-y-1 hover:bg-[#ffda68]"
                >
                  Descubrir colecciones
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#nosotros"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/80 transition-colors hover:border-white/35 hover:bg-white/5 hover:text-white"
                >
                  Conoce Nerdybles
                </a>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="h-1 w-10 rounded-full bg-[#a78bfa]" />
                <p className="text-xs font-medium tracking-wide text-white/40">
                  COLECCIONA LO QUE TE HACE ÚNICO
                </p>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center">
              <div className="absolute h-[75%] w-[75%] rounded-full bg-[#6d28d9]/25 blur-[90px]" />
              <div className="absolute bottom-[8%] h-8 w-[62%] rounded-[50%] bg-black/50 blur-2xl" />
              <img
                src={nerdBot}
                alt="Mascota de Nerdybles junto a una figura coleccionable"
                className="relative z-10 w-full max-w-[510px] drop-shadow-[0_25px_55px_rgba(91,33,182,0.3)]"
              />
              <div className="absolute right-1 top-[16%] hidden rounded-2xl border border-white/10 bg-[#211a30]/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#f6c945]">
                  HELLO, GEEK!
                </p>
                <p className="mt-1 text-xs text-white/65">Tu espacio coleccionista</p>
              </div>
            </div>
          </div>
        </section>

        <section id="novedades" className="scroll-mt-20">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.22em] text-[#f6c945]">RECIÉN LLEGADOS</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Lo más nuevo</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/50">Descubre las últimas piezas que se suman al universo Nerdybles.</p>
            </div>

            {error ? (
              <div className="rounded-3xl border border-red-400/20 bg-[#171222] px-6 py-12 text-center">
                <h3 className="text-xl font-bold">No pudimos cargar las novedades</h3>
                <p className="mt-2 text-sm text-white/50">
                  Estamos teniendo dificultades para conectar con nuestro catálogo.
                </p>
              </div>
            ) : loading ? (
              <div className="rounded-3xl border border-white/10 bg-[#171222] px-6 py-12 text-center">
                <p className="text-sm text-white/50">Cargando las últimas incorporaciones...</p>
              </div>
            ) : newestProducts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#a78bfa]/30 bg-[#171222]/70 px-6 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7c3aed]/15 text-[#c4b5fd]">
                  <Sparkles size={25} />
                </div>
                <h3 className="mt-5 text-xl font-bold">Pronto tendremos novedades</h3>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-white/50">
                  Estamos preparando nuevas incorporaciones para nuestra colección.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {newestProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section
          id="destacados"
          className="scroll-mt-20 border-y border-white/10 bg-white/[0.025]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-10">
              <p className="text-xs font-bold tracking-[0.22em] text-[#a78bfa]">
                SELECCIÓN NERDYBLES
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Productos destacados
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
                Descubre algunas de las piezas seleccionadas de nuestro catálogo.
              </p>
            </div>

            {error ? (
              <div className="rounded-3xl border border-red-400/20 bg-[#171222] px-6 py-12 text-center">
                <h3 className="text-xl font-bold">
                  No pudimos cargar los productos
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  Estamos teniendo dificultades para conectar con nuestro catálogo.
                </p>
              </div>
            ) : loading ? (
              <div className="rounded-3xl border border-white/10 bg-[#171222] px-6 py-12 text-center">
                <p className="text-sm text-white/50">
                  Cargando productos destacados...
                </p>
              </div>
            ) : catalog?.featured.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#a78bfa]/30 bg-[#171222]/70 px-6 py-12 text-center sm:px-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7c3aed]/15 text-[#c4b5fd]">
                  <Sparkles size={25} />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Estamos preparando algo especial
                </h3>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-white/50">
                  Pronto encontrarás aquí una selección de productos destacados.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {catalog?.featured.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="colecciones" className="scroll-mt-20 border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.22em] text-[#a78bfa]">
                  EXPLORA NUESTRO UNIVERSO
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Encuentra tu colección
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/50">
                Un catálogo pensado para descubrir nuevas piezas y encontrar
                esos personajes que siempre has querido tener.
              </p>
            </div>

            {error ? (
              <div className="rounded-3xl border border-red-400/20 bg-[#171222] px-6 py-12 text-center">
                <h3 className="text-xl font-bold">No pudimos cargar las categorías</h3>
                <p className="mt-2 text-sm text-white/50">
                  Estamos teniendo dificultades para conectar con nuestro catálogo.
                </p>
              </div>
            ) : loading ? (
              <div className="rounded-3xl border border-white/10 bg-[#171222] px-6 py-12 text-center">
                <p className="text-sm text-white/50">Cargando categorías...</p>
              </div>
            ) : categories.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#a78bfa]/30 bg-[#171222]/70 px-6 py-12 text-center">
                <h3 className="text-xl font-bold">Pronto tendremos colecciones</h3>
                <p className="mt-2 text-sm text-white/50">
                  Estamos preparando las categorías de nuestro catálogo.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category, index) => (
                  <Link
                    key={category.name}
                    to={`/tienda?categoria=${encodeURIComponent(category.name)}`}
                    className="group rounded-2xl border border-white/10 bg-[#171222] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a78bfa]/45 hover:bg-[#1d172b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6c945] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100d18]"
                  >
                    <span className="text-xs font-bold tracking-widest text-[#f6c945]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-8 text-xl font-bold">{category.name}</h3>
                    <p className="mt-3 min-h-[52px] text-sm leading-6 text-white/50">
                      Explora los productos de esta categoría y encuentra tu próxima pieza favorita.
                    </p>
                    <div className="mt-7 flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-white/45">
                        {category.count} {category.count === 1 ? "producto" : "productos"}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#c4b5fd]">
                        Explorar
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="nosotros" className="scroll-mt-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div className="flex items-center justify-center">
              <img
                src={nerdBot}
                alt=""
                className="w-48 drop-shadow-[0_15px_35px_rgba(109,40,217,0.25)] sm:w-56"
              />
            </div>
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.22em] text-[#a78bfa]">
                MÁS QUE OBJETOS
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Cada colección cuenta una historia.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/55">
                Nerdybles nace para reunir productos y universos que despiertan
                la emoción de coleccionar. Queremos que explorar, descubrir y
                encontrar tu próxima pieza favorita sea parte de la experiencia.
              </p>
            </div>
          </div>
        </section>

    </main>
  );
}

export default Home;
