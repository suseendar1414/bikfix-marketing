
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background text-text antialiased">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
                <p className="text-sm text-text/60 mb-8">Last Updated: 10/02/2026</p>

                <div className="prose prose-cyan max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">1. Introduction</h2>
                        <p className="text-text/80">
                            Welcome to BIKFix. By accessing or using our website and services, you agree to be bound by these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">2. Use of Service</h2>
                        <p className="text-text/80">
                            BIKFix provides Benefits-in-Kind calculation and Xero integration services. You agree to use the service only for lawful purposes along with accurate data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">3. Subscription & Billing</h2>
                        <p className="text-text/80">
                            Services are provided on a subscription basis. You agree to pay the fees associated with your chosen plan. Payments are processed securely via Stripe.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">4. Data Accuracy</h2>
                        <p className="text-text/80">
                            While BIKFix strives for accuracy in calculations based on HMRC rules, you acknowledge that you remain responsible for the final payroll submission and compliance with tax laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">5. Limitation of Liability</h2>
                        <p className="text-text/80">
                            To the fullest extent permitted by law, BIKFix shall not be liable for any indirect, incidental, or consequential damages arising from the use of our service.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
