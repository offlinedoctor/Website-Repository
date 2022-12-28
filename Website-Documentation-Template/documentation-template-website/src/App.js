import TextPackage from './textpackage.json';
import React from 'react';
import NavBar from './NavBar.js';
import Introduction from './Introduction.js';
import Documentation from './Documentation.js';
import Sources from './Sources.js';

class App extends React.Component
{
	componentDidMount()
	{
		console.log(TextPackage.documentation_helper_functions);
		TextPackage.documentation_helper_functions.map((eachElement) =>
			{
				console.log(eachElement[0]);
				console.log(eachElement[1]);
			}
		);
	}
	
	render()
	{
		return(
			<>
				<NavBar/>
				<Introduction title={TextPackage.titlePage.heading} description={TextPackage.titlePage.description} />
				<Documentation documentation_helper_functions={TextPackage.documentation_helper_functions} documentation_custom_umg={TextPackage.documentation_custom_umg}/>
				<Sources/>
			</>
		);
	}
}

export default App;
