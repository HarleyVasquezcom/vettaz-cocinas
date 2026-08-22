/* ==========================================================================
   VETTAZ COCINAS INTEGRALES - MAIN JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mobile Menu
  initMobileMenu();

  // Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

  // Initialize Swiper Sliders if present
  initSwiperSliders();

  // Initialize GLightbox if present
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }

  // Initialize Contact Form Validation
  initFormValidation();

  // Initialize Category Filter
  initCategoryFilters();

  // Initialize FAQ Accordion
  initFaqAccordion();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }
}

/* Swiper Sliders Initialization */
function initSwiperSliders() {
  if (typeof Swiper !== 'undefined') {
    // Product Gallery Slider
    if (document.querySelector('.product-gallery-slider')) {
      new Swiper('.product-gallery-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        resizeObserver: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    // Testimonials Slider
    if (document.querySelector('.testimonials-slider')) {
      new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination-testimonials',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }
      });
    }
  }
}

/* Contact Form Validation */
function initFormValidation() {
  const forms = document.querySelectorAll('form.needs-validation');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = form.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
          input.style.borderColor = '#E8293A';
        } else {
          input.classList.remove('is-invalid');
          input.style.borderColor = '#E0E0E0';
        }
      });

      if (isValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        setTimeout(() => {
          alert('¡Gracias por contactarnos! Un asesor de Vettaz Cocinas Integrales se comunicará contigo pronto.');
          form.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 1200);
      } else {
        alert('Por favor completa todos los campos requeridos.');
      }
    });
  });
}

/* Category Filter for Products / Gallery */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.filterable-item');

  if (filterBtns.length > 0 && items.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Active button style
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        items.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease forward';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
}

/* FAQ Accordion */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');

      // Close other open accordion items
      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}
