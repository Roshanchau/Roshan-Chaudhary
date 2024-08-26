import Image from "next/image";
import photo from "../assets/photo.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 ml-28">

    <div className="grid grid-cols-2 gap-8 p-10 mt-4 items-center justify-center">
      {/* info */}
      <div className="flex flex-col items-center  w-[600px] text-[rgb(204,214,246)] p-10">
        <span>
        Hello! My name is Roshan Chaudhary and I am currently learning software
        development and how things work around in the world of computer. I am
        proficient in frontend as well as backend. My proficiency is javascript.</span><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text everI will try fix you. 
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release 
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>

      {/* photo */}
      <div className="ml-10">
        <Image alt="profile" src={photo} width={350} height={350} />
      </div>
    </div>
    </div>
  );
};

export default About;
