const nodemailer = require('nodemailer')

const sendEmail = async (email: string, subject: string, msg: string) => {
    try {
        let testAccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password

            }
        })
        console.log(testAccount)
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