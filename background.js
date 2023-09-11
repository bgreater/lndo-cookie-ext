chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.statusCode === 500 && details.url.includes(".lndo.site")) {
      // get domain from url
      const domain = details.url.split("/")[2];
      console.log('500 error detected, removing cookies');
      chrome.cookies.getAll({ domain }, function (cookies) {
        for (const element of cookies) {
          if (!element.name.startsWith("wordpress_")) {
            chrome.cookies.remove({
              url: `http${element.secure ? "s" : ""}://${element.domain}${element.path}`,
              name: element.name,
            });
          }
        }
      });
    }
  },
  {
    urls: [
      "*://*.lndo.site/*"
    ],
    types: ["main_frame"],
  },
  ["responseHeaders"]
);
