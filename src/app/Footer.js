import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container" data-aos="fade-up">

                <div className="top">
                    <div className="info">
                        <Link href="/">
                            <div className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale text-primary-foreground" data-dev-file="/app/src/layouts/parts/Header.tsx" data-dev-line="67" data-dev-id="087117"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
                            </div>
                            <div className="name">
                                <p>مكتب اللواء / محمد الحمادي</p>
                                <p>للمحاماه والاستشارات القانونيه</p>
                            </div>
                        </Link>

                        <p className="description">نقدم خدمات قانونية ومالية متكاملة بخبرة واحترافية عالية، ملتزمون بحماية حقوقكم وتحقيق أهدافكم.</p>
                    </div>

                    <div className="links">
                        <h3>روابط سريعة</h3>
                        <div className="linksBox">
                            <Link href="/">الرئيسيه</Link>
                            <Link href="#services">خدماتنا</Link>
                            <Link href="#about">عن المكتب</Link>
                            <Link href="#contact">تواصل معنا</Link>
                            <Link href="/contact">استشارة مجانية</Link>
                        </div>
                    </div>

                    <div className="contact">
                        <h3>معلومات التواصل</h3>
                        <div className="phoneBox">
                            <div>
                                <a href="tel:+20 122 049 2277">+20 122 049 2277</a>
                                <a href="tel:+20 109 075 8627">+20 109 075 8627</a>
                            </div>
                        </div>

                        <div className="emailBox">
                            <div>
                                <a href="mailto:mohamed77e@hotmail.com">mohamed77e@hotmail.com</a>
                                <a href="mailto:elhamadym@gmail.com">elhamadym@gmail.com</a>
                            </div>
                        </div>

                        <div className="locationBox">
                            <p>3 عمارات العبور، شارع ونجت ولافيزون — بولكلي، الإسكندرية</p>
                        </div>

                    </div>
                </div>

                <div className="bottom">
                    <hr />
                    <p>© {new Date().getFullYear()} مكتب اللواء محمد الحمادي للمحاماه والاستشارات القانونيه. جميع الحقوق محفوظة.</p>
                </div>


            </div>
        </footer>
    );
}