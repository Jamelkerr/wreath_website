// Get all images in the gallery
const galleryImages = document.querySelectorAll('.wreath-gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

// Function to open the modal with the clicked image
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = image.src;
  });
});

// Close modal when clicked
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
