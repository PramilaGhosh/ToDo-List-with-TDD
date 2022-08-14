import React from "react";

import React, { useState } from "react";
 
export default function Buttons({name}){
return (

	<button data-testid="button-id" name={name} type="button" className="toggle" aria-pressed={props.aria_pressed} onClick={()=>props.setFilter(name)} >
		<span>{name}</span>
	</button>
);
}