import { NextRequest, NextResponse } from 'next/server';
import * as SibApiV3Sdk from 'sib-api-v3-sdk';

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

    // Configure Brevo API client
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKeyAuth = defaultClient.authentications['api-key'];
    apiKeyAuth.apiKey = apiKey;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // Email 1: Auto-reply to user
    const userEmail = new SibApiV3Sdk.SendSmtpEmail();
    userEmail.sender = { email: 'contact@ia-solution.fr', name: 'IA-Solution' };
    userEmail.to = [{ email, name }];
    userEmail.subject = 'Nous avons bien reçu votre message - IA-Solution';
    userEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">Merci pour votre message</h2>
        <p>Bonjour <strong>${name}</strong>,</p>
        <p>Merci de nous avoir contactés. Nous avons bien reçu votre message et reviendrons vers vous sous 48h.</p>
        <br>
        <p style="color: #64748b;">— L'équipe IA-Solution</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="font-size: 12px; color: #94a3b8;">Cet email est une confirmation automatique. Merci de ne pas y répondre.</p>
      </div>
    `;

    // Email 2: Internal notification to contact@ia-solution.fr
    const internalEmail = new SibApiV3Sdk.SendSmtpEmail();
    internalEmail.sender = { email: 'contact@ia-solution.fr', name: 'IA-Solution Contact Form' };
    internalEmail.to = [{ email: 'contact@ia-solution.fr', name: 'IA-Solution' }];
    internalEmail.replyTo = { email, name };
    internalEmail.subject = `Nouveau message depuis le formulaire IA-Solution${subject ? ` - ${subject}` : ''}`;
    internalEmail.htmlContent = `
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
    `;

    // Send both emails
    await Promise.all([
      apiInstance.sendTransacEmail(userEmail),
      apiInstance.sendTransacEmail(internalEmail)
    ]);

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Brevo API Error:', error);
    
    const errorMessage = error?.response?.text || error?.message || 'Failed to send email';
    
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}
