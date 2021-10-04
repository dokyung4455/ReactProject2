<<<<<<< HEAD
import React from 'react'

function CompButton({children,onClick, onKeyPress}) {
	const btnStyle = {
		backgroundColor : "blue",
		color : "white",
	}
	return (<button style={btnStyle} onClick={onClick} onKeyPress={onKeyPress}>
		{children}
	</button>
	)
}

export default CompButton
=======
import React from "react";

function CompButton({ children, onClick, onKeyPress }) {
  const btnStyle = {
    backgroundColor: "blue",
    color: "white",
  };
  return (
    <button style={btnStyle} onClick={onClick} onKeyPress={onKeyPress}>
      {children}
    </button>
  );
}

export default CompButton;
>>>>>>> 6db79af4e770c79de1bd9d8b514edd880f14e839
