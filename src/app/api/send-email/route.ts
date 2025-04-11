import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();
        console.log('hello');
        // Create transporter
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // Your email
                pass: process.env.EMAIL_PASSWORD, // Your app password
            },
        });

        // Email content
        let mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL, // Your email to receive messages
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };
        // Acknowledgment email to user
        const acknowledgmentMail = {
            from: process.env.EMAIL,
            to: email,
            subject: "We received your message!",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; max-width: 600px; margin: auto;">
                    <h2 style="color: #6366f1;">Hi ${name}, 👋</h2>
                    <p style="font-size: 16px; color: #374151;">
                        Thank you for reaching out through my portfolio contact form!
                    </p>
                    <p style="font-size: 16px; color: #374151;">
                        I truly appreciate your message and will get back to you as soon as possible. Whether it’s a project idea, feedback, or a friendly hello — I'm excited to connect!
                    </p>
                    <p style="font-size: 16px; color: #4b5563;">
                        In the meantime, feel free to explore more on my portfolio, or connect with me through social platforms.
                    </p>
                    <br />
                    <p style="font-size: 16px; color: #6b7280;">Warm regards,<br /><strong>Ambuj Vats</strong><br />Portfolio Team</p>
                    <hr style="margin: 20px 0;" />
                    <small style="color: #9ca3af;">This is an automated message confirming we received your contact form submission.</small>
                </div>
            `,
        };
        

        // Send email
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(acknowledgmentMail);
        
        return NextResponse.json({ success: true, message: "Email sent successfully. Please Check your mail inbox or spam box" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Email sending failed", error }, { status: 500 });
    }
}
