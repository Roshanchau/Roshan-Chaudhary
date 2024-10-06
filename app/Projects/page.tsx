"use client";

import React from "react";
import ProjectCard from "../components/ui/project-card";
import { useThemeStore } from "../store/useThemeStore";

const Projects = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`overflow-y-auto grid grid-cols-3 max-h-[500px] 
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 
  p-8 mt-4 mb-10 mx-20 gap-3
  ${theme==="dark"? "[&::-webkit-scrollbar-track]:bg-neutral-800  [&::-webkit-scrollbar-thumb]:bg-neutral-400":""}
  `}
    >
      <ProjectCard title="SpeakPix" description="hello" url="../../autism.mp4" live="hehe" />
      {/* <ProjectCard title="SpeakPix" description="hello" url="ab" live="hehe" /> */}
      {/* <ProjectCard title="SpeakPix" description="hello" url="ab" live="hehe" />
      <ProjectCard title="SpeakPix" description="hello" url="ab" live="hehe" />
      <ProjectCard title="SpeakPix" description="hello" url="ab" live="hehe" /> */}
      {/* <ProjectCard title="SpeakPix" description="hello" url="ab" live="hehe" /> */}

    </div>
  );
};

export default Projects;
