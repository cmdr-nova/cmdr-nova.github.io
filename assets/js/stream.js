async function fetchMetadata() {
	const response = await fetch("https://ice2.somafm.com/deepspaceone-128-mp3", {
	  headers: {
		"Icy-Metadata": "1"
	  }
	});
  
	if (!response.ok) {
	  console.error("Network response was not ok");
	  return;
	}
  
	const reader = response.body.getReader();
	const decoder = new TextDecoder("utf-8");
	const re = /StreamTitle='(.*?)';/;
  
	while (true) {
	  const { done, value } = await reader.read();
	  if (done) {
		break;
	  }
  
	  const text = decoder.decode(value, { stream: true });
	  const match = re.exec(text);
	  if (match && match[1]) {
		const title = match[1];
		console.log("Extracted title:", title); // Log the extracted title for debugging
		document.querySelector(".player-text").textContent = title; // Use querySelector for class
	  }
	}
  }
  
  fetchMetadata().catch(console.error);
  
  const audio = document.getElementById('internet-radio');
  const volumeSlider = document.getElementById('volume-slider');
  
  volumeSlider.addEventListener('input', (e) => {
	audio.volume = e.target.value;
  });
  
  document.getElementById('player-play').addEventListener('click', () => {
	audio.play();
	document.querySelector('.player-text').classList.add('scroll-animation'); // Add the animation class
  });
  
  document.getElementById('player-stop').addEventListener('click', () => {
	audio.pause();
	audio.currentTime = 0;
	document.querySelector('.player-text').classList.remove('scroll-animation'); // Remove the animation class
  });