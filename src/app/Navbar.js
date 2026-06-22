import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="logoBox">
                    <Link href="/">
                        <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale text-primary-foreground" data-dev-file="/app/src/layouts/parts/Header.tsx" data-dev-line="67" data-dev-id="087117"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
                        </div>
                        <div className="name">
                            <p>مكتب اللواء / محمد الحمادي</p>
                            <p>للمحاماه والاستشارات القانونيه</p>
                        </div>
                    </Link>
                </div>

                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className="links">
                    <Link href="/">الرئيسيه</Link>
                    <Link href="#services">خدماتنا</Link>
                    <Link href="#about">عن المكتب</Link>
                    <Link href="#contact">تواصل معنا</Link>
                    <Link href="/contact">استشارة مجانية</Link>
                </div>
            </div>
        </nav>
    );
}