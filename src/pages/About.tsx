import { motion } from "framer-motion";
import {
  Users,
  Award,
  Building2,
  Briefcase,
  Globe2,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import image from "@/assets/image.png"; // Henson Orser
import image2 from "@/assets/image2.png"; // Henry Oscar

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-32">
      {/* Animated Dots */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          className="w-4 h-4 bg-blue-600 rounded-full absolute"
          animate={{ x: [-20, 20], y: [-20, 20] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="w-4 h-4 bg-blue-400 rounded-full absolute"
          animate={{ x: [20, -20], y: [-20, 20] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">
            About Two Dots
          </h1>
          <p className="text-lg text-blue-800 text-center mb-12 max-w-3xl mx-auto">
            Two Dots is a San Francisco-based startup leveraging AI to redefine
            underwriting and fraud prevention for property managers and lenders.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white border border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800">
                To streamline underwriting and fraud prevention through
                automation, reducing costs and enhancing accuracy in
                decision-making.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Users,
              title: "Team-Focused",
              description:
                "Collaboration and synergy drive innovation in our SF office.",
            },
            {
              icon: Award,
              title: "Innovation",
              description:
                "Pioneering AI-driven fraud detection and underwriting tech.",
            },
            {
              icon: Building2,
              title: "Impact",
              description: "$2M+ saved per 10,000 units for clients — real results.",
            },
            {
              icon: Briefcase,
              title: "Career Growth",
              description:
                "Expanding engineering, sales, and ops teams globally.",
            },
            {
              icon: Globe2,
              title: "Global Vision",
              description:
                "Helping clients across North America with scalable tools.",
            },
            {
              icon: Star,
              title: "Customer Success",
              description:
                "Delivering measurable success and delight through every feature.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="bg-white border border-blue-200 hover:shadow-lg transition duration-300">
                <CardHeader>
                  <item.icon className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
  Leadership
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Founder */}
  {[{
    img: image,
    name: "Henson Orser",
    title: "Co-founder & CEO",
    bio: "Driving Two Dots' mission to enhance consumer underwriting through AI and strategic leadership."
  },
  {
    img: image2,
    name: "Henry Oscar",
    title: "Co-founder & CTO",
    bio: "Engineering the future of automated lending platforms with scalable, intelligent systems."
  }].map((leader, i) => (
    <motion.div
      key={leader.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + i * 0.2 }}
      className="bg-white rounded-xl shadow-lg border border-blue-200 p-6 text-center hover:shadow-xl transition duration-300"
    >
      <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-100">
        <img
          src={leader.img}
          alt={leader.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-blue-900">{leader.name}</h3>
      <p className="text-blue-700 font-medium">{leader.title}</p>
      <p className="text-blue-600 mt-2 text-sm">{leader.bio}</p>
    </motion.div>
  ))}
</div>

        </motion.div>

        {/* Visual Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-24 text-center"
        >
          <p className="text-blue-700 mt-4 text-sm italic">
            Innovation and collaboration are at the heart of everything we do.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
