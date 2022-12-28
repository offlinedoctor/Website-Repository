import './App.css';
import Window from './Window.js';
import JSONList from './JSONList.js';
import Button from '@mui/material/Button';


function App() 
{
  return (
	<div>
		<Window/>
		<div className="App" style={{marginTop: "25px", background: "rgba(224, 244, 244, 0.5)", paddingRight: "10px", borderRadius: "10px", overflowX: "auto"}}>
			<JSONList/>
		</div>
	</div>
  );
}

export default App;
