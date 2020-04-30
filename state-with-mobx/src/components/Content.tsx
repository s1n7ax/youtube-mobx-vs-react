import React from 'react'
import Header from './Header'
import Form from './Form'

const Content = () => {
	console.log('Render::Content')

	return (
		<div>
			<Header />
			<Form />
		</div>
	)
}

export default Content
