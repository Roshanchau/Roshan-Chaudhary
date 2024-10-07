"use client";
import React from "react";
import { useEffect , useState , useRef } from "react";
import { useThemeStore } from "@/app/store/useThemeStore";
import { project } from "@/app/lib/types";

const ProjectCard: React.FC<project> = ({ url, title, description, live }) => {
  const { theme } = useThemeStore();
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  console.log(theme)

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleButtonClick = () => {
    const formattedUrl = live.startsWith('http') ? live : `https://${live}`;
    window.open(formattedUrl, '_blank');
  };

  return (
    <div
      className={`cursor-pointer group relative flex flex-col my-6 ${theme === "dark" ? "bg-[rgb(32,32,39)]" : "bg-white"}  shadow-sm border 
      ${ theme === "dark" ? "border-neutral-800" : "border-slate-200"}
      ${theme === "dark" ? "hover:shadow-gray-500" : "hover:shadow-lg"}
  rounded-lg w-83 h-auto
  transition-shadow duration-300`}
    >
      <div 
      className="relative h-56 m-2.5 overflow-hidden text-white  rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <video ref={videoRef} className="h-full w-full rounded-lg" controls muted>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4">
        <h6
          className={`mb-2  text-xl font-semibold ${theme === "dark" ? "text-[rgb(187,232,222)]" : "text-neutral-800"}`}
        >
          {title}
        </h6>
        <p
          className={` leading-normal font-light ${theme === "dark" ? "text-[rgb(118,129,158)]" : "text-neutral-400"}`}
        >
          {description}
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
        onClick={handleButtonClick}
          className={`rounded-md bg-[rgb(185,232,221)] py-2 px-4 border border-transparent text-center text-sm  w-20
           text-neutral-600 transition-all shadow-md hover:shadow-lg
            hover:text-neutral-200
        focus:bg-neutral-500 focus:shadow-none active:bg-neutral-500 hover:bg-neutral-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button`}
        >
          Link
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
