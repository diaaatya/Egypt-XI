import React from 'react';
import Card from './Card'
const Cardlist = ({players}) => {
const cardcomp = players.map((palyer,i)=>{
		return <Card  key={i} kitnum={players[i].kitnum} name={players[i].name} club={players[i].club} age={players[i].age}/>


})
	
return (

	<div className='tc'>
		{cardcomp}
	</div>

	);
}


export default Cardlist;