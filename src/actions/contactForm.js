'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState, formData) {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const country = formData.get('country');
    const website = formData.get('website');
    const socialMedia = formData.get('social-media');
    const msg = formData.get('msg');

    // Prepend 'http://' if needed
    const formattedWebsite = website && !website.startsWith('http') 
      ? `http://${website}` 
      : website || 'Not provided';
    
    const formattedSocialMedia = socialMedia && !socialMedia.startsWith('http') 
      ? `http://${socialMedia}` 
      : socialMedia || 'Not provided';

    // Send email via Resend
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.YOUR_EMAIL],
      subject: `New Form Submission: ${name} from ${country}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #0dc6ff; padding-bottom: 10px;">
            🆕 New Contact Form Submission
          </h1>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #0dc6ff;">Contact Details</h2>
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #0dc6ff;">${email}</a></p>
            <p><strong>🌍 Country:</strong> ${country}</p>
            <p><strong>🌐 Website:</strong> 
              ${formattedWebsite !== 'Not provided' 
                ? `<a href="${formattedWebsite}" style="color: #0dc6ff;">${formattedWebsite}</a>` 
                : 'Not provided'}
            </p>
            <p><strong>📱 Social Media:</strong> 
              ${formattedSocialMedia !== 'Not provided' 
                ? `<a href="${formattedSocialMedia}" style="color: #0dc6ff;">${formattedSocialMedia}</a>` 
                : 'Not provided'}
            </p>
          </div>

          ${msg ? `
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #C69CFF;">💬 Message</h2>
            <p style="white-space: pre-wrap; line-height: 1.6;">${msg}</p>
          </div>
          ` : ''}

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #666; font-size: 12px;">
            <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
              timeZone: 'UTC',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          
          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 30px;">
            SuperWorld Technologies • AI-Powered Websites
          </p>
        </div>
      `,
    });

    return { message: 'Form submitted successfully! We\'ll be in touch soon.' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { message: 'Failed to send your message. Please try again.' };
  }
}