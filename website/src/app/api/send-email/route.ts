import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      address,
      service,
      date,
      notes,
    } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "The Gleam Clean Team <onboarding@resend.dev>",
      to: ["gaskintessa1@gmail.com"],
      subject: "🧹 New Cleaning Quote Request",
      html: `
        <h2>New Cleaning Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Additional Notes:</strong></p>
        <p>${notes}</p>
      `,
    });

    if (error) {
      return Response.json(error, { status: 400 });
    }
await resend.emails.send({
  from: "The Gleam Clean Team <onboarding@resend.dev>",
  to: [email],
  subject: "✨ We've Received Your Cleaning Request",
  html: `
    <h2>Thank You for Choosing The Gleam Clean Team LLC!</h2>

    <p>Hi <strong>${name}</strong>,</p>

    <p>We have successfully received your cleaning request.</p>

    <h3>Your Request</h3>

    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Preferred Date:</strong> ${date}</p>

    <p>One of our team members will contact you shortly to confirm your appointment.</p>

    <p>We appreciate the opportunity to serve you and look forward to making your home sparkle!</p>

    <br>

    <p><strong>The Gleam Clean Team LLC</strong></p>
    <p>📞 (804) 963-0985</p>
    <p>🌐 https://www.thegleamcleanteamllc.com</p>
  `,
});
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Unable to send email." },
      { status: 500 }
    );
  }
}