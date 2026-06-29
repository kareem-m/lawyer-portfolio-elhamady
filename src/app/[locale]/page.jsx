import {useTranslations} from 'next-intl';
import {useLocale} from "next-intl";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import Popups from "@/components/Popups";
import Link from 'next/link';

import "./home.scss";


export default function Home() {

    const t = useTranslations("home");
    const locale = useLocale();

    return (
        <>
            <Popups />
            <Navbar />
            <div id="landing" className="landing">
                <div className="container" data-aos="fade-up">
                    <div>
                        <div className="popup">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award" data-dev-file="/app/src/pages/index.tsx" data-dev-line="65" data-dev-id="57f79f"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                            <p>{t('landing.experiencePopup')}</p>
                        </div>
                        <div className="image">
                            <img src="/photo.jpg" alt={t('landing.imageAlt')} />
                        </div>
                        <h1>{t('landing.titlePrefix')}<span className={locale === "ar" ? "arName" : "enName"}>{t('landing.titleName')}</span></h1>
                        <p>{t('landing.subtitle')}</p>
                        <p>{t('landing.description')}</p>
                        <div className="links">
                            <Link href="/contact">{t('landing.ctaConsultation')}</Link>
                            <a href="#services">{t('landing.ctaServices')}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="services" className="services">
                <StatsSection />
                <div className="container">
                    <div className="title" data-aos="fade-up">
                        <p>{t('services.title')}</p>
                        <h1>{t('services.heading')}</h1>
                        <p>{t('services.description')}</p>
                    </div>

                    <div className="servicesList">
                        
                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <div className="svgIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="155" data-dev-id="dcfd25"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
                                </div>
                                <h1>{t('services.litigation.title')}</h1>
                                <p>{t('services.litigation.description')}</p>
                            </div>
                        </div>

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <div className="svgIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="155" data-dev-id="dcfd25"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                                </div>
                                <h1>{t('services.contracts.title')}</h1>
                                <p>{t('services.contracts.description')}</p>
                            </div>
                        </div>

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <div className="svgIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="155" data-dev-id="dcfd25"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                </div>
                                <h1>{t('services.publicFunds.title')}</h1>
                                <p>{t('services.publicFunds.description')}</p>
                            </div>
                        </div>

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <div className="svgIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="155" data-dev-id="dcfd25"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                </div>
                                <h1>{t('services.familyLaw.title')}</h1>
                                <p>{t('services.familyLaw.description')}</p>
                            </div>
                        </div>

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <div className="svgIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="155" data-dev-id="dcfd25"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                </div>
                                <h1>{t('services.administrativeLaw.title')}</h1>
                                <p>{t('services.administrativeLaw.description')}</p>
                            </div>
                        </div>

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <div className="svgIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="155" data-dev-id="dcfd25"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </div>
                                <h1>{t('services.criminalLaw.title')}</h1>
                                <p>{t('services.criminalLaw.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about" id="about">
                <div className="container">
                    <div className="imageSection">
                        <div className="image" data-aos="fade-up">
                            <img src="/photo.jpg"></img>
                        </div>
                    </div>
                    <div className="textSection" data-aos="fade-up">
                        <h1>{t('about.title')}</h1>
                        <p>{t('about.subtitle')}</p>

                        <div className="locationBox">

                            <div className="location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-primary shrink-0" data-dev-file="/app/src/pages/index.tsx" data-dev-line="217" data-dev-id="9f92bc"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <p>{t('about.address')}</p>
                            </div>

                            <div className="phone">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-primary shrink-0" data-dev-file="/app/src/pages/index.tsx" data-dev-line="226" data-dev-id="96c445"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <a href="tel:01220492277">01220492277</a>
                                <a href="tel:01090758627">01090758627</a>
                            </div>

                        </div>

                        <div className="info">
                            <p>{t('about.description1')}</p>
                            <p>{t('about.description2')}</p>

                            <div className="data">
                                <p>{t('about.items.experience')}</p>
                                <p>{t('about.items.publicFunds')}</p>
                                <p>{t('about.items.master')}</p>
                                <p>{t('about.items.phd')}</p>
                                <p>{t('about.items.unafei')}</p>
                                <p>{t('about.items.jica')}</p>
                                <p>{t('about.items.peaceKeeping')}</p>
                                <p>{t('about.items.courts')}</p>
                            </div>

                            <Link href="/contact">{t('about.cta')}</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <div className="title" data-aos="fade-up">
                        <p>{t('features.title')}</p>
                        <h1>{t('features.heading')}</h1>
                    </div>
                    <div className="featuresList">

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="283" data-dev-id="a69c0a"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                            </div>
                            <h1>{t('features.academic.title')}</h1>
                            <p>{t('features.academic.description')}</p>
                        </div>

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="283" data-dev-id="a69c0a"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                            </div>
                            <h1>{t('features.international.title')}</h1>
                            <p>{t('features.international.description')}</p>
                        </div>

                        <div className="box" data-aos="fade-up">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-primary" data-dev-file="/app/src/pages/index.tsx" data-dev-line="283" data-dev-id="a69c0a"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                            </div>
                            <h1>{t('features.confidentiality.title')}</h1>
                            <p>{t('features.confidentiality.description')}</p>
                        </div>

                    </div>

                    <div className="contactSection" id="contact" data-aos="fade-up">
                        <h1>{t('features.contactSection.title')}</h1>
                        <p>{t('features.contactSection.description')}</p>
                        <Link href="/contact">{t('features.contactSection.button')}</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
