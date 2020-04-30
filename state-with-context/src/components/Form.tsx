import React, { useContext } from 'react'
import { Context } from '../App'

const Form = () => {
	console.log('Rendering::Form')

	const store = useContext(Context)
	if (store === null) throw new Error()

	const increment = () => {
		console.log('clicked')
		store.inc()
	}
	return (
		<div>
			<h1>{store.count}</h1>
			<button onClick={increment}>increment</button>
		</div>
	)
}

export default Form
