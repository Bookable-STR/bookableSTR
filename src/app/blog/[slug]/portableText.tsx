"use client";
import { client } from "../../../../sanity";
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";

export default function BlockContent({ value }: { value: any }) {
    const builder = imageUrlBuilder(client);

    const components: PortableTextComponents = {
        types: {
            image: ({ value }) => {
                if (!value?.asset?._ref && !value?.asset?.url) return null; // ✅ Skip rendering if no image

                return (
                    <div className="my-4">
                        <Image
                            src={builder.image(value).url()}
                            alt={value.alt || "Blog image"}
                            width={800} // Adjust width
                            height={500} // Adjust height
                            className="rounded-lg mx-auto"
                        />
                    </div>
                );
            },
        },
        block: {
            normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>, // Spacing for paragraphs
            h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-medium my-2">{children}</h3>,
        },
        marks: {
            strong: ({ children }) => <strong className="font-bold">{children}</strong>,
            em: ({ children }) => <em className="italic">{children}</em>,
            link: ({ value, children }) => (
                <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {children}
                </a>
            ),
        },
    };

    return <PortableText value={value} components={components} />;
}
