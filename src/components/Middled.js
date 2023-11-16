import React, { useEffect, useState } from 'react';
import { Paper, ListItem } from '@mui/material';
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
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import star from "../images/star.png";
import remove from "../images/bin.png";
import yellow from "../images/yellow.png";

const dummyEmails = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Meeting Tomorrow',
    email: 'john.doe@example.com',
    starred: true,
    snoozed: false,
  },
  {
    id: 2,
    sender: 'Jane Smith',
    subject: 'Project Update',
    email: 'jane.smith@example.com',
    starred: false,
    snoozed: true,
  },
  {
    id: 3,
    sender: 'Alice Johnson',
    subject: 'Important Announcement',
    email: 'alice.johnson@example.com',
    starred: true,
    snoozed: true,
  },
  {
    id: 4,
    sender: 'Bob Anderson',
    subject: 'Weekly Report',
    email: 'bob.anderson@example.com',
    starred: false,
    snoozed: false,
  },
  {
    id: 5,
    sender: 'Eva Williams',
    subject: 'Product Launch',
    email: 'eva.williams@example.com',
    starred: true,
    snoozed: false,
  },
  {
    id: 6,
    sender: 'Charlie Brown',
    subject: 'Team Building Event',
    email: 'charlie.brown@example.com',
    starred: false,
    snoozed: true,
  },
  
];


