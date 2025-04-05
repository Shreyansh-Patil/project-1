// https://fonts.google.com/

import './App.css';

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/Error.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<Home />} />
			<Route path='*' element={<ErrorPage />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />
}

export default App;