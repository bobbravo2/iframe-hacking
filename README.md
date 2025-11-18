# Iframe DOM Methods Demo

An interactive demonstration of native DOM methods available for same-origin iframe communication and manipulation, including History API navigation.

## Overview

This project demonstrates how parent windows and iframes can interact with each other when they share the same origin. It showcases various native browser APIs and DOM methods that allow bidirectional communication and manipulation between frames, plus iframe navigation using the History API.

## Features

### Parent → Iframe Interactions
- Access iframe's `contentWindow` and `contentDocument`
- Read and modify iframe DOM elements
- Change iframe styles dynamically
- Call functions defined in the iframe
- Query iframe DOM structure
- Add event listeners to iframe elements
- Trigger custom events in the iframe

### Iframe → Parent Interactions
- Access parent window via `window.parent`
- Access top-level window via `window.top`
- Get the iframe element using `window.frameElement`
- Modify parent DOM elements
- Update parent input values
- Call functions defined in the parent
- Query parent DOM structure
- Listen to parent events
- Trigger custom events in the parent

### Navigation & History API
- Navigate between multiple iframe pages
- Parent-controlled iframe navigation
- History API methods: `pushState()`, `replaceState()`, `back()`, `forward()`
- Iframe history management from parent
- `popstate` event handling
- History state preservation across navigation

### Advanced Features
- Window relationship checking
- Origin comparison
- Event propagation across frames
- Cross-frame function calls
- Shared data access between frames

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

Or directly with Node:

```bash
node server.js
```

The server will start on `http://localhost:3000`

## Usage

1. Start the server using `npm start`
2. Open your browser and navigate to `http://localhost:3000`
3. Use the interactive buttons to test different iframe DOM methods
4. Observe the outputs to see the results of each operation
5. Try buttons in both the parent page and inside the iframe content

## Key DOM Methods Demonstrated

### From Parent Window
- `iframe.contentWindow` - Access the iframe's window object
- `iframe.contentDocument` - Access the iframe's document object
- Direct DOM manipulation across frames
- Cross-frame function invocation

### From Iframe
- `window.parent` - Access the parent window
- `window.top` - Access the top-level window
- `window.frameElement` - Get reference to the iframe element itself
- Parent DOM manipulation from inside the iframe

### Navigation & History API
- `iframe.src = url` - Navigate iframe from parent
- `iframe.contentWindow.history.back()` - Navigate iframe history from parent
- `iframe.contentWindow.history.forward()` - Forward in iframe history from parent
- `window.history.pushState()` - Add history entry with state
- `window.history.replaceState()` - Modify current history entry
- `window.history.back()` / `forward()` - Navigate through history
- `popstate` event - Listen for history navigation

### Shared Methods
- `addEventListener()` - Listen to events across frames
- `dispatchEvent()` - Trigger custom events across frames
- `querySelector()` / `getElementById()` - Query DOM across frames
- Direct property access and function calls

## Same-Origin Policy

All these methods work because the parent and iframe share the same origin (protocol, domain, and port). Cross-origin iframes would be restricted by the browser's security model and would require `postMessage()` API for communication.

## Project Structure

```
/iframe-hacking/
├── server.js         # Express server
├── index.html        # Parent page with iframe and controls
├── iframe.html       # Content loaded in the iframe
├── package.json      # Node.js dependencies
└── README.md         # This file
```

## Browser Compatibility

Works in all modern browsers that support:
- ES6+ JavaScript
- Iframe elements
- DOM manipulation APIs
- Custom events

## Security Considerations

This demo is for educational purposes and demonstrates same-origin iframe interactions. In production:
- Always validate and sanitize data passed between frames
- Be cautious with cross-frame DOM manipulation
- Consider using `postMessage()` for more structured communication
- Implement proper Content Security Policy (CSP) headers
- Be aware of clickjacking vulnerabilities with iframes

## License

MIT

