import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      formType,
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      businessType,
      message,
    } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const isGrowthAudit = formType === "growth-audit";

    const fullName = `${firstName} ${lastName || ""}`.trim();

    /*
     * ---------------------------------------------------------
     * GROWTH AUDIT EMAIL
     * ---------------------------------------------------------
     */
    const growthAuditEmail = {
      subject: `New Growth Audit Request — ${fullName}`,

      htmlContent: `
        <div style="font-family: Arial, sans-serif; color: #141414; line-height: 1.6; max-width: 650px; margin: 0 auto;">

          <h2 style="color: #0e6b4e; margin-bottom: 8px;">
            New Growth Audit Request
          </h2>

          <p style="color: #555;">
            A potential client has requested a <strong>free Growth Audit</strong>
            through the MUSASCO website.
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <h3 style="margin-bottom: 12px;">
            Lead Information
          </h3>

          <p>
            <strong>Name:</strong> ${fullName}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Company / Business:</strong>
            ${company || "Not provided"}
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <h3 style="margin-bottom: 12px;">
            Biggest Growth Challenge
          </h3>

          <div style="
            background: #f5f7f6;
            border-left: 4px solid #0e6b4e;
            padding: 16px;
            margin-bottom: 24px;
          ">
            ${message}
          </div>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p style="font-size: 13px; color: #777;">
            <strong>Lead Source:</strong> Growth Audit Page
          </p>

          <p style="font-size: 13px; color: #777;">
            <strong>Lead Type:</strong> Free Growth Audit
          </p>

        </div>
      `,
    };

    /*
     * ---------------------------------------------------------
     * CONTACT FORM EMAIL
     * ---------------------------------------------------------
     */
    const contactEmail = {
      subject: `New Contact Inquiry — ${fullName}`,

      htmlContent: `
        <div style="font-family: Arial, sans-serif; color: #141414; line-height: 1.6; max-width: 650px; margin: 0 auto;">

          <h2 style="color: #0e6b4e; margin-bottom: 8px;">
            New Contact Inquiry
          </h2>

          <p style="color: #555;">
            Someone has submitted an inquiry through the
            <strong>MUSASCO contact page</strong>.
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <h3 style="margin-bottom: 12px;">
            Contact Information
          </h3>

          <p>
            <strong>Name:</strong> ${fullName}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <p>
            <strong>Company:</strong> ${company || "Not provided"}
          </p>

          <p>
            <strong>Website:</strong> ${website || "Not provided"}
          </p>

          <p>
            <strong>Business Type:</strong>
            ${businessType || "Not provided"}
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <h3 style="margin-bottom: 12px;">
            How Can We Help?
          </h3>

          <div style="
            background: #f5f7f6;
            border-left: 4px solid #0e6b4e;
            padding: 16px;
            margin-bottom: 24px;
          ">
            ${message}
          </div>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p style="font-size: 13px; color: #777;">
            <strong>Lead Source:</strong> Contact Page
          </p>

          <p style="font-size: 13px; color: #777;">
            <strong>Lead Type:</strong> General Contact Inquiry
          </p>

        </div>
      `,
    };

    /*
     * Select the correct email based on the form that was submitted.
     */
    const selectedEmail = isGrowthAudit
      ? growthAuditEmail
      : contactEmail;

    /*
     * ---------------------------------------------------------
     * SEND THROUGH BREVO
     * ---------------------------------------------------------
     */
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY!,
          "content-type": "application/json",
        },

        body: JSON.stringify({
          sender: {
            name: "MUSASCO Website",
            email: "musasco4wealth@gmail.com",
          },

          to: [
            {
              email: "musasco4wealth@gmail.com",
              name: "MUSASCO Concepts",
            },
          ],

          replyTo: {
            email,
            name: fullName,
          },

          subject: selectedEmail.subject,
          htmlContent: selectedEmail.htmlContent,
        }),
      }
    );

    /*
     * Handle Brevo errors.
     */
    if (!brevoResponse.ok) {
      const error = await brevoResponse.text();

      console.error("Brevo Error:", error);

      return NextResponse.json(
        {
          error: "Email sending failed",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: isGrowthAudit
        ? "Growth Audit request sent successfully"
        : "Contact inquiry sent successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}