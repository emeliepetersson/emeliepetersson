import React from 'react';
import styled from 'styled-components';
import { AnnouncementProps } from './Announcement.types';
import { desktop } from '../../cssVariables';

const Announcement: React.FC<AnnouncementProps> = (props) => {
	return (
		<ScAnnouncement>
			{props.title}
		</ScAnnouncement>
	);
};

export default Announcement;

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