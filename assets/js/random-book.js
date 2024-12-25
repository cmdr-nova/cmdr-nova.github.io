document.addEventListener('DOMContentLoaded', function() {
    const books = [
      { src: '/img/books/paxcorpus.jpeg', link: 'https://books2read.com/u/3L5GkJ' },
      { src: '/img/books/3632.png', link: 'https://books2read.com/u/3nqnAB' },
      { src: '/img/books/escape_velocity.jpeg', link: 'https://books2read.com/u/mgY2nD' }, 
      { src: '/img/books/netherbound.jpeg', link: 'https://books2read.com/u/4jYazY' },
      { src: '/img/books/totfts.jpeg', link: 'https://books2read.com/u/47vx0R' }, 
    ];
  
    const randomBook = books[Math.floor(Math.random() * books.length)];
    const bookImage = document.getElementById('random-book-image');
    const bookLink = document.getElementById('random-book-link');
  
    if (bookImage && bookLink) {
      bookImage.src = randomBook.src;
      bookLink.href = randomBook.link;
    }
  });