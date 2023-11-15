
import React, { useState } from 'react';
import Message from './Message';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarIcon from '@mui/icons-material/Star';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SendIcon from '@mui/icons-material/Send';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
function Leftpanel(props) {
  const [selectedSection, setSelectedSection] = useState("Inbox");
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    props.setSubCollect(section);
  };

  const handleMoreOptionClick = (option) => {
    console.log(`Clicked on ${option}`);
    setSelectedOption(option);
  };

  const handleToggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const getSectionStyle = (sectionName) => {
    const isSelectedSection = selectedSection === sectionName;

    return {
      backgroundColor: isSelectedSection ? 'rgb(211, 227, 253)' : 'white',
      cursor: "pointer",
      padding: "2px",
      borderRadius: "20px",
      marginTop: "5px",
      fontSize: '0.8vw',
      width: isSelectedSection || showMoreOptions ? "80%" : "12vw",
    };
  };

  return (
    <div style={{ position: "fixed", minHeight: "100vh", width: "19.6vw" }}>
      <Message />
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          ...getSectionStyle("Inbox"),
        }}
        onClick={() => handleSectionClick("Inbox")}
      >
        <InboxIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw'
          }}
        >
          Inbox
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          ...getSectionStyle("Starred"),
        }}
        onClick={() => handleSectionClick("Starred")}
      >
        <StarIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw'
          }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          ...getSectionStyle("Snoozed"),
        }}
        onClick={() => handleSectionClick("Snoozed")}
      >
        <ScheduleIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw'
          }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          ...getSectionStyle("Send"),
        }}
        onClick={() => handleSectionClick("Send")}
      >
        <SendIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw'
          }}
        >
          Send
        </span>
      </div>  

      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          ...getSectionStyle("More"),
        }}
        onClick={handleToggleMoreOptions}
      >
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw'
          }}
        >
          {showMoreOptions ? 'Less' : 'More'}
        </span>
      </div>

      {/* Additional options that appear when "More" is clicked */}
      {showMoreOptions && (
        <>
          <div
            style={{
              marginTop: "1vw",
              marginLeft: "0.8vw",
              width: "12vw",
              display: "flex",
              alignItems: "center",
              ...getSectionStyle("Spam"),
            }}
            onClick={() => handleSectionClick("Spam")}
          >
            <ErrorIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
            <span
              style={{
                cursor: "pointer",
                marginLeft: "1.6vw",
                fontWeight: "400",
                fontSize: '1.1vw'
              }}
            >
              Spam
            </span>
          </div>
          <div
            style={{
              marginTop: "1vw",
              marginLeft: "0.8vw",
              width: "12vw",
              display: "flex",
              alignItems: "center",
              ...getSectionStyle("Trash"),
            }}
            onClick={() => handleSectionClick("Trash")}
          >
            <DeleteIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
            <span
              style={{
                cursor: "pointer",
                marginLeft: "1.6vw",
                fontWeight: "400",
                fontSize: '1.1vw'
              }}
            >
              Trash
            </span>
          </div>
          <div
            style={{
              marginTop: "1vw",
              marginLeft: "0.8vw",
              width: "12vw",
              display: "flex",
              alignItems: "center",
              ...getSectionStyle("Important"),
            }}
            onClick={() => handleSectionClick("Important")}
          >
            <PriorityHighIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
            <span
              style={{
                cursor: "pointer",
                marginLeft: "1.6vw",
                fontWeight: "400",
                fontSize: '1.1vw'
              }}
            >
              Important
            </span>
          </div>
          <div
            style={{
              marginTop: "1vw",
              marginLeft: "0.8vw",
              width: "12vw",
              display: "flex",
              alignItems: "center",
              ...getSectionStyle("Schedule"),
            }}
            onClick={() => handleSectionClick("Schedule")}
          >
            <CalendarTodayIcon style={{ width: "1.1vw", marginLeft: "2vw" }} />
            <span
              style={{
                cursor: "pointer",
                marginLeft: "1.6vw",
                fontWeight: "400",
                fontSize: '1.1vw'
              }}
            >
              Schedule
            </span>
          </div>

          
        </>
      )}
    </div>
  );
}

export default Leftpanel;
