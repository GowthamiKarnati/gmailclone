

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
// import { addDoc, collection, doc } from 'firebase/firestore';
// import { auth, database } from '../firebase/Setup';
// import ClearIcon from '@mui/icons-material/Clear';
// import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
// import pen from "../images/pen.png";
// import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
// import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import InsertLinkIcon from '@mui/icons-material/InsertLink';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import SnoozeIcon from '@mui/icons-material/Snooze';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// const style = {
  
//   position: 'absolute',
//   top: '70%',
//   left: '75%',
//   bottom:'20%',
//   transform: 'translate(-50%, -50%)',
//   width: "40vw",
//   height: "35vw",
//   minHeight: "505px",
//   bgcolor: 'background.paper',
//   padding: "1vw",
//   transition: 'all 0.1s ease-out',
//   marginBottom: "1vw",
// };

// export default function Message() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const [mailId, setMailId] = useState("");
//   const [message, setMessage] = useState("");
//   const [subject, setSubject] = useState("");

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setExpanded(false);
//   };

//   const toggleExpand = () => setExpanded(!expanded);

//   const modalStyle = {
//     ...style,
//     width: expanded ? "70vw" : "40vw",
//     height: expanded ? "50vw" : "35vw",
//     top: expanded ? '50%' : '70%', // Adjust the value when expanded
//     left: expanded ? '50%' : '75%',
//     padding: expanded ? "2vw" : "1vw", 
    
//   };

//   const inputStyle = {
//     width: expanded ? "70vw" : "38vw",
//     marginTop: "0vw",
//   };

//   const buttonStyle = {
//     borderRadius: "6vw",
//     fontSize: "1vw",
//     width: expanded ? "8vw" : "4vw",
//     height: "3vw",
//     marginTop: expanded ? "2vw" : "0.5vw",
//   };
//   const buttonContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     // Update this line
//     marginTop: expanded?'30vw':"17vw",
//     marginBottom: '3vw',
//   };
  
//   const send = async () => {
//         const plainTextMessage = document.querySelector('.ql-editor').innerText;
//         const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
//         const messageRef = collection(userDoc, "Send");
//         try {
//           await addDoc(messageRef, {
//             email: plainTextMessage,
//             sender: auth.currentUser?.displayName,
//             subject: subject,
//           });
//         } catch (err) {
//           console.error(err);
//         }
//       };
    
//       const inbox = async () => {
//         if (!mailId || !subject || !message) {
//           alert("Please fill in all fields.");
//           return;
//         }
//         const plainTextMessage = document.querySelector('.ql-editor').innerText;
//         const userDoc = doc(database, "Users", `${mailId}`);
//         const messageRef = collection(userDoc, "Inbox");
//         try {
//           await addDoc(messageRef, {
//             email: plainTextMessage,
//             subject: subject,
//             sender: auth.currentUser?.displayName,
//           });
//           send();
//           window.location.href = '/main'; // Assuming '/main' is the route to navigate back to the Inbox
//         } catch (err) {
//           console.error(err);
//         }
//       };

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
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={modalStyle}>
//           <Typography style={{
//             backgroundColor: "#EDF9FF", position: 'absolute',
//             top: "0", left: "0", width: "41vw", padding: "0.5vw", fontSize: "1vw", width: expanded ? "98%" : "41vw",
//           }} >
//             New Message
//             {expanded ? (
//               <CloseFullscreenOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }} onClick={toggleExpand}/>
//             ) : (
//               <OpenInFullOutlinedIcon style={{ position: 'absolute', right: '2.5vw', top: '0.2vw', cursor: 'pointer' }} onClick={toggleExpand}/>
//             )}
//             <ClearIcon style={{ position: 'absolute', right: '0.2vw', top: '0.5vw', cursor: 'pointer' }} onClick={handleClose}/>
//           </Typography>
//           <TextField onChange={(e) => setMailId(e.target.value)} variant='standard' label="To" sx={inputStyle} />
          
//           <TextField onChange={(e) => setSubject(e.target.value)} variant='standard' label="Subject" sx={inputStyle} />
          
//           <TextField onChange={(e) => setMessage(e.target.value)} variant='standard' label="Message" sx={inputStyle} />
          
          
//           <div style={buttonContainerStyle}>
//           <Button onClick={inbox} variant='contained' sx={buttonStyle}>Send</Button>
//           <FormatColorTextIcon style={{ marginLeft: '1vw' }} />
//           <AttachFileIcon style={{ marginLeft: '0.8vw' }}/>
//           <InsertLinkIcon  style={{ marginLeft: '0.8vw' }}/>
//           <EmojiEmotionsIcon style={{ marginLeft: '0.8vw' }}/>
//           <InsertDriveFileIcon style={{ marginLeft: '0.8vw' }}/>
//           <InsertPhotoIcon style={{ marginLeft: '0.8vw' }}/>
//           <SnoozeIcon style={{ marginLeft: '0.8vw' }}/>
//           <MoreVertIcon style={{ marginLeft: '0.8vw' }}/>
//         </div>

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
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SnoozeIcon from '@mui/icons-material/Snooze';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const style = {
  position: 'absolute',
  top: '70%',
  left: '75%',
  bottom:'20%',
  transform: 'translate(-50%, -50%)',
  width: "40vw",
  height: "35vw",
  minHeight: "505px",
  bgcolor: 'background.paper',
  padding: "1vw",
  transition: 'all 0.1s ease-out',
  marginBottom: "1vw",
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
    top: expanded ? '50%' : '70%', // Adjust the value when expanded
    left: expanded ? '50%' : '75%',
    padding: expanded ? "2vw" : "1vw", 
    
  };

  const inputStyle = {
    width: expanded ? "70vw" : "38vw",
    marginTop: "0vw",
  };

  const buttonStyle = {
    borderRadius: "6vw",
    fontSize: "1vw",
    width: expanded ? "8vw" : "4vw",
    height: "3vw",
    marginTop: expanded ? "2vw" : "0.5vw",
  };
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    // Update this line
    marginTop: expanded ? '35vw' : "19vw",
    marginBottom: '3vw',
    
  };
  
  const send = async () => {
        const plainTextMessage = document.querySelector('.ql-editor').innerText;
        const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
        const messageRef = collection(userDoc, "Send");
        try {
          await addDoc(messageRef, {
            email: plainTextMessage,
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
          
          <TextField onChange={(e) => setSubject(e.target.value)} variant='standard' label="Subject" sx={inputStyle} />
          
          <TextField onChange={(e) => setMessage(e.target.value)} multiline rows={0} sx={{ width: "39vw", "& fieldset": { border: "none" } }} />
          
          <div style={buttonContainerStyle}>
            <Button onClick={inbox} variant='contained' sx={buttonStyle}>Send</Button>
            <FormatColorTextIcon style={{ marginLeft: '1vw' }} />
            <AttachFileIcon style={{ marginLeft: '0.8vw' }}/>
            <InsertLinkIcon  style={{ marginLeft: '0.8vw' }}/>
            <EmojiEmotionsIcon style={{ marginLeft: '0.8vw' }}/>
            <InsertDriveFileIcon style={{ marginLeft: '0.8vw' }}/>
            <InsertPhotoIcon style={{ marginLeft: '0.8vw' }}/>
            <SnoozeIcon style={{ marginLeft: '0.8vw' }}/>
            <MoreVertIcon style={{ marginLeft: '0.8vw' }}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
