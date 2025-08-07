import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function NewsEventsPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        News & Events
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Latest News Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Latest News</h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-sm text-green-600 font-semibold">
                August 5, 2025
              </span>
              <h3 className="text-xl font-bold text-blue-900 mt-2 mb-3">
                College Ranks #1 in State Education Rankings
              </h3>
              <p className="text-gray-600 mb-4">
                Our institution has been recognized as the top education college in
                the state for the academic year 2024-25.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                Read More →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-sm text-green-600 font-semibold">
                August 3, 2025
              </span>
              <h3 className="text-xl font-bold text-blue-900 mt-2 mb-3">
                New Smart Classroom Facilities Inaugurated
              </h3>
              <p className="text-gray-600 mb-4">
                State-of-the-art smart classrooms equipped with modern teaching aids
                have been inaugurated to enhance the learning experience.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                Read More →
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Annual Sports Day
                  </h3>
                  <p className="text-gray-600">August 15, 2025</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Sports
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Annual sports competition featuring various indoor and outdoor
                games.
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                View Details
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Cultural Festival
                  </h3>
                  <p className="text-gray-600">August 20-22, 2025</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Cultural
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Three-day cultural extravaganza showcasing talents in music, dance,
                and drama.
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Important Announcements
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="font-bold text-gray-800">
                  Examination Schedule Update
                </h4>
                <p className="text-gray-600">
                  Final semester examinations will commence from September 1, 2025.
                </p>
              </li>
              <li className="border-l-4 border-yellow-500 pl-4 py-2">
                <h4 className="font-bold text-gray-800">Fee Payment Reminder</h4>
                <p className="text-gray-600">
                  Last date for fee payment is August 15, 2025.
                </p>
              </li>
              <li className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-800">
                  New Course Registration
                </h4>
                <p className="text-gray-600">
                  Registration for new certificate courses is now open.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* News Archive */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            News Archive
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    College Annual Day Celebration
                  </h4>
                  <p className="text-gray-600 text-sm">July 15, 2025</p>
                </div>
                <button className="text-orange-600 hover:text-orange-700">
                  View →
                </button>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Faculty Development Program
                  </h4>
                  <p className="text-gray-600 text-sm">July 10, 2025</p>
                </div>
                <button className="text-orange-600 hover:text-orange-700">
                  View →
                </button>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    International Conference Success
                  </h4>
                  <p className="text-gray-600 text-sm">July 5, 2025</p>
                </div>
                <button className="text-orange-600 hover:text-orange-700">
                  View →
                </button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded hover:bg-gray-200 transition-colors">
                Load More News
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
