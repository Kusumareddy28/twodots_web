import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Book, Video, Download } from "lucide-react";
import { motion } from "framer-motion";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 pt-24">
      {/* Animated Dots */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          className="w-4 h-4 bg-blue-600 rounded-full absolute"
          animate={{ x: [-20, 20], y: [-20, 20] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="w-4 h-4 bg-blue-400 rounded-full absolute"
          animate={{ x: [20, -20], y: [-20, 20] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Resources</h1>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: FileText,
              title: "Case Studies",
              desc: "Learn how leading property managers achieve 50%+ reduction in delinquencies.",
              action: "Download Case Studies",
            },
            {
              icon: Book,
              title: "Documentation",
              desc: "Technical guides and API documentation for seamless integration.",
              action: "View Documentation",
            },
            {
              icon: Video,
              title: "Video Tutorials",
              desc: "Watch step-by-step guides on implementing Two Dots automation.",
              action: "Watch Videos",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <Card className="bg-white border border-blue-200 shadow-sm hover:shadow-lg transition duration-300">
                <CardHeader>
                  <item.icon className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">{item.desc}</p>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured White Paper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white border border-blue-200 rounded-2xl p-8 mb-16 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Latest White Paper</h2>
              <p className="text-blue-700 mb-6">
                Download our comprehensive guide on AI-powered automation in property management and learn how to reduce operational costs by up to $2M annually.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="mr-2" />
                Download White Paper
              </Button>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="White Paper Cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
