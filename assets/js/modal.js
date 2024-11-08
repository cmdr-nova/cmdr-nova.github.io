document.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM fully loaded and parsed");

  // Get the modals
  var modal = document.getElementById("imageModal");
  var infoModal = document.getElementById("infoModal");

  // Append modals to the body element
  document.body.appendChild(modal);
  document.body.appendChild(infoModal);

  // Ensure modals are hidden on page load
  modal.style.display = "none";
  infoModal.style.display = "none";

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  var nameText = document.getElementById("name");

  console.log("Modals initialized:", modal, infoModal);

  document.querySelectorAll('.waifu img').forEach(img => {
    img.onclick = function(){
      console.log("Image clicked:", this.src);
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;

      // Get the name from the associated <p> tag
      var name = this.nextElementSibling.innerHTML;
      nameText.innerHTML = name;

      // Center the modal in the viewport
      var scrollY = window.scrollY || window.pageYOffset;
      modal.style.top = scrollY + "px";

      // Add class to hide the scrollbar
      document.body.classList.add("modal-open");
    }
  });

  // Close the modals when the ESC key is pressed
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      console.log("ESC key pressed");
      closeModal();
      closeInfoModal();
    }
  });

  // Close the modals when clicking or touching outside the modal content
  modal.addEventListener('click', function(event) {
    if (event.target === modal || event.target === modalImg) {
      console.log("Clicked on image modal");
      closeModal();
    }
  });

  infoModal.addEventListener('click', function(event) {
    if (event.target === infoModal || event.target === infoModal.querySelector('.modal-content')) {
      console.log("Clicked on info modal");
      closeInfoModal();
    }
  });

  // Function to close the image modal
  function closeModal() {
    console.log("Closing image modal");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  // Function to close the info modal
  function closeInfoModal() {
    console.log("Closing info modal");
    infoModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  // Open the info modal when the "HAX░punks" text is clicked
  document.getElementById("haxpunks-title").onclick = function() {
    console.log("HAX░punks title clicked");
    infoModal.style.display = "block";

    // Add class to hide the scrollbar
    document.body.classList.add("modal-open");
  }
});