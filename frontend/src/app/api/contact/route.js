import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, phone, email, message } = await request.json();

        if (!name || !phone || !message) {
            return NextResponse.json({ error: 'برجاء ملء الحقول الإلزامية' }, { status: 400 });
        }

        // إرسال الإيميل
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kareemmoh1911@gmail.com',
            subject: `طلب استشارة جديدة من: ${name}`,
            html: `
                <div dir="rtl" style="font-family: sans-serif; padding: 20px; border: 1px solid #c6a740; border-radius: 10px;">
                    <h2 style="color: #b8860b;">طلب استشارة قانونية جديدة</h2>
                    <p><strong>الاسم:</strong> ${name}</p>
                    <p><strong>رقم الهاتف:</strong> ${phone}</p>
                    <p><strong>البريد الإلكتروني:</strong> ${email || 'لم يذكر'}</p>
                    <p><strong>تفاصيل الاستشارة أو الرسالة:</strong></p>
                    <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'تم إرسال رسالتك بنجاح' });
    } catch (error) {
        return NextResponse.json({ error: 'عذراً، حدث خطأ أثناء إرسال الرسالة' }, { status: 500 });
    }
}