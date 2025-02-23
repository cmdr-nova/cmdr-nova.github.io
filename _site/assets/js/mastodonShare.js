function mastodonShareButtonClick(e) {
    const btn = e.target;
    let href = document.URL;
    let title = document.title;
    if ('data-title' in btn.attributes && 'data-href' in btn.attributes) {
        href = btn.attributes['data-href'].value;
        title = btn.attributes['data-title'].value;
    }
    const mastodonInstance = prompt(`Sharing "${href}"\n\nPlease enter your Mastodon instance (e.g. mastodon.social) for sharing, choom!`);
    if (mastodonInstance == null) {
        return;
    }
    if (mastodonInstance.indexOf('/') === -1) {
        window.open('https://' + mastodonInstance + '/share?text=' + encodeURIComponent(title) + ' ' + encodeURIComponent(href), "_blank");
    } else {
        alert("Please enter your instance without https:// or other paths!");
    }
}

addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button.mastodon-share');
    buttons.forEach((btn) => {
        btn.classList.add('post-buttons'); // Add the post-buttons class
        btn.innerHTML = 'Share on Mastodon <i class="ph ph-mastodon-logo"></i>'; // Set the button HTML
        btn.addEventListener('click', mastodonShareButtonClick);
    });
});