
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const scrollToSection = (id: string) => {
        if (isHome) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const getLink = (id: string, text: string) => {
        if (isHome) {
            return <a href={`#${id}`} className="hover:text-primary transition-colors">{text}</a>
        } else {
            return <Link to={`/#${id}`} className="hover:text-primary transition-colors">{text}</Link> // Simple redirect to home
        }
    };


    return (
        <footer className="bg-text text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">BIKFix</h3>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            We do one thing. We do it right. The only tool that accurately calculates and prorates Benefits-in-Kind for UK payroll.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>{isHome ? <a href="#features" className="hover:text-primary transition-colors">Features</a> : <Link to="/#features" className="hover:text-primary transition-colors">Features</Link>}</li>
                            <li>{isHome ? <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a> : <Link to="/#pricing" className="hover:text-primary transition-colors">Pricing</Link>}</li>
                            <li>{isHome ? <a href="#faq" className="hover:text-primary transition-colors">FAQ</a> : <Link to="/#faq" className="hover:text-primary transition-colors">FAQ</Link>}</li>
                            <li><a href="https://bitfix-production.up.railway.app" className="hover:text-primary transition-colors">Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li>{isHome ? <a href="#contact" className="hover:text-primary transition-colors">Contact Support</a> : <Link to="/#contact" className="hover:text-primary transition-colors">Contact Support</Link>}</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} BIKFix. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
