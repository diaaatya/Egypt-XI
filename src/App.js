import React , {Component} from 'react' ;
import 'tachyons';
import './custom.css';
import Cardlist from './Cardlist'
import {players} from './players';
import Search from './Search';



class App extends Component {
	constructor (){
		super()
		this.state = {
		players : players,
		searchfield : ''
	}
}
onsearch = (event) => {
this.setState({searchfield: event.target.value})
}

render (){
		const fillter = this.state.players.filter(players =>{return players.name.toLowerCase().includes(this.state.searchfield.toLowerCase());});
		
		return (
			<div>
			<div className='tc topbox'>
			<h1 className='title'> Egypt XI </h1>
			<Search  search={this.onsearch} />
			</div>
			<div>
			<Cardlist players = {fillter}/>
			</div>
			</div>

			);
	}
}
export default App;