import https from "https";

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

export async function getFavicon(domain, fallbackUrl) {
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
