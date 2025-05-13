import { getFavicon as getNodeFavicon } from "./node.js";
import { getFavicon as getBrowserFavicon } from "./browser.js";

export const getFavicon =
  typeof window === "undefined" ? getNodeFavicon : getBrowserFavicon;
