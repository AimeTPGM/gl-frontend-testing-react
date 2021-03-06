import React from 'react'
import Card from './Card'


var cards = [
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			}
		]

const Content = (props) => {
	return (
		<div class="transparent-background overlay">
			
			<div class="container">
				<div class="content-card-wrapper">
					{
						cards.map(function(obj, i){
							return <Card header={obj.header} content={obj.content} key={i} />
						})
					}
				</div>
			</div>
		</div>
	)
}


export default Content