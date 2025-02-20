"use client"
import Homepage_CTA from "../homepage_components/cta";
import BlogCarousel from "./blogcarousel";
import { Header } from "./header";

export default function BlogPage() {
    return (
        <div>
            <Header />
            <BlogCarousel />
            <Homepage_CTA />
        </div>
    );
}