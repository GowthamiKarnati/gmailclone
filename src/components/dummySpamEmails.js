const dummySpamEmails = [
    {
      id: 1,
      sender: 'SpamBot X',
      subject: 'You Won a Prize!',
      email: 'Congratulations! You have won a million dollars! Click the link to claim your prize!',
      spam:true,
      category: 'spam',
    },
    {
      id: 2,
      sender: 'Special Offer',
      subject: 'Exclusive Deals Inside!',
      email: 'Don’t miss out on our exclusive offers! Limited time only. Click here to unlock the discounts!',
      spam:true,
      category: 'spam',
    },
    {
      id: 3,
      sender: 'Urgent Message',
      subject: 'Important Information!',
      email: 'URGENT: Your account is at risk. Click here to secure your account immediately.',
      spam:true,
      category: 'spam',
    },
    {
        id: 4,
        sender: 'News Digest',
        subject: 'Weekly News Highlights',
        email: 'Here are the top news stories of the week. Stay informed!',
        spam:true,
        starred:true,
        category: 'subscription',
      },
      {
        id: 5,
        sender: 'Blog Updates',
        subject: 'New Blog Post Notification',
        email: 'A new blog post has been published. Check it out!',
        spam:true,
        category: 'subscription',
      },
    // ... (other spam emails)
  ];
  
  export default dummySpamEmails;
  