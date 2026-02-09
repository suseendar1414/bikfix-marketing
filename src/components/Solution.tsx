
import { Check, ArrowRight } from 'lucide-react';

export default function Solution() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-primary/10">
                            <div className="font-mono text-sm text-text/70 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <p>Open BIKFix inside Xero</p>
                                </div>
                                <div className="flex items-center gap-3 pl-4 border-l border-dashed border-gray-300">
                                    <ArrowRight size={14} className="text-primary" />
                                    <p>Select employee (from Xero payroll)</p>
                                </div>
                                <div className="flex items-center gap-3 pl-4 border-l border-dashed border-gray-300">
                                    <ArrowRight size={14} className="text-primary" />
                                    <p>Pick benefit type & enter date</p>
                                </div>
                                <div className="flex items-center gap-3 pl-4 border-l border-dashed border-gray-300">
                                    <ArrowRight size={14} className="text-primary" />
                                    <p><strong>BIKFix calculates exact prorated BIK</strong></p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <p className="text-primary font-bold">One click sync to Xero. Done.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
                            The Solution
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                            BIKFix fixes this in <span className="text-primary">10 seconds</span>.
                        </h2>
                        <p className="text-lg text-text/80 mb-8 leading-relaxed">
                            No Googling. No spreadsheets. No HMRC phone calls. You enter what you know (employee, benefit, date). BIKFix handles what you don't.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "15+ Benefit Types supported",
                                "HMRC-verified calculation engine",
                                "Seamless Xero Integration",
                                "Full Audit Trail"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span className="text-text font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
