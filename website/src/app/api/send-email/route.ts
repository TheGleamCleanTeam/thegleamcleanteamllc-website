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

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Unable to send email." },
      { status: 500 }
    );
  }
}