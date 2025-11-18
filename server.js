const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (for any CSS, JS, or other assets)
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the iframe content
app.get('/iframe.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'iframe.html'));
});

// Route for the second iframe page
app.get('/iframe-page2.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'iframe-page2.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Open your browser and navigate to the URL above to see the iframe DOM demo');
  console.log('Available pages:');
  console.log('  - / (main page with iframe)');
  console.log('  - /iframe.html (iframe page 1)');
  console.log('  - /iframe-page2.html (iframe page 2)');
});

