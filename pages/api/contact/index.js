require('dotenv').config()

export default function handler(req, res) {
    const EMAIL = process.env.EMAIL_ADDRESS;
    const PASSWORD = process.env.EMAIL_PASSWORD;
    const MYEMAIL = process.env.EMAIL_REAL;
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
        secure: true,
    });
    const {
        name,
        email,
        subject,
        message
    } = req.body;

    const mailData = {
        from: EMAIL,
        to: MYEMAIL,
        subject: subject,
        text: message,
        html: `<div>${message} <br/> From : <br/> Name : ${name} <br/ >Email : ${email}</div>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    res.status(200);
}