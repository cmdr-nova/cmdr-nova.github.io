document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guestbookForm');
  const commentsList = document.getElementById('commentsList');
  const pagination = document.getElementById('pagination');
  const commentsPerPage = 20;
  let currentPage = 1;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const website = document.getElementById('website').value || ''; // Handle optional website
    const message = document.getElementById('message').value;

    const comment = { name, website, message, date: new Date().toISOString() };
    postComment(comment);
    form.reset();
  });

  function postComment(comment) {
    fetch('https://server.mkultra.monster:5001/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        console.log('Success:', data);
        renderComments();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  function getComments() {
    fetch('https://server.mkultra.monster:5001/comments')
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
        <p><strong>${comment.name}</strong> ${comment.website ? `<a href="${comment.website}" target="_blank">${comment.website}</a>` : ''}</p>
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