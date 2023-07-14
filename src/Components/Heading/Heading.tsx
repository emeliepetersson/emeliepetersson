import React from 'react';
import styled from 'styled-components';
import { HeadingProps } from './Heading.types';

const Heading: React.FC<HeadingProps> = (props) => {
	return (
		<ScHeading>
			{props.children}
		</ScHeading>
	);
};

export default Heading;

const ScHeading = styled.h1`
  background-image: linear-gradient(to right, #bbd9ea, #bbd9ea, #bbd9ea, #e4bbea);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 48px;
  letter-spacing: 1px;
`;