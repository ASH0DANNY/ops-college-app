import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function SportsPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Sports Facilities
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Sports Information Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          SPORTS AND RECREATION
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            {/* Overview */}
            <div className="mb-8">
              <p className="mb-4">
                Our college provides excellent sports facilities to promote
                physical fitness and overall development of students. We believe
                in nurturing not just academic excellence but also physical and
                mental well-being through sports activities.
              </p>
            </div>

            {/* Indoor Sports Facilities */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Indoor Sports Facilities
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Indoor Games
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Table Tennis</li>
                      <li>Carrom</li>
                      <li>Chess</li>
                      <li>Badminton Court</li>
                      <li>Yoga Room</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Facilities Available
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Professional equipment</li>
                      <li>Changing rooms</li>
                      <li>First aid facilities</li>
                      <li>Trained supervisors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Outdoor Sports Facilities */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Outdoor Sports Facilities
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Outdoor Games
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Cricket Ground</li>
                      <li>Football Field</li>
                      <li>Basketball Court</li>
                      <li>Volleyball Court</li>
                      <li>Athletic Track</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Additional Features
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Floodlights for evening activities</li>
                      <li>Spectator seating areas</li>
                      <li>Drinking water facilities</li>
                      <li>Equipment storage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports Activities */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Sports Activities
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  <li>
                    <span className="font-semibold">Annual Sports Meet:</span>{" "}
                    Organized every year with various competitions and events
                  </li>
                  <li>
                    <span className="font-semibold">
                      Inter-College Tournaments:
                    </span>{" "}
                    Regular participation in various inter-college sports events
                  </li>
                  <li>
                    <span className="font-semibold">Sports Training:</span>{" "}
                    Professional coaching for various sports
                  </li>
                  <li>
                    <span className="font-semibold">Fitness Programs:</span>{" "}
                    Regular fitness and wellness activities
                  </li>
                </ul>
              </div>
            </div>

            {/* Sports Guidelines */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold text-yellow-700 mb-2">
                Sports Facility Guidelines:
              </h4>
              <ul className="space-y-2">
                <li>• Sports equipment available on ID card submission</li>
                <li>• Proper sports attire mandatory</li>
                <li>• Prior booking required for specific facilities</li>
                <li>• Follow safety rules and regulations</li>
                <li>• Maintain discipline and sportsmanship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
