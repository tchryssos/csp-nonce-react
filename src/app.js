import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from 'pages/Home'

render(
	<div>
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	</div>,
	document.getElementById('app'),
)
