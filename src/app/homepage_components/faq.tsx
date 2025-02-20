"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Faq() {
    const faqs = [
        {
            question: `What is BookableSTR?`,
            answer: `BookableSTR is a professional short-term rental management service that specializes in maximizing the profitability of your rental property`
        },
        {
            question: `What fees do you charge for your services?`,
            answer: `BookableSTR is a professional short-term rental management service that specializes in maximizing the profitability of your rental property`
        },
        {
            question: `How do I get started with BookableSTR?`,
            answer: `Getting started is easy! Contact us for a free consultation, discuss your
            goals, and create a customized website plan tailored to your needs`
        },
        {
            question: `How long does it take to get a website ready?`,
            answer: `It takes us about 3-4 weeks.`
        },
    ];

    return (
        <div className="bg-white py-[40px] lg:py-[60px] px-[16px] flex flex-col items-center justify-center">
            <div className="font-quicksand font-bold lg:text-[60px] text-[20px] text-[#121212]">FAQ</div>
            <div className="text-[#121212] font-nunito font-medium text-[12px] mt-[14px] lg:mt-[20px] lg:text-[28px] text-center w-[231px] lg:w-[468px]">
                Still got questions? Here are some frequently asked questions
            </div>
            <div className="mt-[24px] lg:mt-[40px] border-[0.5px] border-[#121212] rounded-[12px] p-[16px] lg:p-[40px] w-full max-w-[820px]">
                {
                    faqs.map((i, index) => (
                        <FaqItem i={i} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

function FaqItem({ i }: { i: any }) {
    const [showanswer, setShowanswer] = useState(false);

    return (
        <div className="text-[#121212] py-[8px] lg:py-[16px] mt-[8px] lg:mt-[24px] first:mt-0 border-b-[0.5px] border-[#121212] last:border-none">
            <div className="flex justify-between items-start gap-[60px]">
                <div className="font-nunito font-semibold text-base lg:text-[28px] w-full">{i.question}</div>
                <ChevronDown
                    onClick={() => setShowanswer(!showanswer)}
                    className={`text-[12px] flex-shrink-0 ${showanswer ? "rotate-180" : "rotate-0"} cursor-pointer`}
                />
            </div>
            <div className={`font-nunito text-[12px] lg:text-[24px] ${showanswer ? "h-max mt-[8px] lg:mt-[16px]" : "h-0 mt-0"} overflow-hidden`}>
                {i.answer}
            </div>
        </div>
    )
}