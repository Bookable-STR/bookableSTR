"use client"
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaLink } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function Share() {
    const [copied, setCopied] = useState(false);
    const url = typeof window !== "undefined" ? window.location.href : "";

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    text: "Check this out!",
                    url,
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="w-full flex flex-col gap-[10px] items-center justify-center mt-[40px] lg:mt-[70px] text-text-dark">
            <div className="font-nunito font-semibold text-[24px]">Share this post</div>
            <div className="flex items-center justify-center gap-[15px] text-[28px]">
                <button onClick={() => handleShare()}>
                    {copied ? <IoCheckmarkDoneOutline /> : <FaLink />}
                </button>
                {/* <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
                    <FaFacebook />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
                    <FaLinkedin />
                </a>
                <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share">
                    <FaWhatsapp />
                </a> */}
            </div>
        </div>
    );
}