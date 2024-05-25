import './App.css';
import { Header, Footer } from './components';
import { Home, Book } from './pages';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/book' element={<Book />}></Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
