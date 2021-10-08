import React from 'react'

function Button({ children, onClick}) {
	const btnStyle = {
		backgroundColor: "rgb(154,0,41)",
		color: "white",
		width:"10px",
		height:"30px",

	  };
	return (
		<button style={btnStyle} onClick={onClick}>
		{children}
	  </button>
	)
}

export default Button