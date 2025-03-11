import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bookablestr.com/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://bookablestr.com/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://bookablestr.com/contact-us",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://bookablestr.com/service",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://bookablestr.com/blog",
      lastModified: new Date().toISOString(),
    },
  ];
}
