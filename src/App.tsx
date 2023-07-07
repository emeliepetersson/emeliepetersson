import React from 'react';
import styled from 'styled-components/macro';
import { desktop, tablet } from './cssVariables';
import { StyledSubHeadingProps } from './App.types';

const App = () => {
	return (
		<ScWrapper>
			<ScAnnouncement>
				Under construction!
			</ScAnnouncement>
			<ScColumn>
				<div>
					<ScHeading>
						Hello 
						{' '}
						<ScEmoji>
							👋🏻
						</ScEmoji>
						{' '}
					</ScHeading>
					<ScSubHeading isBig>
						My name is Emelie Petersson.
					</ScSubHeading>
					<ScSubHeading>
						{'I\'m a front-end developer '}
						<ScEmoji>
							👩‍💻
						</ScEmoji>
					</ScSubHeading>
				</div>
				<ScContact>
					<ScLink href="mailto:peterssonemelie@hotmail.com">
						🌸 peterssonemelie@hotmail.com
					</ScLink>
					<ScLink href="https://github.com/emeliepetersson">
						🌸 github.com/emeliepetersson
					</ScLink>
				</ScContact>
			</ScColumn>
		</ScWrapper>
	);
};

export default App;

const ScWrapper = styled.div`
  background-image: linear-gradient(to right, rgba(187, 217, 234, 0.5) 0%, rgb(228, 187, 234, 0.8) 100%);
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;

  @media screen and (min-width: ${desktop}) {
    background-image: linear-gradient(to right, rgba(187, 217, 234, 0.5) 0%, rgb(228, 187, 234, 0.8) 100%), url('profile-image.jpg');
  }
`;

const ScColumn = styled.div`
  background-color: #fcfcfc;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 48px;
  clip-path: polygon(0 0, 100vw 0, 100vw 30vh, 0 50vh);
  
  @media screen and (min-width: ${tablet}) {
    clip-path: polygon(0 0, 100vw 0, 100vw 40vh, 0 60vh);
  }

  @media screen and (min-width: ${desktop}) {
    clip-path: polygon(0 0, 65vw 0, 45vw 100vh, 0 100vh);
    justify-content: space-between;
  }
`;

const ScHeading = styled.h1`
  background-image: linear-gradient(to right, #bbd9ea, #bbd9ea, #bbd9ea, #e4bbea);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 48px;
  letter-spacing: 1px;
`;

const ScSubHeading = styled.h2<StyledSubHeadingProps>`
  background-image: linear-gradient(to right, #bbd9ea, #e4bbea);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: ${props => props.isBig ? '32' : '24'}px;
  line-height: 1.3;
`;

const ScEmoji = styled.span`
  color: white;
`;

const ScContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const ScLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #bbd9ea;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
  }
`;

const ScAnnouncement = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  font-size: 40px;
  z-index: 999;
  width: 110%;
  height: fit-content;
  text-align: center;
  transform: rotate(10deg) translateX(-20px);
  padding: 8px;
  background-color: #d9eabb;
  color: white;

  @media screen and (min-width: ${desktop}) {
    transform: rotate(-12deg) translateX(-40px);
    font-size: 56px;
  }
`;