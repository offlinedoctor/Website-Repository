import React from 'react';
import SourcesStyle from "./Sources.css";

class Sources extends React.Component
{
	render()
	{
		return(
			<div class="Sources" id="Sources" style={{paddingTop: "250px", paddingBottom: "500px"}}>
				<h1>
					Sources
				</h1>
				<h2>
					List of various resources that gave me a lot of ideas on how to achieve this plugin.
				</h2>
				<ul>
					<h2 style={{textAlign: "left"}}>⚫https://ue4resources.com</h2>
					<h2 style={{textAlign: "left"}}>⚫https://snorristurluson.github.io/CustomSlateWidgets/</h2>
					<h2 style={{textAlign: "left"}}>⚫https://calben.github.io/UnrealPakLoaderPlugin/#/</h2>
				</ul>
			</div>
		);
	}
}

export default Sources;
