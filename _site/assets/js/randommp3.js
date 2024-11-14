async function fetchRandomMP3() {
  const bucketUrl = 'https://ultra-bucket.nyc3.digitaloceanspaces.com'; // Replace with your bucket URL
  const corsProxy = 'https://server.mkultra.monster/spaces-proxy'; // Your CORS proxy URL
  const accessKey = 'DO00JNYRTA9AE6KNZATW'; // Replace with your access key
  const secretKey = 'ehupy+godc3EVxxS9ImSVQfXoAVMFM4Mh311FzhKufI'; // Replace with your secret key

  // Fetch the list of objects in the bucket via the CORS proxy
  const response = await fetch(`${corsProxy}?url=${encodeURIComponent(bucketUrl)}&accessKey=${encodeURIComponent(accessKey)}&secretKey=${encodeURIComponent(secretKey)}`);

  if (!response.ok) {
    console.error('Failed to fetch the list of objects from the bucket');
    return;
  }

  const text = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, 'application/xml');
  const contents = xmlDoc.getElementsByTagName('Contents');

  // Filter the list to include only MP3 files
  const mp3Files = [];
  for (let i = 0; i < contents.length; i++) {
    const key = contents[i].getElementsByTagName('Key')[0].textContent;
    if (key.endsWith('.mp3')) {
      mp3Files.push(key);
    }
  }

  if (mp3Files.length === 0) {
    console.error('No MP3 files found in the bucket');
    return;
  }

  // Select a random MP3 file
  const randomIndex = Math.floor(Math.random() * mp3Files.length);
  const randomMP3 = mp3Files[randomIndex];

  // Set the source of the audio player to the random MP3 file
  const audioPlayer = document.getElementById('mp3-player-audio');
  audioPlayer.src = `${bucketUrl}/${randomMP3}`;
  audioPlayer.play();
}

// Call the function to fetch and play a random MP3
fetchRandomMP3();