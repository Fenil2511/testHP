import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export function Privacy() {
    return (
        <div className="bg-white pt-32 pb-24 min-h-screen">
            <SEO
                title="Privacy Policy | Himanshu Parashar"
                description="Privacy Policy for Himanshu Parashar's Media & Brand Consulting services. We value and protect your data privacy."
                keywords="privacy policy Himanshu Parashar, data protection media consulting, professional service privacy India"
                canonicalPath="/privacy"
                ogType="article"
            />
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-midnight mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg text-gray-600 space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold text-midnight mt-8 mb-4">1. Introduction</h2>
                        <p>Welcome to Himanshu Parashar's Media & Brand Consulting website. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

                        <h2 className="text-2xl font-bold text-midnight mt-8 mb-4">2. The Data We Collect About You</h2>
                        <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-midnight mt-8 mb-4">3. How We Use Your Personal Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-midnight mt-8 mb-4">4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>

                        <h2 className="text-2xl font-bold text-midnight mt-8 mb-4">5. Contact Details</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                        <p className="mt-2">
                            <strong>Email:</strong> connect@brandquest.in<br />
                            <strong>Address:</strong> Brand Quest, 2nd Floor 2056/A, Veniziano Mall, Near Gandhi Cinema, Vesu, Surat 395007, India
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
