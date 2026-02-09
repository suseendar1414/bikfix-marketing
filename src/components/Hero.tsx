
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-primary text-sm font-semibold mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Current Tax Year 2024-25 Ready
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6 max-w-4xl mx-auto leading-tight">
                    One calculation. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Always right.</span>
                </h1>

                {/* Subhead */}
                <p className="text-xl text-text/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                    When a UK employee cancels a benefit mid-year, BIKFix calculates the exact prorated Benefits-in-Kind value and syncs it to Xero payroll in under 10 seconds.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href="https://bitfix-production.up.railway.app"
                        className="w-full sm:w-auto px-8 py-4 bg-cta hover:bg-green-600 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                        Get Started Now
                        <ArrowRight size={20} />
                    </a>
                    <a
                        href="#problem"
                        className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:border-primary/50 text-text hover:text-primary text-lg font-semibold rounded-xl transition-all hover:bg-gray-50 flex items-center justify-center"
                    >
                        How it works
                    </a>
                </div>

                {/* Social Proof / Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-text/60">
                    <div className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-primary" />
                        <span>HMRC-verified calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-primary" />
                        <span>Xero Integrated</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-primary" />
                        <span>Instant Sync</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
