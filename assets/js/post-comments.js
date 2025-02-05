document.addEventListener('DOMContentLoaded', () => {
  console.log('post-comments.js loaded'); // Debugging output

  const commentsList = document.getElementById('post-comments-list');
  const commentForm = document.getElementById('post-comment-form');
  const commentAuthor = document.getElementById('post-comment-author');
  const commentFediverse = document.getElementById('post-comment-fediverse');
  const commentContent = document.getElementById('post-comment-content');
  const postId = window.location.pathname; // Use the current path as the postId
  const proxyUrl = `https://server.mkultra.monster:3003/post-comments?postId=${encodeURIComponent(postId)}`;

  async function fetchComments() {
    try {
      const response = await fetch(proxyUrl);
      if (response.ok) {
        const comments = await response.json();
        commentsList.innerHTML = '';
        comments.forEach(comment => {
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          let fediverseLink = '';
          if (comment.fediverse) {
            const fediverseParts = comment.fediverse.split('@').filter(Boolean);
            if (fediverseParts.length === 2) {
              fediverseLink = `<p><a href="https://${fediverseParts[1]}/@${fediverseParts[0]}" target="_blank">${comment.fediverse}</a></p>`;
            } else if (fediverseParts.length === 1) {
              fediverseLink = `<p><a href="https://${fediverseParts[0]}/${fediverseParts[0]}" target="_blank">${comment.fediverse}</a></p>`;
            } else {
              fediverseLink = `<p>${comment.fediverse}</p>`;
            }
          }
          commentElement.innerHTML = `
            <p><strong>${comment.author}</strong> <em>${new Date(comment.timestamp).toLocaleString()}</em></p>
            ${fediverseLink}
            <p>${comment.content}</p>
          `;
          commentsList.appendChild(commentElement);
        });
      } else {
        console.error('Failed to fetch comments', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }

  async function submitComment(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://server.mkultra.monster:3003/post-comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: commentAuthor.value,
          fediverse: commentFediverse.value,
          content: commentContent.value,
          postId: postId // Use the current path as the postId
        })
      });
      if (response.ok) {
        console.log('Comment submitted successfully');
        const newComment = await response.json();
        commentAuthor.value = '';
        commentFediverse.value = '';
        commentContent.value = '';

        // Create and append the new comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        let fediverseLink = '';
        if (newComment.fediverse) {
          const fediverseParts = newComment.fediverse.split('@').filter(Boolean);
          if (fediverseParts.length === 2) {
            fediverseLink = `<p><a href="https://${fediverseParts[1]}/@${fediverseParts[0]}" target="_blank">${newComment.fediverse}</a></p>`;
          } else if (fediverseParts.length === 1) {
            fediverseLink = `<p><a href="https://${fediverseParts[0]}/${fediverseParts[0]}" target="_blank">${newComment.fediverse}</a></p>`;
          } else {
            fediverseLink = `<p>${newComment.fediverse}</p>`;
          }
        }
        commentElement.innerHTML = `
          <p><strong>${newComment.author}</strong> <em>${new Date(newComment.timestamp).toLocaleString()}</em></p>
          ${fediverseLink}
          <p>${newComment.content}</p>
        `;
        commentsList.appendChild(commentElement);
      } else {
        const errorData = await response.json();
        if (errorData.error) {
          alert(errorData.error); // Display the error message in a dialog popup
        } else {
          console.error('Failed to submit comment', response.status, response.statusText);
        }
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  }

  commentForm.addEventListener('submit', submitComment);
  fetchComments(); // The initial fetch (that's so fetch)
});