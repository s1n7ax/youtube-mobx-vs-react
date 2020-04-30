import React, { createContext, useState } from 'react'
import './App.css'
import Content from './components/Content'

interface IStore {
	name: string
	count: number
	inc: () => void
}

export const Context = createContext<IStore | null>(null)

function App() {
	console.log('Rendering::App')

	const [count, setCount] = useState(0)

	const inc = () => {
		setCount((prev) => prev + 1)
	}

	return (
		<Context.Provider
			value={{
				count,
				inc,
				name: 'Context Example',
			}}
		>
			<div className="App">
				<Content />
			</div>
		</Context.Provider>
	)
}

export default App
