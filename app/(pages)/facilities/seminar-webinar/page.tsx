import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function SeminarWebinarPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Seminars & Webinars
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Upcoming Events
          </h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900">
                  Modern Teaching Methodologies
                </h3>
                <span className="text-green-600 font-semibold">
                  August 15, 2025
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A comprehensive seminar on innovative teaching methods and their
                implementation in classrooms.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Education
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Teaching Methods
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Innovation
                </span>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                Register Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900">
                  Digital Learning Technologies
                </h3>
                <span className="text-green-600 font-semibold">
                  August 20, 2025
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Online webinar focusing on integrating digital tools in education
                and enhancing remote learning experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Technology
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Digital Learning
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  EdTech
                </span>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Past Events</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900">
                  Educational Psychology Symposium
                </h3>
                <span className="text-gray-600">July 10, 2025</span>
              </div>
              <p className="text-gray-600 mb-4">
                A comprehensive discussion on understanding student psychology and
                improving learning outcomes.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                View Resources →
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900">
                  Inclusive Education Workshop
                </h3>
                <span className="text-gray-600">June 25, 2025</span>
              </div>
              <p className="text-gray-600 mb-4">
                Interactive session on making education accessible for all students,
                including those with special needs.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                View Resources →
              </button>
            </div>
          </div>
        </section>

        {/* Event Calendar */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Event Calendar
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-blue-900 font-bold">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-blue-900 font-bold">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-blue-900 font-bold">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-blue-900 font-bold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Aug 15, 2025</td>
                    <td className="px-6 py-4">Modern Teaching Methodologies</td>
                    <td className="px-6 py-4">Seminar</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        Open
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Aug 20, 2025</td>
                    <td className="px-6 py-4">Digital Learning Technologies</td>
                    <td className="px-6 py-4">Webinar</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        Open
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Jul 10, 2025</td>
                    <td className="px-6 py-4">Educational Psychology Symposium</td>
                    <td className="px-6 py-4">Symposium</td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
