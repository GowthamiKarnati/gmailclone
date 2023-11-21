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
import dummySentEmails from './dummySentEmails';
import yellow from "../images/yellow.png";
import dummySpamEmails from './dummySpamEmails';
import dummyTrashEmails from './dummyTrashEmails';
import dummyImportantEmails from './dummyImportantEmails';
import dummyScheduledEmails from './dummyScheduledEmails';
const dummyEmails = [
  {
    id: 1,
    sender: 'Reminder Service',
    subject: 'Upcoming Event Reminder',
    email: 'This is a reminder for the upcoming event scheduled for next week. Don\'t forget to prepare!',
    scheduledTime: '2023-12-01T15:30:00', // Replace with the actual scheduled time
    starred: false,
    snoozed: false,
    category: 'scheduled',
  },
  {
    id: 2,
    sender: 'Birthday Wishes',
    subject: 'Happy Birthday!',
    email: 'Wishing you a fantastic birthday celebration! This email will be sent on your birthday.',
    scheduledTime: '2023-12-15T09:00:00', // Replace with the actual scheduled time
    starred: true,
    snoozed: false,
    category: 'scheduled',
  },
  {
    id: 3,
    sender: 'Weekly Report Reminder',
    subject: 'Submit Your Weekly Report',
    email: 'A friendly reminder to submit your weekly report by the end of the day on Friday.',
    scheduledTime: '2023-12-02T17:00:00', // Replace with the actual scheduled time
    starred: false,
    snoozed: false,
    category: 'scheduled',
  },
  {
    id: 4,
    sender: 'John Doe',
    subject: 'Meeting Tomorrow',
    email: 'Discussing the agenda and preparing for the upcoming meeting.We’ve all been in meetings where participants are unprepared, people veer off track, and the topics discussed are a waste of the team’s time. These problems — and others like them — stem from poor agenda design. An effective agenda sets clear expectations for what needs to occur before and during a meeting. It helps team members prepare, allocates time wisely, quickly gets everyone on the same topic, and identifies when the discussion is complete. If problems still occur during the meeting, a well-designed agenda increases the team’s ability to effectively and quickly address them.',
    starred: false,
    snoozed: false,
  },
  {
    id: 5,
    sender: 'Jane Smith',
    subject: 'Project Update',
    email: 'Providing an update on the progress of the ongoing projectProviding an update on the progress of the ongoing project.Providing an update on the progress of the ongoing project.Providing an update on the progress of the ongoing project.Providing an update on the progress of the ongoing project..',
    starred: false,
    snoozed: false,
  },
  {
    id: 6,
    sender: 'Alice Johnson',
    subject: 'Important Announcement',
    email: 'Announcing a critical update that requires immediate attention.Announcing a critical update that requires immediate attention. This is some additional content for the email to provide more information about the announcement and its impact',
    starred: true,
    snoozed: false,
  },
  {
    id: 7,
    sender: 'Michael Starred',
    subject: 'Exclusive Limited-Time Offer!',
    email: 'We acknowledge your outstanding contribution and achievement. Well done!',
    starred: true,
    snoozed: false,
    category: 'starred',
  },
  {
    id: 8,
    sender: 'Bob Anderson',
    subject: 'Weekly Report',
    email: 'Sharing the weekly report highlighting key achievements and challenges.',
    starred: false,
    snoozed: false,
  },
  {
    id: 9,
    sender: 'Eva Williams',
    subject: 'Product Launch',
    email: 'Discussing the upcoming product launch strategy and preparations.',
    starred: false,
    snoozed: false,
  },
  {
    id: 10,
    sender: 'Charlie Brown',
    subject: 'Team Building Event',
    email: 'Planning a team-building event to enhance collaboration and teamwork.',
    starred: true,
    snoozed: false,
  },
  {
    id: 11,
    sender: 'Sophie Snoozed',
    subject: 'Weekly Meeting Tomorrow',
    email: 'Just a friendly reminder about our weekly team meeting scheduled for tomorrow.',
    starred: false,
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 12,
    sender: 'Alex Snoozed',
    subject: 'Project Deadline Extended',
    email: 'Good news! The deadline for the ongoing project has been extended. Take advantage of the extra time.',
    starred: true,
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 13,
    sender: 'Olivia Snoozed',
    subject: 'Upcoming Holiday Break',
    email: 'Plan your tasks accordingly as there will be a holiday break next week. Enjoy your time off!',
    starred: false,
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 14,
    sender: 'Reminder Service',
    subject: 'Upcoming Event Reminder',
    email: 'Could you please provide more details or clarify what specific information or assistance.',
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 15,
    sender: 'Task Manager',
    subject: 'Task Deadline Approaching',
    email: 'Your task deadline is approaching. Take a look at the details and make sure you',
    snoozed: true,
    starred: true,
    category: 'snoozed',
  },
  {
    id: 16,
    sender: 'Leo',
    subject: 'Exciting Opportunity Awaits!',
    email: 'Congratulations! You have been selected for an exciting new opportunity.',
    starred: true,
    snoozed: false,
    category: 'starred',
  },
  {
    id: 17,
    sender: 'Noah',
    subject: 'Special Invitation: VIP Event',
    email: 'You are invited to an exclusive VIP event with special guests and surprises.',
    starred: true,
    snoozed: true,
    category: 'starred',
  },
];
const dummyStarredEmails = [
  {
    id: 1,
    sender: 'Leo',
    subject: 'Exciting Opportunity Awaits!',
    email: 'Congratulations! You have been selected for an exciting new opportunity.',
    starred: true,
    snoozed: false,
    category: 'starred',
  },
  {
    id: 2,
    sender: 'Noah',
    subject: 'Special Invitation: VIP Event',
    email: 'You are invited to an exclusive VIP event with special guests and surprises.',
    starred: true,
    snoozed: true,
    category: 'starred',
  },
  {
    id: 3,
    sender: 'Alexander',
    subject: 'Your Achievement Recognized',
    email: 'We acknowledge your outstanding contribution and achievement. Well done!',
    starred: true,
    snoozed: false,
    category: 'starred',
  },
  {
    id: 3,
    sender: 'Michael Starred',
    subject: 'Exclusive Limited-Time Offer!',
    email: 'We acknowledge your outstanding contribution and achievement. Well done!',
    starred: true,
    snoozed: false,
    category: 'starred',
  },
  
  
];
const dummySnoozedEmails = [
  {
    id: 1,
    sender: 'Sophie Snoozed',
    subject: 'Weekly Meeting Tomorrow',
    email: 'Just a friendly reminder about our weekly team meeting scheduled for tomorrow.',
    starred: false,
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 2,
    sender: 'Alex Snoozed',
    subject: 'Project Deadline Extended',
    email: 'Good news! The deadline for the ongoing project has been extended. Take advantage of the extra time.',
    starred: true,
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 3,
    sender: 'Olivia Snoozed',
    subject: 'Upcoming Holiday Break',
    email: 'Plan your tasks accordingly as there will be a holiday break next week. Enjoy your time off!',
    starred: false,
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 4,
    sender: 'Reminder Service',
    subject: 'Upcoming Event Reminder',
    email: 'Could you please provide more details or clarify what specific information or assistance.',
    snoozed: true,
    category: 'snoozed',
  },
  {
    id: 5,
    sender: 'Task Manager',
    subject: 'Task Deadline Approaching',
    email: 'Your task deadline is approaching. Take a look at the details and make sure you',
    snoozed: true,
    starred: true,
    category: 'snoozed',
  },
  // ... (other snoozed emails)
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
              dummyStarredEmails
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
                      
                      <span
                        style={{
                          display: 'inline-block',
                          width: '13%',
                          fontSize: '1vw',
                          marginLeft: '1.2vw',
                          fontWeight: '500',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                        onClick={() => handleEmailClick(data)}
                      >
                        {data.sender}
                      </span>
                      <span
                        style={{
                            // Set the width to 100% for left alignment
                          fontSize: '1vw',
                          marginLeft: '1.2vw',
                          fontWeight: '500',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          display: 'inline-block', // Ensure block-level behavior
                          textAlign: 'left',  // Set left alignment
                        }}
                        onClick={() => handleEmailClick(data)}
                      >
                        {data.subject}
                      </span>
                      <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                        <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                        {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                        </span>
                      <div style={{ position: 'absolute', right: '0', top: '0' }}>
                        {showEmailDetail && (
                          <AccessTimeIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw', marginTop: '0.5vw' }}
                            onClick={() => snoozed(data)}
                          />
                        )}
                        {showEmailDetail && (
                          <DeleteIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                            onClick={() => deleteMail(data)}
                          />
                        )}
                      </div>
                    </ListItem>
                  </Paper>
                  </div>
                ))
            ) : props.subCollect === 'Snoozed' ? (
              dummySnoozedEmails
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
                          <span
                        style={{
                          display: 'inline-block',
                          width: '13%',
                          fontSize: '1vw',
                          marginLeft: '1.2vw',
                          fontWeight: '500',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                        onClick={() => handleEmailClick(data)}
                      >
                        {data.sender}
                      </span>
                      <span
                        style={{
                            // Set the width to 100% for left alignment
                          fontSize: '1vw',
                          marginLeft: '1.2vw',
                          fontWeight: '500',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          display: 'inline-block', // Ensure block-level behavior
                          textAlign: 'left',  // Set left alignment
                        }}
                        onClick={() => handleEmailClick(data)}
                      >
                        {data.subject}
                      </span>
                      <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                        <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                        {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                        </span>
                          
                          <div style={{ position: 'absolute', right: '0', top: '0' }}>
                            {showEmailDetail && (
                              <AccessTimeIcon
                                style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                onClick={() => snoozed(data)}
                              />
                            )}
                            {showEmailDetail && (
                              <DeleteIcon
                                style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                onClick={() => deleteMail(data)}
                              />
                            )}
                          </div>
                        </ListItem>
                      </Paper>
                    </div>
                  ))
              ) : props.subCollect === 'Spam' ? (
                dummySpamEmails
                    .filter((data) => data.spam)
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
                            <span
                          style={{
                            display: 'inline-block',
                            width: '13%',
                            fontSize: '1vw',
                            marginLeft: '1.2vw',
                            fontWeight: '500',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                          onClick={() => handleEmailClick(data)}
                        >
                          {data.sender}
                        </span>
                        <span
                          style={{
                              // Set the width to 100% for left alignment
                            fontSize: '1vw',
                            marginLeft: '1.2vw',
                            fontWeight: '500',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'inline-block', // Ensure block-level behavior
                            textAlign: 'left',  // Set left alignment
                          }}
                          onClick={() => handleEmailClick(data)}
                        >
                          {data.subject}
                        </span>
                        <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                          <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                          {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                          </span>
                            
                            <div style={{ position: 'absolute', right: '0', top: '0' }}>
                              {showEmailDetail && (
                                <AccessTimeIcon
                                  style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                  onClick={() => snoozed(data)}
                                />
                              )}
                              {showEmailDetail && (
                                <DeleteIcon
                                  style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                  onClick={() => deleteMail(data)}
                                />
                              )}
                            </div>
                          </ListItem>
                        </Paper>
                      </div>
                    ))
                ): props.subCollect === 'Send' ? (
                dummySentEmails
                    .filter((data) => data.send)
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
                            <span
                          style={{
                            display: 'inline-block',
                            width: '13%',
                            fontSize: '1vw',
                            marginLeft: '1.2vw',
                            fontWeight: '500',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                          onClick={() => handleEmailClick(data)}
                        >
                          {data.sender}
                        </span>
                        <span
                          style={{
                              // Set the width to 100% for left alignment
                            fontSize: '1vw',
                            marginLeft: '1.2vw',
                            fontWeight: '500',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'inline-block', // Ensure block-level behavior
                            textAlign: 'left',  // Set left alignment
                          }}
                          onClick={() => handleEmailClick(data)}
                        >
                          {data.subject}
                        </span>
                        <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                          <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                          {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                          </span>
                            
                            <div style={{ position: 'absolute', right: '0', top: '0' }}>
                              {showEmailDetail && (
                                <AccessTimeIcon
                                  style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                  onClick={() => snoozed(data)}
                                />
                              )}
                              {showEmailDetail && (
                                <DeleteIcon
                                  style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                  onClick={() => deleteMail(data)}
                                />
                              )}
                            </div>
                          </ListItem>
                        </Paper>
                      </div>
                    ))
                ): props.subCollect === 'Spam' ? (
                  dummySpamEmails
                      .filter((data) => data.spam)
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
                              <span
                            style={{
                              display: 'inline-block',
                              width: '13%',
                              fontSize: '1vw',
                              marginLeft: '1.2vw',
                              fontWeight: '500',
                              cursor: 'pointer',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                            onClick={() => handleEmailClick(data)}
                          >
                            {data.sender}
                          </span>
                          <span
                            style={{
                                // Set the width to 100% for left alignment
                              fontSize: '1vw',
                              marginLeft: '1.2vw',
                              fontWeight: '500',
                              cursor: 'pointer',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              display: 'inline-block', // Ensure block-level behavior
                              textAlign: 'left',  // Set left alignment
                            }}
                            onClick={() => handleEmailClick(data)}
                          >
                            {data.subject}
                          </span>
                          <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                            <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                            {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                            </span>
                              
                              <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                {showEmailDetail && (
                                  <AccessTimeIcon
                                    style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                    onClick={() => snoozed(data)}
                                  />
                                )}
                                {showEmailDetail && (
                                  <DeleteIcon
                                    style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                    onClick={() => deleteMail(data)}
                                  />
                                )}
                              </div>
                            </ListItem>
                          </Paper>
                        </div>
                      ))
                  ): props.subCollect === 'Send' ? (
                  dummySentEmails
                      .filter((data) => data.send)
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
                              <span
                            style={{
                              display: 'inline-block',
                              width: '13%',
                              fontSize: '1vw',
                              marginLeft: '1.2vw',
                              fontWeight: '500',
                              cursor: 'pointer',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                            onClick={() => handleEmailClick(data)}
                          >
                            {data.sender}
                          </span>
                          <span
                            style={{
                                // Set the width to 100% for left alignment
                              fontSize: '1vw',
                              marginLeft: '1.2vw',
                              fontWeight: '500',
                              cursor: 'pointer',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              display: 'inline-block', // Ensure block-level behavior
                              textAlign: 'left',  // Set left alignment
                            }}
                            onClick={() => handleEmailClick(data)}
                          >
                            {data.subject}
                          </span>
                          <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                            <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                            {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                            </span>
                              
                              <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                {showEmailDetail && (
                                  <AccessTimeIcon
                                    style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                    onClick={() => snoozed(data)}
                                  />
                                )}
                                {showEmailDetail && (
                                  <DeleteIcon
                                    style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                    onClick={() => deleteMail(data)}
                                  />
                                )}
                              </div>
                            </ListItem>
                          </Paper>
                        </div>
                      ))
                  ): props.subCollect === 'Spam' ? (
                    dummySpamEmails
                        .filter((data) => data.spam)
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
                                <span
                              style={{
                                display: 'inline-block',
                                width: '13%',
                                fontSize: '1vw',
                                marginLeft: '1.2vw',
                                fontWeight: '500',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                              onClick={() => handleEmailClick(data)}
                            >
                              {data.sender}
                            </span>
                            <span
                              style={{
                                  // Set the width to 100% for left alignment
                                fontSize: '1vw',
                                marginLeft: '1.2vw',
                                fontWeight: '500',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                display: 'inline-block', // Ensure block-level behavior
                                textAlign: 'left',  // Set left alignment
                              }}
                              onClick={() => handleEmailClick(data)}
                            >
                              {data.subject}
                            </span>
                            <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                              <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                              {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                              </span>
                                
                                <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                  {showEmailDetail && (
                                    <AccessTimeIcon
                                      style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                      onClick={() => snoozed(data)}
                                    />
                                  )}
                                  {showEmailDetail && (
                                    <DeleteIcon
                                      style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                      onClick={() => deleteMail(data)}
                                    />
                                  )}
                                </div>
                              </ListItem>
                            </Paper>
                          </div>
                        ))
                    ): props.subCollect === 'Send' ? (
                    dummySentEmails
                        .filter((data) => data.send)
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
                                <span
                              style={{
                                display: 'inline-block',
                                width: '13%',
                                fontSize: '1vw',
                                marginLeft: '1.2vw',
                                fontWeight: '500',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                              onClick={() => handleEmailClick(data)}
                            >
                              {data.sender}
                            </span>
                            <span
                              style={{
                                  // Set the width to 100% for left alignment
                                fontSize: '1vw',
                                marginLeft: '1.2vw',
                                fontWeight: '500',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                display: 'inline-block', // Ensure block-level behavior
                                textAlign: 'left',  // Set left alignment
                              }}
                              onClick={() => handleEmailClick(data)}
                            >
                              {data.subject}
                            </span>
                            <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                              <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                              {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                              </span>
                                
                                <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                  {showEmailDetail && (
                                    <AccessTimeIcon
                                      style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                      onClick={() => snoozed(data)}
                                    />
                                  )}
                                  {showEmailDetail && (
                                    <DeleteIcon
                                      style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                      onClick={() => deleteMail(data)}
                                    />
                                  )}
                                </div>
                              </ListItem>
                            </Paper>
                          </div>
                        ))
                    ): props.subCollect === 'Trash' ? (
                      dummyTrashEmails
                          .filter((data) => data.trash)
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
                                  <DeleteIcon fontSize='1vw'/>
                                  <span
                                style={{
                                  display: 'inline-block',
                                  width: '13%',
                                  fontSize: '1vw',
                                  marginLeft: '1.2vw',
                                  fontWeight: '500',
                                  cursor: 'pointer',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                }}
                                onClick={() => handleEmailClick(data)}
                              >
                                {data.sender}
                              </span>
                              <span
                                style={{
                                    // Set the width to 100% for left alignment
                                  fontSize: '1vw',
                                  marginLeft: '1.2vw',
                                  fontWeight: '500',
                                  cursor: 'pointer',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  display: 'inline-block', // Ensure block-level behavior
                                  textAlign: 'left',  // Set left alignment
                                }}
                                onClick={() => handleEmailClick(data)}
                              >
                                {data.subject}
                              </span>
                              <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                                <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                                {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                                </span>
                                  
                                  <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                    {showEmailDetail && (
                                      <AccessTimeIcon
                                        style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                        onClick={() => snoozed(data)}
                                      />
                                    )}
                                    {showEmailDetail && (
                                      <DeleteIcon
                                        style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                        onClick={() => deleteMail(data)}
                                      />
                                    )}
                                  </div>
                                </ListItem>
                              </Paper>
                            </div>
                          ))
                      ): props.subCollect === 'Important' ? (
                      dummyImportantEmails
                          .filter((data) => data.important)
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
                                  <span
                                style={{
                                  display: 'inline-block',
                                  width: '13%',
                                  fontSize: '1vw',
                                  marginLeft: '1.2vw',
                                  fontWeight: '500',
                                  cursor: 'pointer',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                }}
                                onClick={() => handleEmailClick(data)}
                              >
                                {data.sender}
                              </span>
                              <span
                                style={{
                                    // Set the width to 100% for left alignment
                                  fontSize: '1vw',
                                  marginLeft: '1.2vw',
                                  fontWeight: '500',
                                  cursor: 'pointer',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  display: 'inline-block', // Ensure block-level behavior
                                  textAlign: 'left',  // Set left alignment
                                }}
                                onClick={() => handleEmailClick(data)}
                              >
                                {data.subject}
                              </span>
                              <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                                <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                                {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                                </span>
                                  
                                  <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                    {showEmailDetail && (
                                      <AccessTimeIcon
                                        style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                        onClick={() => snoozed(data)}
                                      />
                                    )}
                                    {showEmailDetail && (
                                      <DeleteIcon
                                        style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                        onClick={() => deleteMail(data)}
                                      />
                                    )}
                                  </div>
                                </ListItem>
                              </Paper>
                            </div>
                          ))
                      ): props.subCollect === 'Schedule' ? (
                        dummyScheduledEmails
                            .filter((data) => data.schedule)
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
                                    <span
                                  style={{
                                    display: 'inline-block',
                                    width: '13%',
                                    fontSize: '1vw',
                                    marginLeft: '1.2vw',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                  }}
                                  onClick={() => handleEmailClick(data)}
                                >
                                  {data.sender}
                                </span>
                                <span
                                  style={{
                                      // Set the width to 100% for left alignment
                                    fontSize: '1vw',
                                    marginLeft: '1.2vw',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    display: 'inline-block', // Ensure block-level behavior
                                    textAlign: 'left',  // Set left alignment
                                  }}
                                  onClick={() => handleEmailClick(data)}
                                >
                                  {data.subject}
                                </span>
                                <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                                  <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                                  {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                                  </span>
                                    
                                    <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                      {showEmailDetail && (
                                        <AccessTimeIcon
                                          style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                                          onClick={() => snoozed(data)}
                                        />
                                      )}
                                      {showEmailDetail && (
                                        <DeleteIcon
                                          style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
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
                      <span
                        style={{
                          display: 'inline-block',
                          width: '13%',
                          fontSize: '1vw',
                          marginLeft: '1.2vw',
                          fontWeight: '500',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                        onClick={() => handleEmailClick(data)}
                      >
                        {data.sender}
                      </span>
                      <span
                        style={{
                            // Set the width to 100% for left alignment
                          fontSize: '1vw',
                          marginLeft: '1.2vw',
                          fontWeight: '500',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          display: 'inline-block', // Ensure block-level behavior
                          textAlign: 'left',  // Set left alignment
                        }}
                        onClick={() => handleEmailClick(data)}
                      >
                        {data.subject}
                      </span>
                      <span style={{marginLeft:"0.5vw", fontWeight:'lighter'}}>-</span>
                        <span style={{ marginLeft: '0.5vw', fontWeight: '300', cursor: 'pointer', fontSize: '1vw' }} onClick={() => handleEmailClick(data)}>
                        {data.email.length > 70 ? data.email.substring(0, 70) + '...' : data.email}
                        </span>
                      
                      <div style={{ position: 'absolute', right: '0', top: '0' }}>
                        {showEmailDetail && (
                          <AccessTimeIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
                            onClick={() => snoozed(data)}
                          />
                        )}
                        {showEmailDetail && (
                          <DeleteIcon
                            style={{ cursor: 'pointer', fontSize: '1.3vw', marginLeft: '1.8vw',  marginTop: '0.5vw' }}
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
  