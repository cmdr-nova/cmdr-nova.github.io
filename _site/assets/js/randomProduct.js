document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('random-product');
  
    fetch('https://server.mkultra.monster:8444/latest-product')
      .then(response => response.json())
      .then(product => {
        console.log('Fetched product:', product); // Debugging output
  
        // Clear the container before adding the new product
        productContainer.innerHTML = '';
  
        const productElement = document.createElement('div');
        productElement.classList.add('product');
  
        const productLink = document.createElement('a');
        if (product.link) {
          console.log('Product link:', product.link); // Debugging output
          productLink.href = `https://marketplace.secondlife.com${product.link}`;
        } else {
          console.error('Product link is undefined'); // Debugging output
        }
        productLink.target = '_blank';
  
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
  
        // Derive the item title from the link if the title is not available
        const derivedTitle = product.link.split('/').slice(2, -1).join(' ').replace(/-/g, ' ');
  
        // Encase the first word in the title in brackets
        const titleParts = (product.title || derivedTitle).split(' ');
        const styledTitle = `[${titleParts[0]}] ${titleParts.slice(1).join(' ')}`;
  
        const productTitle = document.createElement('h1');
        productTitle.classList.add('title2');
        productTitle.textContent = styledTitle;
  
        productLink.appendChild(productImage);
        productElement.appendChild(productLink);
        productElement.appendChild(productTitle);
  
        productContainer.appendChild(productElement);
      })
      .catch(error => console.error('Error fetching latest product:', error));
  });