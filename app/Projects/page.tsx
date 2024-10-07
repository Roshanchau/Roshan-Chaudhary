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
  ${
    theme === "dark"
      ? "[&::-webkit-scrollbar-track]:bg-neutral-800  [&::-webkit-scrollbar-thumb]:bg-neutral-400"
      : ""
  }
  `}
    >
      <ProjectCard
        title="SpeakPix"
        description="Developed a interactive mobile application for people with autism , dyslexia and learning issues to help them in social interaction and communication.
         Used React Native as a cross-platform application in mobile as well , flask for backend , NLP for next word prediction with respective image increasing the efficiency of communication."
        url="../../autism.mp4"
        live="hehe"
      />
        <ProjectCard
          title="VirtualSathi (A Mental Health & Well-Being Platform for Students)"
          description="Developed the backend for VirtualSathi, a mental health and well-being platform for students.
           Implemented RESTful APIs using Node.js and Express.js, integrated MySQL with Prisma ORM, and utilized Avien services.
            Awarded Best Futuristic Implementation at IICQUEST for this project."
          url=""
          live="github.com/Roshanchau/momo.coders_iicquest"
        />
        <ProjectCard 
        title="AccountBook" 
        description="Built an account keeper app to track customer expenses for shops and hotels using the MERN stack (MongoDB, Express.js, React, Node.js).
         Implemented features for efficient expense management and data storage."
         url="ab" live="github.com/Roshanchau/AccountBook" />
      <ProjectCard
        title="Moviflix"
        description="Developed an interactive movie ticket booking application using React, Tailwind CSS, and Redux.
         Integrated the OMDb API to display real-time movie information, including titles, ratings, and synopses.
         Implemented state management with Redux to handle user authentication, booking details, and API calls, ensuring a seamless user experience with a responsive UI."
        url="../../movie.mp4"
        live="moviflix-gules.vercel.app"
      />
      <ProjectCard 
      title="Neatflix" 
      description="Developed a Netflix clone using Next.js, NEXTAuth for authentication, Prisma Schema for data modeling, MongoDB as the database, and Tailwind CSS for responsive styling. Implemented Google OAuth and GitHub authentication.
       Gained hands-on experience with Next.js routing and API integration, along with database management using Prisma Schema."
       url="ab" live="github.com/Roshanchau/neatflix-app" />
    </div>
  );
};

export default Projects;
