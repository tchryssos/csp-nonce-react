import React from 'react'
import './styles.scss'

const onClick = () => {
	const data = document.querySelector('.formInput').value
	const postList = document.querySelector('.postList')
	const newPost = document.createElement('div')
	newPost.innerHTML = data
	postList.appendChild(newPost)
}

export default function () {
	return (
		<div className="wrapper">
			<input type="text" className="formInput" placeholder="Hack me" />
			<button onClick={onClick}>Submit</button>
			<div className="postList" />
		</div>
	)
}
