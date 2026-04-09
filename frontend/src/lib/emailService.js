// EmailJS Configuration
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO SET UP (one-time, takes 5 minutes):
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add a new Email Service → connect your Gmail (ontaraai@gmail.com)
//    → copy the "Service ID" and paste below as VITE_EMAILJS_SERVICE_ID
// 3. Create an Email Template with these variables:
//       {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    → copy the "Template ID" and paste below as VITE_EMAILJS_TEMPLATE_ID
// 4. Go to Account → Public Key → copy and paste as VITE_EMAILJS_PUBLIC_KEY
// 5. Create a .env file in /frontend/ and add the three lines below:
//
//    VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//    VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//    VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
//
// ─────────────────────────────────────────────────────────────────────────────

import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Sends an email via EmailJS.
 * @param {{ from_name: string, from_email: string, subject: string, message: string }} params
 * @returns {Promise<void>}
 */
export async function sendEmail(params) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS is not configured. Please add the three VITE_EMAILJS_* variables to your .env file.');
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
}
