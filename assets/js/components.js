/* ==========================================================================
   VETTAZ COCINAS INTEGRALES - REUSABLE UI COMPONENTS
   ========================================================================== */

// Helper to inject consistent header across subpages if needed dynamically or standalone
const VettazComponents = {
  getWhatsAppButton: function() {
    return `
      <a href="https://wa.me/573000000000?text=Hola%20Vettaz%20Cocinas,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20cotizaci%C3%B3n."
         class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
    `;
  }
};
