import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, FileText, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className="pt-32 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50">
            {/* Hero Section */}
            <section className="pb-20 px-4 relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6 text-blue-900"
                    >
                        AI-Powered Automation for Consumer Underwriting
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto"
                    >
                        Streamline underwriting and fraud prevention through end-to-end automation, enhancing accuracy and efficiency.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4 justify-center"
                    >
                        <Button className="bg-blue-600 text-white hover:bg-blue-700 border border-blue-600" size="lg">Get Started</Button>
                        <Button size="lg" variant="outline">Learn More</Button>
                    </motion.div>
                </div>

               

                <motion.div className="w-4 h-4 bg-blue-400 rounded-full absolute top-1/2 left-[40%]" animate={{ x: [-20, 20], y: [-20, 20] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
                <motion.div className="w-4 h-4 bg-blue-300 rounded-full absolute top-1/2 right-[40%]" animate={{ x: [20, -20], y: [-20, 20] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
            </section>

            {/* Features Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Key Features & Benefits</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[{
                            icon: <Shield className="w-10 h-10 text-blue-600 mb-2" />, title: "Fraud Prevention", desc: "Prevents more fraud than any other system on the market."
                        }, {
                            icon: <TrendingUp className="w-10 h-10 text-blue-600 mb-2" />, title: "Operational Efficiency", desc: "Reduces operational expenses and cuts delinquencies by over 50%."
                        }, {
                            icon: <FileText className="w-10 h-10 text-blue-600 mb-2" />, title: "Automation", desc: "Automates income document understanding and reduces risk."
                        }, {
                            icon: <Building2 className="w-10 h-10 text-blue-600 mb-2" />, title: "Financial Impact", desc: "Save $2M+ annually for every 10,000 units managed."
                        }].map(({ icon, title, desc }, i) => (
                            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 1) }} viewport={{ once: true }}>
                                <Card className="bg-white shadow-lg">
                                    <CardHeader>{icon}<CardTitle className="text-blue-800">{title}</CardTitle></CardHeader>
                                    <CardContent><p className="text-gray-700">{desc}</p></CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">How It Works</h2>
                    <p className="text-blue-800 max-w-2xl mx-auto mb-10">
                        Two Dots combines data ingestion, intelligent document processing, and AI-powered decision engines to deliver fully automated underwriting.
                    </p>
                    <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4" alt="How it works diagram" className="mx-auto rounded-lg shadow-xl w-full max-w-4xl" />
                </div>
            </section>

            
            {/* Trusted By Section */}
{/* <section className="py-16 bg-blue-100">
  <div className="container mx-auto px-4 text-center">
    <h3 className="text-2xl font-bold text-blue-900 mb-8">Trusted By Leading Institutions</h3>
    <div className="flex flex-wrap items-center justify-center gap-10">
      <img src="https://unsplash.com/photos/a-young-girl-with-long-hair-wearing-a-white-t-shirt-HaNi1rsZ6Nc" alt="Client 1" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_brand.png" alt="Client 2" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Calendar_2020_Logo.svg" alt="Client 3" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_placeholder.png" alt="Client 4" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
    </div>
  </div>
</section> */}


            {/* Testimonials Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[{
                            name: "Emily R.", role: "VP of Operations, BlueStone Group", quote: "Two Dots transformed our approval process. Fraud detection is smarter and much faster now."
                        }, {
                            name: "Michael S.", role: "Property Manager, OakLiving", quote: "The automation saved us hundreds of hours and improved tenant quality immensely."
                        }, {
                            name: "Priya M.", role: "Tech Lead, FinTrust", quote: "Seamless API integration and stellar support. Truly next-gen tech for underwriting."
                        }].map(({ name, role, quote }) => (
                            <Card key={name} className="bg-white border border-blue-100 shadow-md p-6">
                                <CardContent className="space-y-4">
                                    <p className="text-blue-800 italic">"{quote}"</p>
                                    <div>
                                        <div className="font-semibold text-blue-900">{name}</div>
                                        <div className="text-sm text-blue-600">{role}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">How You Get Started</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[{
                            step: "1. Connect", detail: "Integrate your data sources via secure APIs."
                        }, {
                            step: "2. Automate", detail: "Let our engine handle the document parsing and verification."
                        }, {
                            step: "3. Decide", detail: "Get real-time decisions with full transparency and control."
                        }].map(({ step, detail }) => (
                            <Card key={step} className="text-center p-6 shadow-lg border border-blue-100">
                                <CardHeader><CardTitle className="text-blue-700">{step}</CardTitle></CardHeader>
                                <CardContent><p className="text-blue-800">{detail}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl mb-8 opacity-90">Join leading property managers and lenders in revolutionizing their operations.</p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 border border-blue-600">Schedule a Demo</Button>
                </motion.div>
            </section>
        </div>
    );
};

export default HeroSection;