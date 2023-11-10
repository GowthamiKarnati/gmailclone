  import React, { useEffect, useState } from 'react';
  import { collection, deleteDoc, doc, getDocs, setDoc, getDoc } from 'firebase/firestore';
  import { auth, database } from '../firebase/Setup';
  import star from "../images/star.png";
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
  import Emailtype from './Emailtype';
  import RefreshIcon from '@mui/icons-material/Refresh';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';

  function Middle(props) {

    const [mailData, setMailData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [showEmailDetail, setShowEmailDetail] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [showIcons, setShowIcons] = useState(false);
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
    const handleMoreVertClick = () => {
      // Add the desired behavior when the "More" icon is clicked
      console.log('More icon clicked');
      // You can add more functionality or open a menu, etc.
    };
    const handleCheckboxClick = () => {
      setIsChecked(!isChecked);
      setShowIcons(!showIcons);
      
    };
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          await getMail(props.subCollect ? props.subCollect : "Inbox");
        } catch (error) {
          console.error("Error fetching emails:", error);
        }
      };

      fetchData(); // Fetch data when the component mounts

      const interval = setInterval(() => {
        // Fetch data at regular intervals (adjust the interval time as needed)
        fetchData();
      }, 500); // Fetch data every 60 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
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
          {/* <div style={{display:'flex'}}>
          <CheckBoxOutlineBlankIcon style={{cursor: 'pointer',fontSize: '1.3vw',marginLeft: '1.8vw',marginBottom: '0.3vw', marginTop: '1vw',}}/>
          <RefreshIcon style={{ cursor: 'pointer', fontSize:"1.3vw", marginLeft:"1.8vw", marginBottom:"0.3vw", marginTop:"1vw" }} onClick={refreshEmails}/>
          <MoreVertIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} onClick={handleMoreVertClick} />
          <p style={{ marginLeft: 'auto', marginRight: '1.8vw', fontSize: '0.8vw', fontWeight: 'normal' }}>1-50 of 1,432</p>
          <ChevronLeftIcon style={{ marginLeft: '1vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop:'0.8vw' }}/>
          <ChevronRightIcon style={{ marginLeft: '0.3vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop:'0.8vw' }}/>
          </div>  */}
          <div style={{ display: 'flex' }}>
        <CheckBoxOutlineBlankIcon
          style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }}
          onClick={() => setShowIcons(!showIcons)}
        />
        {showIcons ? (
        <>
          <ArchiveIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} />
          <DeleteIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} />
          <ReportIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} />
          <CheckCircleOutlineIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} />
          <AccessTimeIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} />
          <PlaylistAddCheckIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} />
          <p style={{ marginLeft: 'auto', marginRight: '1.8vw', fontSize: '0.8vw', fontWeight: 'normal' }}>1-50 of 1,432</p>
          <ChevronLeftIcon style={{ marginLeft: '1vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop:'0.8vw' }}/>
          <ChevronRightIcon style={{ marginLeft: '0.3vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop:'0.8vw' }}/>

        </>
      ) : (
        <>
          <RefreshIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} onClick={refreshEmails} />
          <MoreVertIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} onClick={handleMoreVertClick} />
          <p style={{ marginLeft: 'auto', marginRight: '1.8vw', fontSize: '0.8vw', fontWeight: 'normal', marginTop:"1.2vw" }}>1-50 of 1,432</p>
          <ChevronLeftIcon style={{ marginLeft: '1vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop:'0.8vw',marginTop:"1.2vw" }}/>
          <ChevronRightIcon style={{ marginLeft: '0.3vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop:'0.8vw',marginTop:"1.2vw" }}/>
        </>
      )}
        {/* ... (existing code) */}
      </div>
          <Emailtype />
            {props.search ? mailData.filter((data) => data.sender === props.search).map((data) => (
              <div key={data.id} onClick={() => handleEmailClick(data)}>
                <Paper onMouseEnter={() => setShowEmailDetail(true)} onMouseLeave={() => setShowEmailDetail(false)} elevation={0} style={{ backgroundColor: "#F8FCFF", borderBottom: "1px solid #EFEFEF", borderTop: "1px solid #EFEFEF" }}>
                  <ListItem>
                  
                    {data.starred ? <img src={yellow} style={{ cursor: "pointer", width: "0.8vw", height: "0.8vw" }} />
                    
                      : <img onClick={() => starred(data)} src={star} style={{ cursor: "pointer", width: "1.4vw", height: "1.4vw" }} />}
                    <span style={{ fontSize: "1.3vw", marginLeft: "1.2vw", fontWeight: "500" }}>{data.sender}
                    </span>
                    {showEmailDetail && <img onClick={() => snoozed(data)} src={snooze} style={{ margin: '0 0.5vw', width: "1.3vw", height: "1.3vw", cursor: "pointer" }} />}
                    {showEmailDetail && <img onClick={() => deleteMail(data)} style={{ width: "1.1vw", height: "1.1vw", cursor: "pointer" }} />}
                  </ListItem>
                </Paper>
              </div>
            )) : mailData.map((data) => (
              <div key={data.id} >
                <Paper onMouseEnter={() => setShowEmailDetail(true)} onMouseLeave={() => setShowEmailDetail(false)} elevation={0} style={{ backgroundColor: "#F8FCFF", borderBottom: "1px solid #EFEFEFEF", borderTop: "1px solid #EFEFEF" }}>
                  <ListItem>
                  <CheckBoxOutlineBlankIcon style={{ cursor: 'pointer', width: '1vw', height: '1vw', marginRight: '1.2vw' }} 
                  onClick={handleCheckboxClick}
                  checked={isChecked}
                  />
                    {data.starred ? <img src={yellow} style={{ cursor: "pointer", width: "0.8vw", height: "0.8vw", }} />
                      : <img onClick={() => starred(data)} src={star} style={{ cursor: "pointer", width: "0.9vw", height: "0.9vw" }} />}
                    <span style={{ fontSize: "0.8vw", marginLeft: "1.2vw", fontWeight: "500" , cursor: "pointer", fontSize:"20"}} onClick={() => handleEmailClick(data)}>{data.sender}<span style={{ fontSize:"0.8vw",marginLeft: "5vw", fontWeight: "500", cursor: "pointer", fontSize:"18" }} onClick={() => handleEmailClick(data)}>{data.subject}</span><span style={{ marginLeft: "2vw", fontWeight: "300", cursor: "pointer", fontSize:"8" }} onClick={() => handleEmailClick(data)}>{data.email.substring(0, 50)}....</span></span>
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
