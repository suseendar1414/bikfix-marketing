
import { useState } from 'react';
import { Send, Mail } from 'lucide-react';

export default function Contact() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const emailTo = "suseendarannair@gmail.com";
        const body = encodeURIComponent(message);
        const subjectLine = encodeURIComponent(subject || "Enquiry from BIKFix Website");

        // Open mail client with pre-filled data
        window.location.href = `mailto:${emailTo}?subject=${subjectLine}&body=${body}`;
    };

    return (
        <section id="contact" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-cyan-50 rounded-full mb-4">
                        <Mail className="text-primary" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-text mb-4">Get in Touch</h2>
                    <p className="text-lg text-text/70">
                        Have questions about BIKFix? Send us a message directly.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-text/80 mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="e.g. Question about pricing"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text/80 mb-2">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        <Send size={18} />
                        Send Message
                    </button>

                    <p className="text-center text-xs text-text/40 mt-4">
                        This will open your default email client.
                    </p>
                </form>
            </div>
        </section>
    );
}
