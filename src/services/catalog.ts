import type { CatalogResponse } from "../types/product";

const CATALOG_API_URL =
  "https://script.google.com/macros/s/AKfycbx7Tpq2ak2Opb2fn_m4q-Mn2u1Hws8voQIKn48P9YoAucXLihUqbZYU-XqiokC8HxVYkg/exec";

let catalogRequest: Promise<CatalogResponse> | null = null;\n\nexport function getCatalog(): Promise<CatalogResponse> {\n  if (!catalogRequest) {\n    catalogRequest = fetchCatalog().catch((error: unknown) => {\n      catalogRequest = null;\n      throw error;\n    });\n  }\n\n  return catalogRequest;\n}\n\nasync function fetchCatalog(): Promise<CatalogResponse> {
  const response = await fetch(CATALOG_API_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error al consultar el catálogo: ${response.status}`);
  }

  const data: CatalogResponse = await response.json();

  if (!data.success) {
    throw new Error("La API no pudo obtener el catálogo.");
  }

  return data;
}