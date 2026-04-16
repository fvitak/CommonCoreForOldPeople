import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  try {
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    await resend.emails.send({
      from: 'Core Decoded <onboarding@resend.dev>',
      to: 'fvitak@gmail.com',
      subject: 'New waitlist signup',
      html: `<p><strong>${email}</strong> just joined the Core Decoded waitlist.</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
