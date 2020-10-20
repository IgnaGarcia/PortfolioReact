import React from 'react';
import styled from 'styled-components';

export default function SkillCard(props) {
   const skill = props.skill
	return (
		<div>
         <i className={skill.icon}></i>
         <div>
            
         </div>
		</div>
	);
}