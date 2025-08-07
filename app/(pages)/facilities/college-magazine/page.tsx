import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function CollegeMagazinePage() {
  const currentIssue = {
    title: "Shiksha Darpan 2025",
    edition: "Volume 8, Issue 2",
    publishDate: "July 2025",
    highlights: [
      "Student Research Papers",
      "Creative Writing Section",
      "Educational Innovations",
      "Alumni Success Stories",
      "Cultural Activities Coverage",
    ],
  };

  const sections = [
    {
      title: "Academic Articles",
      description:
        "Research papers and academic articles written by students and faculty",
      topics: [
        "Modern Teaching Methodologies",
        "Educational Psychology",
        "Classroom Management",
        "Digital Learning",
      ],
    },
    {
      title: "Creative Corner",
      description: "Creative expressions through poetry, stories, and art",
      topics: [
        "Poetry Collection",
        "Short Stories",
        "Art Gallery",
        "Student Photography",
      ],
    },
    {
      title: "Campus Life",
      description: "Coverage of various events and activities on campus",
      topics: [
        "Cultural Events",
        "Sports Activities",
        "Academic Achievements",
        "Student Projects",
      ],
    },
  ];

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        College Magazine
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Current Issue Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Current Issue
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Magazine Cover Preview */}
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Magazine Cover</span>
                </div>
              </div>

              {/* Magazine Details */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {currentIssue.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentIssue.edition} | {currentIssue.publishDate}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Highlights:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentIssue.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <span className="text-orange-600">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors">
                    Read Online
                  </button>
                  <button className="border-2 border-orange-600 text-orange-600 px-6 py-2 rounded hover:bg-orange-50 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Magazine Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Magazine Sections
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-600"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <span className="text-orange-600">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Previous Issues */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Previous Issues
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Shiksha Darpan 2025",
                  edition: "Volume 8, Issue 1",
                  date: "January 2025",
                },
                {
                  title: "Shiksha Darpan 2024",
                  edition: "Volume 7, Issue 2",
                  date: "July 2024",
                },
                {
                  title: "Shiksha Darpan 2024",
                  edition: "Volume 7, Issue 1",
                  date: "January 2024",
                },
                {
                  title: "Shiksha Darpan 2023",
                  edition: "Volume 6, Issue 2",
                  date: "July 2023",
                },
              ].map((issue, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-4 rounded"
                >
                  <div>
                    <h3 className="font-semibold text-blue-900">{issue.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {issue.edition} | {issue.date}
                    </p>
                  </div>
                  <button className="text-orange-600 hover:text-orange-700">
                    View →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contribution Guidelines */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Submit Your Work
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Contribution Guidelines
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                We welcome contributions from students and faculty members. Your
                work can be in the form of:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-orange-600">•</span>
                  <span>Research Articles</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-orange-600">•</span>
                  <span>Poetry and Stories</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-orange-600">•</span>
                  <span>Artwork and Photography</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="text-orange-600">•</span>
                  <span>Educational Insights</span>
                </li>
              </ul>
              <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors">
                Submit Your Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
