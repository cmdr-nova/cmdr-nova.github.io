// List of image filenames in the /img/haxpunks/ directory
const images = [
    "haxPunks_0001.png",
    "haxPunks_0002.png",
    "haxPunks_0003.png",
    "haxPunks_0004.png",
    "haxPunks_0005.png",
    "haxPunks_0006.png",
    "haxPunks_0007.png",
    "haxPunks_0008.png",
    "haxPunks_0009.png",
    "haxPunks_0010.png",
    "haxPunks_0011.png",
    "haxPunks_0012.png",
    "haxPunks_0013.png",
    "haxPunks_0014.png",
    "haxPunks_0015.png",
    "haxPunks_0016.png",
    "haxPunks_0017.png",
    "haxPunks_0018.png",
    "haxPunks_0019.png",
    "haxPunks_0020.png",
    "haxPunks_0021.png",
    "haxPunks_0022.png",
    "haxPunks_0023.png",
    "haxPunks_0024.png",
    "haxPunks_0025.png",
    "haxPunks_0026.png",
    // Add more image filenames as needed
  ];
  
  // Function to select a random image
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  // Function to display the random image in the sidebar
  function displayRandomImage() {
    const randomImage = getRandomImage();
    const imageContainer = document.getElementById('random-image-container');
    const imageElement = document.createElement('img');
    imageElement.src = `/img/haxpunks/${randomImage}`;
    imageElement.alt = 'Random Haxpunks Image';
    imageElement.style.maxWidth = '100%';
    imageElement.style.height = 'auto';
  
    imageContainer.appendChild(imageElement);
  }
  
  // Call the function to display the random image
  displayRandomImage();