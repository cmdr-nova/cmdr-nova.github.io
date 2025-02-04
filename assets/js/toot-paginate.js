document.addEventListener('DOMContentLoaded', () => {
    const tootsContainer = document.getElementById('toots-container');
    const toots = tootsContainer.getElementsByClassName('toots');
    const nextPageButton = document.getElementById('next-page');
    const prevPageButton = document.getElementById('prev-page');
    const tootsPerPage = 5;
    let currentPage = 1;
  
    function showToots(page) {
      const start = (page - 1) * tootsPerPage;
      const end = start + tootsPerPage;
      for (let i = 0; i < toots.length; i++) {
        if (i >= start && i < end) {
          toots[i].style.display = 'block';
        } else {
          toots[i].style.display = 'none';
        }
      }
      updateButtons();
    }
  
    function updateButtons() {
      if (currentPage === 1) {
        prevPageButton.style.display = 'none';
      } else {
        prevPageButton.style.display = 'inline';
      }
  
      if (currentPage * tootsPerPage >= toots.length) {
        nextPageButton.style.display = 'none';
      } else {
        nextPageButton.style.display = 'inline';
      }
    }
  
    window.nextPage = function() {
      currentPage++;
      showToots(currentPage);
    };
  
    window.prevPage = function() {
      currentPage--;
      showToots(currentPage);
    };
  
    // Initialize the first page
    showToots(currentPage);
  });