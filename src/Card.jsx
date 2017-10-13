import React from 'react'
import samepleImg from './img/sample.png'

const Card = (props) => {
	return (
		<div class="content-card">
			<div class="card">
				<img class="card-img-top" src={samepleImg} alt="Card image cap" />
				<div class="card-body">
					<p class="header">A</p>
					<p class="content">B</p>
				</div>
			</div>
		</div>
	)
}

export default Card