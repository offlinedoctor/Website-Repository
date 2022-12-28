import React from 'react';
//import DevOpsTracker from './DevOpsTracker.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JSONListStyle from './JSONList.css';

var TagList = [];
var DevOpsTracker = new Object();
var ProductOBJ = new Object();

//Filter Tags, each time we find a unique one, add to our array

async function FetchJSON()
{
	fetch('/GetJSON')
	.then((response) => response.json())
	.then((jsonObj) => 
	{
		return jsonObj;
	});
}

//Example of how to Parse it.
function myFunction()
{
	for (let i = 0; i < Object.keys(ProductOBJ).length; i++)
	{
		ProductOBJ[i].map((eachIteration) =>
		{
			console.log(eachIteration.description);
			console.log(eachIteration.heading);
			console.log(eachIteration.link);
			console.log(eachIteration.status);
		});
		
		ProductOBJ[i].map((eachIteration) =>
		{
			return <h1> {eachIteration.description} </h1>;
		});
	}
}

function GenerateRandomColour()
{
	const ColourArray = ["#4a148c", "#4a148c", "#d50000", "#f50057", "#76ff03", "#00c853", "#42a5f5", "#5c6bc0", "#7e57c2", "#ff1744", "#f50057", "#8e24aa", "#2196f3", "#0d47a1", "#311b92"];
	return ColourArray[Math.floor(Math.random() * ColourArray.length)];
}

class JSONList extends React.Component
{	
	
	constructor()
	{
		super()
		
		this.state =
		{
			StateArrayProductOBJ: new Object()
		}
		
		this.DeleteOption = this.DeleteOption.bind(this);
	}
	
	DeleteOption(event)
	{
		var stringID = {heading: event.target.id.toString()};
		ProductOBJ = new Object();
		
		const options =
		{
            method: "POST",
            headers:
            {
                "Content-Type" : "application/JSON"
            },
            body: JSON.stringify(stringID)
        };
				
		fetch('/RemoveFromJSON', options)
		.then(response => response.json())
		.then(data => 
		{
			if (data.successful = "true")
			{
				window.location.reload(true);
			}
		});
	}

	componentDidMount()
	{
		ProductOBJ = new Object();
		
		fetch('/GetJSON')
		.then((response) => response.json())
		.then((jsonObj) => 
		{			
			DevOpsTracker = jsonObj;
			
			DevOpsTracker.List.map(eachIteration =>
			{
					if(TagList.includes(eachIteration.tag))
					{
						
					}
					else
					{
						TagList.push(eachIteration.tag);
					}
			});

			//remove duplicates
			TagList = [... new Set(TagList)];

			//console.log(TagList);

			//Store each tag in our array
			TagList.map((eachTag, index) =>
			{
					//console.log(eachTag);
					ProductOBJ[index] = [eachTag];
			});

			//Do a loop in a loop, and extract each element under the tag
			TagList.map((eachTag, index) =>
			{
				DevOpsTracker.List.map(eachIteration => 
				{
					if (eachTag == eachIteration.tag)
					{
						ProductOBJ[index].push(eachIteration);  
					}
				});
			});
			//console.log(ProductOBJ);
			this.setState({StateArrayProductOBJ: ProductOBJ});
		});
	}

	render()
	{	
		var menuItems = [];
		var temporaryArray = [];
		var TemporaryArray2 = [];
		
		for (let i = 0; i < Object.keys(this.state.StateArrayProductOBJ).length; i++)
		{
			var randomColour = GenerateRandomColour();
			temporaryArray = [];
			TemporaryArray2 = [];
			this.state.StateArrayProductOBJ[i].map((eachIteration, index) =>
			{
				if (index == 0)
				{
					//menuItems.push(<h1 style={{display: "flex", flexDirection: "row"}}>{eachIteration}</h1>);
				}
								
				if (index != 0)
				{
					temporaryArray.push(
						<Card style={{marginBottom: "25px", backgroundColor: randomColour}}>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div" style={{color: "white", textAlign: "left"}}>
									{eachIteration.heading}
								</Typography>
								<Typography  variant="body2" color="text.secondary" style={{color: "white", textAlign: "left"}}>
									{eachIteration.description}
								</Typography>
							</CardContent>
							<CardActions>
								<Button variant="contained" style={{color: "black", background: "white"}} href={eachIteration.link}>Source</Button>
								<Button variant="contained" id={eachIteration.heading} onClick={this.DeleteOption} style={{color: "white", background: "red"}}>X</Button>
							</CardActions>
							<Typography  variant="body2" color="text.secondary" style={{color: "white", textAlign: "left"}}>
									Status: {eachIteration.status}
							</Typography>
						</Card>);
				}
			});	
			
			TemporaryArray2.push
			(
				<div style={{backgroundColor: "rgba(238,238,238,0.5)", marginLeft: "10px", borderRadius: "15px"}}>
					<div style={{textAlign: "left", marginLeft: "10px", marginRight: "10px", fontFamily: "robotoLight"}}> {this.state.StateArrayProductOBJ[i][1].tag.toUpperCase()} </div>
					<div style={{display: "flex", flexDirection: "column", height: "500px", width: "200px", overflowY: "auto", marginLeft: "10px", marginRight: "10px"}}> 
					{
						temporaryArray.map((eachIteration) =>
						{
							return <div style={{}}> {eachIteration} </div>
						})
					}
					</div>
				</div>
			)

			menuItems.push(TemporaryArray2);
		}
		return(
				<div>
					<h1 style={{display: "flex", flexDirection: "row"}}>
						{menuItems}
					</h1>
				</div>
		);
	}
}

export default JSONList;
