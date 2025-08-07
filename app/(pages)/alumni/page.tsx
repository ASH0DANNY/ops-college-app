import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function AlumniPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Alumni Association
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Introduction Section */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Welcome to Our Alumni Network
          </h2>
          <p className="text-gray-700 mb-6">
            The Alumni Association of K.N. Bakshi College of Education serves as a
            vital link between our past students and the institution. We take pride
            in our alumni who are making significant contributions to the field of
            education across the country.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Our Objectives
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Foster connections between alumni and the institution</li>
              <li>Provide networking opportunities for professional growth</li>
              <li>Support current students through mentorship programs</li>
              <li>Organize regular alumni meets and events</li>
              <li>Contribute to the development of the institution</li>
            </ul>
          </div>
        </div>

        {/* Alumni Registration Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Alumni Registration
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Year of Graduation
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Course</label>
                  <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                    <option>B.Ed.</option>
                    <option>D.El.Ed.</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Current Occupation
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded font-bold hover:bg-orange-700 transition-colors"
              >
                Register as Alumni
              </button>
            </form>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Upcoming Alumni Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
              <div className="text-sm text-blue-600 font-semibold mb-2">
                August 15, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Annual Alumni Meet
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for a day of reconnecting, sharing experiences, and
                networking with fellow alumni.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
              <div className="text-sm text-blue-600 font-semibold mb-2">
                September 5, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Teacher's Day Celebration
              </h3>
              <p className="text-gray-600 mb-4">
                Special celebration with our alumni who are now successful teachers
                and educators.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
