function copyToClipboard(url) {
    const fullUrl = 'https://mkultra.monster' + url;
    navigator.clipboard.writeText(fullUrl).then(function() {
      // Show the message
      var message = document.createElement('div');
      message.className = 'clipboard-message';
      message.innerText = 'Copied to clipboard';
      document.body.appendChild(message);

      // Remove the message after 2 seconds
      setTimeout(function() {
        document.body.removeChild(message);
      }, 2000);
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }