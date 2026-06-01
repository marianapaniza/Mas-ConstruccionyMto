// ── DATA ──────────────────────────────────────────────────────────────
const services = [
  { id:1, cat:"remodelacion", emoji:"🏠", name:"Remodelación Integral de Cocina", desc:"Modernizamos tu cocina: mesones, muebles, iluminación y acabados profesionales.", time:"7-12 días", rating:"4.9", price:2800000, badge:"popular", badgeLabel:"+ Pedido" },
  { id:2, cat:"construccion", emoji:"🏗️", name:"Construcción de Cuarto Adicional", desc:"Ampliación de espacios en mampostería o drywall, con acabados y pintura incluida.", time:"15-25 días", rating:"4.8", price:4500000, badge:"", badgeLabel:"" },
  { id:3, cat:"remodelacion", emoji:"🚿", name:"Remodelación de Baño Completo", desc:"Cerámica, sanitarios, grifería, iluminación y pintura en un solo paquete.", time:"5-8 días", rating:"5.0", price:1800000, badge:"popular", badgeLabel:"+ Pedido" },
  { id:4, cat:"reparacion", emoji:"🔧", name:"Plomería y Reparación de Fugas", desc:"Detección y reparación de fugas, cambio de tuberías, instalación de sanitarios.", time:"1-2 días", rating:"4.7", price:350000, badge:"", badgeLabel:"" },
  { id:5, cat:"montaje", emoji:"🔩", name:"Montaje y Armado de Muebles", desc:"Armado profesional de todo tipo de muebles: clósets, cocinas, escritorios y más.", time:"1 día", rating:"4.9", price:150000, badge:"", badgeLabel:"" },
  { id:6, cat:"reparacion", emoji:"⚡", name:"Instalaciones Eléctricas", desc:"Puntos nuevos, cambio de tableros, instalación de luminarias y tomas corriente.", time:"1-3 días", rating:"4.8", price:280000, badge:"", badgeLabel:"" },
  { id:7, cat:"construccion", emoji:"🪟", name:"Instalación de Ventanas y Puertas", desc:"Instalación de marcos, puertas macizas, ventanas de aluminio y vidrio templado.", time:"2-4 días", rating:"4.6", price:600000, badge:"", badgeLabel:"" },
  { id:8, cat:"remodelacion", emoji:"🎨", name:"Pintura Interior y Exterior", desc:"Preparación de superficies, resane, pintura en stucco o lisa. Colores a elección.", time:"2-5 días", rating:"4.9", price:45000, badge:"oferta", badgeLabel:"Desde $/m²" },
  { id:9, cat:"montaje", emoji:"🖼️", name:"Instalación de Pisos Laminados", desc:"Instalación de pisos flotantes, laminados o vinílicos. Material no incluido.", time:"1-3 días", rating:"4.7", price:35000, badge:"", badgeLabel:"" },
];
/**
 * main.js
 * Lógica global para la navegación y comportamientos del sitio
 */

// Función para navegación a servicios (opcional si prefieres tenerla centralizada)
function irAServicios() {
    window.location.href = 'servicios.html';
}

// Función para scroll suave (puedes usarla aquí o dejarla inline en el HTML)
function irACotizador() {
    const cotizador = document.getElementById('cotizador');
    if (cotizador) {
        cotizador.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn("La sección de cotizador no existe en esta página.");
    }
}