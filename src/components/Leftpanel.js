// // import React from 'react'
// // import inbox from "../images/inbox.png"
// // import send from "../images/send.png"
// // import snooze from "../images/snooze.png"
// // import star from "../images/star.png"
// // import pen from "../images/pen.png"
// // import Message from './Message'

// // function Leftpanel(props) {
// //   return (
// //     <div style={{position:"fixed",backgroundColor:"#F9F9F9",minHeight:"100vh",
// //        width:"19.6vw"}}>
   
// //       <Message/>
// //          <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
// //         <img src={inbox} style={{width:"1.2vw",marginLeft:"2vw"}}/>
// //         <span onClick={()=> props.setSubCollect("Inbox")} style={{cursor:"pointer",marginLeft:"1.6vw",fontWeight:"400",fontSize:'1.3vw'}}>Inbox</span>
// //       </div>
// //       <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
// //         <img src={star} style={{width:"1.2vw",marginLeft:"2vw"}}/>
// //         <span onClick={()=> props.setSubCollect("Starred")} style={{cursor:"pointer",marginLeft:"1.6vw",fontWeight:"400",fontSize:'1.3vw'}}>Starred</span>
// //       </div>
// //       <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
// //         <img src={snooze} style={{width:"1.2vw",marginLeft:"2vw"}}/>
// //         <span onClick={()=> props.setSubCollect("Snoozed")} style={{cursor:"pointer",marginLeft:"1.6vw",fontWeight:"400",fontSize:'1.3vw'}}>Snoozed</span>
// //       </div>
// //       <div style={{marginTop:"1vw",marginLeft:"0.8vw",width:"12vw",display:"flex",alignItems:"center"}}>
// //         <img src={send} style={{width:"1.2vw",marginLeft:"2vw"}}/>
// //         <span onClick={()=> props.setSubCollect("Send")} style={{cursor:"pointer",marginLeft:"1.6vw",fontWeight:"400",fontSize:'1.3vw'}}>Send</span>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Leftpanel
// import React, { useState } from 'react';
// import inbox from "../images/inbox.png";
// import send from "../images/send.png";
// import snooze from "../images/snooze.png";
// import star from "../images/star.png";
// import pen from "../images/pen.png";
// import Message from './Message';

// function Leftpanel(props) {
//   const [selectedSection, setSelectedSection] = useState("Inbox"); // Initialize the selected section to "Inbox"

//   // Define a function to handle section selection
//   const handleSectionClick = (section) => {
//     setSelectedSection(section); // Update the selected section when clicked
//     props.setSubCollect(section); // Pass the selected section as a prop
//   };

//   // Define a function to apply background color based on the selected section
//   const getSectionStyle = (sectionName) => {
//     return {
//       backgroundColor: selectedSection === sectionName ? 'rgb(211, 227, 253' : '#F9F9F9',
//       cursor: "pointer",
//       padding: "10px", // Add padding
//       borderRadius: "8px", // Add border radius
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
//           ...getSectionStyle("Inbox"), // Apply the background color, border radius, and padding
//         }}
//         onClick={() => handleSectionClick("Inbox")} // Handle the click event
//       >
//         <img src={inbox} style={{ width: "1.2vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.3vw'
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
//           ...getSectionStyle("Starred"), // Apply the background color, border radius, and padding
//         }}
//         onClick={() => handleSectionClick("Starred")} // Handle the click event
//       >
//         <img src={star} style={{ width: "1.2vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.3vw'
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
//           ...getSectionStyle("Snoozed"), // Apply the background color, border radius, and padding
//         }}
//         onClick={() => handleSectionClick("Snoozed")} // Handle the click event
//       >
//         <img src={snooze} style={{ width: "1.2vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.3vw'
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
//           ...getSectionStyle("Send"), // Apply the background color, border radius, and padding
//         }}
//         onClick={() => handleSectionClick("Send")} // Handle the click event
//       >
//         <img src={send} style={{ width: "1.2vw", marginLeft: "2vw" }} />
//         <span
//           style={{
//             cursor: "pointer",
//             marginLeft: "1.6vw",
//             fontWeight: "400",
//             fontSize: '1.3vw'
//           }}
//         >
//           Send
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Leftpanel;
import React, { useState } from 'react';
import inbox from "../images/inbox.png";
import send from "../images/send.png";
import snooze from "../images/snooze.png";
import star from "../images/star.png";
import pen from "../images/pen.png";
import Message from './Message';

function Leftpanel(props) {
  const [selectedSection, setSelectedSection] = useState("Inbox");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    props.setSubCollect(section);
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
        <img src={inbox} style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw' // Adjusted font size
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
        <img src={star} style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw' // Adjusted font size
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
        <img src={snooze} style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw' // Adjusted font size
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
        <img src={send} style={{ width: "1.1vw", marginLeft: "2vw" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: '1.1vw' // Adjusted font size
          }}
        >
          Send
        </span>
      </div>
    </div>
  );
}

export default Leftpanel;

