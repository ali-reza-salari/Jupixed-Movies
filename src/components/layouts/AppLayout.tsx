import {Outlet} from "react-router";
import { useEffect } from "react";
import Header from "../common/Header/Header.tsx";

export default function AppLayout() {
    useEffect(() => {
        const disableRightClick = (e: MouseEvent) => {
            e.preventDefault();
        };

        document.addEventListener("contextmenu", disableRightClick);

        return () => {
            document.removeEventListener("contextmenu", disableRightClick);
        };
    }, []);

    return (
        <section id={"root"} className={`dark relative min-w-dvw min-h-dvh overflow-hidden`}>
            <div>
                <Header />
                <Outlet />
            </div>
        </section>
    )
}