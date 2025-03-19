function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
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
      if (sidenav.style.width === "450px") {
        closeNav(); // Use the existing closeNav function
      } else {
        sidenav.style.width = "450px"; // Open with a different width
      }
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener("click", (event) => {
      if (!sidenav.contains(event.target) && !menuButton.contains(event.target)) {
        closeNav(); // Use the existing closeNav function
      }
    });
  }
});