import topHeaderMenuData from "../../../data/topHeaderMenuData.ts";
import Menu from "./elements/Menu.tsx";
import { TiThMenu } from "react-icons/ti";
import {Link} from "react-router";

export default function Header() {
    return (
        <header className={`absolute top-0 right-0 left-0 z-10 bg-black/35 p-4`}>
            <ul className={`hidden md:flex items-center gap-x-4`}>
                <span className={`flex items-center justify-start text-2xl`}>
                    <Link to={"https://jupixed.ir/"} target={"_blank"} className={`cursor-pointer`}>
                        Jupixed
                    </Link>
                    <p className={`font-bold`}>Movies</p>
                </span>
                <span className={`flex-center gap-x-5`}>
                    {
                        topHeaderMenuData.map(menu => (
                            <li key={menu.id}>
                                <Menu title={menu.title} />
                            </li>
                        ))
                    }
                </span>
            </ul>

            <div className={`md:hidden flex items-center justify-between`}>
                <span className={`flex items-center justify-start text-2xl`}>
                    <Link to={"https://jupixed.ir/"} target={"_blank"} className={`cursor-pointer`}>
                        Jupixed
                    </Link>
                    <p className={`font-bold`}>Movies</p>
                </span>
                <button className={`cursor-pointer`}>
                    <TiThMenu className={`size-6`} />
                </button>
            </div>
        </header>
    )
}