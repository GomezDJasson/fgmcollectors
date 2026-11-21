import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: (
      <>
        <p>La responsable del tratamiento de los datos personales recolectados a través de Nerdybles es:</p>
        <ul>
          <li><strong>Nombre:</strong> Julieth Martinez</li>
          <li><strong>Nombre comercial:</strong> Nerdybles</li>
          <li><strong>Calidad:</strong> Persona natural responsable del emprendimiento.</li>
          <li><strong>Domicilio de contacto:</strong> Calle 64 # 112B-82, Bogotá, Colombia.</li>
          <li><strong>Correo electrónico:</strong> <a href="mailto:nerdybles@gmail.com">nerdybles@gmail.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/573156679984" target="_blank" rel="noreferrer">+57 315 667 9984</a></li>
        </ul>
        <p>En esta política, cuando se mencione a Nerdybles, se entenderá que se hace referencia al emprendimiento administrado por la responsable anteriormente identificada.</p>
      </>
    ),
  },
  {
    title: "2. Objetivo de esta política",
    content: <p>Esta política explica cómo se utilizan, protegen y gestionan los datos personales de las personas que visitan la tienda, consultan productos o realizan solicitudes de compra a través de los canales de contacto de Nerdybles. El tratamiento se realiza de acuerdo con la normativa colombiana aplicable en materia de protección de datos personales, especialmente la Ley 1581 de 2012 y sus disposiciones reglamentarias.</p>,
  },
  {
    title: "3. Datos personales que podemos tratar",
    content: (
      <>
        <p>Dependiendo de la interacción con la tienda, podemos tratar los siguientes datos:</p>
        <ul>
          <li>Nombre completo.</li><li>Número de teléfono o WhatsApp.</li><li>Correo electrónico, cuando sea proporcionado.</li>
          <li>Departamento y ciudad o municipio.</li><li>Dirección de entrega y barrio.</li>
          <li>Indicaciones adicionales para la entrega.</li><li>Información relacionada con los productos consultados o solicitados.</li>
          <li>Información contenida en las comunicaciones que el cliente envíe voluntariamente.</li>
        </ul>
        <p>Nerdybles no solicita intencionalmente datos sensibles para gestionar las compras habituales.</p>
      </>
    ),
  },
  {
    title: "4. Finalidades del tratamiento",
    content: (
      <>
        <p>Los datos personales podrán utilizarse para:</p>
        <ol>
          <li>Atender consultas sobre productos, disponibilidad, precios y características.</li>
          <li>Gestionar solicitudes de compra y pedidos.</li>
          <li>Contactar al cliente para confirmar disponibilidad, precio y condiciones de entrega.</li>
          <li>Coordinar envíos y entregas.</li>
          <li>Atender solicitudes, reclamos, garantías y consultas posteriores a la compra.</li>
          <li>Mantener comunicaciones relacionadas con una solicitud o compra.</li>
          <li>Cumplir obligaciones legales aplicables.</li>
          <li>Prevenir errores, fraudes o usos indebidos de los canales de compra.</li>
        </ol>
        <p>El envío de publicidad o comunicaciones comerciales no relacionadas con una solicitud o compra requerirá la autorización correspondiente cuando sea exigible.</p>
      </>
    ),
  },
  {
    title: "5. Cómo se recopilan los datos",
    content: (
      <>
        <p>Nerdybles puede recibir datos personales mediante el formulario de solicitud de compra disponible en la tienda, WhatsApp, correo electrónico, redes sociales y otros canales de comunicación utilizados voluntariamente por el cliente.</p>
        <h3>Funcionamiento del formulario de compra</h3>
        <p>Cuando una persona completa el formulario de checkout, la tienda prepara un mensaje con la información proporcionada y los productos seleccionados para abrir WhatsApp. El formulario no envía automáticamente el pedido: el cliente puede revisar el mensaje y decide si lo envía.</p>
        <p>Nerdybles no almacena los datos del formulario en una base de datos propia mediante este proceso. Sin embargo, si el cliente envía el mensaje, la información será recibida por Nerdybles a través de WhatsApp y podrá conservarse en las conversaciones y registros asociados a ese servicio.</p>
        <p>El funcionamiento y tratamiento de información por parte de WhatsApp también se encuentran sujetos a las condiciones y políticas de privacidad de Meta.</p>
      </>
    ),
  },
  {
    title: "6. Almacenamiento local del carrito",
    content: <p>La tienda utiliza el almacenamiento local del navegador (<em>localStorage</em>) para recordar los productos agregados al carrito y sus cantidades. Esta funcionalidad no almacena nombres, teléfonos, direcciones, correos electrónicos ni otros datos personales del cliente.</p>,
  },
  {
    title: "7. Compartición de datos personales",
    content: (
      <>
        <p>Nerdybles no comercializa ni vende datos personales de sus clientes.</p>
        <p>Los datos podrán comunicarse a terceros cuando sea necesario para gestionar una solicitud o cumplir una obligación legal. Por ejemplo:</p>
        <ul>
          <li>WhatsApp, cuando el cliente decide enviar su pedido mediante ese servicio.</li>
          <li>Empresas de transporte o mensajería, cuando sea necesario compartir los datos de entrega para despachar una compra.</li>
          <li>Autoridades competentes, cuando exista una obligación legal o un requerimiento válido.</li>
        </ul>
        <p>En estos casos se procurará compartir únicamente la información necesaria para la finalidad correspondiente.</p>
      </>
    ),
  },
  {
    title: "8. Derechos de los titulares",
    content: (
      <>
        <p>De acuerdo con la legislación colombiana, los titulares de los datos personales tienen derecho a:</p>
        <ol>
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>Solicitar prueba de la autorización otorgada para el tratamiento, cuando corresponda.</li>
          <li>Ser informados sobre el uso que se ha dado a sus datos.</li>
          <li>Presentar consultas y reclamos relacionados con el tratamiento de sus datos.</li>
          <li>Solicitar la revocatoria de la autorización o la supresión de sus datos cuando proceda legalmente.</li>
          <li>Acceder gratuitamente a sus datos personales objeto de tratamiento.</li>
          <li>Acudir ante la Superintendencia de Industria y Comercio, una vez agotado el trámite de consulta o reclamo ante el responsable, cuando corresponda.</li>
        </ol>
        <p>Estos derechos podrán ejercerse directamente por el titular o por su representante debidamente acreditado.</p>
      </>
    ),
  },
  {
    title: "9. Cómo ejercer los derechos",
    content: (
      <>
        <p>Para presentar consultas, solicitudes o reclamos relacionados con los datos personales, el titular podrá comunicarse a través de:</p>
        <ul>
          <li><strong>Correo electrónico:</strong> <a href="mailto:nerdybles@gmail.com">nerdybles@gmail.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/573156679984" target="_blank" rel="noreferrer">+57 315 667 9984</a></li>
        </ul>
        <p>La solicitud debe indicar el derecho que desea ejercer y proporcionar información suficiente para identificar al titular y atender la petición. Nerdybles dará trámite a las consultas y reclamos conforme a los términos y procedimientos establecidos en la legislación colombiana.</p>
        <h3>Solicitudes de eliminación de datos y conversaciones</h3>
        <p>Los clientes pueden solicitar la eliminación de sus datos personales o de las conversaciones mantenidas con Nerdybles a través de WhatsApp o del correo electrónico indicado en esta política.</p>
        <p>Nerdybles revisará cada solicitud y, cuando sea procedente, realizará la eliminación de la información correspondiente. Actualmente, las conversaciones de WhatsApp se conservan como parte del historial de atención y no se eliminan periódicamente. Sin embargo, cuando un cliente solicite su eliminación, se podrá gestionar la limpieza de la conversación, siempre que no exista una obligación legal o una razón legítima que requiera conservar determinados registros.</p>
        <p>La eliminación de una conversación del dispositivo o cuenta de Nerdybles no garantiza que desaparezcan las copias que puedan existir en el dispositivo del cliente, en respaldos o en los sistemas de WhatsApp.</p>
      </>
    ),
  },
  {
    title: "10. Seguridad de la información",
    content: <p>Nerdybles adoptará medidas razonables para proteger los datos personales contra pérdida, acceso no autorizado, uso indebido, alteración o divulgación no autorizada. No obstante, ningún medio de transmisión o almacenamiento electrónico puede garantizar seguridad absoluta.</p>,
  },
  {
    title: "11. Conservación de los datos",
    content: <p>Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades para las cuales fueron recolectados y atender las obligaciones legales, comerciales o contractuales aplicables. Las conversaciones de WhatsApp se conservan como parte del historial de atención de Nerdybles. No existe un plazo periódico establecido para eliminarlas, pero los titulares pueden solicitar su eliminación conforme al procedimiento indicado en esta política. Cuando la información deje de ser necesaria y no exista una obligación legal o motivo legítimo para conservarla, se procederá a su eliminación o anonimización, según corresponda.</p>,
  },
  {
    title: "12. Datos de menores de edad",
    content: <p>Nerdybles no solicita intencionalmente datos personales de menores de edad para finalidades comerciales independientes. Cuando resulte necesario tratar datos personales de niños, niñas o adolescentes, se aplicarán las garantías y requisitos especiales establecidos por la legislación colombiana, atendiendo su interés superior y sus derechos fundamentales.</p>,
  },
  {
    title: "13. Modificaciones de esta política",
    content: <p>Nerdybles podrá actualizar esta política cuando existan cambios en sus procesos, canales de atención o disposiciones legales aplicables. La versión vigente estará disponible en el sitio web de Nerdybles, indicando su fecha de actualización.</p>,
  },
  {
    title: "14. Aceptación y autorización",
    content: <p>Al proporcionar voluntariamente sus datos personales y aceptar la política cuando corresponda, el titular autoriza a Julieth Martinez, responsable de Nerdybles, para realizar el tratamiento de sus datos conforme a las finalidades y condiciones aquí descritas. La autorización no limita los derechos que la legislación colombiana reconoce a los titulares de datos personales.</p>,
  },
];

function PrivacyPolicy() {
  return (
    <main className="min-h-[70vh]">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors hover:text-[#c4b5fd]">
          <span aria-hidden="true">←</span> Volver al inicio
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[#a78bfa]">INFORMACIÓN LEGAL</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Política de Tratamiento de Datos Personales</h1>
          <p className="mt-4 text-sm text-white/45">NERDYBLES · Última actualización: 17 de noviembre de 2026</p>
          <div className="mt-6 rounded-2xl border border-[#a78bfa]/20 bg-[#171222] p-5 sm:p-6">
            <p className="text-sm leading-7 text-white/65">En Nerdybles respetamos la privacidad de nuestros clientes. En este documento explicamos qué información podemos recibir, para qué la utilizamos y cómo puedes ejercer tus derechos sobre tus datos personales.</p>
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
          <p className="mt-2 text-sm leading-6 text-white/55">Puedes comunicarte con Nerdybles para ejercer tus derechos o resolver dudas sobre esta política.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:nerdybles@gmail.com" className="rounded-full bg-[#f6c945] px-5 py-2.5 text-sm font-extrabold text-[#211807] transition-colors hover:bg-[#ffda68]">Escribir por correo</a>
            <a href="https://wa.me/573156679984" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/5">Contactar por WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
