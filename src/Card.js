import React from 'react';


const Card = ({kitnum, name,club ,age}) => {

 
return (
	<div  className ='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>

	<img  className='pp br-100 dib  br1 pa1 grow bw2 shadow-5' alt="robo" src={`${kitnum}.png`} />


	
	<div>
	<a > <h2>{kitnum}.{name} </h2> </a>
	<span>FW</span>
	<p>{club}</p>
	<p>Age:{age}</p>
	</div>

	</div>
	);

}

export default Card;