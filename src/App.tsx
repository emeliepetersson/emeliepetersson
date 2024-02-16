import React from 'react';
import styled from 'styled-components/macro';
import { tablet } from './cssVariables';
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
				// TODO: Do something with the entries
		  });
	});

	return (
		<ScWrapper onMouseMove={(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => AnimatedIllustrationRef.current?.onMouseMove(ev)}>
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
			<ScContact
				onMouseEnter={AnimatedIllustrationRef.current?.onMouseEnter}
				onMouseLeave={AnimatedIllustrationRef.current?.onMouseLeave}
			>
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
	padding: 50px;
	position: relative;
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
  width: fit-content;

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