import React from 'react';

import social from '../../../data/socialmed.json';



export default function Contacto() {
	return (
		<div>
			{social.map(x => {
            return <div><a href={x.url}><i className={x.icon}></i></a><span>{x.name}</span></div>
         })}
		</div>
	);
}