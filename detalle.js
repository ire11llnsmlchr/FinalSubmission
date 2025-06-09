const modalText = document.getElementById('modalText');
const textContent = document.getElementById('textContent');

const modalImgContainer = document.getElementById('modalImgContainer');
const modalImg = document.getElementById('modalImg');
const closeImgBtn = document.getElementById('closeImgBtn');

document.querySelectorAll('.img-wrapper img').forEach(img => {
  // Mostrar texto descriptivo al hover
  img.addEventListener('mouseenter', () => {
    const description = img.getAttribute('data-description') || 'No description available.';
    textContent.textContent = description;
    modalText.style.display = 'block';
  });

  img.addEventListener('mouseleave', () => {
    modalText.style.display = 'none';
  });

  // Abrir modal con imagen grande
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalImgContainer.style.display = 'flex';
  });
});

// Cerrar modal con la X
closeImgBtn.addEventListener('click', () => {
  modalImgContainer.style.display = 'none';
  modalImg.src = '';
  modalImg.alt = '';
});

// Cerrar modal al hacer clic fuera de la imagen
modalImgContainer.addEventListener('click', (e) => {
  if (e.target === modalImgContainer) {
    modalImgContainer.style.display = 'none';
    modalImg.src = '';
    modalImg.alt = '';
  }
});
