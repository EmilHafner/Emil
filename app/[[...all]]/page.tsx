
import Link from "next/link";
import {Button} from "@/components/ui/button";
export default function Home() {

    const links: {"name": string; "url": URL}[] = [
        {"name": "LinkedIn", "url": new URL("https://www.linkedin.com/in/emil-hafner-037308207/")},
        {"name": "GitHub", "url": new URL("https://github.com/emilhafner")},
        {"name": "Contact", "url": new URL("mailto:contact@emil-hafner.com")}]

    return (
        <main className="flex flex-col justify-center h-screen bg-stone-300 dark:bg-slate-800 text-stone-900 dark:text-stone-200">
            <div className={"flex flex-col gap-4 justify-center items-center"}>
                    <h1 className={"text-6xl md:text-8xl font-semibold text-center relative"}>
                        Emil Hafner
                        <span className="bg-amber-700 h-[2px] w-42 block m-auto"></span>
                    </h1>
                <p className={"text-xl font-light text-center"}>Full-Stack Software Developer</p>
            </div>
            <div className={"flex justify-center mt-5"}>
                <ul className={"flex flex-row gap-4"}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Button variant={"ghost"} >
                                <Link href={link.url.toString()} target={"_blank"}
                                      className={"text-xl hover:underline underline-offset-2"} >
                                    {link.name}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>



        </main>
    )
}
