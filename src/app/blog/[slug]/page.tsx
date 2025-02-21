import { notFound } from "next/navigation";
import { Header } from "./header";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaLink } from "react-icons/fa6";
import BlogCarousel from "./blogcarousel";
import Homepage_CTA from "../../homepage_components/cta";
import { client } from "../../../../sanity";
import BlockContent from "./portableText";


export async function generateStaticParams() {
    const query = `*[_type == "post"] {
        _id,
        title,
        slug,
        "mainImage": mainImage.asset->url,
        publishedAt,
        body
    }`;
    const blogs = await client.fetch(query);
    return blogs.map((blog: any) => ({
        slug: blog.slug.current,
    }));
}

async function BlogPage({ params }: { params: any }) {
    const { slug } = await params;
    const query = `*[_type == "post"] {
        _id,
        title,
        slug,
        "mainImage": mainImage.asset->url,
        publishedAt,
        body
    }`;
    const blogs = await client.fetch(query);
    const blog = await blogs.find((p: any) => p.slug.current === slug);

    if (!blog) return notFound();

    return (
        <div className="">
            <Header name={blog.title} date={new Date(blog.publishedAt).toLocaleDateString("en-US", { dateStyle: 'full' })} />
            {/* <div className="bg-white py-[40px] px-[16px] lg:p-[100px] flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-[100px]">
                <div className="relative w-full h-[240px] max-w-[360px] lg:h-[360px] rounded-[16px] overflow-hidden">
                    <Image src={blog.mainImage} alt="blog" fill className="object-cover" />
                </div>
                <div className="mt-[40px] lg:mt-0 w-full max-w-[800px] text-[#121212]">
                    <div className="w-full text-start font-bold font-quicksand text-[20px] lg:text-[36px]">
                        HEADER TEXT TITLE GOES HERE
                    </div>
                    <div className="mt-[14px] font-nunito font-medium text-base lg:text-[20px]">
                        <PortableText value={blog.body} />
                    </div>
                </div>
            </div> */}
            {/* <div className="bg-[#121212] py-[40px] px-[16px] lg:p-[100px] flex flex-col lg:flex-row items-center justify-center lg:gap-[100px]">
                <div className="relative w-full h-[240px] max-w-[360px] lg:h-[360px] rounded-[16px] overflow-hidden">
                    <Image src={blog.mainImage} alt="blog" fill className="object-cover" />
                </div>
                <div className="mt-[40px] lg:mt-0 w-full max-w-[800px] text-white">
                    <div className="w-full text-start font-bold font-quicksand text-[20px] lg:text-[36px]">
                        HEADER TEXT TITLE GOES HERE
                    </div>
                    <div className="mt-[14px] font-nunito font-medium text-base lg:text-[20px]">
                        Body text of the article goes here. Body text of the article
                        goes here. Body text of the article goes here. Body text of the
                        article goes here. Body text of the article goes here. Body text
                        of the article goes here. Body text of the article goes here. Body
                        text of the article goes here. Body text of the article goes here.
                        Body text of the article goes here. Body text of the article goes
                        here.
                    </div>
                </div>
            </div> */}
            <div className="bg-white py-[40px] px-[16px] lg:p-[100px] ">
                <div className="flex flex-col items-center justify-center lg:gap-[100px]">
                    <div className="relative w-full h-[240px] max-w-[360px] lg:max-w-[800px] lg:h-[360px] rounded-[16px] overflow-hidden">
                        <Image src={blog.mainImage} alt="blog" fill className="object-cover" />
                    </div>
                    <div className="mt-[40px] lg:mt-0 w-full max-w-[800px] text-[#121212]">
                        {/* <div className="w-full text-start font-bold font-quicksand text-[20px] lg:text-[36px]">
                            HEADER TEXT TITLE GOES HERE
                        </div> */}
                        <div className="mt-[14px] font-nunito font-medium text-base lg:text-[20px]">
                            <BlockContent value={blog.body} />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[10px] items-center justify-center mt-[40px] lg:mt-[70px]">
                    <div className="font-nunito font-semibold text-[24px]">Share this post</div>
                    <div className="flex items-center justify-center gap-[15px] text-[28px]">
                        <FaLink />
                        <FaFacebook />
                        <FaLinkedin />
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
            <BlogCarousel slug={slug} />
            <Homepage_CTA />
        </div>
    );
}

export default BlogPage;
