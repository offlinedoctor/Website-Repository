import React from 'react';
import DocumentationStyle from './Documentation.css';

class Documentation extends React.Component
{
	constructor()
	{
		super()
		this.ShowDialog = this.ShowDialog.bind(this);
	}
	
	ShowDialog(event)
	{
		console.log(event.target.id);
		
		var StoreDialog = <dialog id="dialog2"> test </dialog>;
		
		return StoreDialog;
		
	}
	
	render()
	{
		return(
			<div class="TitleAndHeading">
				<div style={{paddingTop: "350px", paddingBottom: "350px"}}>
					<div style={{paddingTop: "700px", paddingBottom: "700px"}}>
						<h1>Documentation</h1>
						<h2>Below you'll find detailed examples of each of the functions that this plugin provides.</h2>
					</div>
				</div>
				<div style={{paddingTop: "350px", paddingBottom: "350px"}}>
					<h3 id="Documentation - Helper Functions">Helper Functions</h3>
					<h3 style={{paddingBottom: "50px"}}>Helper Functions refer to C++ functions that have a Blueprint equivalent.</h3>
					
					<div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
						{					
							this.props.documentation_helper_functions.map(eachIteration =>
								<div>
									<div style={{display: "flex", flexDirection: "row", gap: "25px", paddingTop: "55px"}}>
										<h3> {eachIteration[0]} </h3>
										<h3> {eachIteration[1]} </h3>
										<div>
											<img  id="HoverImage" src={eachIteration[2]} />
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
				<div style={{paddingTop: "350px", paddingBottom: "350px"}}>
					<h3 id="Documentation - Custom UMGs">Custom UMGs</h3>
					<h3>New UMG's designed to support more advanced Editor Tools</h3>
					
					<div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
						{					
							this.props.documentation_custom_umg.map(eachIteration =>
								<div>
									<div style={{display: "flex", flexDirection: "row", gap: "25px", paddingTop: "55px"}}>
										<h3> {eachIteration[0]} </h3>
										<h3> {eachIteration[1]} </h3>
										<div>
											<img  id="HoverImage" src={eachIteration[2]} />
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>	
			</div>
		);
	}
}

export default Documentation;
