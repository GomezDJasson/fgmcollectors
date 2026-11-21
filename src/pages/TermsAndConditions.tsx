import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Identificación de Nerdybles",
    content: (
      <>
        <p>Nerdybles es un emprendimiento de comercio electrónico administrado por <strong>Julieth Martinez</strong>, persona natural, con domicilio de contacto en Calle 64 # 112B-82, Bogotá, Colombia.</p>
        <ul>
          <li><strong>Correo:</strong> <a href="mailto:nerdybles@gmail.com">nerdybles@gmail.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/573156679984" target="_blank" rel="noreferrer">+57 315 667 9984</a></li>
        </ul>
        <p>Estos términos regulan las solicitudes y compras realizadas a través de la tienda en línea y los canales de atención de Nerdybles.</p>
      </>
    ),
  },
  {
    title: "2. Productos, fotografías y disponibilidad",
    content: (
      <>
        <p>Nerdybles comercializa figuras y artículos coleccionables. Las fotografías y descripciones buscan mostrar cada producto de la forma más fiel posible. Pueden existir pequeñas diferencias de color o apariencia por la iluminación, la pantalla o las características propias del artículo.</p>
        <p>Las versiones regulares y las versiones especiales, como las ediciones Chase, corresponden a referencias diferentes y se identifican por separado cuando aplique. El estado de la caja y de los accesorios puede ser relevante para los coleccionistas; por eso recomendamos revisar la descripción y consultar cualquier duda antes de solicitar la compra.</p>
        <p>La disponibilidad se confirma al atender la solicitud. Que un producto aparezca en el catálogo no significa que esté reservado. Los artículos marcados como agotados no se pueden agregar a una solicitud de compra mientras no se indique lo contrario.</p>
      </>
    ),
  },
  {
    title: "3. Cómo se realiza una compra",
    content: (
      <>
        <ol>
          <li>El cliente selecciona los productos y completa el formulario del carrito.</li>
          <li>La tienda prepara un mensaje que el cliente revisa y envía voluntariamente por WhatsApp.</li>
          <li>Nerdybles revisa la solicitud y confirma disponibilidad, precio y costo de envío.</li>
          <li>Si el cliente está de acuerdo, Nerdybles le informa el medio de pago y los datos necesarios.</li>
          <li>Una vez verificado el pago completo, se coordina la preparación y entrega del pedido.</li>
        </ol>
        <p>Completar el formulario o abrir WhatsApp no confirma por sí solo una compra ni reserva los productos. La compra queda sujeta a la confirmación de Nerdybles y a las condiciones informadas al cliente antes del pago.</p>
      </>
    ),
  },
  {
    title: "4. Precios y medios de pago",
    content: (
      <>
        <p>Los precios de los productos se muestran en pesos colombianos (COP). El subtotal del carrito corresponde únicamente al valor de los productos y no incluye el costo de envío.</p>
        <p>Antes de que el cliente realice el pago, Nerdybles confirmará el valor de los productos, la disponibilidad y el costo total de entrega, cuando corresponda. Si se identifica una diferencia, se informará al cliente para que pueda decidir si continúa con la compra.</p>
        <p>Los medios de pago disponibles son:</p>
        <ul>
          <li><strong>Bre-B:</strong> transferencia mediante la llave fija de Nerdybles, que se comunica durante la atención del pedido desde una entidad financiera o billetera participante.</li>
          <li><strong>Bold:</strong> enlace de pago individual enviado por WhatsApp.</li>
        </ul>
        <p>Nerdybles recibe únicamente pagos completos. No se aceptan anticipos, abonos ni pagos parciales. El pedido se prepara y despacha únicamente después de verificar que el dinero haya ingresado correctamente. El envío de un comprobante no sustituye la verificación del pago.</p>
      </>
    ),
  },
  {
    title: "5. Reserva de productos y plazo de pago",
    content: (
      <>
        <p>Después de confirmar la disponibilidad y enviar al cliente los datos o el enlace de pago, Nerdybles reservará los productos durante <strong>24 horas</strong>.</p>
        <p>Si el pago no se recibe dentro de ese plazo, la reserva termina y los productos vuelven a estar disponibles para otros compradores. Si el cliente desea pagar después de las 24 horas, Nerdybles verificará nuevamente el inventario. Si los productos siguen disponibles, podrá continuar con el pedido; si alguien ya los compró, no será posible garantizar la disponibilidad inicial.</p>
      </>
    ),
  },
  {
    title: "6. Envíos, entregas y recogida",
    content: (
      <>
        <ul>
          <li><strong>Bogotá:</strong> entregas principalmente mediante mensajero propio, con tarifa fija de <strong>$11.000 COP</strong> para cualquier zona de Bogotá.</li>
          <li><strong>Envíos nacionales:</strong> principalmente mediante Inter Rapidísimo. El cliente puede solicitar otra transportadora y Nerdybles confirmará si es posible coordinarla.</li>
          <li><strong>Recogida personal:</strong> gratuita, en Calle 64 # 112B-82, Bogotá, Colombia, previa coordinación por WhatsApp para confirmar que el pedido está listo.</li>
        </ul>
        <p>El costo del envío se informa antes de confirmar el pedido y no está incluido en el subtotal de la tienda. Los tiempos de entrega dependen de la modalidad, la transportadora, el destino y las condiciones del servicio; Nerdybles comunicará la información disponible al coordinar el despacho.</p>
        <p>La dirección de recogida se utiliza para coordinar la entrega del pedido y no corresponde a un punto de atención sin cita previa.</p>
      </>
    ),
  },
  {
    title: "7. Revisión del paquete y novedades durante el transporte",
    content: (
      <>
        <p>Antes del despacho, Nerdybles toma registros fotográficos del estado del producto y de su empaque. Se recomienda al cliente revisar el paquete y, cuando sea posible, el producto en presencia del mensajero o transportador al recibirlo.</p>
        <p>Si observa daños, golpes, alteraciones o faltantes, se recomienda dejar constancia de la novedad con la transportadora y comunicarla a Nerdybles lo antes posible, adjuntando fotografías y la información de entrega. Esto ayuda a documentar el caso y gestionar la reclamación correspondiente ante la empresa transportadora o su seguro.</p>
        <p>La revisión al recibir el paquete y los registros fotográficos son medidas de prevención y soporte; no eliminan ni limitan los derechos del consumidor ni las obligaciones legales que correspondan a Nerdybles.</p>
      </>
    ),
  },
  {
    title: "8. Cambios, devoluciones y derecho de retracto",
    content: (
      <>
        <p>Nerdybles atenderá las solicitudes de cambio y devolución conforme a las condiciones informadas y a los derechos reconocidos por la legislación colombiana.</p>
        <p><strong>Devoluciones por decisión del cliente:</strong> en las compras a distancia puede aplicar el derecho de retracto, que por regla general debe ejercerse dentro de los cinco (5) días hábiles siguientes a la entrega del producto, siempre que la operación no esté dentro de las excepciones previstas por la ley. El cliente deberá devolver el producto por los mismos medios y en las condiciones en que lo recibió. Los costos directos de devolución derivados del retracto estarán a cargo del consumidor, de acuerdo con la normativa aplicable.</p>
        <p>Para gestionar un cambio o devolución, el producto deberá regresar tal como fue enviado, con sus componentes, accesorios, caja y elementos de empaque que correspondan, y sin daños o modificaciones atribuibles a su uso o manipulación indebida. Se tendrán en cuenta las condiciones legales del derecho de retracto, incluida la posibilidad de revisar el producto para establecer su naturaleza, características y funcionamiento. Estas condiciones no se aplicarán para desconocer derechos legales del consumidor.</p>
        <p>Cuando proceda el derecho de retracto, Nerdybles realizará la devolución del dinero dentro del término legal aplicable, que actualmente es de hasta treinta (30) días calendario desde su ejercicio, una vez se cumplan las condiciones legales correspondientes.</p>
        <p>El derecho de retracto tiene excepciones legales. Si una solicitud no corresponde a un caso en el que aplique, Nerdybles revisará si es posible ofrecer una solución voluntaria.</p>
      </>
    ),
  },
  {
    title: "9. Garantía y productos con defectos",
    content: (
      <>
        <p>Los productos cuentan con los derechos de garantía legal que resulten aplicables. Si el cliente identifica un defecto de calidad, idoneidad o seguridad, puede comunicarse con Nerdybles para iniciar la revisión y el trámite correspondiente.</p>
        <p>Según el caso y lo establecido por la ley, la solución podrá incluir reparación, cambio, devolución del dinero u otra medida procedente. La garantía legal no se reemplaza por las políticas voluntarias de cambios y devoluciones descritas en estos términos.</p>
        <p>Para facilitar la atención, el cliente deberá aportar la información de la compra y describir el inconveniente. Nerdybles indicará los pasos para revisar el producto y atenderá la reclamación dentro de los términos legales.</p>
      </>
    ),
  },
  {
    title: "10. Atención al cliente y reclamaciones",
    content: (
      <>
        <p>Para consultas sobre pedidos, pagos, envíos, cambios, devoluciones o garantías, el cliente puede comunicarse con Nerdybles a través de:</p>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/573156679984" target="_blank" rel="noreferrer">+57 315 667 9984</a></li>
          <li><strong>Correo:</strong> <a href="mailto:nerdybles@gmail.com">nerdybles@gmail.com</a></li>
        </ul>
        <p>Se recomienda indicar el nombre del comprador, la fecha o referencia del pedido y una descripción clara de la solicitud para facilitar su atención.</p>
      </>
    ),
  },
  {
    title: "11. Protección de datos personales",
    content: (
      <p>Los datos personales proporcionados durante una solicitud o compra se tratarán de acuerdo con la <Link to="/politica-de-tratamiento-de-datos" className="font-semibold text-[#c4b5fd] underline underline-offset-4 hover:text-white">Política de Tratamiento de Datos Personales</Link> de Nerdybles, disponible en este sitio web.</p>
    ),
  },
  {
    title: "12. Vigencia y modificaciones",
    content: (
      <p>Nerdybles podrá actualizar estos términos cuando cambien sus procesos o las disposiciones aplicables. La versión vigente estará disponible en esta página. Las modificaciones no afectarán retroactivamente los derechos que el consumidor haya adquirido ni las condiciones de una compra ya confirmada.</p>
    ),
  },
];

