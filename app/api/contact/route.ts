import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for Brevo API key
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Email 1: Auto-reply to user
    const userEmailPayload = {
      sender: { email: 'ia.solution.monde@gmail.com', name: 'IA-Solution' },
      to: [{ email, name }],
      subject: 'Nous avons bien reçu votre message - IA-Solution',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Merci pour votre message</h2>
          <p>Bonjour <strong>${name}</strong>,</p>
          <p>Merci de nous avoir contactés. Nous avons bien reçu votre message et reviendrons vers vous sous 48h.</p>
          <br>
          <p style="color: #64748b;">— L'équipe IA-Solution</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="font-size: 12px; color: #94a3b8;">Cet email est une confirmation automatique. Merci de ne pas y répondre.</p>
        </div>
      `,
    };

    // Email 2: Internal notification to ia.solution.monde@gmail.com
    const internalEmailPayload = {
      sender: { email: 'ia.solution.monde@gmail.com', name: 'IA-Solution Contact Form' },
      to: [{ email: 'ia.solution.monde@gmail.com', name: 'IA-Solution' }],
      replyTo: { email, name },
      subject: `Nouveau message depuis le formulaire IA-Solution${subject ? ` - ${subject}` : ''}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
          <h2 style="color: #4F46E5; margin-bottom: 20px;">📧 Nouveau message depuis le formulaire</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0;"><strong style="color: #64748b;">Nom:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #64748b;">Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
            ${subject ? `<p style="margin: 10px 0;"><strong style="color: #64748b;">Sujet:</strong> ${subject}</p>` : ''}
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;">
            <p style="margin: 10px 0;"><strong style="color: #64748b;">Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #4F46E5;">
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails using Brevo REST API
    const sendEmail = async (payload: any) => {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      return response.json();
    };

    await Promise.all([
      sendEmail(userEmailPayload),
      sendEmail(internalEmailPayload)
    ]);

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Brevo API Error:', error);
    
    const errorMessage = error?.message || 'Failed to send email';
    
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}
