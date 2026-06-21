"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../globals.css";
import "../main.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
    const [status, setStatus] = useState({ loading: false, success: "", error: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: "", error: "" });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ loading: false, success: "تم إرسال طلبك بنجاح! سنتواصل معك في أقرب وقت.", error: "" });
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                setStatus({ loading: false, success: "", error: data.error || "حدث خطأ ما." });
            }
        } catch (err) {
            setStatus({ loading: false, success: "", error: "فشل الاتصال بالسيرفر. حاول مرة أخرى." });
        }
    };

    return (
        <>
            <Navbar />
            <div className="contactPage" dir="rtl">
                <div className="container">
                    <div className="title">
                        <p>تواصل معنا</p>
                        <h1>احجز استشارتك القانونية الآن</h1>
                        <p>يسعدنا استقبال استفساراتكم وتحديد موعد للمناقشة المستفيضة لقضاياكم.</p>
                    </div>

                    <div className="contactWrapper">
                        {/* فورم التواصل */}
                        <form onSubmit={handleSubmit} className="contactForm">
                            <div className="inputGroup">
                                <label>الاسم بالكامل *</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={formData.name} 
                                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                                    placeholder="أدخل اسمك الثلاثي"
                                />
                            </div>
                            <div className="inputGroup">
                                <label>رقم الهاتف *</label>
                                <input 
                                    type="tel" 
                                    required 
                                    value={formData.phone} 
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                                    placeholder="رقم الهاتف للتواصل (مثال: 01234567890)"
                                />
                            </div>
                            <div className="inputGroup">
                                <label>البريد الإلكتروني (اختياري)</label>
                                <input 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                    placeholder="example@domain.com"
                                />
                            </div>
                            <div className="inputGroup">
                                <label>تفاصيل الاستشارة القانونية *</label>
                                <textarea 
                                    rows={5} 
                                    required 
                                    value={formData.message} 
                                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                                    placeholder="اكتب باختصار موضوع القضية أو نوع الاستشارة المطلوبة..."
                                />
                            </div>

                            <button type="submit" disabled={status.loading}>
                                {status.loading ? "جاري الإرسال..." : "إرسال الطلب الآن"}
                            </button>

                            {status.success && <p className="msg success">{status.success}</p>}
                            {status.error && <p className="msg error">{status.error}</p>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}