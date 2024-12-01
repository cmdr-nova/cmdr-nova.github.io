document.addEventListener('DOMContentLoaded', () => {
    const postId = window.location.pathname; // Use the post URL as the unique post ID
    const commentsList = document.getElementById('post-comments-list');
    const commentForm = document.getElementById('post-comment-form');
    const commentAuthor = document.getElementById('post-comment-author');
    const commentFediverse = document.getElementById('post-comment-fediverse');
    const commentContent = document.getElementById('post-comment-content');
    const proxyUrl = `https://server.mkultra.monster:3003/post-comments`;
  
    async function fetchComments() {
      try {
        const response = await fetch(`${proxyUrl}?postId=${encodeURIComponent(postId)}`);
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
          console.error('Failed to fetch comments');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
  
    async function submitComment(event) {
      event.preventDefault();
      const author = commentAuthor.value;
      const fediverse = commentFediverse.value;
      const content = commentContent.value;
  
      try {
        const response = await fetch(proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postId, author, fediverse, content })
        });
  
        if (response.ok) {
          commentAuthor.value = '';
          commentFediverse.value = '';
          commentContent.value = '';
          fetchComments(); // Refresh the comments list
        } else {
          console.error('Failed to submit comment');
        }
      } catch (error) {
        console.error('Error submitting comment:', error);
      }
    }
  
    commentForm.addEventListener('submit', submitComment);
    fetchComments(); // Initial fetch of comments
  });