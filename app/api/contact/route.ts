import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
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
            name: `${firstName} ${lastName || ""}`,
          },
          subject: `New Website Lead from ${firstName} ${lastName || ""}`,
          htmlContent: `
            <h2>New Contact Form Submission</h2>

            <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Website:</strong> ${website || "Not provided"}</p>
            <p><strong>Business Type:</strong> ${businessType || "Not provided"}</p>

            <hr />

            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }),
      }
    );

    if (!brevoResponse.ok) {
      const error = await brevoResponse.text();
      console.error("Brevo Error:", error);

      return NextResponse.json(
        { error: "Email sending failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}