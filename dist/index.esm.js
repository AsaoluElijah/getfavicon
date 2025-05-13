import https from 'https';

function checkFavicon(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      const type = res.headers["content-type"] || "";
      if (res.statusCode === 200 && type.includes("image")) resolve(url);
      else resolve(null);
    });

    req.on("error", () => resolve(null));
    req.setTimeout(5000, () => {
      req.abort();
      resolve(null);
    });
  });
}

async function getFavicon$2(domain, fallbackUrl) {
  const urls = [
    `https://${domain}/favicon.ico`,
    `https://www.${domain}/favicon.ico`,
  ];

  for (const url of urls) {
    const found = await checkFavicon(url);
    if (found) return found;
  }

  return fallbackUrl;
}

async function getFavicon$1(domain, fallbackUrl) {
  const urls = [
    `https://${domain}/favicon.ico`,
    `https://www.${domain}/favicon.ico`,
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: "GET" });

      if (res.ok && res.headers.get("content-type")?.includes("image")) {
        return url;
      }
    } catch (err) {
      // ignore
    }
  }

  return fallbackUrl;
}

const getFavicon =
  typeof window === "undefined" ? getFavicon$2 : getFavicon$1;

export { getFavicon };
