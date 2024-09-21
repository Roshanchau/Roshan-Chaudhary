import Image from "next/image";
import photo from "../assets/photo.jpg";
import { AiFillCaretRight } from "react-icons/ai";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 ml-28">
      <div className="grid grid-cols-2 gap-8 p-10 mt-4 items-center justify-center text-lg">
        {/* info */}
        <div className="flex flex-col items-start   w-[600px] text-[rgb(118,129,158)] p-10">
          <span>
            Hello! My name is{" "}
            <span className="text-[rgb(95,241,208)] font-medium">Roshan Chaudhary</span> and
            I am currently learning software development and how things work
            around in the world of computer. I am proficient in frontend as well
            as backend. My primary proficiency is in Javascript.
          </span>
          {/* technologies I work with */}
          <span className=" text-[rgb(95,241,208)] mt-3">
            Here are some technologies that I use recently:
          </span>
          <div className="grid grid-cols-2 gap-16 items-center  mt-3 ml-2 text-[rgb(118,129,158)]">
            <ul className="flex flex-col items-start  justify-center  gap-2">
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                Javascript
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                Typescript
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                React
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                NextJS
              </li>
            </ul>
            <ul className="flex flex-col items-start  justify-center ml-8 gap-2">
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                Node.js
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                Express
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                MySQL
              </li>
              <li className="flex items-center justify-center gap-2">
                <AiFillCaretRight color="rgb(95,241,208)" />
                Mongodb
              </li>
            </ul>
          </div>
        </div>

        {/* photo */}
        <div className="ml-10 bg-[rgb(95,241,208)] rounded-full p-3 w-[350px] h-[350px]">
          <Image alt="profile" src={photo} width={350} height={350} className="rounded-full bg-cover "/>
        </div>
      </div>
    </div>
  );
};

export default About;
