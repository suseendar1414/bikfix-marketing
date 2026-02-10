
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background text-text antialiased">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
                <p className="text-sm text-text/60 mb-8">Last Updated: 10/02/2026</p>

                <div className="prose prose-cyan max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">1. Data Collection</h2>
                        <p className="text-text/80 mb-2">We collect information necessary to provide our services, including but not limited to:</p>
                        <ul className="list-disc pl-5 space-y-1 text-text/80">
                            <li>Account information (via Xero)</li>
                            <li>Employee data required for BIK calculations</li>
                            <li>Billing information (processed by Stripe)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">2. How We Use Your Data</h2>
                        <p className="text-text/80 mb-2">We use your data solely to:</p>
                        <ul className="list-disc pl-5 space-y-1 text-text/80">
                            <li>Perform BIK calculations</li>
                            <li>Sync payroll data to Xero (at your request)</li>
                            <li>Manage your subscription</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">3. Data Sharing</h2>
                        <p className="text-text/80">
                            We do not sell your personal data. We share data only with trusted third-party service providers (e.g., Xero, Stripe) as necessary to provide our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-text">4. Security</h2>
                        <p className="text-text/80">
                            We implement security measures designed to protect your data, including encryption and secure communication protocols (HTTPS).
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
