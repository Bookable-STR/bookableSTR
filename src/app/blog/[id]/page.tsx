import { notFound } from "next/navigation";
import { Header } from "./header";
import blogimg from "../../../images/blogimg1.png";
import Image from "next/image";
import { Link } from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import BlogCarousel from "./blogcarousel";
import Homepage_CTA from "../../homepage_components/cta";


const blogs = [
    { id: "12dfg32amu24", name: "Blog 1" },
    { id: "98asdhja23aa", name: "Blog 2" },
    { id: "a8djas93ja23", name: "Blog 3" },
];

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

async function BlogPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const blog = await blogs.find((p) => p.id === id);

    if (!blog) return notFound();

    return (
        <div className="">
            <Header name={blog.name} />
            <div className="bg-white py-[40px] px-[16px] lg:p-[100px] flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-[100px]">
                <div className="relative w-full h-[240px] max-w-[360px] lg:h-[360px] rounded-[16px] overflow-hidden">
                    <Image src={blogimg} alt="blog" fill className="object-cover" />
                </div>
                <div className="mt-[40px] lg:mt-0 w-full max-w-[800px] text-[#121212]">
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
            </div>
            <div className="bg-[#121212] py-[40px] px-[16px] lg:p-[100px] flex flex-col lg:flex-row items-center justify-center lg:gap-[100px]">
                <div className="relative w-full h-[240px] max-w-[360px] lg:h-[360px] rounded-[16px] overflow-hidden">
                    <Image src={blogimg} alt="blog" fill className="object-cover" />
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
            </div>
            <div className="bg-white py-[40px] px-[16px] lg:p-[100px] ">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-[100px]">
                    <div className="relative w-full h-[240px] max-w-[360px] lg:h-[360px] rounded-[16px] overflow-hidden">
                        <Image src={blogimg} alt="blog" fill className="object-cover" />
                    </div>
                    <div className="mt-[40px] lg:mt-0 w-full max-w-[800px] text-[#121212]">
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
                </div>
                <div className="w-full flex flex-col gap-[10px] items-center justify-center mt-[40px] lg:mt-[70px]">
                    <div className="font-nunito font-semibold text-[24px]">Share this post</div>
                    <div className="flex items-center justify-center gap-[15px] text-[28px]">
                        <Link className="w-[28px] h-[28px]" />
                        <FaFacebook />
                        <FaLinkedin />
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
            <BlogCarousel />
            <Homepage_CTA />
        </div>
    );
}

export default BlogPage;
