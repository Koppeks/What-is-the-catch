import { Resend } from "resend";
import { env } from "./env";

export const resend = new Resend(env.RESEND_API_KEY);

export async function sendTermsChangedEmail(to: string, subject: string, html: string) {
  await resend.emails.send({
    from: "WhatsTheCatch <noreply@yourdomain>",
    to,
    subject,
    html,
  });
}
