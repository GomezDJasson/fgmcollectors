# Nerdybles

**Nerdybles** es una tienda en línea de artículos coleccionables. Su catálogo reúne figuras y productos de distintas marcas, líneas y colecciones, con una experiencia pensada para explorar productos, consultar su disponibilidad y preparar pedidos desde la web.

🌐 **[Visitar Nerdybles](https://nerdybles.vercel.app)**

## ✨ Características

- 🏠 **Página de inicio** con presentación de la tienda, productos destacados, novedades y categorías.
- 🛍️ **Catálogo de productos** con búsqueda y filtros por categoría, marca y disponibilidad.
- 🔎 **Detalle de producto** con información, especificaciones y galería de imágenes.
- 🛒 **Carrito de compras** con gestión de cantidades, eliminación de productos y cálculo del subtotal.
- 📦 **Validación de disponibilidad y stock** al agregar productos y antes de preparar el pedido.
- 💬 **Solicitud de pedido por WhatsApp:** el checkout organiza los productos y los datos del cliente en un mensaje para enviar a la tienda.
- 📱 **Diseño responsive** para computadoras, tabletas y dispositivos móviles.
- 📚 Páginas de **contacto**, **política de tratamiento de datos** y **términos y condiciones**.

## 🧰 Tecnologías

- **React** — construcción de la interfaz por componentes.
- **TypeScript** — tipado estático.
- **Vite** — entorno de desarrollo y compilación.
- **Tailwind CSS** — estilos y diseño responsive.
- **React Router** — navegación entre páginas.
- **Lucide React** — iconografía.
- **Google Sheets + Google Apps Script** — fuente de datos del catálogo.
- **LocalStorage** — persistencia del carrito en el navegador.

## 📦 Fuente de datos del catálogo

El catálogo se obtiene desde un endpoint publicado con **Google Apps Script**, que entrega los datos en formato JSON. La aplicación consulta ese servicio al iniciar y comparte los datos mediante un contexto de React.

La respuesta del catálogo contiene:

- Productos con referencia, nombre, marca, línea, categoría, colección, variante, precio, stock, descripciones e imágenes.
- Estado de disponibilidad del producto.
- Productos destacados.
- Categorías y sus imágenes.

El frontend consume los datos del catálogo; la gestión del inventario se mantiene en la fuente de datos conectada a Google Sheets. Los cambios publicados en esa fuente se reflejan cuando la aplicación vuelve a consultar el catálogo.

## 🛒 Flujo de compra

1. El visitante explora el catálogo y consulta el detalle de un producto.
2. Agrega los productos disponibles al carrito.
3. Ajusta las cantidades o elimina artículos.
4. Completa sus datos de contacto y entrega en el checkout.
5. La aplicación prepara un resumen del pedido y abre WhatsApp para enviarlo a la tienda.

**Importante:** el checkout genera una solicitud de pedido por WhatsApp. No procesa pagos en línea ni confirma automáticamente una compra. La disponibilidad, el precio final y el costo de envío deben ser confirmados por la tienda antes de cerrar el pedido.

El carrito se guarda localmente en el navegador mediante `localStorage`; no se sincroniza entre dispositivos ni requiere iniciar sesión.

## 🗂️ Estructura del proyecto

```text
src/
├── components/
│   ├── MobileProductCarousel.tsx
│   ├── ProductCard.tsx
│   ├── SiteLayout.tsx
│   └── SocialIcon.tsx
├── constants/
│   └── store.ts
├── context/
│   ├── CartContext.tsx
│   └── CatalogContext.tsx
├── pages/
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── PrivacyPolicy.tsx
│   ├── ProductDetail.tsx
│   ├── Shop.tsx
│   └── TermsAndConditions.tsx
├── services/
│   └── catalog.ts
├── types/
│   └── product.ts
├── App.tsx
├── index.css
└── main.tsx
```

## 🚀 Requisitos

- **Node.js** compatible con la versión de Vite instalada.
- **npm**.

## 💻 Instalación y ejecución local

Clona el repositorio:

```bash
git clone https://github.com/GomezDJasson/nerdybles.git
```

Entra en la carpeta del proyecto:

```bash
cd nerdybles
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación, normalmente:

```text
http://localhost:5173
```

## 🏗️ Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Comprueba los tipos de TypeScript y genera la compilación de producción. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |

## 🌐 Despliegue

La aplicación está publicada en **Vercel**:

**[https://nerdybles.vercel.app](https://nerdybles.vercel.app)**

## 👨‍💻 Autor

Desarrollado por **Jasson D. Gomez**.

- GitHub: [@GomezDJasson](https://github.com/GomezDJasson)
- Repositorio: [GomezDJasson/nerdybles](https://github.com/GomezDJasson/nerdybles)

---

Nerdybles: un espacio para encontrar ese coleccionable que conecta con tus universos favoritos.
