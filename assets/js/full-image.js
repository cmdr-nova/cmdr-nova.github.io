document.addEventListener('DOMContentLoaded', () => {
    const imageItems = document.querySelectorAll('.image-item img');
    const modal = document.getElementById('full-image-modal');
    const fullImage = document.getElementById('full-image');
    const fullImageCaption = document.getElementById('full-image-caption');
    const closeButton = document.querySelector('.close-button');
    const backButton = document.getElementById('back-button');
  
    imageItems.forEach(item => {
      item.addEventListener('click', () => {
        fullImage.src = item.src;
        fullImage.alt = item.alt;
        fullImageCaption.textContent = item.nextElementSibling.textContent;
        modal.style.display = 'block';
      });
    });
  
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    backButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });