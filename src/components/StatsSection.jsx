"use client";

import Link from "next/link";
import {useTranslations} from "next-intl";
import { useEffect, useRef } from "react";

export default function StatsSection() {
    const sectionRef = useRef(null);
    const t = useTranslations("home.stateSection");

    useEffect(() => {
        const counters = sectionRef.current.querySelectorAll(".count");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = +el.getAttribute("data-target");
                    const suffix = el.getAttribute("data-suffix") || "";

                    let count = 0;

                    const updateCounter = () => {
                        const increment = target / 100;

                        if (count < target) {
                            count += increment;
                            el.textContent = Math.ceil(count) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            el.textContent = target + suffix;
                        }
                    };

                    updateCounter();
                    observer.unobserve(el);
                }
            });
        });

        counters.forEach((counter) => observer.observe(counter));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="stats">
            <div className="container" data-aos="fade-up">
                <div className="box">
                    <h2 className="count" data-target="30">0</h2>
                    <p>{t("experience")}</p>
                </div>

                <div className="box">
                    <h2 className="count" data-target="15">0</h2>
                    <p>{t("publicAffairs")}</p>
                </div>

                <div className="box">
                    <h2 className="count" data-target="500" data-suffix="+">0</h2>
                    <p>{t("successfulCases")}</p>
                </div>

                <div className="box">
                    <h2 className="count" data-target="100" data-suffix="%">0</h2>
                    <p>{t("commitmentToConfidentiality")}</p>
                </div>
            </div>
        </section>
    );
}