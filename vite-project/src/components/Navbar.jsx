import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <div className="grid grid-cols-6 py-2 justify-center items-center shadow-xl mb-10">
        <div className="flex justify-center items-center col-span-2">
            <img src="../src/assets/icons/drawing.svg" alt="" className="h-[3rem] inline rounded-full"/>
        </div>

        <div className="col-span-3">
            <ul className="flex flex-row justify-around items-center test text-xl tracking-tight">
                <li>
                    <NavLink to='/' className="flex justify-between items-center gap-1">
                        <span className="icons leading-none relative top-[-2px]">
                            home
                        </span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="flex justify-between items-center gap-1">
                        <span className="icons leading-none relative top-[-2px]">
                            home
                        </span>
                        Feature 1
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="flex justify-between items-center gap-1">
                        <span className="icons leading-none relative top-[-2px]">
                            home
                        </span>
                        Feature 2
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="flex justify-between items-center gap-1">
                        <span className="icons leading-none relative top-[-2px]">
                            home
                        </span>
                        Feature 3
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="flex justify-between items-center gap-1">
                        <span className="icons leading-none relative top-[-2px]">
                            home
                        </span>
                        Feature 4
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
}

export default Navbar;