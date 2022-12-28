import React from 'react';
import FontStyle from './FontStyle.css';
//import AddToList from './AddToList.js';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

class Window extends React.Component 
{
	constructor()
	{
		super();
		
		this.state = 
		{
			openModal: false,
			heading: "",
			description: "",
			link: "",
			status: "",
			tag: ""
		}
		
		this.ShowDialog = this.ShowDialog.bind(this);
		this.UpdateJSONList = this.UpdateJSONList.bind(this);
		this.OnValueChange= this.OnValueChange.bind(this);
	}
	
    OnValueChange(event)
    {
		//event.target.value.toString();
		switch(event.target.id.toString())
		{
			case "heading":
				this.setState({heading: event.target.value})
				break;
			case "desc":
				this.setState({description: event.target.value})
				break;
			case "link":
				this.setState({link: event.target.value})
				break;
			case "status":
				this.setState({status: event.target.value})
				break;
			case "tag":
				this.setState({tag: event.target.value})
				break;
		}
    }
	
	UpdateJSONList()
	{
		var newJSON = 
		({
			heading: this.state.heading,
			description: this.state.description,
			link: this.state.link,
			status: this.state.status,
			tag: this.state.tag
		});
		
		const options =
		{
            method: "POST",
            headers:
            {
                "Content-Type" : "application/JSON"
            },
            body: JSON.stringify(newJSON)
        };
				
		fetch('/AddToJSON', options)
		.then(response => response.json())
		.then(data => 
		{
			if (data.successful = "true")
			{
				this.ShowDialog();
				window.location.reload(true);
			}
		});
		
		//console.log(options);
	}
	
	ShowDialog()
	{
		console.log("Hello");
		
		console.log(this.state.openModal);
		
		if (this.state.openModal == true)
		{
			this.setState({openModal: false});
		}
		else if (this.state.openModal == false)
		{
			this.setState({openModal: true});
		}
	}
	
	render()
	{
		return(
			<div>
				<h1 style={{color: "white", fontFamily: "robotoLight", textAlign: "left", background: "rgba(238,238,238,0.5)", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "15px", borderRadius: "15px"}}> 
					My DevOps
					<Button onClick={this.ShowDialog} variant="contained" style={{marginLeft: "15px"}}>+</Button>
				</h1>
				<Modal open={this.state.openModal} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
					<div style={{borderRadius: "15px", background: "white", padding: "50px"}}>
						<div  style={{display: "flex", flexDirection: "column"}}>
							<TextField onChange={this.OnValueChange} id="heading" label="Heading" variant="outlined" />
							<TextField onChange={this.OnValueChange} id="desc" label="Description" variant="outlined" />
							<TextField onChange={this.OnValueChange} id="link" label="Link" variant="outlined" />
							<TextField onChange={this.OnValueChange} id="status" label="Status" variant="outlined" />
							<TextField onChange={this.OnValueChange} id="tag" label="Tag" variant="outlined" />
						</div>
						<div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "15px"}}>
							<Button onClick={this.UpdateJSONList} variant="contained">
								Confirm
							</Button>
							<Button onClick={this.ShowDialog} variant="contained">
								Cancel
							</Button>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

export default Window;
