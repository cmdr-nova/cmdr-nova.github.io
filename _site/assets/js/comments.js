document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestbookForm');
    const commentsList = document.getElementById('commentsList');
    const pagination = document.getElementById('pagination');
    const commentsPerPage = 10;
    let currentPage = 1;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const website = document.getElementById('website').value;
      const message = document.getElementById('message').value;
  
      if (validateInput(name, message)) {
        const comment = { name, website, message, date: new Date().toISOString() };
        postComment(comment);
        form.reset();
      } else {
        alert('Invalid input. Please avoid using sensitive content.');
      }
    });
  
    function validateInput(name, message) {
      const forbiddenWords = ['badword1', 'badword2']; // Add more forbidden words
      for (let word of forbiddenWords) {
        if (name.includes(word) || message.includes(word)) {
          return false;
        }
      }
      return true;
    }
  
    function postComment(comment) {
      fetch('https://server.mkultra.monster/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        renderComments();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    function getComments() {
      fetch('https://server.mkultra.monster/comments')
        .then(response => response.json())
        .then(data => {
          renderComments(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  
    function renderComments(comments = []) {
      const totalPages = Math.ceil(comments.length / commentsPerPage);
      const start = (currentPage - 1) * commentsPerPage;
      const end = start + commentsPerPage;
      const paginatedComments = comments.slice(start, end);
  
      commentsList.innerHTML = '';
      paginatedComments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
          <p><strong>${comment.name}</strong> <a href="${comment.website}" target="_blank">${comment.website}</a></p>
          <p>${comment.message}</p>
          <p><small>${new Date(comment.date).toLocaleString()}</small></p>
        `;
        commentsList.appendChild(commentElement);
      });
  
      renderPagination(totalPages);
    }
  
    function renderPagination(totalPages) {
      pagination.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
          currentPage = i;
          getComments();
        });
        pagination.appendChild(button);
      }
    }
  
    getComments();
  });