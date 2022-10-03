import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'

function App() {
	return (
		<>
			<Navbar />
			<Container className="mb-4">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/store" element={<Store />}></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>
			</Container>
		</>
	)
}

export default App
