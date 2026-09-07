import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const country = String(formData.get("country") || "");
    const service = String(formData.get("service") || "");
    const projectTitle = String(formData.get("project_title") || "");
    const projectType = String(formData.get("project_type") || "");
    const projectStage = String(formData.get("project_stage") || "");
    const projectSize = String(formData.get("project_size") || "");
    const timeline = String(formData.get("timeline") || "");
    const budget = String(formData.get("budget") || "");
    const message = String(formData.get("message") || "");

    const file = formData.get("requirements");

    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please upload a requirements document.",
        },
        { status: 400 }
      );
    }

    const maxFileSize = 25 * 1024 * 1024;

    if (file.size > maxFileSize) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "The document is too large. Please upload a file smaller than 25 MB.",
        },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Send web development inquiries to the dedicated web-development email.
    // All other inquiries go to the publishing email.
    const webDevelopmentServices = [
      "Web Development",
      "Website Design",
      "Front-End Development",
      "Responsive Websites",
      "Business Websites",
      "Custom Web Solutions",
    ];

    const recipient = webDevelopmentServices.includes(service)
      ? "discoursewebdev@gmail.com"
      : "discourseglmag@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Discourse Publishers <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `New Inquiry — ${service || "General Inquiry"} — ${name}`,

      html: `
        <h2>New Inquiry — Discourse Publishers</h2>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>

        <h3>Project Information</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Project Title:</strong> ${projectTitle}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Project Stage:</strong> ${projectStage}</p>
        <p><strong>Project Size:</strong> ${projectSize}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>

        <hr />

        <p>
          <strong>Attached document:</strong> ${file.name}
        </p>
      `,

      attachments: [
        {
          filename: file.name,
          content: fileBuffer,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          ok: false,
          error: error.message || "Resend error",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send your inquiry right now.",
      },
      { status: 500 }
    );
  }
}