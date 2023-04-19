# background-color-changer
This chrome extension randomly changes the background of your web page. 

manifest.json: This file serves as the metadata for your Chrome extension. It contains important information such as the extension's name, version, description, permissions, and other configuration details. The browser reads this file to understand the extension's structure, behavior, and how it interacts with websites or the browser itself.

content.js: This is the content script file. Content scripts are JavaScript files that run in the context of a web page and can interact with the DOM (Document Object Model) of that page. In this example, the content.js file listens for a message from the popup script and changes the background color of the web page when the message is received.

popup.html: This file defines the structure and styling of the popup that appears when you click the extension icon in the browser toolbar. It contains the HTML and CSS code for the popup's layout, including the title and the "Change Background Color" button.

popup.js: This is the JavaScript file for the popup. It adds an event listener to the "Change Background Color" button and sends a message to the content script when the button is clicked. It also contains the changeBackgroundColor function that generates a random color and sets it as the new background color.

icon16.png, icon48.png, and icon128.png: These are the icon image files for the extension. They represent the extension in various places such as the browser toolbar, the Extensions page, and the Chrome Web Store. The numbers in the file names (16, 48, and 128) indicate the dimensions of the icons in pixels. Different-sized icons are used in different contexts to ensure that the icons look sharp and clear
