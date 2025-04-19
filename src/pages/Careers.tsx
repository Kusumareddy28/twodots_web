import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  LineChart,
  HeartHandshake,
  Users,
} from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-800 text-center mb-12 max-w-3xl mx-auto">
            Help us revolutionize consumer underwriting and fraud prevention through
            cutting-edge AI technology.
          </p>
        </motion.div>

        {/* Open Positions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          {[
            {
              department: "Engineering",
              icon: Code,
              positions: [
                "Senior Software Engineer",
                "Machine Learning Engineer",
                "Full Stack Developer",
              ],
            },
            {
              department: "Sales",
              icon: LineChart,
              positions: [
                "Account Executive",
                "Sales Development Representative",
                "Sales Operations Manager",
              ],
            },
            {
              department: "Operations",
              icon: HeartHandshake,
              positions: [
                "Operations Manager",
                "Customer Success Manager",
                "Implementation Specialist",
              ],
            },
            {
              department: "Finance",
              icon: Users,
              positions: [
                "Financial Analyst",
                "Accounting Manager",
                "Business Operations",
              ],
            },
          ].map((dept, index) => (
            <motion.div
              key={dept.department}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full bg-white border border-blue-200 hover:shadow-lg transition duration-300">
                <CardHeader>
                  <dept.icon className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">{dept.department}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {dept.positions.map((position) => (
                      <li key={position}>
                        <Button
                          variant="outline"
                          className="w-full justify-between text-blue-700 border-blue-300 hover:bg-blue-50"
                        >
                          {position}
                          <ArrowRight className="w-4 h-4 text-blue-600" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
