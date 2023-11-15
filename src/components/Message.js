
// import React, { useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import pen from "../images/pen.png";
// import { TextField } from '@mui/material';
// import { addDoc, collection, doc } from 'firebase/firestore';
// import { auth, database } from '../firebase/Setup';
// import ClearIcon from '@mui/icons-material/Clear';
// import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
// const style = {
//   position: 'absolute',
//   top: '61%',
//   left: '71%',
//   transform: 'translate(-50%, -50%)',
//   width: "40vw",
//   height: "35vw",
//   minHeight: "505px",
//   bgcolor: 'background.paper',
//   padding: "1vw",
// };

// export default function Message() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [mailId, setMailId] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [subject, setSubject] = React.useState("");
//   const send = async () => {
//     const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
//     const messageRef = collection(userDoc, "Send");
//     try {
//       await addDoc(messageRef, {
//         email: message,
//         sender: auth.currentUser?.displayName,
//         subject: subject,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   const inbox = async () => {
//     const userDoc = doc(database, "Users", `${mailId}`);
//     const messageRef = collection(userDoc, "Inbox");
//     try {
//       await addDoc(messageRef, {
//         email: message,
//         subject: subject,
//         sender: auth.currentUser?.displayName
//       });
//       send();
//       window.location.href = '/main'; // Assuming '/main' is the route to navigate back to the Inbox
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   return (
//     <div>
//       <div onClick={handleOpen} style={{
//         cursor: 'pointer', height: "3vw", marginLeft: "1vw", marginTop:"1.2vw",marginBottom:"1.2vw",
//         width: "11vw", display: "flex", alignItems: "center",
//         borderRadius: "20px", backgroundColor: "#BEE0FF"
//       }}>
//         <img src={pen} style={{ width: "1.2vw", marginLeft: "2vw" }} />
//         <h4 style={{ marginLeft: "1vw", fontWeight: "400", fontSize: '1.3vw' }}>Compose</h4>
//       </div>
//       <Modal
//         open={open}
//         onClose={() => {
//           handleClose();
//           // Add code here to refresh Inbox messages
//           // For example, call a function to refresh the messages
//         }}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography style={{
//             backgroundColor: "#EDF9FF", position: 'absolute',
//             top: "0", left: "0", width: "41vw", padding: "0.5vw", fontSize: "1vw"
//           }}>
//             New Message
            
//             <OpenInFullOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }}/>
//             <ClearIcon style={{ position: 'absolute', right: '0.2vw', top: '0.5vw', cursor: 'pointer' }} onClick={handleClose}/>
            
//           </Typography>
//           <TextField onChange={(e) => setMailId(e.target.value)} variant='standard' label="To" sx={{ width: "39vw", marginTop: "1vw" }} />
//           <br />
//           <TextField onChange={(e) => setSubject(e.target.value)} variant='standard' label="Subject" sx={{ width: "39vw" }} />
//           <br />
//           <TextField onChange={(e) => setMessage(e.target.value)} multiline rows={12} sx={{ width: "39vw", "& fieldset": { border: "none" } }} />
//           <br />
//           <Button onClick={inbox} variant='contained' sx={{
//             borderRadius: "6vw",
//             fontSize: "1vw", width: "4vw", height: "3vw"
//           }}>Send</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
// import React, {useState} from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { TextField } from '@mui/material';
// import { addDoc, collection, doc } from 'firebase/firestore';
// import { auth, database } from '../firebase/Setup';
// import ClearIcon from '@mui/icons-material/Clear';
// import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
// import pen from "../images/pen.png";
// import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
// import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "40vw",
//   height: "35vw",
//   minHeight: "505px",
//   bgcolor: 'background.paper',
//   padding: "1vw",
//   transition: 'all 0.3s ease-out',
// };

// export default function Message() {
//   const [open, setOpen] = React.useState(false);
//   const [expanded, setExpanded] = React.useState(false);
//   const [showRichTextEditor, setShowRichTextEditor] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setExpanded(false);
//     setShowRichTextEditor(false);
//   };

//   const toggleExpand = () => setExpanded(!expanded);

//   const modalStyle = {
//     ...style,
//     width: expanded ? "70vw" : "40vw",
//     height: expanded ? "50vw" : "35vw",
//   };

//   const inputStyle = {
//     width: expanded ? "70vw" : "38vw",
//     marginTop: "1vw",
//   };

//   const buttonStyle = {
//     borderRadius: "6vw",
//     fontSize: "1vw",
//     width: expanded ? "8vw" : "4vw",
//     height: "3vw",
//     marginTop: expanded ? "1vw" : "0.5vw",
//   };
  
//   const richTextStyle = {
//     width: expanded ? "48vw" : "38vw",
//     marginTop: expanded ? "1vw" : "0.5vw", // Adjusted marginTop
//     display: showRichTextEditor ? 'block' : 'none', // Show/hide based on state
//   };

//   const [mailId, setMailId] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [subject, setSubject] = React.useState("");
//   const formats = ['bold', 'italic', 'underline', 'strike', 'color', 'background', 'link'];
//   const send = async () => {
//     const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
//     const messageRef = collection(userDoc, "Send");
//     try {
//       await addDoc(messageRef, {
//         email: message,
//         sender: auth.currentUser?.displayName,
//         subject: subject,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const inbox = async () => {
//     const userDoc = doc(database, "Users", `${mailId}`);
//     const messageRef = collection(userDoc, "Inbox");
//     try {
//       await addDoc(messageRef, {
//         email: message,
//         subject: subject,
//         sender: auth.currentUser?.displayName,
//       });
//       send();
//       window.location.href = '/main'; // Assuming '/main' is the route to navigate back to the Inbox
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <div onClick={handleOpen} style={{
//         cursor: 'pointer', height: "3vw", marginLeft: "1vw", marginTop:"1.2vw",marginBottom:"1.2vw",
//         width: "11vw", display: "flex", alignItems: "center",
//         borderRadius: "20px", backgroundColor: "#BEE0FF"
//       }}>
//         <img src={pen} style={{ width: "1.2vw", marginLeft: "2vw" }} />
//         <h4 style={{ marginLeft: "1vw", fontWeight: "400", fontSize: '1.3vw' }}>Compose</h4>
//       </div>
//       <Modal
//         open={open}
//         onClose={() => {
//           handleClose();
//         }}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={modalStyle}>
//           <Typography style={{
//             backgroundColor: "#EDF9FF", position: 'absolute',
//             top: "0", left: "0", width: "41vw", padding: "0.5vw", fontSize: "1vw",width: expanded ? "98%" : "41vw",
//           }} >
//             New Message
            
//             {/* <OpenInFullOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }} onClick={toggleExpand}/> */}
//             {expanded ? (
//     <CloseFullscreenOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }} onClick={toggleExpand}/>
//   ) : (
//     <OpenInFullOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }} onClick={toggleExpand}/>
//   )}
//             <ClearIcon style={{ position: 'absolute', right: '0.2vw', top: '0.5vw', cursor: 'pointer' }} onClick={handleClose}/>
            
//           </Typography>
//           <TextField onChange={(e) => setMailId(e.target.value)} variant='standard' label="To" sx={inputStyle} />
//           <br />
//           <TextField onChange={(e) => setSubject(e.target.value)} variant='standard' label="Subject" sx={inputStyle} />
//           <br />
//           <TextField onChange={(e) => setMessage(e.target.value)} multiline rows={12} sx={{ width: expanded ? "48vw" : "38vw", "& fieldset": { border: "none" } }} />
//           <br />
//           {showRichTextEditor && (
//             <ReactQuill
//               value={message}
//               onChange={(value) => setMessage(value)}
//               formats={formats}
//               modules={{ toolbar: formats }}
//               style={{ width: expanded ? "48vw" : "38vw" }}
//             />
//           )}
//           <Button onClick={inbox} variant='contained' sx={buttonStyle}>Send</Button>
          
//           <FormatColorTextOutlinedIcon  
//           style={{
//             marginTop: "0.8vw",
//               marginLeft: expanded ? "1vw" : "0.5",
//               verticalAlign: "middle",
//               width: expanded ? "8vw" : "4vw",
//               marginTop: expanded ? "1vw" : "0.5vw",
//               cursor: "pointer",
//           }}
//            onClick={() => setShowRichTextEditor(!showRichTextEditor)}/>
          
          
//         </Box>
//       </Modal>
//     </div>
//   );
// }
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { addDoc, collection, doc } from 'firebase/firestore';
import { auth, database } from '../firebase/Setup';
import ClearIcon from '@mui/icons-material/Clear';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import pen from "../images/pen.png";
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40vw",
  height: "35vw",
  minHeight: "505px",
  bgcolor: 'background.paper',
  padding: "1vw",
  transition: 'all 0.3s ease-out',
};

export default function Message() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mailId, setMailId] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const toggleExpand = () => setExpanded(!expanded);

  const modalStyle = {
    ...style,
    width: expanded ? "70vw" : "40vw",
    height: expanded ? "50vw" : "35vw",
    
  };

  const inputStyle = {
    width: expanded ? "70vw" : "38vw",
    marginTop: "1vw",
  };

  const buttonStyle = {
    borderRadius: "6vw",
    fontSize: "1vw",
    width: expanded ? "8vw" : "4vw",
    height: "3vw",
    marginTop: expanded ? "2vw" : "0.5vw",
  };

  const richTextStyle = {
    width: expanded ? "70vw" : "38vw",
    minHeight: expanded ? "30vw" : "20vw",
    marginTop: expanded ? "1vw" : "0.5vw",
  };

  const send = async () => {
        const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
        const messageRef = collection(userDoc, "Send");
        try {
          await addDoc(messageRef, {
            email: message,
            sender: auth.currentUser?.displayName,
            subject: subject,
          });
        } catch (err) {
          console.error(err);
        }
      };
    
      const inbox = async () => {
        if (!mailId || !subject || !message) {
          alert("Please fill in all fields.");
          return;
        }
        const plainTextMessage = document.querySelector('.ql-editor').innerText;
        const userDoc = doc(database, "Users", `${mailId}`);
        const messageRef = collection(userDoc, "Inbox");
        try {
          await addDoc(messageRef, {
            email: plainTextMessage,
            subject: subject,
            sender: auth.currentUser?.displayName,
          });
          send();
          window.location.href = '/main'; // Assuming '/main' is the route to navigate back to the Inbox
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <div>
      <div onClick={handleOpen} style={{
        cursor: 'pointer', height: "3vw", marginLeft: "1vw", marginTop:"1.2vw",marginBottom:"1.2vw",
        width: "11vw", display: "flex", alignItems: "center",
        borderRadius: "20px", backgroundColor: "#BEE0FF"
      }}>
        <img src={pen} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <h4 style={{ marginLeft: "1vw", fontWeight: "400", fontSize: '1.3vw' }}>Compose</h4>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography style={{
            backgroundColor: "#EDF9FF", position: 'absolute',
            top: "0", left: "0", width: "41vw", padding: "0.5vw", fontSize: "1vw", width: expanded ? "98%" : "41vw",
          }} >
            New Message
            {expanded ? (
              <CloseFullscreenOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }} onClick={toggleExpand}/>
            ) : (
              <OpenInFullOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }} onClick={toggleExpand}/>
            )}
            <ClearIcon style={{ position: 'absolute', right: '0.2vw', top: '0.5vw', cursor: 'pointer' }} onClick={handleClose}/>
          </Typography>
          <TextField onChange={(e) => setMailId(e.target.value)} variant='standard' label="To" sx={inputStyle} />
          <br />
          <TextField onChange={(e) => setSubject(e.target.value)} variant='standard' label="Subject" sx={inputStyle} />
          <br />
          <ReactQuill
            value={message}
            onChange={(value) => setMessage(value)}
            style={richTextStyle}
          />
          <br />
          <Button onClick={inbox} variant='contained' sx={buttonStyle}>Send</Button>
        </Box>
      </Modal>
    </div>
  );
}
