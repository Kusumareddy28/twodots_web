import { motion } from "framer-motion";
import { Building2, Home, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Use Cases</h1>
          <p className="text-xl text-blue-700 text-center mb-12 max-w-3xl mx-auto">
            Discover how Two Dots is transforming property management and lending 
            through AI-powered automation.
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Building2,
              title: "Property Management",
              description: "Streamline tenant screening and reduce fraud with automated verification.",
              benefits: [
                "50% reduction in delinquencies",
                "Automated income verification",
                "Reduced operational costs",
                "Enhanced compliance"
              ]
            },
            {
              icon: Home,
              title: "Lending",
              description: "Automate credit assessment and verification processes.",
              benefits: [
                "Faster loan processing",
                "Reduced risk exposure",
                "Automated document verification",
                "Enhanced decision accuracy"
              ]
            }
          ].map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full bg-white border border-blue-200 hover:shadow-lg transition duration-300">
                <CardHeader>
                  <useCase.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl text-blue-900">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-6">{useCase.description}</p>
                  <h4 className="font-semibold mb-4 text-blue-800">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-blue-700">
                        <FileCheck className="w-5 h-5 text-blue-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 mb-16 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Impact Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "$2M+", label: "Annual Savings per 10k Units" },
              { metric: "50%", label: "Reduction in Delinquencies" },
              { metric: "90%", label: "Automation Rate" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-700 mb-2">{item.metric}</div>
                <div className="text-blue-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UseCases;
