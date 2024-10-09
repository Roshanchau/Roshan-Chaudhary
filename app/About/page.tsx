"use client"

import Image from "next/image";
import photo from "../assets/photo.jpg";
import { AiFillCaretRight } from "react-icons/ai";
import { useThemeStore } from "../store/useThemeStore";

const About = () => {
  const { theme } = useThemeStore();

  return (
    <div className="flex flex-col items-center justify-center p-2 ml-28">
      <div className="grid grid-cols-2 gap-8 p-10 mt-4 items-center justify-center text-lg">
        {/* info */}
        <div className={`flex flex-col items-start   w-[600px] text-[rgb(118,129,158)] p-10 ${theme==="light"? "text-neutral-400": ""}`}>
          <span>
            Hello! My name is{" "}
            <span className={`text-[rgb(95,241,208)] font-medium ${theme==="light"? "text-[rgba(53,176,148,0.59)]": ""}`}>Roshan Chaudhary</span> and
            I am currently learning software development and how things work
            around in the world of computer. I am proficient in frontend as well
            as backend. My primary proficiency is in Javascript.
            You can reach me at <span className={` ${theme==="light"? "text-[rgba(53,176,148,0.59)]": "text-neutral-400"}`}>roshanchau001@gmail.com</span>
          </span>
          {/* technologies I work with */}
            <span className={` text-[rgb(95,241,208)] mt-3 ${theme==="light"? "text-[rgba(53,176,148,0.59)]": ""}`}>
            Here are some technologies that I use recently:
          </span>
          <div className="grid grid-cols-2 gap-16 items-center  mt-3 ml-2 text-[rgb(118,129,158)]">
            <ul className="flex flex-col items-start  justify-center  gap-2">
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `}/>
                Javascript
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `} />
                Typescript
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `} />
                React
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `}/>
                NextJS
              </li>
            </ul>
            <ul className="flex flex-col items-start  justify-center ml-8 gap-2">
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `} />
                Node.js
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `} />
                Express
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `} />
                MySQL
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color={`rgb(95,241,208) ${theme==="light"? "rgb(136,209,192)": ""} `} />
                Mongodb
              </li>
            </ul>
          </div>
        </div>

        {/* photo */}
        <div className={`ml-10 bg-[rgb(133,245,218)]  rounded-full p-3 w-[350px] h-[350px] ${theme==="light"? "bg-[rgba(53,176,148,0.59)]": ""}`}>
          <Image alt="profile" src={photo} width={350} height={350} className="rounded-full bg-cover "/>
        </div>
      </div>
    </div>
  );
};

export default About;
