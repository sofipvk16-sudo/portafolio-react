// ═══════════════════════════════════════════════════════
// 📂 DATOS DE LOS PROYECTOS
// Cada objeto alimenta una Card en el inicio y su página de detalle (/proyecto/:id).
// Para agregar un proyecto: sumá un objeto nuevo con un id único y sus imágenes en assets/proyectos.
// En "links", un href vacío ("") no se muestra.
// ═══════════════════════════════════════════════════════

import todoCarnes1 from "../assets/proyectos/todocarnes-1.webp";
import todoCarnes2 from "../assets/proyectos/todocarnes-2.webp";
import todoCarnes3 from "../assets/proyectos/todocarnes-3.png";
import glowa1 from "../assets/proyectos/glowa-1.png";

const projects = [
  {
    id: "todo-carnes",
    number: "01",
    title: "TODO CARNES VP",
    // Texto corto para la card del inicio
    cardCategory: "SISTEMA DE GESTIÓN COMERCIAL Y PEDIDOS · FULL STACK · 2026",
    summary:
      "Plataforma web a medida para una distribuidora de La Plata que centraliza pedidos, clientes, preparación de mercadería, entregas y cuentas corrientes en un solo lugar.",
    cover: todoCarnes2,
    // Datos de la página de detalle
    category: "SISTEMA DE GESTIÓN COMERCIAL Y PEDIDOS",
    role: "Diseño y desarrollo full stack",
    year: "2026",
    type: "Sistema web a medida",
    description: [
      "Todo Carnes VP es una distribuidora de La Plata que abastece a universidades, colegios y comercios, gestionando un alto volumen de pedidos y clientes con distintas necesidades operativas.",
      "Desarrollé una plataforma web a medida para centralizar la toma de pedidos, la administración de clientes, la preparación de mercadería, el seguimiento de entregas y el control de cuentas corrientes.",
      "La plataforma cuenta con un catálogo público que permite explorar los productos sin necesidad de registrarse, con acceso directo a WhatsApp para que nuevos clientes puedan contactar a la empresa y solicitar su alta. Una vez registrados por la administración, los clientes reciben sus credenciales de acceso y pueden operar desde su propia cuenta.",
      "Desde la plataforma, los clientes pueden armar pedidos mediante un carrito de compras, seleccionar productos por kilo o unidad, especificar variantes y aclaraciones, y elegir una fecha de entrega de acuerdo con las reglas del negocio. También pueden consultar el estado de sus pedidos, los pagos registrados y el saldo pendiente de su cuenta corriente.",
      "Por su parte, el panel administrativo permite gestionar usuarios, productos, precios y pedidos, organizados mediante filtros por estado, tipo de cliente y urgencia. Desde allí se registra el peso real de la mercadería para determinar el importe final, se actualizan los estados de preparación y entrega y se administra la información comercial de cada cliente.",
      "El sistema contempla las particularidades de la operatoria: precios registrados al momento de generar cada pedido, validaciones del lado del servidor, reglas para la programación de entregas y control de datos fiscales. De esta manera, integra en una única plataforma procesos que anteriormente se gestionaban mediante llamadas y mensajes dispersos.",
    ],
    highlights: [
      "Catálogo público con acceso directo a WhatsApp para captar nuevos clientes.",
      "Carrito de compras con productos por kilo o unidad, variantes y aclaraciones.",
      "Autenticación, permisos por rol y creación de usuarios desde el panel administrativo.",
      "Programación de entregas con reglas de anticipación validadas en el servidor.",
      "Gestión de pedidos con filtros por estado, tipo de cliente y urgencia.",
      "Registro del pesaje real y cálculo del importe final de cada pedido.",
      "Seguimiento de pedidos desde su creación hasta la entrega.",
      "Gestión de cuentas corrientes, saldos pendientes y estados de pago para clientes y administración.",
      "Administración de productos, precios, perfiles de clientes y datos de facturación.",
      "Validaciones de datos y reglas de negocio para mantener la consistencia de las operaciones.",
    ],
    stack: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS", "PRISMA", "SQLITE"],
    images: [
      { src: todoCarnes1, alt: "Cliente armando un pedido en Todo Carnes VP" },
      { src: todoCarnes2, alt: "Catálogo público de Todo Carnes VP" },
      { src: todoCarnes3, alt: "Pantalla de ingreso de Todo Carnes VP" },
    ],
    links: [
      { label: "VER SITIO ↗", href: "" },
      { label: "CÓDIGO ↗", href: "" },
    ],
  },
  {
    id: "glowa",
    number: "02",
    title: "GLOWA",
    cardCategory: "E-COMMERCE EN SHOPIFY · DISEÑO Y DESARROLLO · 2026",
    summary:
      "Tienda online en Shopify para un equipo de e-commerce que vende colágeno en polvo. Creé la tienda desde cero y desarrollé toda su estética, de la propuesta visual a la presentación de cada producto.",
    cover: glowa1,
    category: "E-COMMERCE · TIENDA ONLINE EN SHOPIFY",
    role: "Diseño y desarrollo de la tienda",
    year: "2026",
    type: "Cliente freelance",
    description: [
      "GLOWA es un equipo de e-commerce que vende colágeno en polvo a través de su tienda online en Shopify.",
      "Me encargué de crear la tienda desde cero en Shopify y de desarrollar toda su estética con una propuesta creativa propia: desde la línea visual de cada página hasta la forma en que se presentan los productos.",
      "Construí las páginas de producto y las landing pages, adaptando el diseño a la plataforma y cuidando que la experiencia de compra funcione bien tanto en mobile como en desktop.",
      "Durante el proyecto trabajé en contacto directo con el equipo, gestionando entregas, tiempos y feedback hasta llegar al resultado final.",
    ],
    highlights: [
      "Creación de la tienda online en Shopify desde cero.",
      "Dirección estética y diseño visual desarrollados por completo por mí.",
      "Páginas de producto y landing pages personalizadas.",
      "Diseño responsive con foco en la experiencia de compra en mobile.",
      "Personalización con HTML, CSS y JavaScript.",
      "Trabajo directo con el equipo: entregas, tiempos y feedback.",
    ],
    stack: ["SHOPIFY", "HTML", "CSS", "JAVASCRIPT"],
    images: [
      { src: glowa1, alt: "Sección de beneficios de la landing de Glowa Beauty" },
    ],
    links: [
      { label: "VER SITIO ↗", href: "" },
    ],
  },
];

export default projects;
