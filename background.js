chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.statusCode === 500 && details.url.endsWith(".lndo.site")) {
      console.log('500 error detected, removing cookies');
      chrome.cookies.getAll({ domain: ".lndo.site" }, function (cookies) {
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
    urls: ["<all_urls>"],
    types: ["main_frame"],
  },
  ["responseHeaders"]
);
