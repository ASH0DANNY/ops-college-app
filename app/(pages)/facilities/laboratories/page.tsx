import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function LaboratoriesPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Laboratory Facilities
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Labs Information Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          EDUCATIONAL LABORATORIES
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            {/* Overview */}
            <div className="mb-8">
              <p className="mb-4">
                Our college is equipped with modern laboratories that provide
                hands-on learning experiences for students. These facilities are
                designed to enhance practical understanding and develop
                essential skills in various educational domains.
              </p>
            </div>

            {/* Lab Facilities */}
            <div className="space-y-8">
              {/* Psychology Lab */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Psychology Laboratory
                </h3>
                <div className="space-y-4">
                  <p>
                    A well-equipped psychology lab for conducting experiments
                    and psychological tests, essential for understanding student
                    behavior and learning patterns.
                  </p>
                  <div className="pl-5">
                    <h4 className="font-semibold mb-2">Equipment Available:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Psychological testing tools</li>
                      <li>Assessment materials</li>
                      <li>Observation equipment</li>
                      <li>Research instruments</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Educational Technology Lab */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Educational Technology Lab
                </h3>
                <div className="space-y-4">
                  <p>
                    State-of-the-art technology lab equipped with modern
                    teaching aids and digital resources for enhanced learning
                    experiences.
                  </p>
                  <div className="pl-5">
                    <h4 className="font-semibold mb-2">Facilities Include:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Interactive smartboards</li>
                      <li>Multimedia projectors</li>
                      <li>Digital content creation tools</li>
                      <li>Educational software</li>
                      <li>Video conferencing equipment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Language Lab */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Language Laboratory
                </h3>
                <div className="space-y-4">
                  <p>
                    Modern language lab for developing communication skills and
                    language proficiency among students.
                  </p>
                  <div className="pl-5">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Audio-visual equipment</li>
                      <li>Language learning software</li>
                      <li>Recording and playback facilities</li>
                      <li>Individual learning stations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Science Lab */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Science Resource Center
                </h3>
                <div className="space-y-4">
                  <p>
                    Comprehensive science resource center for practical
                    demonstrations and experiments in teaching methodologies.
                  </p>
                  <div className="pl-5">
                    <h4 className="font-semibold mb-2">Resources Available:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Teaching aids and models</li>
                      <li>Science kits and equipment</li>
                      <li>Demonstration materials</li>
                      <li>Visual learning resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Usage Guidelines */}
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold text-yellow-700 mb-2">
                Laboratory Guidelines:
              </h4>
              <ul className="space-y-2">
                <li>• Follow safety protocols at all times</li>
                <li>• Handle equipment with care</li>
                <li>• Report any damage immediately</li>
                <li>• Maintain cleanliness and order</li>
                <li>• Prior booking required for lab usage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
