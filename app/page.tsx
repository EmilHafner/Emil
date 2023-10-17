import {DarkModeToggle} from "@/components/darkModeToggle";

export default function Home() {
    return (
        <main className="flex flex-col justify-center h-screen bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
            <div>
                <DarkModeToggle  />
            </div>
            <div className={"flex flex-col gap-4 justify-center items-center"}>
                <h1 className={"text-8xl font-semibold"}>Emil Hafner</h1>
                <p className={"text-xl font-light"}>Full-Stack Software Developer</p>
            </div>
            <div className={"flex justify-center mt-20"}>
                <ul className={"flex flex-row gap-4 text-2xl"}>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Contact</li>
                </ul>
            </div>



        </main>
    )
}
