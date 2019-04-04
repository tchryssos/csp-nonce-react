import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from 'pages/Home'

__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM='

render(
	<div>
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	</div>,
	document.getElementById('app'),
)
