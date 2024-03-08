"use server";

import * as sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail({ email, message, name }) {
  const mailOptions = {
    from: `ESSETS <sales@muntix.com>`,
    template_id: "d-f9cf8f363a1c4d86bd471710d463b423",
    replyTo: {
      email,
      name,
    },
    personalizations: [
      {
        to: [
          {
            email: "framirezswim@gmail.com",
          },
        ],
        dynamic_template_data: {
          name,
          message,
        },
      },
    ],
  };

  sgMail
    .send(mailOptions)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
