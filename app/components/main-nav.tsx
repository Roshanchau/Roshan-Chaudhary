"use client"

import {cn} from "../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps{
    label: string[];
}

const MainNav: React.FC<MainNavProps>=({
    label
})=>{
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
                href={`/${route.label}`}
                    className={cn(
                        "text-base font-medium  transition-colors hover:text-neutral-400"
                    )}
                >
                    {route.label}
                </Link>
            ))
        }
    </nav>
    )
}

export default MainNav;