import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../firebase/Setup';

function EmailContent() {
  const { id } = useParams(); // Get the email ID from the route

  const [emailDetail, setEmailDetail] = useState(null);

  useEffect(() => {
    const fetchEmailDetail = async () => {
      try {
        if (id) {
          const emailDocRef = doc(database, 'Emails', id); // Replace 'Emails' with the actual collection name

          const emailDocSnap = await getDoc(emailDocRef);

          if (emailDocSnap.exists()) {
            const emailData = emailDocSnap.data();
            setEmailDetail(emailData);
          } else {
            // Handle the case when the email with the given ID doesn't exist
            console.log('Email not found');
          }
        } else {
          console.log('ID is not defined'); // Log when the ID is not available
        }
      } catch (error) {
        // Handle any errors that may occur during the fetch
        console.error('Error fetching email detail:', error);
      }
    };

    fetchEmailDetail(); // Always call the function regardless of the ID to log if the ID is undefined

  }, [id]);

  return (
    <div>
      {emailDetail ? (
        <div>
          <h2>{emailDetail.subject}</h2>
          <p>From: {emailDetail.sender}</p>
          <p>{emailDetail.email}</p>
          {/* Display other email details as needed */}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default EmailContent;
