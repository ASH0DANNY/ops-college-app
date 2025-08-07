import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function OtherCelebrationsPage() {
  const celebrations = [
    {
      category: "National Festivals",
      events: [
        {
          title: "Independence Day",
          date: "August 15",
          activities: [
            "Flag Hoisting",
            "Cultural Program",
            "Patriotic Song Competition",
            "Prize Distribution",
          ],
          description:
            "Celebration of India's independence with patriotic fervor and cultural activities.",
        },
        {
          title: "Republic Day",
          date: "January 26",
          activities: [
            "Flag Hoisting",
            "March Past",
            "Cultural Events",
            "Sports Activities",
          ],
          description:
            "Commemorating the adoption of the Indian Constitution with various programs.",
        },
      ],
    },
    {
      category: "Cultural Celebrations",
      events: [
        {
          title: "Annual Cultural Festival",
          date: "November 15-17",
          activities: [
            "Dance Competitions",
            "Music Performances",
            "Theater Shows",
            "Art Exhibition",
          ],
          description:
            "Three-day cultural extravaganza showcasing student talents in various art forms.",
        },
        {
          title: "Traditional Day",
          date: "October 10",
          activities: [
            "Traditional Dress Competition",
            "Folk Dance",
            "Regional Food Festival",
            "Cultural Exhibition",
          ],
          description:
            "Celebration of India's diverse cultural heritage through various activities.",
        },
      ],
    },
    {
      category: "Special Days",
      events: [
        {
          title: "International Yoga Day",
          date: "June 21",
          activities: [
            "Mass Yoga Session",
            "Meditation Workshop",
            "Health Talk",
            "Yoga Competition",
          ],
          description:
            "Promoting physical and mental well-being through yoga and meditation.",
        },
        {
          title: "Environment Day",
          date: "June 5",
          activities: [
            "Tree Plantation",
            "Awareness Rally",
            "Poster Making",
            "Clean Campus Drive",
          ],
          description:
            "Activities focused on environmental awareness and conservation.",
        },
      ],
    },
  ];

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        College Celebrations
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Introduction */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
          <p className="text-gray-700">
            Our college celebrates various events and festivals throughout the
            academic year to promote cultural values, national integration, and
            holistic development of students. These celebrations provide
            opportunities for students to showcase their talents and learn about our
            rich cultural heritage.
          </p>
        </div>

        {/* Celebrations by Category */}
        {celebrations.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-orange-600 mb-6">
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-900">
                      {event.title}
                    </h3>
                    <span className="text-orange-600 font-semibold">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Event Activities:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {event.activities.map((activity, actIndex) => (
                        <div
                          key={actIndex}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <span className="text-orange-600">•</span>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Photo Gallery Preview */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Event Gallery:
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
          </div>
        ))}

        {/* Upcoming Celebrations */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Upcoming Celebrations
          </h2>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {/* Calendar View */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    event: "Sports Day",
                    date: "August 29, 2025",
                    status: "Registration Open",
                  },
                  {
                    event: "Freshers' Day",
                    date: "September 15, 2025",
                    status: "Coming Soon",
                  },
                  {
                    event: "Annual Day",
                    date: "December 20, 2025",
                    status: "Planning Stage",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-600"
                  >
                    <h3 className="font-semibold text-blue-900">{item.event}</h3>
                    <p className="text-gray-600 text-sm">{item.date}</p>
                    <span className="inline-block mt-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
