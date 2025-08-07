import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function ProgramReportPage() {
  const annualReports = [
    {
      year: "2024-25",
      highlights: [
        "100% placement rate for B.Ed graduates",
        "NAAC 'A' Grade accreditation renewed",
        "20+ research papers published",
        "5 national-level seminars conducted",
      ],
    },
    {
      year: "2023-24",
      highlights: [
        "New smart classrooms implemented",
        "Digital library expansion",
        "International education conference hosted",
        "Sports complex renovation completed",
      ],
    },
  ];

  const programs = [
    {
      category: "Academic Programs",
      reports: [
        {
          title: "Faculty Development Program",
          date: "July 15-20, 2025",
          participants: 45,
          outcomes: [
            "Enhanced teaching methodologies",
            "Digital tools integration",
            "Research methodology training",
            "Pedagogical innovations",
          ],
        },
        {
          title: "Research Methodology Workshop",
          date: "June 10-12, 2025",
          participants: 60,
          outcomes: [
            "Research paper writing skills",
            "Data analysis techniques",
            "Publication strategies",
            "Research proposal development",
          ],
        },
      ],
    },
    {
      category: "Cultural Programs",
      reports: [
        {
          title: "Annual Cultural Festival",
          date: "March 15-17, 2025",
          participants: 300,
          outcomes: [
            "Inter-college competitions",
            "Cultural performances",
            "Art exhibitions",
            "Talent showcase",
          ],
        },
        {
          title: "Traditional Day Celebration",
          date: "February 25, 2025",
          participants: 250,
          outcomes: [
            "Cultural diversity celebration",
            "Traditional costume show",
            "Folk art demonstrations",
            "Regional food festival",
          ],
        },
      ],
    },
    {
      category: "Extension Activities",
      reports: [
        {
          title: "Community Outreach Program",
          date: "April 5-10, 2025",
          participants: 120,
          outcomes: [
            "Educational awareness camps",
            "Health check-up camps",
            "Environmental initiatives",
            "Literacy promotion",
          ],
        },
        {
          title: "Rural Education Development",
          date: "May 1-7, 2025",
          participants: 80,
          outcomes: [
            "Teaching in rural schools",
            "Educational resource distribution",
            "Teacher training workshops",
            "Infrastructure support",
          ],
        },
      ],
    },
  ];

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Program Reports
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Annual Reports Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Annual Reports
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {annualReports.map((report, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Academic Year {report.year}
                </h3>
                <div className="space-y-3">
                  {report.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <span className="text-orange-600">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-orange-600 font-semibold hover:text-orange-700">
                  Download Full Report →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Program Reports by Category */}
        {programs.map((category, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.reports.map((program, programIndex) => (
                <div
                  key={programIndex}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {program.title}
                      </h3>
                      <p className="text-gray-600">
                        Date: {program.date} | Participants: {program.participants}
                      </p>
                    </div>
                    <button className="mt-2 md:mt-0 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                      View Details
                    </button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Program Outcomes:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {program.outcomes.map((outcome, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <span className="text-orange-600">•</span>
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Photo Gallery Preview */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Program Gallery:
                    </h4>
                    <div className="grid grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((photo) => (
                        <div
                          key={photo}
                          className="h-20 bg-gray-200 rounded flex items-center justify-center"
                        >
                          <span className="text-gray-500 text-sm">
                            Photo {photo}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Download Reports Section */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Download Reports
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Quarterly Report Q2 2025",
                  size: "2.5 MB",
                  type: "PDF",
                },
                {
                  title: "Semester Report Spring 2025",
                  size: "3.1 MB",
                  type: "PDF",
                },
                {
                  title: "Annual Report 2024-25",
                  size: "5.2 MB",
                  type: "PDF",
                },
                {
                  title: "NAAC SSR Report 2025",
                  size: "4.8 MB",
                  type: "PDF",
                },
              ].map((report, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-4 rounded"
                >
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {report.size} • {report.type}
                    </p>
                  </div>
                  <button className="text-orange-600 hover:text-orange-700">
                    Download →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
