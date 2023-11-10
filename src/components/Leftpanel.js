
// import React, { useState } from 'react';
// import inbox from "../images/inbox.png";
// import send from "../images/send.png";
// import snooze from "../images/snooze.png";
// import star from "../images/star.png";
// import pen from "../images/pen.png";
// import Message from './Message';

// function Leftpanel(props) {
//   const [selectedSection, setSelectedSection] = useState("Inbox");
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSectionClick = (section) => {
//     setSelectedSection(section);
//     props.setSubCollect(section);
//   };

//   const handleMoreOptionClick = (option) => {
//     // Handle the click on each More option (e.g., Spam, Bin, Category)
//     console.log(`Clicked on ${option}`);
//     setSelectedOption(option);
//   };
  
//   const getSectionStyle = (sectionName) => {
//     return {
//       backgroundColor: selectedSection === sectionName ? 'rgb(211, 227, 253)' : 'white',
//       cursor: "pointer",
//       padding: "6px",
//       borderRadius: "20px",
//       marginTop: "5px", 
//       fontSize: '0.8vw',
//       width: selectedSection === sectionName ? "80%" : "12vw",
//     };
//   };

//   return (
//     <div style={{ position: "fixed", minHeight: "100vh", width: "19.6vw" }}>
//       <Message />
//       <div
//         style={{
//           marginTop: "1vw",
//           marginLeft: "0.8vw",
//           width: "12vw",
//           display: "flex",
//           alignItems: "center",
//           ...getSectionStyle("Inbox"),
//         }}
//         onClick={() => handleSectionClick("Inbox")}
//       >
//         <img src={inbox} style={{ width: "1.1vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.1vw' // Adjusted font size
//           }}
//         >
//           Inbox
//         </span>
//       </div>
//       <div
//         style={{
//           marginTop: "1vw",
//           marginLeft: "0.8vw",
//           width: "12vw",
//           display: "flex",
//           alignItems: "center",
//           ...getSectionStyle("Starred"),
//         }}
//         onClick={() => handleSectionClick("Starred")}
//       >
//         <img src={star} style={{ width: "1.1vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.1vw' // Adjusted font size
//           }}
//         >
//           Starred
//         </span>
//       </div>
//       <div
//         style={{
//           marginTop: "1vw",
//           marginLeft: "0.8vw",
//           width: "12vw",
//           display: "flex",
//           alignItems: "center",
//           ...getSectionStyle("Snoozed"),
//         }}
//         onClick={() => handleSectionClick("Snoozed")}
//       >
//         <img src={snooze} style={{ width: "1.1vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.1vw' // Adjusted font size
//           }}
//         >
//           Snoozed
//         </span>
//       </div>
//       <div
//         style={{
//           marginTop: "1vw",
//           marginLeft: "0.8vw",
//           width: "12vw",
//           display: "flex",
//           alignItems: "center",
//           ...getSectionStyle("Send"),
//         }}
//         onClick={() => handleSectionClick("Send")}
//       >
//         <img src={send} style={{ width: "1.1vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.1vw' // Adjusted font size
//           }}
//         >
//           Send
//         </span>
//       </div>  
//       <div
//         style={{
//           marginTop: "1vw",
//           marginLeft: "0.8vw",
//           width: "12vw",
//           display: "flex",
//           alignItems: "center",
//           ...getSectionStyle("More"),
//         }}
//       >
//         <select
//           style={{
//             fontSize: "1.1vw",
//             cursor: "pointer",
//             marginLeft: "2vw",
//             width: "100%",
//             border: 'none', // Adjusted width to match other sections
//           }}
//           onChange={(e) => handleMoreOptionClick(e.target.value)}
//           value={selectedOption || "More"}
//         >
//           <option disabled hidden value="More">
//             More
//           </option>
//           <option value="Spam">Spam</option>
//           <option value="Important">Important</option>
//           <option value="Scheduled">Scheduled</option>
//           <option value="Trash">Trash</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Leftpanel;
import React, { useState } from 'react';
import Message from './Message';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SendIcon from '@mui/icons-material/Send';


function Leftpanel(props) {
  const [selectedSection, setSelectedSection] = useState("Inbox");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    props.setSubCollect(section);
  };

  const handleMoreOptionClick = (option) => {
    console.log(`Clicked on ${option}`);
    setSelectedOption(option);
  };
  
  const getSectionStyle = (sectionName) => {
    return {
      backgroundColor: selectedSection === sectionName ? 'rgb(211, 227, 253)' : 'white',
      cursor: "pointer",
      padding: "6px",
      borderRadius: "20px",
      marginTop: "5px", 
      fontSize: '0.8vw',
      width: selectedSection === sectionName ? "80%" : "12vw",
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
      >
        <select
          style={{
            fontSize: "1.1vw",
            cursor: "pointer",
            marginLeft: "2vw",
            width: "100%",
            border: 'none', // Adjusted width to match other sections
          }}
          onChange={(e) => handleMoreOptionClick(e.target.value)}
          value={selectedOption || "More"}
        >
          <option disabled hidden value="More">
            More
          </option>
          <option value="Spam">Spam</option>
          <option value="Important">Important</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Trash">Trash</option>
        </select>
      </div>
    </div>
  );
}

export default Leftpanel;
