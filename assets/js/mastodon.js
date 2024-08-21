const rss_url = 'https://mkultra.monster/@cmdr_nova.rss';
let mastoDiv = document.getElementById('mastodon');

fetch(rss_url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
        const items = data.querySelectorAll("item");
        const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long'});
        const dayFormatter = new Intl.DateTimeFormat('en', { day: 'numeric'});
        const yearFormatter = new Intl.DateTimeFormat('en', { year: 'numeric'});
        items.forEach(el => {
            let content = el.querySelector("description").innerHTML.trim();
            if (content.includes("Content warning:")) {
                return;
            }
            let date = new Date(el.querySelector("pubDate").innerHTML);
            let article = document.createElement('article');
            let month = monthFormatter.format(date);
            let day = dayFormatter.format(date);
            let year = yearFormatter.format(date);
            article.innerHTML = `<h3>${month} ${day}, ${year}</h3>`;
            article.innerHTML += decodeEntity(content);

            let media = el.querySelector("content");
            if (media !== null) {
                let mediaUrl = media.getAttribute("url");
                if (mediaUrl !== null) {
                    article.innerHTML += `<img src="${mediaUrl}" />`;
                }
            }
            
            let link = document.createElement('a');
            link.target = '_blank';
            link.href = el.querySelector("link").innerHTML;
            link.appendChild(article);
            mastoDiv.appendChild(link);    
        });
        
    });

function decodeEntity(inputStr) {
    var textarea = document.createElement("textarea");
    textarea.innerHTML = inputStr;
    return textarea.value;
}