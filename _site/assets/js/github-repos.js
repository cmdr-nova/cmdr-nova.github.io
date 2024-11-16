document.addEventListener('DOMContentLoaded', () => {
    const username = 'cmdr-nova'; // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=created&per_page=5`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(repos => {
        const repoList = document.getElementById('github-repos');
        repos.forEach(repo => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `- <a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
          repoList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching GitHub repositories:', error));
  });