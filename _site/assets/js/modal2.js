document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById('image-modal');
  
    // Get the image and insert it inside the modal
    const triggerImage = document.getElementById('trigger-image');
    const modalImg = document.getElementById('modal-image');
  
    triggerImage.onclick = function() {
      modal.style.display = 'block';
      modalImg.src = '/img/FelineTemple.gif'; // Change this to the path of the new image
    }
  
    // When the user clicks on the image, close the modal
    modalImg.onclick = function() {
      modal.style.display = 'none';
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  
    // When the user presses the ESC key, close the modal
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  });