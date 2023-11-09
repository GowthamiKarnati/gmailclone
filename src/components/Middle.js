import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, setDoc, getDoc } from 'firebase/firestore';
import { auth, database } from '../firebase/Setup';
import star from "../images/star.png";
import refresh from "../images/refresh.png";
import remove from "../images/bin.png";
import yellow from "../images/yellow.png";
import snooze from "../images/snooze.png";
import {ListItem, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
function Middle(props) {

  const [mailData, setMailData] = useState([]);
  
  const [showEmailDetail, setShowEmailDetail] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const deleteMail = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Inbox", `${data.id}`);
    const starredDoc = doc(userDoc, "Starred", `${data.id}`);
    const snoozedDoc = doc(userDoc, "Snoozed", `${data.id}`);
    try {
      await deleteDoc(starredDoc);
      await deleteDoc(snoozedDoc);
      await deleteDoc(messageDoc);
      
      setMailData((prevMailData) => prevMailData.filter((email) => email.id !== data.id));
    } catch (err) {
      console.error(err);
    }
  }

  const getMail = async (collectionName) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = collection(userDoc, collectionName);
    try {
      const data = await getDocs(messageDoc);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setMailData(filteredData);
    } catch (err) {
      console.error(err);
    }
  }

  const starred = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Starred", `${data.id}`);
    try {
      const docSnapshot = await getDoc(messageDoc);
  
      if (docSnapshot.exists()) {
        // If the email is already starred, unstar it
        await deleteDoc(messageDoc);
      } else {
        // If the email is not starred, star it
        await setDoc(messageDoc, {
          email: data.email,
          sender: data.sender,
          subject: data.subject,
          starred: true, // Fix the typo here
        });
      }
      // Update the starred state
      setMailData((prevMailData) => prevMailData.map((email) => {
        if (email.id === data.id) {
          return { ...email, starred: !docSnapshot.exists() };
        }
        return email;
      }));
    } catch (err) {
      console.error(err);
    }
  }

  const snoozed = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Snoozed", `${data.id}`);
    const snoozeDoc = doc(userDoc, "Inbox", `${data.id}`);
    try {
      await deleteDoc(snoozeDoc);
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
        subject: data.subject,
      });
    } catch (err) {
      console.error(err);
    }
  }

  const refreshEmails = () => {
    getMail(props.subCollect ? props.subCollect : "Inbox");
  }

  const handleEmailClick = (data) => {
    setSelectedEmail(data);
  }

  const handleGoBack = () => {
    setSelectedEmail(null);
  }

  useEffect(() => {
    getMail(props.subCollect ? props.subCollect : "Inbox");
  }, [props.subCollect]);

  return (
    <div style={{ marginLeft: "2.9vw", width: '75vw' }}>
      
      {selectedEmail ? (
        
          <div style={{marginTop:"2vw"}}>
          <div style={{display:'flex'}}>
         <ArrowBackIcon onClick={handleGoBack} style={{ cursor: 'pointer', fontSize:"1.3vw" }}/> 
         <ArchiveIcon style={{ cursor: 'pointer', fontSize:"1.3vw", marginLeft:"2.5vw" }}/>
         <ReportIcon style={{ cursor: 'pointer', fontSize:"1.3vw", marginLeft:"1.8vw" }}/>
         <DeleteIcon style={{ cursor: 'pointer', fontSize:"1.3vw", marginLeft:"1.8vw" }} /> 
         <CheckCircleOutlineIcon style={{ cursor: 'pointer', fontSize:"1.3vw", marginLeft:"1.8vw" }}/>
         <AccessTimeIcon style={{ cursor: 'pointer', fontSize:"1.3vw", marginLeft:"1.8vw" }}/>
         <PlaylistAddCheckIcon style={{ cursor: 'pointer', fontSize:"1.3vw", marginLeft:"1.8vw" }}/>
         </div>
          <h2 style={{fontWeight: "300", fontSize:"1.5vw"}}>{selectedEmail.subject}</h2>
          <p>{selectedEmail.email}</p>
         </div> 
        
      ) : (
        <>
        <img src={refresh} style={{ width: "1.5vw", height: "1.5vw", marginLeft: "1.5vw", marginTop: "2vw" }} onClick={refreshEmails} />
          {props.search ? mailData.filter((data) => data.sender === props.search).map((data) => (
            <div key={data.id} onClick={() => handleEmailClick(data)}>
              <Paper onMouseEnter={() => setShowEmailDetail(true)} onMouseLeave={() => setShowEmailDetail(false)} elevation={0} style={{ backgroundColor: "#F8FCFF", borderBottom: "1px solid #EFEFEF", borderTop: "1px solid #EFEFEF" }}>
                <ListItem>
                  {data.starred ? <img src={yellow} style={{ cursor: "pointer", width: "1.4vw", height: "1.4vw" }} />
                    : <img onClick={() => starred(data)} src={star} style={{ cursor: "pointer", width: "1.4vw", height: "1.4vw" }} />}
                  <span style={{ fontSize: "1.3vw", marginLeft: "1.2vw", fontWeight: "500" }}>{data.sender}<span style={{ marginLeft: "12vw", fontWeight: "200", marginLeft: "1vw", cursor: "pointer" }}>{data.email}</span></span>
                  {showEmailDetail && <img onClick={() => snoozed(data)} src={snooze} style={{ margin: '0 0.5vw', width: "1.3vw", height: "1.3vw", cursor: "pointer" }} />}
                  {showEmailDetail && <img onClick={() => deleteMail(data)} style={{ width: "1.1vw", height: "1.1vw", cursor: "pointer" }} />}
                </ListItem>
              </Paper>
            </div>
          )) : mailData.map((data) => (
            <div key={data.id} >
              <Paper onMouseEnter={() => setShowEmailDetail(true)} onMouseLeave={() => setShowEmailDetail(false)} elevation={0} style={{ backgroundColor: "#F8FCFF", borderBottom: "1px solid #EFEFEFEF", borderTop: "1px solid #EFEFEF" }}>
                <ListItem>
                  {data.starred ? <img src={yellow} style={{ cursor: "pointer", width: "1.4vw", height: "1.4vw" }} />
                    : <img onClick={() => starred(data)} src={star} style={{ cursor: "pointer", width: "1.4vw", height: "1.4vw" }} />}
                  <span style={{ fontSize: "1.3vw", marginLeft: "1.2vw", fontWeight: "500" , cursor: "pointer"}} onClick={() => handleEmailClick(data)}>{data.sender}<span style={{ marginLeft: "12vw", fontWeight: "200", cursor: "pointer" }} onClick={() => handleEmailClick(data)}>{data.subject}</span></span>
                  <div style={{ position: 'absolute', right: '0', top: '0' }}>
                    {showEmailDetail && <img onClick={() => snoozed(data)} src={snooze} style={{ margin: '0 0.5vw', width: "1.3vw", height: "1.3vw", cursor: "pointer", marginRight: "20px" }} />}
                    {showEmailDetail && <img onClick={() => deleteMail(data)} src={remove} style={{ width: "1.1vw", height: "1.1vw", cursor: "pointer", marginRight: "30px" }} />}
                  </div>
                </ListItem>
              </Paper>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
export default Middle;
