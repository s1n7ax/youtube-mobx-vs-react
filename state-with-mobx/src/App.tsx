import React, { createContext } from 'react'
import './App.css'
import { useLocalStore } from 'mobx-react-lite'
import Content from './components/Content'

interface IStore {
	name: string
	count: number
	inc: () => void
}

const createStore = () => {
	return {
		name: 'Mobx Example',
		count: 0,
		inc() {
			this.count += 1
		},
	}
}

export const StoreContext = createContext<IStore | null>(null)

function App() {
	console.log('Render::App')

	const store = useLocalStore(createStore)

	return (
		<StoreContext.Provider value={store}>
			<div className="App">
				<Content />
			</div>
		</StoreContext.Provider>
	)
}

export default App
