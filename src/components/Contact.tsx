
import { useState } from 'react';
import { Send, Mail, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch("https://formspree.io/f/xpqjwbpe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    subject,
                    message
                })
            });

            if (response.ok) {
                setSucceeded(true);
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setError(data.errors.map((err: any) => err.message).join(", "));
                } else {
                    setError("Oops! There was a problem submitting your form");
                }
            }
        } catch (err) {
            setError("Oops! There was a problem submitting your form");
        } finally {
            setSubmitting(false);
        }
    };

    if (succeeded) {
        return (
            <section id="contact" className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-full mb-6">
                        <CheckCircle className="text-green-500" size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-text mb-4">Message Sent!</h2>
                    <p className="text-lg text-text/70 mb-8">
                        Thanks for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                        onClick={() => setSucceeded(false)}
                        className="text-primary font-semibold hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            </section>
        );
    }

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
                        <label htmlFor="email" className="block text-sm font-medium text-text/80 mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-text/80 mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
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
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                            required
                        ></textarea>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {submitting ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
