import React from 'react';
import styled from 'styled-components/macro';
import { SubHeadingProps, StyledSubHeadingProps } from './SubHeading.types';

const SubHeading: React.FC<SubHeadingProps> = (props) => {
	return (
		<ScSubHeading isBig={props.isBig}>
			{props.children}
		</ScSubHeading>
	);
};

export default SubHeading;

const ScSubHeading = styled.h2<StyledSubHeadingProps>`
  background-image: linear-gradient(to right, #bbd9ea, #e4bbea);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: ${(props: StyledSubHeadingProps) => props.isBig ? '32' : '24'}px;
  line-height: 1.3;
`;