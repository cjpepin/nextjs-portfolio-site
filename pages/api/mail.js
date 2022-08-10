// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);
export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message =  `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: 'thorman00@gmail.com',
    from: 'portfolioSite@connorjpepin.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }
  console.log(mail)
  mail.send(data);
  console.log(res.status)
  res.status(200).json({ status: 'Ok' })
}
