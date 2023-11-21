const dummyTrashEmails = [
    {
      id: 1,
      sender: 'Old Subscription',
      subject: 'Your Subscription has Expired',
      email: 'We regret to inform you that your subscription has expired. Renew now to continue enjoying our services.',
      trash:true,
      category: 'trash',
    },
    {
      id: 2,
      sender: 'Expired Offer',
      subject: 'Last Chance: Exclusive Offer!',
      email: 'This is your last chance to avail of our exclusive offer. Click here to grab it before it expires!',
      trash:true,
      category: 'trash',
    },
    {
      id: 3,
      sender: 'Unread Newsletter',
      subject: 'Read Now for Exciting Updates!',
      email: 'Our latest newsletter is full of exciting updates. Click here to read it and stay informed!',
      trash:true,
      category: 'trash',
    },
    {
        id: 4,
        sender: 'Unwanted Sender',
        subject: 'Promotional Offer Inside!',
        email: 'You won a million dollars! Click here to claim your prize!',
        trash: true,
        category: 'trash',
      },
    // ... (other trash emails)
  ];
  
  export default dummyTrashEmails;
  