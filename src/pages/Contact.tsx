import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  PackageCheck,
  Truck,
} from "lucide-react";

const whatsappUrl = "https://wa.me/573156679984";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/nerdybles/", mark: "◎" },
  { name: "Facebook", href: "https://www.facebook.com/nerdybles", mark: "f" },
  { name: "TikTok", href: "https://www.tiktok.com/@juliethmar8", mark: "♪" },
  { name: "X", href: "https://x.com/nerdybles", mark: "𝕏" },
  { name: "YouTube", href: "https://www.youtube.com/@nerdybles", mark: "▶" },
  { name: "Threads", href: "https://www.threads.net/@nerdybles", mark: "@" },
  { name: "Telegram", href: "https://t.me/nerdybles", mark: "➤" },
];

function Contact() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(111,58,190,0.28),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold tracking-[0.22em] text-[#f6c945]">
            ESTAMOS PARA AYUDARTE
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Hablemos de tu próxima
            <span className="block bg-gradient-to-r from-[#c4b5fd] to-[#f6c945] bg-clip-text text-transparent">
              pieza favorita.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            ¿Tienes una pregunta sobre un producto o quieres conocer el estado de tu pedido?
            Escríbenos y conversemos por el canal que prefieras.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="rounded-3xl border border-[#a78bfa]/25 bg-gradient-to-br from-[#211832] to-[#171222] p-7 sm:p-10">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
            <MessageCircle size={28} />
          </div>
          <h2 className="mt-7 text-2xl font-bold sm:text-3xl">Atención por WhatsApp</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-white/55">
            Nuestro canal directo para resolver dudas sobre productos, disponibilidad,
            compras y pedidos.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f6c945] px-6 py-3 text-sm font-extrabold text-[#211807] transition-all hover:-translate-y-0.5 hover:bg-[#ffda68] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6c945]"
          >
            Escribir por WhatsApp
            <ArrowUpRight size={18} />
          </a>
          <p className="mt-5 text-sm font-medium text-white/45">+57 315 667 9984</p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="font-bold">Correo electrónico</h3>
            <a
              href="mailto:nerdybles@gmail.com"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#c4b5fd] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6c945]"
            >
              <Mail size={17} />
              nerdybles@gmail.com
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <article className="flex gap-4 rounded-2xl border border-white/10 bg-[#171222] p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#c4b5fd]">
              <PackageCheck size={22} />
            </div>
            <div>
              <h3 className="font-bold">Disponibilidad de productos</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Confirmamos existencias y detalles del producto antes de finalizar tu compra.
              </p>
            </div>
          </article>
          <article className="flex gap-4 rounded-2xl border border-white/10 bg-[#171222] p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#c4b5fd]">
              <Truck size={22} />
            </div>
            <div>
              <h3 className="font-bold">Envíos y entregas</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Consultamos el costo de envío según tu ciudad y dirección. El valor se informa
                por WhatsApp y no está incluido en el subtotal de productos.
              </p>
            </div>
          </article>
          <p className="px-2 text-xs leading-6 text-white/35">
            Los pedidos realizados desde la tienda son solicitudes sujetas a confirmación
            de disponibilidad, precio y envío.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#171222] p-7 sm:p-10">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#f6c945]">SÍGUENOS</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Nerdybles en redes</h2>
            <p className="mt-3 text-sm text-white/50">
              Encuentra novedades, coleccionables y contenido en nuestras comunidades.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {socialLinks.map(({ name, href, mark }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visitar Nerdybles en ${name}`}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/75 transition-colors hover:border-[#a78bfa]/40 hover:bg-[#7c3aed]/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c945]"
              >
                <span className="text-base font-bold">{mark}</span>
                {name}
                <ArrowUpRight size={14} className="text-white/35" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
