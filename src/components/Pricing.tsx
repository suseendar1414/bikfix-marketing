
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-text mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-text/70">
                        One prevented mistake pays for an entire year.
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>

                    <div className="p-8 text-center pb-4">
                        <h3 className="text-xl font-semibold text-text/80 mb-2">Monthly Subscription</h3>
                        <div className="flex items-baseline justify-center gap-1 my-6">
                            <span className="text-5xl font-bold text-primary">£19</span>
                            <span className="text-text/60">/month</span>
                        </div>
                        <p className="text-sm text-text/60 mb-6">30-day free trial. Cancel anytime.</p>

                        <a
                            href="https://bitfix-production.up.railway.app"
                            className="block w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg mb-2"
                        >
                            Start Free Trial
                        </a>
                        <p className="text-xs text-text/40">No credit card required for trial.</p>
                    </div>

                    <div className="p-8 bg-gray-50 border-t border-gray-100">
                        <h4 className="font-semibold text-sm text-text mb-4 uppercase tracking-wider">What's included</h4>
                        <ul className="space-y-4">
                            {[
                                "Unlimited calculations",
                                "All 15 benefit types",
                                "Xero Sync included",
                                "Full Audit Trail",
                                "HMRC-verified accuracy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check size={18} className="text-green-500" />
                                    <span className="text-text/80 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
