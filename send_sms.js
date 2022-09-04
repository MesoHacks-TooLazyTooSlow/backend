const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Ritu!!, Siddhant needs your help. His location:- ',
     from: '+19517087951',
     to: '+919661591407'
   })
  .then(message => console.log(message.sid));
