"use client";
import { useEffect, useRef } from "react";

export default function StatsSection() {
    const sectionRef = useRef(null);

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
                    <p>عام خبرة قانونية</p>
                </div>

                <div className="box">
                    <h2 className="count" data-target="15">0</h2>
                    <p>عام في الاموال العامة</p>
                </div>

                <div className="box">
                    <h2 className="count" data-target="500" data-suffix="+">0</h2>
                    <p>قضية ناجحة</p>
                </div>

                <div className="box">
                    <h2 className="count" data-target="100" data-suffix="%">0</h2>
                    <p>التزام بالسرية</p>
                </div>
            </div>
        </section>
    );
}