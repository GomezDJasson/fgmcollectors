import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const currencyFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

function ProductCard({ product }: ProductCardProps) {
  const hasImage = Boolean(product.images.main);

  return (
    <Link
      to={`/producto/${encodeURIComponent(product.id)}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#171222] transition-all duration-300 hover:-translate-y-1 hover:border-[#a78bfa]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6c945]"
      aria-label={`Ver detalles de ${product.name}`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.2),rgba(23,18,34,0.15)_65%)] p-5">
        {hasImage ? (
          <img
            src={product.images.main}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Sparkles size={38} className="text-[#a78bfa]/50" />
        )}

        {product.availability === "Agotado" && (
          <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
            Agotado
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa]">
            {product.brand || product.category}
          </span>
          <span className="text-xs text-white/35">{product.sku}</span>
        </div>

        <h3 className="mt-3 min-h-12 text-lg font-bold leading-6">
          {product.name}
        </h3>

        {product.collection && (
          <p className="mt-1 truncate text-sm text-white/45">
            {product.collection}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="text-lg font-extrabold text-[#f6c945]">
            {currencyFormatter.format(product.price)}
          </span>

          {product.availability === "Disponible" && (
            <span className="text-xs font-medium text-emerald-400">
              Disponible
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
