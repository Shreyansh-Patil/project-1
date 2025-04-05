import { NavLink } from "react-router-dom"

const Home = () => {
    return <div className="m-auto w-[80%]">
        <h1 className="text-center text-6xl test mb-10">
            Welcome to TITLE
        </h1>
        <div className="grid grid-cols-9">
            <div className="col-span-1">

            </div>
            <div className="col-span-4 text-2xl flex flex-col justify-center items-start">
                W
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam libero. Nam sequi quis nemo, et, asperiores nisi dolor eos sed iusto facere laudantium earum quas architecto illo incidunt ducimus!
                </p>
                <button className="border-2 p-2 mt-4">
                    Click me
                </button>
            </div>
            {/* <div className="col-span-1">

            </div> */}
            <NavLink to="/a" className="col-span-4 flex flex-col justify-center items-center">
                <img src="../src/assets/icons/github-mark.svg" alt="Test" className="hover:cursor-pointer select-none h-[8rem]" onClick={() => {console.log(2)}}/>
                {/* <img src="../src/assets/icons/drawing.svg" alt="Github" className="h-[96px] hover:cursor-pointer select-none" onClick={() => {console.log(2)}} /> */}
                <span className="text-3xl font-bold mt-2 tracking-wider hover:cursor-pointer select-none" onClick={() => {console.log(2)}}>GITHUB</span>
            </NavLink>
        </div>
    </div>
}

export default Home;