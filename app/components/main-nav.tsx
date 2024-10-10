"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunMoon , Download } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

interface MainNavProps {
  label: string[];
}

const MainNav: React.FC<MainNavProps> = ({ label }) => {
  const { theme, toggleTheme } = useThemeStore();

  const pathname = usePathname();

  const routes = label.map((route) => ({
    label: route,
  }));

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("white-bg");
    } else {
      document.documentElement.classList.remove("white-bg");
    }
  }, [theme]);

  const handleToggle = () => {
    console.log("toggle clicked");
    // setToggle(!toggle);
    if (theme === "light") {
      document.documentElement.classList.add("white-bg");
    } else {
      document.documentElement.classList.remove("white-bg");
    }
    toggleTheme();
  };

  return (
    <nav className="mx-8 flex items-center space-x-4 lg:space-x-12">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={`/${route.label}`}
          className={cn(
            "text-base font-medium  transition-colors hover:text-neutral-400 cursor-pointer"
          )}
        >
          {route.label}
        </Link>
      ))}
      <Link
        href="https://roshanblogs.hashnode.dev/"
        className={cn(
          "text-base font-medium  transition-colors hover:text-neutral-400 cursor-pointer"
        )}
      >
        Blogs
      </Link>
      <a
        href="../roshan_new_cv.pdf"
        className={cn(
          "text-base font-medium flex flex-row gap-1 transition-colors hover:text-neutral-400 cursor-pointer"
        )}
        download
      >
        Download CV <Download />
      </a>
        <SunMoon
          onClick={handleToggle}
          className={`cursor-pointer transition-colors hover:text-neutral-400 `}
        />
    </nav>  
  );
};

export default MainNav;
