"use client"
import Homepage_CTA from "../homepage_components/cta";
import BlogCarousel from "./blogcarousel";
import { Header } from "./header";
import { client } from "../../../sanity";
import { useEffect, useState } from "react";

export default function BlogPage() {
    const [blogs, setBlogs] = useState<any>();

    useEffect(() => {
        async function fetchBlogs() {
            const query = `*[_type == "post"] {
                _id,
                title,
                slug,
                "mainImage": mainImage.asset->url,
                publishedAt,
                body
            }`;
            const blogs = await client.fetch(query);
            if (blogs.length > 0) {
                setBlogs(blogs)
            }
        }
        fetchBlogs();
    }, []);

    return (
        <div>
            <Header url={blogs && blogs.length > 0 && blogs[0].slug.current} />
            <BlogCarousel blogs={blogs} />
            <Homepage_CTA />
        </div>
    );
}