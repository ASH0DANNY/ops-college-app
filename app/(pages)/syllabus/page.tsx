import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function SyllabusPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Course Syllabus
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Course Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* B.Ed. Course Card */}
          <div className="bg-blue-50 p-12 text-center rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">
              B. Ed. Course
            </h2>
            <button className="bg-orange-600 text-white px-8 py-3 font-bold hover:bg-orange-700 transition-colors rounded">
              Download
            </button>
          </div>

          {/* D.El.Ed. Course Card */}
          <div className="bg-blue-50 p-12 text-center rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">
              D.El.Ed. Course
            </h2>
            <button className="bg-orange-600 text-white px-8 py-3 font-bold hover:bg-orange-700 transition-colors rounded">
              Download
            </button>
          </div>
        </div>

        {/* Prospectus Section */}
        <div className="bg-blue-600 text-white text-center py-6 px-8 text-xl font-semibold rounded-lg">
          Prospectus B. Ed. D.El.Ed
        </div>
      </div>
    </PageLayout>
  );
}
