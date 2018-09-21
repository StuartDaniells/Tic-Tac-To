import React from 'react';

// Child Component
const Square = (props) => {
	return (
	  <button 
	  className="square" 
	  onClick={ () => props.onClick() } >
	    {props.value}
	  </button>
	);
}

export default Square;