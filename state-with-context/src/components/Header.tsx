import React, { useContext } from 'react'
import { Context } from '../App'

const Header = () => {
	console.log('Rendering::Header')

	const store = useContext(Context)
	if (store === null) throw new Error()

	return (
		<div>
			<h1>{store.name}</h1>
		</div>
	)
}

export default Header
