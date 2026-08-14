import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, topic, budget, customBudget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project message are required." },
        { status: 400 }
      );
    }

    const effectiveBudget =
      budget === "Custom Budget" && customBudget
        ? `Custom: ${customBudget}`
        : budget || "Not specified";

    const targetEmail =
      process.env.CONTACT_EMAIL || "services@hyperplane.com";

    const emailSubject = `[Hyperplane Project Inquiry] from ${name} (${topic || "General"})`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0b0f; color: #f4f4f5; padding: 40px 20px; border-radius: 12px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #121218; border: 1px solid #27272a; border-radius: 12px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <div style="margin-bottom: 24px; border-bottom: 1px solid #27272a; padding-bottom: 16px;">
            <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.2em; color: #c084fc; text-transform: uppercase;">HYPERPLANE // NEW INQUIRY</span>
            <h1 style="font-size: 24px; font-weight: 600; color: #ffffff; margin: 8px 0 0 0;">New Project Inquiry Received</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px; width: 140px;">Client Name:</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px;">Business Email:</td>
              <td style="padding: 10px 0; color: #c084fc; font-size: 14px;"><a href="mailto:${email}" style="color: #c084fc; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px;">Company / Entity:</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px;">Technical Area:</td>
              <td style="padding: 10px 0; color: #818cf8; font-size: 14px; font-weight: 600;">${topic}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px;">Estimated Budget:</td>
              <td style="padding: 10px 0; color: #34d399; font-size: 14px; font-weight: 600;">${effectiveBudget}</td>
            </tr>
          </table>

          <div style="background-color: #09090c; border: 1px solid #1f1f23; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: #a1a1aa; letter-spacing: 0.1em; display: block; margin-bottom: 8px;">Project Scope & Requirements:</span>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 12px; color: #71717a; text-align: center;">
            Sent automatically from Hyperplane Portal (<a href="https://hyperplane.tech" style="color: #a1a1aa; text-decoration: none;">hyperplane.tech</a>)
          </div>

        </div>
      </div>
    `;

    const textContent = `
New Project Inquiry Received via Hyperplane Portal:

• Name: ${name}
• Email: ${email}
• Company: ${company || "N/A"}
• Technical Area: ${topic}
• Budget: ${effectiveBudget}

Requirements:
${message}
    `;

    let emailSent = false;
    let transportMethod = "logged";

    // If SMTP credentials are provided in environment, send via Nodemailer
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name} (via Hyperplane)" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: targetEmail,
        replyTo: email,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      });

      emailSent = true;
      transportMethod = "smtp";
    } else {
      // Log structured inquiry to server console for instant visibility
      console.log("==================================================");
      console.log(`[INCOMING INQUIRY] TO: ${targetEmail}`);
      console.log(`SUBJECT: ${emailSubject}`);
      console.log(`FROM: ${name} <${email}>`);
      console.log(`COMPANY: ${company || "N/A"}`);
      console.log(`TOPIC: ${topic}`);
      console.log(`BUDGET: ${effectiveBudget}`);
      console.log(`MESSAGE:\n${message}`);
      console.log("==================================================");
    }

    // Build mailto fallback link in case client wants direct email launch
    const mailtoFallback = `mailto:${targetEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(textContent)}`;

    return NextResponse.json({
      success: true,
      message: "Project inquiry received successfully.",
      emailSent,
      transportMethod,
      targetEmail,
      mailtoFallback,
    });
  } catch (error: any) {
    console.error("Error processing contact inquiry:", error);
    return NextResponse.json(
      {
        error: "Failed to process inquiry. Please try again or email us directly.",
        details: error?.message,
      },
      { status: 500 }
    );
  }
}
