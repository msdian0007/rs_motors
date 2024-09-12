
import { mailData, mailOptions } from "@/types";
import nodemailer from "nodemailer";

const user = process.env.BOT_MAIL;
const pass = process.env.PASSWORD;
const admin = process.env.ADMIN_EMAIL;

export async function POST(req: Request) {
    try {
        const { name, phoneNumber, productLink } = await req.json();
        if (!name && !phoneNumber && productLink) return new Response("Failed to send message.", { status: 500 });
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtpro.zoho.in",
            port: 465,
            secure: true,
            auth: {
                user,
                pass,
            },
        });
        let mailData: mailData = {
            name,
            phoneNumber,
            productLink,
            cred: {
                from: user,
                to: admin
            }
        }

        await transporter.sendMail(getMailTemp(mailData, 'CUSTOMER_INTEREST'), (error, info) => {
            if (error) {
                return new Response("Failed to send message.", { status: 500 });
            } else {
                return new Response(`Email sent: ${info.response}`, { status: 200 });
            }
        });
        return Response.json({ message: "Email sent" });
    } catch (err) {
        return new Response("Failed to send message.", { status: 500 });
    }
}

const getMailTemp = (mailData: mailData, cd: string) => {
    const mailOptions: mailOptions = {
        from: mailData.cred?.from,
        to: mailData.cred?.to,
        subject: "Customer Expressed Interest in Product",
    };
    switch (cd) {
        case "CUSTOMER_INTEREST":
            mailOptions.html = `<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            border-radius: 5px;
        }
        .header {
            background-color: #007BFF;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: white;
            padding: 20px;
            border-radius: 0 0 5px 5px;
        }
        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777;
        }
        .button {
            background-color: #007BFF;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Customer Interested in Product</h2>
        </div>
        <div class="content">
            <p>Hello Admin,</p>
            <p>We have received interest from a customer in one of our products. Below are the details:</p>
            <ul>
                <li><strong>Customer Name:</strong> ${mailData.name}</li>
                <li><strong>Phone:</strong> ${mailData.phoneNumber}</li>
                <li><strong>Product Interested In:</strong><a href='${mailData.productLink}'>View Details</a></li>
            </ul>
            <p>Please follow up with the customer at your earliest convenience.</p>
            <a href="mailto:{{customerEmail}}" class="button">Contact Customer</a>
        </div>
        <div class="footer">
            <p>Thank you,</p>
            <p>RS Motors</p>
        </div>
    </div>
</body>
</html>
`;
            return mailOptions;

        default:
            return mailOptions;
    }
};
