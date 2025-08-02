import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function CoursesPage() {
  return (
    <PageLayout>
      <div className="w-full max-w-[1200px] mx-auto p-8">
        <div className="bg-gradient-to-r from-[#003366] to-[#004c99] text-white p-8 text-center mb-8">
          <h1 className="text-4xl font-bold uppercase m-0">Our Courses</h1>
        </div>
        <div className="bg-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* B.Ed. Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-200">
              <h2 className="text-2xl text-[#003366] font-bold mb-6 pb-2 border-b-2 border-[#003366]">
                B.Ed. (Bachelor of Education)
              </h2>
              <div>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Duration:</span> 2
                  Years
                </p>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Seats:</span> 100
                </p>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Eligibility:</span>{" "}
                  Graduate in any discipline with minimum 50% marks
                </p>
                <div className="mt-6">
                  <p className="mb-4">
                    A comprehensive teacher training program that prepares
                    students for secondary and higher secondary teaching.
                  </p>
                  <h3 className="text-xl text-[#003366] font-bold my-4">
                    Key Features:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Intensive teaching practice</li>
                    <li>Modern pedagogical techniques</li>
                    <li>Educational technology integration</li>
                    <li>Practical exposure to teaching methods</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* M.Ed. Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-200">
              <h2 className="text-2xl text-[#003366] font-bold mb-6 pb-2 border-b-2 border-[#003366]">
                M.Ed. (Master of Education)
              </h2>
              <div>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Duration:</span> 2
                  Years
                </p>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Seats:</span> 50
                </p>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Eligibility:</span>{" "}
                  B.Ed. with minimum 55% marks
                </p>
                <div className="mt-6">
                  <p className="mb-4">
                    Advanced program focusing on educational research,
                    administration, and specialized teaching methodologies.
                  </p>
                  <h3 className="text-xl text-[#003366] font-bold my-4">
                    Key Features:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Research methodology</li>
                    <li>Educational leadership</li>
                    <li>Advanced pedagogical studies</li>
                    <li>Specialization options</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* D.El.Ed. Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-200">
              <h2 className="text-2xl text-[#003366] font-bold mb-6 pb-2 border-b-2 border-[#003366]">
                D.El.Ed. (Diploma in Elementary Education)
              </h2>
              <div>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Duration:</span> 2
                  Years
                </p>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Seats:</span> 50
                </p>
                <p className="mb-4">
                  <span className="text-[#003366] font-bold">Eligibility:</span>{" "}
                  12th Pass with minimum 50% marks
                </p>
                <div className="mt-6">
                  <p className="mb-4">
                    Program designed for training teachers for elementary level
                    education.
                  </p>
                  <h3 className="text-xl text-[#003366] font-bold my-4">
                    Key Features:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Child psychology</li>
                    <li>Primary teaching methods</li>
                    <li>Activity-based learning</li>
                    <li>Practical training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
