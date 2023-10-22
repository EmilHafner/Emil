import Link from "next/link";

export default function Home() {

    const links: {"name": string; "url": URL}[] = [
        {"name": "LinkedIn", "url": new URL("https://www.linkedin.com/in/emil-hafner-037308207/")},
        {"name": "GitHub", "url": new URL("https://github.com/emilhafner")},
        {"name": "Contact", "url": new URL("mailto:contact@emil-hafner.com")}]

    return (
        <main className="flex flex-col justify-center h-screen bg-stone-100 dark:bg-slate-800 text-stone-900 dark:text-stone-200">
            <div className={"flex flex-col gap-4 justify-center items-center"}>
                <h1 className={"text-8xl font-semibold"}>Emil Hafner</h1>
                <p className={"text-xl font-light"}>Full-Stack Software Developer</p>
            </div>
            <div className={"flex justify-center mt-20"}>
                <ul className={"flex flex-row gap-4 text-2xl"}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.url.toString()} target={"_blank"}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>



        </main>
    )
}
