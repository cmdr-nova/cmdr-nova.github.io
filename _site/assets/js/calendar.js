async function fetchRandomImage() {
    try {
      const response = await fetch('https://www.reddit.com/r/animewallpapers/top/.json?limit=100');
      const data = await response.json();
      const posts = data.data.children;
      const randomPost = posts[Math.floor(Math.random() * posts.length)];
      const imageUrl = randomPost.data.url;
      document.getElementById('calendar').style.backgroundImage = `url(${imageUrl})`;
      document.getElementById('calendar').style.backgroundSize = 'cover';
      document.getElementById('calendar').style.backgroundPosition = 'center';
    } catch (error) {
      console.error('Error fetching image:', error);
    }
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
  
    // Add empty cells for days before the start of the month
    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
      calendarHTML += '<td></td>';
    }
  
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      if ((day + firstDay - 1) % 7 === 0) {
        calendarHTML += '</tr><tr>';
      }
      calendarHTML += `<td>${day}</td>`;
    }
  
    calendarHTML += '</tr></table>';
    calendar.innerHTML = calendarHTML;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    generateCalendar();
    fetchRandomImage();
  });