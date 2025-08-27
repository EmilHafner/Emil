"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {useEffect, useState} from "react";

export function DarkModeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDarkMode = resolvedTheme === "dark";

    return (
        <>
            <Button variant={"ghost"} size={"icon"}
                    className={"transition-none hover:opacity-60"}
                onClick={() => setTheme( isDarkMode ? "light" : "dark")}>
                {!mounted ? (
                    <SunIcon className="w-6 h-6" />
                ) : isDarkMode ? (
                    <MoonIcon className="w-6 h-6" />
                ) : (
                    <SunIcon className="w-6 h-6" />
                )}
            </Button>
        </>
    )
}