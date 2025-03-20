function openNav() {
  const sidenav = document.getElementById("mySidenav");
  if (window.innerWidth <= 480) {
    // On mobile, make the menu take up 100% of the screen width
    sidenav.style.width = "100%";
  } else {
    // On desktop, use a fixed width
    sidenav.style.width = "450px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuToggle");
  const sidenav = document.getElementById("mySidenav");

  if (menuButton && sidenav) {
    // Toggle the sidebar when the menu button is clicked
    menuButton.addEventListener("click", () => {
      if (sidenav.style.width === "450px" || sidenav.style.width === "100%") {
        closeNav(); // Use the existing closeNav function
      } else {
        openNav(); // Use the updated openNav function
      }
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener("click", (event) => {
      if (!sidenav.contains(event.target) && !menuButton.contains(event.target)) {
        closeNav(); // Use the existing closeNav function
      }
    });
  }

  const closeNavButton = document.getElementById("closeNavButton");
  if (closeNavButton) {
    closeNavButton.addEventListener("click", closeNav);
  }
});