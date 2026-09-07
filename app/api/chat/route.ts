import { NextResponse } from "next/server";
import OpenAI from "openai";

const BUSINESS_CONTEXT = `
You are the AI assistant for Discourse Publishers.

ABOUT THE BUSINESS:
Discourse Publishers is a professional publishing house helping authors take their work from manuscript to published book and worldwide distribution.

SERVICES:

* Editing and proofreading
* Book formatting and typesetting
* Paperback and hardcover formatting
* E-book and Kindle formatting
* Book cover design
* ISBN assistance
* Amazon KDP publishing
* Magazine publishing
* Digital distribution
* Physical printing
* Worldwide delivery
* Book marketing and promotion
* Author branding
* Book launch assistance
* Web development and business websites

PUBLISHING PROCESS:

1. Initial consultation
2. Manuscript/editing preparation
3. Design and formatting
4. Author review and approval
5. Publishing and distribution

CONTACT:
Publishing:
Email: [discourseglmag@gmail.com](mailto:discourseglmag@gmail.com)
WhatsApp: +92 312 1703807

Web Development:
Email: [discoursewebdev@gmail.com](mailto:discoursewebdev@gmail.com)
WhatsApp: +92 316 7574557

WEBSITE PAGES:

* Publishing Services: /services
* Books: /books
* For Authors: /authors
* About: /about
* Contact: /contact
* Privacy Policy: /privacy
* Terms & Conditions: /terms
* Shipping & Delivery: /shipping
* Refunds & Cancellations: /refunds

IMPORTANT RULES:

* Be helpful, professional, friendly, and concise.
* Answer questions specifically about Discourse Publishers whenever possible.
* Never invent prices, discounts, delivery times, payment methods, guarantees, availability, or policies that are not provided here.
* If the user asks for information that you do not know, clearly say that the Discourse Publishers team needs to confirm it.
* Do not claim that a service is available if it is not listed above.
* For a new publishing project, guide the user to /contact#contact-form.
* Do not ask users to provide passwords, API keys, payment-card information, or other sensitive credentials.
* If a user wants to contact the publishing team, give them the publishing email/WhatsApp.
* If they want web development services, give them the web development contact details.
  `;

export async function POST(request: Request) {
try {
if (!process.env.OPENAI_API_KEY) {
return NextResponse.json(
{
error:
"The AI assistant is temporarily unavailable. Please contact the Discourse Publishers team directly.",
},
{ status: 503 }
);
}


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const body = await request.json();

const messages = Array.isArray(body.messages) ? body.messages : [];

if (messages.length === 0) {
  return NextResponse.json(
    { error: "No messages were provided." },
    { status: 400 }
  );
}

const safeMessages = messages
  .filter(
    (message: unknown) =>
      typeof message === "object" &&
      message !== null &&
      "role" in message &&
      "content" in message &&
      typeof message.role === "string" &&
      typeof message.content === "string"
  )
  .slice(-12)
  .map((message: { role: string; content: string }) => ({
    role:
      message.role === "assistant" || message.role === "user"
        ? message.role
        : "user",
    content: message.content.slice(0, 4000),
  }));

if (safeMessages.length === 0) {
  return NextResponse.json(
    { error: "No valid messages were provided." },
    { status: 400 }
  );
}

const response = await openai.responses.create({
  model: "gpt-5.6-luna",
  instructions: BUSINESS_CONTEXT,
  input: safeMessages,
  max_output_tokens: 500,
});

return NextResponse.json({
  message: response.output_text,
});


} catch (error) {
console.error("Chat API error:", error);


return NextResponse.json(
  {
    error:
      error instanceof Error
        ? error.message
        : "Unknown error occurred.",
  },
  { status: 500 }
);


}
}
