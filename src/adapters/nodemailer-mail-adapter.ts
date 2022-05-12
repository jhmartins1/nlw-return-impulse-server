import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "./mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c8b1929436d500",
      pass: "f9a18a69439ecd"
    }
  });

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body} :SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'João Heitor <jhmartinsrdo@gmail.com>',
        subject,
        html: body,
        })
    }
}