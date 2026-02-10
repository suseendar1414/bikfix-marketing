
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen font-sans bg-background text-text antialiased scroll-smooth">
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <Features />
                <Pricing />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
