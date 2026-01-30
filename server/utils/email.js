const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async ({ to, subject, html, text }) => {
    try {
        const mailOptions = {
            from: `"${process.env.EMAIL_FROM_NAME || 'Freecosystem'}" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
            text,
        };

        const info = await transporter.sendMail(mailOptions);
        return info;

    } catch (error) {
        throw new Error("Failed to send email");
    }
};

module.exports = sendEmail;
