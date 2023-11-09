import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const styles = `
  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    margin-top:15px;
    
  }


  .icon-name {
    font-size: 12px; /* Adjust the font size as needed */
  }
`;

function Sidebar() {
  return (
    <div>
      <style>{styles}</style>
      <div className="icon-wrapper">
        <MailIcon fontSize="small" />
        <span className="icon-name">Mail</span>
      </div>

      <div className="icon-wrapper">
        <ChatIcon fontSize="small" />
        <span className="icon-name">Chat</span>
      </div>

      <div className="icon-wrapper">
        <MeetingRoomIcon fontSize="small" />
        <span className="icon-name">Meeting</span>
      </div>

      <div className="icon-wrapper">
        <VideoCallIcon fontSize="small" />
        <span className="icon-name">Video Call</span>
      </div>
    </div>
  );
}

export default Sidebar;
