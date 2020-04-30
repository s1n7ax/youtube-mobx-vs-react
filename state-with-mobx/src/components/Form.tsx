import React, { useContext } from 'react'
import { StoreContext } from '../App'
import { useObserver } from 'mobx-react-lite'

const Form = () => {
	console.log('Render::Form')
	const store = useContext(StoreContext)
	if (store === null) throw new Error()

	const increment = () => {
		store.inc()
	}

	return useObserver(() => (
		<div>
			<h1>{store.count}</h1>
			<button onClick={increment}>click</button>
		</div>
	))
}

export default Form