function Middled(props) {
    const [mailData, setMailData] = useState(dummyEmails);
    const [isChecked, setIsChecked] = useState(false);
    const [showEmailDetail, setShowEmailDetail] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [showIcons, setShowIcons] = useState(false);
  
    const deleteMail = async (data) => {
      // Implement delete functionality as needed
      console.log('Delete functionality here');
    };
  
    const getMail = async (collectionName) => {
      // Implement getMail functionality as needed
      console.log('getMail functionality here');
    };
  
    const starred = async (data) => {
      // Implement starred functionality as needed
      console.log('Starred functionality here');
    };
  
    const snoozed = async (data) => {
      // Implement snooze functionality as needed
      console.log('Snoozed functionality here');
    };
  
    const refreshEmails = () => {
      // Implement refresh functionality as needed
      console.log('Refresh functionality here');
    };
  
    const handleEmailClick = (data) => {
      setSelectedEmail(data);
    };
  
    const handleGoBack = () => {
      setSelectedEmail(null);
    };
  
    const handleMoreVertClick = () => {
      console.log('More icon clicked');
      // You can add more functionality or open a menu, etc.
    };
  
    const handleCheckboxClick = () => {
      setIsChecked(!isChecked);
      setShowIcons(!showIcons);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        // Implement fetchData functionality as needed
        console.log('Fetch data functionality here');
      };
  
      fetchData();
  
      const interval = setInterval(() => {
        fetchData();
      }, 500);
  
      return () => clearInterval(interval);
    }, [props.subCollect]);
  
    return (
      <div style={{ marginLeft: '2.9vw', width: '75vw' }}>
        {selectedEmail ? (
          <div style={{ marginTop: '2vw' }}>
            <div style={{ display: 'flex' }}>
              <ArrowBackIcon onClick={handleGoBack} style={{ cursor: 'pointer', fontSize: '1.3vw' }} />
              <ArchiveIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '2.5vw' }} />
              <ReportIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw' }} />
              <DeleteIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw' }} />
              <CheckCircleOutlineIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw' }} />
              <AccessTimeIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw' }} />
              <PlaylistAddCheckIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw' }} />
            </div>
            <h2 style={{ fontWeight: '300', fontSize: '1.5vw' }}>{selectedEmail.subject}</h2>
            <p>{selectedEmail.email}</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex' }}>
              <CheckBoxOutlineBlankIcon
                style={{
                  cursor: 'pointer',
                  fontSize: '1.3vw',
                  marginLeft: '1.8vw',
                  marginBottom: '0.3vw',
                  marginTop: '1vw',
                }}
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
                  <ChevronLeftIcon style={{ marginLeft: '1vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop: '0.8vw' }} />
                  <ChevronRightIcon style={{ marginLeft: '0.3vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop: '0.8vw' }} />
                </>
              ) : (
                <>
                  <RefreshIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} onClick={refreshEmails} />
                  <MoreVertIcon style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }} onClick={handleMoreVertClick} />
                  <p style={{ marginLeft: 'auto', marginRight: '1.8vw', fontSize: '0.8vw', fontWeight: 'normal', marginTop: '1.2vw' }}>1-50 of 1,432</p>
                  <ChevronLeftIcon style={{ marginLeft: '1vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop: '0.8vw', marginTop: '1.2vw' }} />
                  <ChevronRightIcon style={{ marginLeft: '0.3vw', marginRight: '1.8vw', fontSize: '1.2vw', fontWeight: 'normal', marginTop: '0.8vw', marginTop: '1.2vw' }} />
                </>
              )}
            </div>
            <Emailtype />
            {props.subCollect === "Starred" ? (
              dummyEmails
                .filter((data) => data.starred)
                .map((data) => (
                  <div key={data.id} onClick={() => handleEmailClick(data)}>
                    <Paper
                    onMouseEnter={() => setShowEmailDetail(true)}
                    onMouseLeave={() => setShowEmailDetail(false)}
                    elevation={0}
                    style={{ backgroundColor: '#F8FCFF', borderBottom: '1px solid #EFEFEFEF', borderTop: '1px solid #EFEFEF' }}
                  >
                    <ListItem>
                      <CheckBoxOutlineBlankIcon
                        style={{ cursor: 'pointer', width: '1vw', height: '1vw', marginRight: '1.2vw' }}
                        onClick={handleCheckboxClick}
                        checked={isChecked}
                      />
                      {data.starred ? (
                        <StarIcon
                          style={{
                            cursor: 'pointer',
                            fontSize: '1.3vw',
                            marginRight: '1.2vw',
                            color: '#FFD700',
                          }}
                          onClick={() => starred(data)}
                        />
                      ) : (
                        <StarBorderIcon
                          style={{
                            cursor: 'pointer',
                            fontSize: '1.3vw',
                            marginRight: '1.2vw',
                          }}
                          onClick={() => starred(data)}
                        />
                      )}
                      <span style={{ fontSize: '0.8vw', marginLeft: '1.2vw', fontWeight: '500', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                        {data.sender}
                        <span style={{ fontSize: '0.8vw', marginLeft: '5vw', fontWeight: '500', cursor: 'pointer', fontSize: '18' }} onClick={() => handleEmailClick(data)}>
                          {data.subject}
                        </span>
                        <span style={{ marginLeft: '2vw', fontWeight: '300', cursor: 'pointer', fontSize: '8' }} onClick={() => handleEmailClick(data)}>
                          {data.email.substring(0, 50)}....
                        </span>
                      </span>
                      <div style={{ position: 'absolute', right: '0', top: '0' }}>
                        {showEmailDetail && (
                          <AccessTimeIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }}
                            onClick={() => snoozed(data)}
                          />
                        )}
                        {showEmailDetail && (
                          <DeleteIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }}
                            onClick={() => deleteMail(data)}
                          />
                        )}
                      </div>
                    </ListItem>
                  </Paper>
                  </div>
                ))
            ) : props.subCollect === 'Snoozed' ? (
                dummyEmails
                  .filter((data) => data.snoozed)
                  .map((data) => (
                    <div key={data.id} onClick={() => handleEmailClick(data)}>
                      <Paper
                        onMouseEnter={() => setShowEmailDetail(true)}
                        onMouseLeave={() => setShowEmailDetail(false)}
                        elevation={0}
                        style={{ backgroundColor: '#F8FCFF', borderBottom: '1px solid #EFEFEFEF', borderTop: '1px solid #EFEFEF' }}
                      >
                        <ListItem>
                          <CheckBoxOutlineBlankIcon
                            style={{ cursor: 'pointer', width: '1vw', height: '1vw', marginRight: '1.2vw' }}
                            onClick={handleCheckboxClick}
                            checked={isChecked}
                          />
                          {data.starred ? (
                            <StarIcon
                              style={{
                                cursor: 'pointer',
                                fontSize: '1.3vw',
                                marginRight: '1.2vw',
                                color: '#FFD700',
                              }}
                              onClick={() => starred(data)}
                            />
                          ) : (
                            <StarBorderIcon
                              style={{
                                cursor: 'pointer',
                                fontSize: '1.3vw',
                                marginRight: '1.2vw',
                              }}
                              onClick={() => starred(data)}
                            />
                          )}
                          <span style={{ fontSize: '0.8vw', marginLeft: '1.2vw', fontWeight: '500', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                            {data.sender}
                            <span style={{ fontSize: '0.8vw', marginLeft: '5vw', fontWeight: '500', cursor: 'pointer', fontSize: '18' }} onClick={() => handleEmailClick(data)}>
                              {data.subject}
                            </span>
                            <span style={{ marginLeft: '2vw', fontWeight: '300', cursor: 'pointer', fontSize: '8' }} onClick={() => handleEmailClick(data)}>
                              {data.email.substring(0, 50)}....
                            </span>
                          </span>
                          <div style={{ position: 'absolute', right: '0', top: '0' }}>
                            {showEmailDetail && (
                              <AccessTimeIcon
                                style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }}
                                onClick={() => snoozed(data)}
                              />
                            )}
                            {showEmailDetail && (
                              <DeleteIcon
                                style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }}
                                onClick={() => deleteMail(data)}
                              />
                            )}
                          </div>
                        </ListItem>
                      </Paper>
                    </div>
                  ))
              ) : (
              dummyEmails.map((data) => (
                <div key={data.id}>
                  <Paper
                    onMouseEnter={() => setShowEmailDetail(true)}
                    onMouseLeave={() => setShowEmailDetail(false)}
                    elevation={0}
                    style={{ backgroundColor: '#F8FCFF', borderBottom: '1px solid #EFEFEFEF', borderTop: '1px solid #EFEFEF' }}
                  >
                    <ListItem>
                      <CheckBoxOutlineBlankIcon
                        style={{ cursor: 'pointer', width: '1vw', height: '1vw', marginRight: '1.2vw' }}
                        onClick={handleCheckboxClick}
                        checked={isChecked}
                      />
                      {data.starred ? (
                        <StarIcon
                          style={{
                            cursor: 'pointer',
                            fontSize: '1.3vw',
                            marginRight: '1.2vw',
                            color: '#FFD700',
                          }}
                          onClick={() => starred(data)}
                        />
                      ) : (
                        <StarBorderIcon
                          style={{
                            cursor: 'pointer',
                            fontSize: '1.3vw',
                            marginRight: '1.2vw',
                          }}
                          onClick={() => starred(data)}
                        />
                      )}
                      <span style={{ fontSize: '0.8vw', marginLeft: '1.2vw', fontWeight: '500', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                        {data.sender}
                        <span style={{ fontSize: '0.8vw', marginLeft: '5vw', fontWeight: '500', cursor: 'pointer', fontSize: '18' }} onClick={() => handleEmailClick(data)}>
                          {data.subject}
                        </span>
                        <span style={{ marginLeft: '2vw', fontWeight: '300', cursor: 'pointer', fontSize: '8' }} onClick={() => handleEmailClick(data)}>
                          {data.email.substring(0, 50)}....
                        </span>
                      </span>
                      <div style={{ position: 'absolute', right: '0', top: '0' }}>
                        {showEmailDetail && (
                          <AccessTimeIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }}
                            onClick={() => snoozed(data)}
                          />
                        )}
                        {showEmailDetail && (
                          <DeleteIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginBottom: '0.3vw', marginTop: '1vw' }}
                            onClick={() => deleteMail(data)}
                          />
                        )}
                      </div>
                    </ListItem>
                  </Paper>
                </div>
              ))
            )}
          </>
        )}
      </div>
    );
  }
  
  export default Middled;
  