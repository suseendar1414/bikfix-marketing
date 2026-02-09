
import { Car, Fuel, Home, Briefcase, Smartphone, Zap, Shield, Repeat } from 'lucide-react';

const features = [
    {
        icon: <Car className="text-primary" size={24} />,
        title: "Company Cars & Fuel",
        description: "Handles CO2 bands, RDE2 compliance, diesel surcharges, and fuel withdrawal rules."
    },
    {
        icon: <Home className="text-primary" size={24} />,
        title: "Living Accommodation",
        description: "Calculates annual value, rent deduction, and expensive accommodation rules."
    },
    {
        icon: <Briefcase className="text-primary" size={24} />,
        title: "Assets & Loans",
        description: "Beneficial loans official rate method, asset transfer market value, and use of assets."
    },
    {
        icon: <Smartphone className="text-primary" size={24} />,
        title: "Phones & Broadband",
        description: "Private use calculation for telephone and broadband benefits."
    },
    {
        icon: <Zap className="text-primary" size={24} />,
        title: "Salary Sacrifice (OpRA)",
        description: "Automatically applies OpRA rules: taxable BIK is the higher of salary sacrificed or calculated BIK."
    },
    {
        icon: <Shield className="text-primary" size={24} />,
        title: "Audit Trail",
        description: "Full log of every calculation with inputs, outputs, user, and timestamp for compliance."
    },
    {
        icon: <Repeat className="text-primary" size={24} />,
        title: "Xero Sync",
        description: "One click pushes the corrected BIK value to the employee's pay template in Xero."
    },
    {
        icon: <Fuel className="text-primary" size={24} />,
        title: "Fuel Benefit Rules",
        description: "Correctly handles the 'all-or-nothing' rule and reinstatement logic."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-text mb-4">Complete Coverage</h2>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        BIKFix covers every benefit category HMRC recognises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="font-semibold text-text mb-2">{feature.title}</h3>
                            <p className="text-sm text-text/70 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block bg-white border border-gray-200 rounded-full px-6 py-2 text-sm text-text/70 shadow-sm">
                        Plus: Vans, Gym, School Fees, Medical Insurance, Relocation, and more.
                    </div>
                </div>
            </div>
        </section>
    );
}
