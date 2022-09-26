const nodemailer = require('nodemailer')

const sendEmail = async (email: string, subject: string, msg: string) => {
    try {
        const transporter = nodemailer.createTransport({    
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "6f6658b9d3b66c",
                pass: "f035937a0018df"
            }
        })
        await transporter.sendMail({
            from: "ydeezly",
            to: "dzzy104@gmail.com",
            subject: subject,
            html: msg
        })
    } catch (err) {
        console.log(err)
        throw new Error()

    }
}

module.exports = sendEmail