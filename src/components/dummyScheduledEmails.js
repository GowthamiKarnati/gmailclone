const dummyScheduledEmails = [
    {
      id: 1,
      sender: 'Reminder Service',
      subject: 'Upcoming Event Reminder',
      email: 'This is a reminder for the upcoming event scheduled for next week. Don\'t forget to prepare!',
      scheduledTime: '2023-12-01T15:30:00', // Replace with the actual scheduled time
      schedule:true,
      category: 'scheduled',
    },
    {
      id: 2,
      sender: 'Birthday Wishes',
      subject: 'Happy Birthday!',
      email: 'Wishing you a fantastic birthday celebration! This email will be sent on your birthday.',
      scheduledTime: '2023-12-15T09:00:00', // Replace with the actual scheduled time
      schedule:true,
      category: 'scheduled',
    },
    {
      id: 3,
      sender: 'Weekly Report Reminder',
      subject: 'Submit Your Weekly Report',
      email: 'A friendly reminder to submit your weekly report by the end of the day on Friday.',
      scheduledTime: '2023-12-02T17:00:00', // Replace with the actual scheduled time
      schedule:true,
      category: 'scheduled',
    },
    // ... (other scheduled emails)
  ];
  
  export default dummyScheduledEmails;
  