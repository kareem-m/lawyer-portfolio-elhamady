"use client";

import React, { useState } from "react";
import {useTranslations} from 'next-intl';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Popups from "@/components/Popups";

import "./contact.scss";

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
                setStatus({ loading: false, success: t("status.success"), error: "" });
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                setStatus({ loading: false, success: "", error: data.error || t("status.serverError") });
            }
        } catch (err) {
            setStatus({ loading: false, success: "", error: t("status.connectionError") });
        }
    };

    const t = useTranslations("contact");

    return (
        <>
            <Popups />
            <Navbar />
            <div className="contactPage">
                <div className="container">
                    <div className="title" data-aos="fade-up">
                        <p>{t("title.small")}</p>
                        <h1>{t("title.main")}</h1>
                        <p>{t("title.description")}</p>
                    </div>

                    <div className="contactWrapper" data-aos="fade-up">
                        <form onSubmit={handleSubmit} className="contactForm">
                            <div className="inputGroup">
                                <label>{t("form.name.label")}</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={formData.name} 
                                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                                    placeholder={t("form.name.placeholder")}
                                />
                            </div>
                            <div className="inputGroup">
                                <label>{t("form.phone.label")}</label>
                                <input 
                                    type="tel" 
                                    required 
                                    value={formData.phone} 
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                                    placeholder={t("form.phone.placeholder")}
                                />
                            </div>
                            <div className="inputGroup">
                                <label>{t("form.email.label")}</label>
                                <input 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                    placeholder={t("form.email.placeholder")}
                                />
                            </div>
                            <div className="inputGroup">
                                <label>{t("form.message.label")}</label>
                                <textarea 
                                    rows={5} 
                                    required 
                                    value={formData.message} 
                                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                                    placeholder={t("form.message.placeholder")}
                                />
                            </div>

                            <button type="submit" disabled={status.loading}>
                                {status.loading ? t("form.loading") : t("form.submit")}
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