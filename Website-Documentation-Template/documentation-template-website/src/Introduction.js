import React from 'react';
import IntroductionStyle from './Introduction.css';

class Introduction extends React.Component
{
	render()
	{
		return(
			<div id="Introduction" class="Introduction" style={{paddingTop: "250px", paddingBottom: "250px"}}>
				<h1>{this.props.title}</h1>
				<h2>{this.props.description}</h2>
			</div>
		);
	}
}

export default Introduction;
