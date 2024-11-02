async function fetchAndStoreImages() {
  try {
    const response = await fetch('https://www.reddit.com/r/animewallpaper/top/.json?limit=100');
    const data = await response.json();
    const posts = data.data.children;
    const images = posts.map(post => post.data.url).filter(url => url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.webp'));
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    localStorage.setItem('animewallpapers_images', JSON.stringify(images));
    localStorage.setItem('animewallpapers_date', today);
    console.log('Images fetched and stored:', images);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

function setRandomImage() {
  const images = JSON.parse(localStorage.getItem('animewallpapers_images'));
  if (images && images.length > 0) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('calendar').style.backgroundImage = `url(${randomImage})`;
    document.getElementById('calendar').style.backgroundSize = 'cover';
    document.getElementById('calendar').style.backgroundPosition = 'center';
    console.log('Random image set:', randomImage);
  } else {
    console.log('No images found in local storage.');
  }
}

async function fetchRandomImage() {
  const storedDate = localStorage.getItem('animewallpapers_date');
  const today = new Date().toISOString().split('T')[0];

  console.log('Stored date:', storedDate);
  console.log('Today\'s date:', today);

  if (storedDate !== today) {
    console.log('Fetching new images...');
    await fetchAndStoreImages();
  } else {
    console.log('Using stored images.');
  }

  // Verify that images are stored in local storage
  const images = JSON.parse(localStorage.getItem('animewallpapers_images'));
  console.log('Stored images:', images);

  setRandomImage();
}

function generateCalendar() {
  const calendar = document.getElementById('calendar');
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let calendarHTML = `<h3>${monthNames[month]} ${year}</h3>`;
  calendarHTML += '<table><tr>';

  // Add day headers
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let day of dayNames) {
    calendarHTML += `<th>${day}</th>`;
  }
  calendarHTML += '</tr><tr>';

  // Generate the days of the month
  const firstDay = new Date(year, month, 1).getDay();
  for (let i = 0; i < firstDay; i++) {
    calendarHTML += '<td></td>';
  }
  for (let day = 1; day <= daysInMonth; day++) {
    if ((firstDay + day - 1) % 7 === 0) {
      calendarHTML += '</tr><tr>';
    }
    calendarHTML += `<td>${day}</td>`;
  }
  calendarHTML += '</tr></table>';

  calendar.innerHTML = calendarHTML;

  // Fetch and set the random image
  fetchRandomImage();
}

// Call generateCalendar to initialize the calendar
generateCalendar();