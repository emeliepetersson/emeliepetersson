import React from 'react';
import styled from 'styled-components/macro';
import { desktop, tablet } from './cssVariables';
import Heading from './Components/Heading/Heading';
import SubHeading from './Components/SubHeading/SubHeading';
import client from './contentful';
import Announcement from './Components/Announcement/Announcement';
import AnimatedIllustration from './Components/AnimatedIllustration/AnimatedIllustration';

const App = () => {
	// A ref used to access the AnimatedIllustration component's functions
	const AnimatedIllustrationRef = React.useRef<React.ElementRef<typeof AnimatedIllustration>>(null);

	/**
	 * Fetches content from Contentful
	 */
	React.useEffect(() => {
		client.getEntries()
			.then((entries: any) => {
		    console.log(entries);
		  });
	});

	/**
	 * Calls the onMouseMove function in the AnimatedIllustration component 
	 * by using the ref linked to the component.
	 * 
	 * (Read more about forwardRef here: https://react.dev/reference/react/forwardRef)
	 * (Read more about useImperativeHandle here: https://react.dev/reference/react/useImperativeHandle)
	 * 
	 * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} ev
	 * @returns {void}
	 */
	const mouseMoveHandler = React.useCallback((ev: React.MouseEvent<HTMLDivElement, MouseEvent>): void => { 
		AnimatedIllustrationRef.current?.onMouseMove(ev);
	}, []);

	return (
		<ScWrapper onMouseMove={mouseMoveHandler}>
			<Announcement
				title="Under construction!"
				isShowingAnnouncement={true}
			/>
			<div>
				<Heading>
					Hello 
					{' '}
					<ScEmoji>
						👋🏻
					</ScEmoji>
					{' '}
				</Heading>
				<SubHeading isBig>
					My name is Emelie Petersson.
				</SubHeading>
				<SubHeading isBig>
					{'I\'m a front-end developer '}
					<ScEmoji>
						👩‍💻
					</ScEmoji>
				</SubHeading>

				<ScIllustrationWrapper>
					<AnimatedIllustration ref={AnimatedIllustrationRef} />
				</ScIllustrationWrapper>
				
			</div>
			<ScContact>
				<ScLink href="mailto:peterssonemelie@hotmail.com">
					🌸 peterssonemelie@hotmail.com
				</ScLink>
				<ScLink href="https://github.com/emeliepetersson">
					🌸 github.com/emeliepetersson
				</ScLink>
			</ScContact>
		</ScWrapper>
	);
};

export default App;

const ScWrapper = styled.div`
 	overflow: hidden;
	/* 
	REMOVED BACKGROUND-IMAGE FOR NOW

	background-image: linear-gradient(to right, rgba(187, 217, 234, 0.5) 0%, rgb(228, 187, 234, 0.8) 100%);
	background-position: right;
	background-repeat: no-repeat;
	background-size: contain;

	@media screen and (min-width: ${desktop}) {
	background-image: linear-gradient(to right, rgba(187, 217, 234, 0.5) 0%, rgb(228, 187, 234, 0.8) 100%);
	} */
`;

/* 
  REMOVED CLIP-PATH FOR NOW
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
`;
} */

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

const ScIllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  img {
	width: 100%;
	max-width: 300px;
  }
`;