function TermsAndConditions() {
  return (
    <main className="min-h-[70vh]">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors hover:text-[#c4b5fd]">
          <span aria-hidden="true">←</span> Volver al inicio
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[#a78bfa]">INFORMACIÓN LEGAL</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Términos y Condiciones de Compra</h1>
          <p className="mt-4 text-sm text-white/45">NERDYBLES · Última actualización: 17 de noviembre de 2026</p>
          <div className="mt-6 rounded-2xl border border-[#a78bfa]/20 bg-[#171222] p-5 sm:p-6">
            <p className="text-sm leading-7 text-white/65">Aquí encontrarás las condiciones para solicitar productos, realizar pagos, recibir pedidos y gestionar cambios, devoluciones o garantías en Nerdybles. Estas condiciones se aplican junto con los derechos que reconoce la legislación colombiana.</p>
          </div>
        </header>

        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-28">
              <h2 className="text-lg font-bold text-white sm:text-xl">{section.title}</h2>
              <div className="policy-content mt-3 space-y-3 text-sm leading-7 text-white/65">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#171222] p-5 sm:p-6">
          <h2 className="text-lg font-bold">¿Tienes alguna consulta?</h2>
          <p className="mt-2 text-sm leading-6 text-white/55">Estamos disponibles para ayudarte con tu solicitud o compra.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:nerdybles@gmail.com" className="rounded-full bg-[#f6c945] px-5 py-2.5 text-sm font-extrabold text-[#211807] transition-colors hover:bg-[#ffda68]">Escribir por correo</a>
            <a href="https://wa.me/573156679984" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/5">Contactar por WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsAndConditions;
