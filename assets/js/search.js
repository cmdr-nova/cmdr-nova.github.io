document.addEventListener('DOMContentLoaded', function() {
  var query = new URLSearchParams(window.location.search).get('query');
  if (!query) return;

  fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
      var idx = lunr(function () {
        this.ref('id');
        this.field('title');
        this.field('content');

        data.forEach(function (doc) {
          this.add(doc);
        }, this);
      });

      var results = idx.search(query);
      var resultsContainer = document.getElementById('search-results');
      var paginationContainer = document.getElementById('search-pagination');
      var resultsPerPage = 10;
      var currentPage = 1;

      function renderResults(page) {
        resultsContainer.innerHTML = '';
        var start = (page - 1) * resultsPerPage;
        var end = start + resultsPerPage;
        var paginatedResults = results.slice(start, end);

        if (paginatedResults.length) {
          paginatedResults.forEach(function(result) {
            var item = data.find(d => d.id === result.ref);
            var div = document.createElement('div');
            div.classList.add('search-result-item');

            if (item.type === 'note' || item.type === 'log') {
              div.classList.add('note-log-result'); // Add specific class for notes and logs

              var avatar = document.createElement('img');
              avatar.src = item.avatar;
              avatar.alt = 'Avatar';
              avatar.classList.add('avatar', 'search-avatar'); // Add 'search-avatar' class

              var contentContainer = document.createElement('div');
              contentContainer.classList.add('content-container');

              var author = document.createElement('p');
              author.textContent = `Author: ${item.author}`;

              var date = document.createElement('p');
              date.textContent = `Published: ${new Date(item.date).toLocaleDateString()}`;

              var content = document.createElement('p');
              content.textContent = item.content;

              contentContainer.appendChild(author);
              contentContainer.appendChild(date);
              contentContainer.appendChild(content);

              div.appendChild(avatar);
              div.appendChild(contentContainer);
            } else {
              var title = document.createElement('h2');
              var link = document.createElement('a');
              link.href = item.url; // Use the URL from the metadata
              link.textContent = item.title;
              title.appendChild(link);

              var content = document.createElement('p');
              content.textContent = item.content.substring(0, 200) + '...'; // Limit content to 200 characters

              div.appendChild(title);
              div.appendChild(content);
            }

            resultsContainer.appendChild(div);
          });
        } else {
          resultsContainer.innerHTML = '<p>No results found</p>';
        }

        renderPagination();
      }

      function renderPagination() {
        paginationContainer.innerHTML = '';
        var totalPages = Math.ceil(results.length / resultsPerPage);

        for (var i = 1; i <= totalPages; i++) {
          var pageLink = document.createElement('a');
          pageLink.href = '#';
          pageLink.innerText = i;
          pageLink.classList.add('search-page-link');
          if (i === currentPage) {
            pageLink.classList.add('active');
          }
          pageLink.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage = parseInt(this.innerText);
            renderResults(currentPage);
          });
          paginationContainer.appendChild(pageLink);
        }
      }

      renderResults(currentPage);
    });
});