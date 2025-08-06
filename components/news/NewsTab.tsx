"use client";

import { NewsTabProps } from "@/types/news";
import { motion } from "framer-motion";

const NewsTab = ({ news, title, viewAllLink }: NewsTabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="border-b border-purple-200 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-purple-700">{title}</h2>
          <a
            href={viewAllLink}
            className="text-purple-600 hover:text-purple-800 text-sm flex items-center group"
          >
            <span className="group-hover:underline">View All</span>
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="space-y-4 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-100">
        {news.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-600 group-hover:scale-125 transition-transform"></div>
              </div>
              <div className="flex-grow">
                <a
                  href={item.readMoreLink}
                  className="block transition-colors duration-200"
                >
                  <h3 className="text-gray-700 mb-1 line-clamp-2 group-hover:text-purple-700">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    {item.isNew && (
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="inline-block px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded"
                      >
                        NEW
                      </motion.span>
                    )}
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsTab;
