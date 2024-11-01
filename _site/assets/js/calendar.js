async function fetchAndStoreImages() {
  try {
    const response = await fetch('https://www.reddit.com/r/animewallpapers/top/.json?limit=100');
    const data = await response.json();
    const posts = data.data.children;
    const images = posts.map(post => post.data.url);
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    localStorage.setItem('animewallpapers_images', JSON.stringify(images));
    localStorage.setItem('animewallpapers_date', today);
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
  }
}

async function fetchRandomImage() {
  const storedDate = localStorage.getItem('animewallpapers_date');
  const today = new Date().toISOString().split('T')[0];

  if (storedDate !== today) {
    await fetchAndStoreImages();
  }

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