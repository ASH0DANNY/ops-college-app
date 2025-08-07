import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function NSSPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        National Service Scheme (NSS)
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">About NSS</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              The National Service Scheme (NSS) unit of our college works with the
              motto "NOT ME BUT YOU" and focuses on the development of students'
              personality through community service. Our NSS volunteers are engaged
              in various community service programs and activities throughout the
              year.
            </p>
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">Our Objectives:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Understand the community in which they work</li>
                <li>Understand themselves in relation to their community</li>
                <li>Identify the needs and problems of the community</li>
                <li>Develop among themselves a sense of social and civic responsibility</li>
                <li>Utilize their knowledge in finding practical solutions to individual and community problems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Current Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Regular Activities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Campus Cleanliness Drive</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Tree Plantation Programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Blood Donation Camps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Health Check-up Camps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Literacy Programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Special Campaigns
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>COVID-19 Awareness Programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Digital Literacy Drive</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Women Empowerment Workshops</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Environmental Conservation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Rural Development Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Upcoming Events
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg mb-2">Blood Donation Camp</h3>
                <p className="text-gray-600">Date: August 15, 2025</p>
                <p className="text-gray-600">Venue: College Auditorium</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-lg mb-2">
                  Environmental Awareness Rally
                </h3>
                <p className="text-gray-600">Date: August 20, 2025</p>
                <p className="text-gray-600">Starting Point: College Campus</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-lg mb-2">
                  Digital Literacy Workshop
                </h3>
                <p className="text-gray-600">Date: September 1, 2025</p>
                <p className="text-gray-600">Venue: Computer Lab</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join NSS */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Join NSS</h2>
          <div className="bg-green-50 border-2 border-blue-900 p-8">
            <div className="text-gray-700">
              <p className="mb-4">
                We welcome students to join our NSS unit and contribute to society.
                As an NSS volunteer, you will get opportunities to develop
                leadership skills, understand social issues, and make a difference
                in the community.
              </p>
              <div className="bg-white p-4 rounded mt-4">
                <h3 className="font-bold text-blue-900 mb-2">
                  How to Register:
                </h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Fill the NSS registration form from the college office</li>
                  <li>Submit the form along with necessary documents</li>
                  <li>Attend the orientation program</li>
                  <li>Start participating in NSS activities</li>
                </ol>
              </div>
              <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded font-bold hover:bg-orange-700 transition-colors">
                Download Registration Form
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
