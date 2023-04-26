import { NextApiRequest, NextApiResponse } from "next";
import { SendMailOptions, createTransport } from "nodemailer";

type RequestData = {
    authUser: string;
    authPass: string;
    apiKey: string;
    message: string;
};

export const config = {
    runtime: "edge",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body: RequestData = req.body;
    const { authUser, authPass, apiKey, message } = body;

    if (!authUser || !authPass || !apiKey || !message)
        return res.status(401).end();

    if (process.env.API_KEY !== apiKey) return res.status(403).end();

    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: authUser,
            pass: authPass,
        },
    });

    const mailOptions: SendMailOptions = {
        from: authUser,
        to: authUser,
        subject: "A message from your portfolio",
        text: message,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                reject();
                res.status(500).end();
                return;
            }

            console.log(info);
            resolve(undefined);
            res.status(200).end();
        });
    });
}
