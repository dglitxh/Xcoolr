const nodemailer = require('nodemailer')

const sendEmail = async (email: string, subject: string, msg: string) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.Host,
            service: process.env.Service,
            port: 679,
            secure: true,
            auth: {
                user: process.env.User,
                pass: process.env.Pass
            }
        })

        await transporter.sendMail({
            from: process.env.User,
            to: email,
            subject: subject,
            msg: msg
        })
    } catch (err) {
        console.log(err)

    }
}

module.exports = sendEmail