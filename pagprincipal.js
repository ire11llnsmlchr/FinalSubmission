document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".image-section");
  const cursor = document.querySelector(".custom-cursor");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  

  // Cursor personalizado
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      cursor.textContent = "ver";
    });
    section.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      cursor.textContent = "";
    });

    section.addEventListener("click", () => {
      const img = section.querySelector("img");
      const link = img.dataset.link;
      if (link) {
        window.location.href = link;
      } else {
        modalImage.src = img.src;
        modal.classList.add("show");
      }
    });
  });

  document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("show");
    modalImage.src = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
      modalImage.src = "";
    }
  });
  document.querySelectorAll('.image-section img').forEach(img => {
  img.addEventListener('click', () => {
    const link = img.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});


  // IntersectionObserver actualizado
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("faded");
      } else {
        entry.target.classList.remove("visible");
        entry.target.classList.add("faded");
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => observer.observe(section));

  // Mostrar la primera imagen al cargar o volver arriba
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      sections.forEach((section, index) => {
        if (index === 0) {
          section.classList.add("visible");
          section.classList.remove("faded");
        }
      });
    }
  });

  // Forzar mostrar la primera imagen al inicio
  sections[0].classList.add("visible");
});
