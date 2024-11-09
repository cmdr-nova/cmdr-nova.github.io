async function fetchSecondLifeOnlineUsers() {
    try {
      const proxyUrl = 'https://server.mkultra.monster:3000/second-life-proxy';
      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'application/xml');
      let onlineUsers = 'N/A';
  
      // Find the 'stats' map
      const statsMap = Array.from(xmlDoc.querySelectorAll('map')).find(map => {
        const key = map.querySelector('key');
        return key && key.textContent === 'stats';
      });
  
      if (statsMap) {
        console.log('Found stats map:', statsMap);
        // Find the 'inworld' key within the 'stats' map
        const keys = statsMap.querySelectorAll('key');
        keys.forEach((key, index) => {
          console.log(`Key: ${key.textContent}`);
          if (key.textContent === 'inworld') {
            const valueElement = key.nextElementSibling;
            console.log('Value Element:', valueElement);
            if (valueElement && valueElement.tagName === 'integer') {
              onlineUsers = valueElement.textContent.trim();
              console.log('Found inworld value:', onlineUsers);
            }
          }
        });
      }
  
      displaySecondLifeOnlineUsers(onlineUsers);
    } catch (error) {
      console.error('Error fetching Second Life online users:', error);
    }
  }
  
  function displaySecondLifeOnlineUsers(onlineUsers) {
    const container = document.getElementById('second-life-online');
    container.innerHTML = `<p align="center"><b>Second Life Users:</b></p> <p align="center">${onlineUsers}</p>`;
  }
  
  fetchSecondLifeOnlineUsers();