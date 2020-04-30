import React, { useContext } from 'react'
import { StoreContext } from '../App'

const Header = () => {
	console.log('Render::Header')
	const store = useContext(StoreContext)
	if (store === null) throw new Error()

	return (
		<div>
			<h1>{store.name}</h1>
		</div>
	)
}

export default Header
