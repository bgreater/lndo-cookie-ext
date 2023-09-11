# lndo-cookie-ext
Chrome extension to clear cookies that may cause 500 error so you can refresh the page and get a new cookie.

Here's what the code does:

* Listens for completed web requests using chrome.webRequest.onCompleted.addListener().
* Checks for a 500 status code and if the URL ends with .lndo.site.
* Gets all cookies for the .lndo.site domain.
* Removes cookies that don't start with wordpress_ (so as to keep you logged into wp-admin).

## Installation
To load the extension:

1. Open Chrome and navigate to chrome://extensions/ or brave://extensions/ if you use brave.
1. Enable "Developer mode" (usually a toggle switch in the top right corner).
1. Click "Load unpacked" and select the directory containing your manifest.json and background.js.
1. Now, your extension should be active. You can test it by navigating to a *.lndo.site URL that produces a 500 error and simply refreshing the page or toggle the extension option of `Enable Auto-refresh` and you shouldn't see 500 errors.
