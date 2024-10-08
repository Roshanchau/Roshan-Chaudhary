import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useThemeStore } from "../store/useThemeStore";

const Hero = () => {
  const { theme } = useThemeStore(); 
  console.log("this is theme hai",theme);   
  return (
    <div className="flex-col items-center justify-center text-left p-10">
      <div className="leading-[60px]">
        <h2 className={`font-normal text-xl text-[rgb(95,241,208)] mb-4 ${theme==="light"? "text-[rgba(53,176,148,0.59)]": ""}`}>
          Hi, my name is
        </h2>
        <h1 className={`text-[60px] mb-3 text-[rgb(204,214,246)] ${theme==="light"? "text-neutral-500": ""}`}>Roshan Chaudhary.</h1>
        <h1 className={`text-[55px] text-[rgb(136,146,176)] ${theme==="light"? "text-[rgba(53,176,148,0.59)]": ""}`}>
          Aspiring Software Developer.
        </h1>

      </div>
        {/* description */}
        <p className={`mt-6 w-[500px] text-[rgb(118,129,158)] text-base font-medium ${theme==="light"? "text-neutral-400": ""}`}>
          I&apos;m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I&apos;m focused on
          building accessible, human-centered products.
        </p>

        <div className={`flex flex-row items-center mt-8 text-[rgb(204,214,246)] gap-3 cursor-pointer ${theme==="light"? "text-neutral-900": ""}`}>
          <p>See More About Me</p>
          <Link href={`/About`}>
          <span className="animate-move-arrow"><FaArrowRight /></span></Link>
        </div>
    </div>
  );
};

export default Hero;
