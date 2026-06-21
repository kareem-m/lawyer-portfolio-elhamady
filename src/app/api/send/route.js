import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'اكتب_هنا_إيميلك_الشخصي_اللي_سجلت_بيه@gmail.com', // ⚠️ اكتب إيميلك الشخصي هنا بالظبط
            subject: `رسالة جديدة من: ${name}`,
            html: `
        <h3>تفاصيل الرسالة الجديدة:</h3>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الإيميل:</strong> ${email}</p>
        <p><strong>الرسالة:</strong> ${message}</p>
      `,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}