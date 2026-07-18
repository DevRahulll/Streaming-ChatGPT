import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <h1 className="text-pink-300">
                <Button className="btn-secondary">Hello</Button>
            </h1>
            <div className="">
                <ModeToggle />
            </div>
        </>
    );
}
