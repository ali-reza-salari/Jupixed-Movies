import {Outlet} from "react-router";

export default function AppLayout() {
    return (
        <section id={"root"} className={`dark min-w-dvw min-h-dvh overflow-hidden`}>
            <div className={``}>
                <Outlet />
            </div>
        </section>
    )
}