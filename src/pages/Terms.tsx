import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export function Terms() {
    return (
        <div className="bg-slate-50 pt-44 pb-32 min-h-screen">
            <SEO
                title="Terms of Service | Himanshu Parashar"
                description="Terms of Service and legal agreement for using Himanshu Parashar's Media & Brand Consulting services."
                keywords="terms of service Himanshu Parashar, legal agreement media consulting, professional services terms India"
                canonicalPath="/terms"
                ogType="article"
            />
            <div className="container mx-auto px-6 md:px-12 max-w-4xl relative">
                {/* Ambient Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/5 blur-[100px] rounded-full"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <header className="mb-16">
                        <span className="text-brand font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Legal Entity</span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6">Terms of <span className="text-brand italic font-light">Service</span></h1>
                        <div className="w-20 h-1.5 bg-brand"></div>
                    </header>

                    <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-10 font-light">
                        <p className="font-bold text-slate-900 tracking-wide uppercase text-xs">Last updated: {new Date().toLocaleDateString()}</p>

                        <section className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">01. Agreement Framework</h2>
                            <p className="leading-relaxed">By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">02. Intellectual Jurisdiction</h2>
                            <p className="leading-relaxed">Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                            <ul className="space-y-4 border-l-2 border-brand/20 pl-8">
                                <li>Modify or copy the materials.</li>
                                <li>Use the materials for any commercial purpose or public display.</li>
                                <li>Attempt to decompile or reverse engineer any software.</li>
                                <li>Remove any copyright or other proprietary notations.</li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">03. Disclaimer of Liability</h2>
                            <p className="leading-relaxed italic bg-white p-8 border border-slate-100 rounded-2xl shadow-sm text-slate-500">
                                The materials on Himanshu Parashar's website are provided on an 'as is' basis. Himanshu Parashar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">04. Limitation of Exposure</h2>
                            <p className="leading-relaxed">In no event shall Himanshu Parashar or its suppliers be liable for any damages arising out of the use or inability to use the materials, even if notified orally or in writing of the possibility of such damage.</p>
                        </section>

                        <section className="space-y-6 pt-12 border-t border-slate-200">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">Strategic Compliance</h2>
                            <p className="leading-relaxed text-brand font-medium italic">connect@brandquest.in</p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">
                                Registered Operations: Surat, Gujarat, India
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
