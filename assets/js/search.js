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
            div.classList.add('search-result-item', 'item');

            if (item.type === 'note' || item.type === 'log') {
              var author = document.createElement('p');
              author.textContent = item.author;

              var date = document.createElement('span');
              date.classList.add('date');
              date.innerHTML = `<i>published</i> ${new Date(item.date).toLocaleDateString()}`;

              var content = document.createElement('div');
              content.innerHTML = item.content.substring(0, 200) + '...'; // Truncate content to 200 characters

              var tags = document.createElement('div');
              tags.classList.add('tags');
              if (item.tags) {
                item.tags.forEach(function(tag) {
                  var tagSpan = document.createElement('span');
                  tagSpan.textContent = `#${tag}`;
                  tags.appendChild(tagSpan);
                });
              }

              var copyLink = document.createElement('a');
              copyLink.href = "javascript:void(0);";
              copyLink.classList.add('small-link');
              copyLink.textContent = 'share';
              copyLink.onclick = function() {
                copyToClipboard(item.url);
              };

              var separator = document.createElement('span');
              separator.textContent = ' | ';

              var viewLink = document.createElement('a');
              viewLink.href = 'https://mkultra.monster' + item.url;
              viewLink.classList.add('small-link');
              viewLink.textContent = 'view';

              var linkContainer = document.createElement('div');
              linkContainer.style.textAlign = 'right';
              linkContainer.appendChild(copyLink);
              linkContainer.appendChild(separator);
              linkContainer.appendChild(viewLink);

              div.appendChild(author);
              div.appendChild(content);
              div.appendChild(date);
              div.appendChild(tags);
              div.appendChild(linkContainer);
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

  function copyToClipboard(url) {
    const fullUrl = 'https://mkultra.monster' + url;
    navigator.clipboard.writeText(fullUrl).then(function() {
      // Show the message
      var message = document.createElement('div');
      message.className = 'clipboard-message';
      message.innerText = 'Copied to clipboard';
      document.body.appendChild(message);

      // Remove the message after 2 seconds
      setTimeout(function() {
        document.body.removeChild(message);
      }, 2000);
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
});