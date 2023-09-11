# lndo-cookie-ext
Chrome extension to clear cookies that may cause 500 error so you can refresh the page and get a new cookie.

Here's what the code does:

Listens for completed web requests using chrome.webRequest.onCompleted.addListener().
Checks for a 500 status code and if the URL ends with .lndo.site.
Gets all cookies for the .lndo.site domain.
Removes cookies that don't start with wordpress_.
To load the extension:

Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" (usually a toggle switch in the top right corner).
Click "Load unpacked" and select the directory containing your manifest.json and background.js.
Now, your extension should be active. You can test it by navigating to a .lndo.site URL that produces a 500 error.

Note: Please remember to replace <all_urls> with actual URL patterns that you wish to monitor for better security.

This example is a starting point, so you may want to expand on it for production use.





