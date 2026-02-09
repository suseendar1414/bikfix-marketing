
import { AlertTriangle, Clock, TrendingDown, PhoneOff } from 'lucide-react';

export default function Problem() {
    return (
        <section id="problem" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-text mb-4">The Problem</h2>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        What happens when an employee cancels a benefit mid-year?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-text">The "Old Way" is broken</h3>
                        <p className="text-text/80 mb-6 leading-relaxed">
                            When a benefit is cancelled, the payroll admin needs to figure out the prorated BIK value.
                            But Xero doesn't calculate it, and no tool does.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-text/80">Admin spends 1-2 hours Googling complex HMRC rules.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingDown className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-text/80">Employee overpays £50-500 per month in tax due to wrong codes.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <PhoneOff className="text-red-500 shrink-0 mt-1" size={20} />
                                <span className="text-text/80">4-6 hours wasted on hold with HMRC to fix errors.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Clock size={120} />
                        </div>
                        <h4 className="font-semibold text-lg mb-4 text-text">The Real Cost of Manual BIK</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-100">
                                <span className="text-sm font-medium">Employee Tax Overpayment</span>
                                <span className="text-red-600 font-bold">£150 - £3,000</span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-100">
                                <span className="text-sm font-medium">Admin Research Time</span>
                                <span className="text-orange-600 font-bold">1-2 hours</span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-100">
                                <span className="text-sm font-medium">HMRC Correction Call</span>
                                <span className="text-orange-600 font-bold">4-6 hours</span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-100">
                                <span className="text-sm font-medium">Employee Trust</span>
                                <span className="text-gray-400 italic">Priceless (Lost)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
