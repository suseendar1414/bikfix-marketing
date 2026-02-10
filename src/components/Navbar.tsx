
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const NavLink = ({ href, children, mobile = false }: { href: string, children: React.ReactNode, mobile?: boolean }) => {
        const className = mobile
            ? "block px-3 py-2 text-text hover:text-primary hover:bg-cyan-50 rounded-md"
            : "text-text/80 hover:text-primary transition-colors text-sm font-medium";

        if (isHome) {
            return <a href={href} className={className}>{children}</a>;
        } else {
            return <Link to={`/${href}`} className={className}>{children}</Link>;
        }
    };

    return (
        <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-primary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">BIKFix</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="#features">Features</NavLink>
                        <NavLink href="#problem">Why BIKFix</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                        <NavLink href="#faq">FAQ</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                        <a
                            href="https://bitfix-production.up.railway.app"
                            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <NavLink href="#features" mobile>Features</NavLink>
                        <NavLink href="#problem" mobile>Why BIKFix</NavLink>
                        <NavLink href="#pricing" mobile>Pricing</NavLink>
                        <NavLink href="#faq" mobile>FAQ</NavLink>
                        <NavLink href="#contact" mobile>Contact</NavLink>
                        <a
                            href="https://bitfix-production.up.railway.app"
                            className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded-lg font-bold"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
