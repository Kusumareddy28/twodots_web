import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Contact Us</h1>
          <p className="text-xl text-blue-700 text-center mb-12 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white border border-blue-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-900">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-blue-700">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-blue-700">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-blue-700">
                      Email
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-blue-700">
                      Message
                    </label>
                    <Textarea 
                      placeholder="How can we help you?"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-6">
              <Card className="bg-white border border-blue-200 shadow-sm">
                <CardHeader>
                  <Calendar className="w-6 h-6 text-blue-600 mb-2" />
                  <CardTitle className="text-lg text-blue-900">Book a Demo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    See Two Dots in action with a personalized demo.
                  </p>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-blue-200 shadow-sm">
                <CardHeader>
                  <Mail className="w-6 h-6 text-blue-600 mb-2" />
                  <CardTitle className="text-lg text-blue-900">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:contact@twodots.ai" className="text-blue-700 hover:underline">
                    contact@twodots.ai
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border border-blue-200 shadow-sm">
                <CardHeader>
                  <MessageSquare className="w-6 h-6 text-blue-600 mb-2" />
                  <CardTitle className="text-lg text-blue-900">Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    Chat with our team during business hours.
                  </p>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
