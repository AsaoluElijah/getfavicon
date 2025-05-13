export async function getFavicon(domain, fallbackUrl) {
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
