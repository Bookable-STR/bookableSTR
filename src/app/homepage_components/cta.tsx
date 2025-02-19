import { DarkButton } from "../../components/ui/darkButton";

export default function Homepage_CTA() {
    return (
        <div className="bg-white py-[40px] px-[20px] lg:px-[60px] lg:py-[60px] flex flex-col items-center justify-center">
            <div className="uppercase font-bold font-quicksand text-[20px] lg:text-[60px] text-center w-[230px] lg:w-full">
                Ready to Transform Your Property?
            </div>
            <div className="mt-[8px] text-center w-[280px] lg:w-[860px] lg:text-[28px]">
                Let’s transform your short-term rental into a high-performing business with a website built
                from bookableSTR.
            </div>
            <div className="mt-[20px] lg:mt-[40px]">
                <DarkButton text="Contact us Today" classname="font-bold text-[20px] font-nunito" />
            </div>
        </div>
    );
}