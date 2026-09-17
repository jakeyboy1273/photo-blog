import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { getCleanSlug } from "../utils/slug";

export async function GET(context) {
  const posts = await getCollection("stories");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${base}/stories/${getCleanSlug(post.id)}/`,
    })),
  });
}
