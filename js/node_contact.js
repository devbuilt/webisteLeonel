const nodemailer = require('nodemailer');

const xoath2 = require('xoauth2');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		xoauth2: xoauth2.createxoauth2Generator({
			user: 'leonelhtejeda@gmail.com',
			clientId: '',
			clientSecret: '',
			refreshToken: ''
			
		})
	}
})

var mailOptions = {
	form: ' Leo <leonelhtejeda@gmail.com>',
	to: 'leotums@gmail.com',
	subject: 'NodeMailer Text',
	text: ' Hello World'
}

transporter.sendMail(mailOptions);