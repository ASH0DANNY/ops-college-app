import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function LibraryPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Library Facilities
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Library Information Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          CENTRAL LIBRARY
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Overview</h3>
              <p className="mb-4">
                Our central library is a hub of knowledge and learning, equipped
                with modern facilities and an extensive collection of
                educational resources. The library provides a conducive
                environment for study and research, serving both students and
                faculty members.
              </p>
            </div>

            {/* Library Resources */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Library Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Print Resources
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Over 10,000 books on education and related subjects</li>
                    <li>Educational journals and periodicals</li>
                    <li>Research publications and thesis papers</li>
                    <li>Newspapers and magazines</li>
                    <li>Reference books and encyclopedias</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Digital Resources
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>E-books and digital journals</li>
                    <li>Online research databases</li>
                    <li>Educational software and multimedia content</li>
                    <li>Access to educational websites and portals</li>
                    <li>Digital archives and repositories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Library Facilities
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-900">•</span>
                    <span>
                      Reading rooms with seating capacity of 100 students
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-900">•</span>
                    <span>Computer terminals with internet access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-900">•</span>
                    <span>Photocopying and printing services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-900">•</span>
                    <span>Discussion rooms for group study</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-900">•</span>
                    <span>Wi-Fi enabled study areas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-900">•</span>
                    <span>Digital catalog system</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Library Rules */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold text-yellow-700 mb-2">Library Rules:</h4>
              <ul className="space-y-2">
                <li>• Maintain silence in the library premises</li>
                <li>• Library cards are mandatory for book issue</li>
                <li>• Books are issued for 14 days</li>
                <li>• Fine for late return: ₹5 per day</li>
                <li>• Handle books and equipment with care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
