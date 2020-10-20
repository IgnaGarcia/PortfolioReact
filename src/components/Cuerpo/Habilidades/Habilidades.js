import React from 'react';
import styled from 'styled-components';

import SkillCard from './SkillCard';
import skills from '../../../data/skills.json';

export default function Habilidades() {

	return (
		<div>
         {skills.map( x => <SkillCard skill={x} ></SkillCard>)}
		</div>
	);
}