const dummySentEmails = [
    {
      id: 1,
      sender: 'Client A',
      subject: 'Project Proposal',
      email: 'Attached is the project proposal for your review. Let me know if you have any questions.',
      starred:true,
      send:true,
      category: 'sent',
    },
    {
      id: 2,
      sender: 'Team B',
      subject: 'Meeting Agenda',
      email: "I've outlined the agenda for our upcoming meeting. Please review and provide any additional items.",
      
      send:true,
      category: 'sent',
    },
    {
      id: 3,
      sender: 'Manager C',
      subject: 'Monthly Report',
      email: "The monthly report detailing our team's progress and key metrics is attached. Take a look when you get a chance.",
      
      send:true,
      category: 'sent',
    },
    // ... (other sent emails)
  ];
  export default dummySentEmails;