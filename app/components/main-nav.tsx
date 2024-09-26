"use client"

import {  useState } from "react";
import {cn} from "../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunMoon } from 'lucide-react';
import { useThemeStore } from "../store/useThemeStore";


interface MainNavProps{
    label: string[];
}

const MainNav: React.FC<MainNavProps>=({
    label
})=>{
    const { theme, toggleTheme } = useThemeStore();

    const pathname= usePathname()

    const routes= label.map((route)=>({
        label: route
    }))

    return (
        <nav
        className="mx-8 flex items-center space-x-4 lg:space-x-12"
    >
        {
            routes.map((route)=>(
                <Link 
                key={route.label}
                href={`/${route.label}`}
                    className={cn(
                        "text-base font-medium  transition-colors hover:text-neutral-400 cursor-pointer"
                    )}
                >
                    {route.label}
                </Link>
            ))
        }
        <SunMoon onClick={toggleTheme}  className={`cursor-pointer transition-colors hover:text-neutral-400 `}/>
    </nav>
    )
}

export default MainNav;