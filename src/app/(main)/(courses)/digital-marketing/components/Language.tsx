import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { FaPython } from 'react-icons/fa';
import {
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiTableau,
  SiPowerbi,
  SiMysql,
  SiMicrosoftexcel,
  SiMatplotlib,
} from 'react-icons/si';

export default function ToolsInDemand() {
  const tools = [
    { name: 'Pandas', icon: <SiPandas className="text-purple-700 text-4xl" /> },
    { name: 'Tableau', icon: <SiTableau className="text-blue-500 text-4xl" /> },
    { name: 'SQL', icon: <SiMysql className="text-orange-500 text-4xl" /> },
    { name: 'Power BI', icon: <SiPowerbi className="text-yellow-500 text-4xl" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-400 text-4xl" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-400 text-4xl" /> },
    { name: 'Matplotlib', icon: <SiMatplotlib className="text-blue-700 text-4xl" /> },
    { name: 'Excel', icon: <SiMicrosoftexcel className="text-green-600 text-4xl" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-400 text-4xl" /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 gap-10 w-full max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="text-center lg:text-left px-4 sm:px-0">
        <h4 className="text-gray-500 font-semibold mb-3 text-sm sm:text-base">COURSE JOURNEY</h4>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
          Learn all the <br /> Tools that are <br />
          <span className="underline decoration-emerald-400 decoration-4 underline-offset-4">
            In-demand
          </span>
        </h1>
      </div>

      {/* Right Section */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 sm:gap-8 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="flex justify-center"
          >
            <Card className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shadow-md rounded-2xl hover:shadow-xl transition-all bg-white">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-2">
                {tool.icon}
                <p className="font-medium text-xs sm:text-sm text-gray-700 text-center">{tool.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

