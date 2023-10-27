"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function DarkModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Button variant={"ghost"} size={"icon"}
                    className={"transition-none hover:opacity-60"}
                onClick={() => setTheme( theme == "dark" ? "light" : "dark")}>
                {theme === "dark" ? (<MoonIcon className={"w-6 h-6"} />) : (<SunIcon className={"w-6 h-6"} />)}
            </Button>
        </>
    )
}