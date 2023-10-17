"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export function DarkModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className={""}>
            {theme === "dark" ? (<MoonIcon className={"w-8 h-8"} />) : (<SunIcon className={"w-8 h-8"} />)}
        </div>
    )
}