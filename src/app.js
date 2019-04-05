import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from 'pages/Home'

__webpack_nonce__ = '<%=nonce%>'; // eslint-disable-line

render(
	<div>
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	</div>,
	document.getElementById('app'),
)
