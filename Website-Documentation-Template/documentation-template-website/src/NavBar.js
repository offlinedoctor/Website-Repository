import React from 'react';
import NavBarStyle from './NavBar.css';
import { Link } from "react-scroll";

const SideBarButtons = ["Introduction", "Documentation - Helper Functions", "Documentation - Custom UMGs", "Sources"];

class NavBar extends React.Component
{
	constructor()
	{
		super();
		
		this.onClickScrollToElement = this.onClickScrollToElement.bind(this);
		
	}
	
	onClickScrollToElement(event)
	{
		//console.log(event.target.innerHTML);
		//document.getElementById(event.target.innerHTML.toString()).scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
	}
	
	render()
	{
		return(
			<>
				<div class="sideNavBar">
					<h3 style={{color: "white", fontFamily: "DejaVu", textAlign: "center"}}>Editor Utility Widget Helper Functions</h3>
					{
						SideBarButtons.map(eachIteration =>
							<Link activeClass="active" to={eachIteration} spy={true} smooth={true} offset={-100} duration={500}>
								<button onClick={this.onClickScrollToElement} style={{width: "100%", textAlign: "left"}} class="navButton">{eachIteration}</button>
							</Link>
						)
					}
				</div>
			</>
		);
	}
}

export default NavBar;
