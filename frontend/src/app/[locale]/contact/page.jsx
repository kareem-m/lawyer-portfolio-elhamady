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
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }

        const phoneRegex = /^01[0125]\d{8}$/;
        if (!phoneRegex.test(formData.phone.trim())) {
            errors.phone = "Phone number must be a valid Egyptian number";
        }

        const gmailRegex = /^(?=.{6,30}@gmail\.com$)(?!.*\.\.)[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@gmail\.com$/;
        const email = formData.email.trim();
        if (email && !gmailRegex.test(email)) {
            errors.email = "Email must be a valid Gmail address";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) {
            setStatus({
                loading: false,
                success: "",
                error: ""
            });

            return;
        }

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
                setErrors({});
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
            <section className="contactPage">
                <div className="container">
                    <div className="title" data-aos="fade-up">
                        <p>{t("title.small")}</p>
                        <h1>{t("title.main")}</h1>
                        <p>{t("title.description")}</p>
                    </div>

                    <div className="contactWrapper" data-aos="fade-up">
                        <form onSubmit={handleSubmit} className="contactForm" noValidate>
                            <div className="inputGroup">
                                <label>{t("form.name.label")}</label>
                                <input 
                                    type="text" 
                                    value={formData.name} 
                                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                                    placeholder={t("form.name.placeholder")}
                                />
                                {errors.name && (
                                    <p className="msg error">{errors.name}</p>
                                )}
                            </div>
                            <div className="inputGroup">
                                <label>{t("form.phone.label")}</label>
                                <input 
                                    type="tel" 
                                    value={formData.phone} 
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                                    placeholder={t("form.phone.placeholder")}
                                />
                                {errors.phone && (
                                    <p className="msg error">{errors.phone}</p>
                                )}
                            </div>
                            <div className="inputGroup">
                                <label>{t("form.email.label")}</label>
                                <input 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                    placeholder={t("form.email.placeholder")}
                                />
                                {errors.email && (
                                    <p className="msg error">{errors.email}</p>
                                )}
                            </div>
                            <div className="inputGroup">
                                <label>{t("form.message.label")}</label>
                                <textarea 
                                    rows={5} 
                                    value={formData.message} 
                                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                                    placeholder={t("form.message.placeholder")}
                                />
                                {errors.message && (
                                    <p className="msg error">{errors.message}</p>
                                )}
                            </div>

                            <button type="submit" disabled={status.loading}>
                                {status.loading ? t("form.loading") : t("form.submit")}
                            </button>

                            {status.success && <p className="msg success">{status.success}</p>}
                            {status.error && <p className="msg error">{status.error}</p>}
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}