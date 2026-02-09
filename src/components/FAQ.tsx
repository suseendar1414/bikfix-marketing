
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Do I need to be an accountant to use this?",
        answer: "No. BIKFix is built for payroll administrators, HR managers, and office managers. You enter what you know (employee, benefit, date), and BIKFix handles the HMRC rules."
    },
    {
        question: "How do I know the calculation is correct?",
        answer: "Every calculation is tested against HMRC published examples. Our engine uses the official rules for the 2024-25 tax year. If you ever find a discrepancy, we'll investigate immediately."
    },
    {
        question: "Does BIKFix file P11D for me?",
        answer: "Not yet. Currently, BIKFix calculates the prorated BIK values and syncs them to Xero, so your payroll is correct. P11D report generation is coming soon."
    },
    {
        question: "Is my data secure?",
        answer: "Yes. We connect to Xero via OAuth2 (the official secure standard). We only read employee names and IDs needed for the calculation. All data is encrypted."
    },
    {
        question: "Can I use this for previous tax years?",
        answer: "Currently BIKFix supports the 2024-25 tax year. Multi-year support is on our roadmap."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-text mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="p-6 flex justify-between items-center">
                                <h3 className="text-lg font-medium text-text">{faq.question}</h3>
                                {openIndex === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                            </div>

                            {openIndex === index && (
                                <div className="px-6 pb-6 text-text/70 leading-relaxed border-t border-gray-50 pt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
