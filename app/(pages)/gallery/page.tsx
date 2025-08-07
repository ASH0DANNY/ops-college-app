import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import Image from "next/image";

export default function GalleryPage() {
  // Sample gallery data - replace with actual data
  const galleryItems = [
    {
      id: 1,
      title: "College Building",
      image: "/placeholder.jpg",
      category: "Campus",
    },
    {
      id: 2,
      title: "Annual Function",
      image: "/placeholder.jpg",
      category: "Events",
    },
    // Add more items as needed
  ];

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Photo Gallery
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Gallery Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800">
            All
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Campus
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Events
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Cultural
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
            Sports
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
