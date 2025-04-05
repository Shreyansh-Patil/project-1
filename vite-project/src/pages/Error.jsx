import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return <>
        <h1 className="text-center">An error has occured! Click on thie button to go back to home page</h1>
        <button className='cursor-pointer border-2 border-black'>
            <NavLink to="/">
                Home
            </NavLink>
        </button>
    </>
}

export default ErrorPage;