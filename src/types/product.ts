export interface Product {
  id: string;
  sku: string;
  name: string;
  dateAdded: string;
  brand: string;
  line: string;
  category: string;
  number: string;
  variant: string;
  collection: string;
  stock: number;
  price: number;
  technicalDescription: string;
  commercialDescription: string;
  images: {
    main: string;
    additional1: string;
    additional2: string;
  };
  availability: "Disponible" | "Agotado";
}

export interface CatalogCategory {
  name: string;
  order: number;
  imageUrl: string;
}

export interface CatalogResponse {
  success: boolean;
  generatedAt: string;
  products: Product[];
  featured: Product[];
  categories: CatalogCategory[];
}
