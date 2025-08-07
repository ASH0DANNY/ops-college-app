import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function JayantiCelebrationsPage() {
  const celebrations = [
    {
      title: "Gandhi Jayanti",
      date: "October 2",
      description:
        "Celebration of Mahatma Gandhi's birth anniversary with special programs promoting peace and non-violence.",
      activities: [
        "Prayer Meeting",
        "Cleanliness Drive",
        "Essay Competition",
        "Cultural Program",
      ],
    },
    {
      title: "Dr. Sarvepalli Radhakrishnan Jayanti",
      date: "September 5",
      description:
        "Celebrating Teachers' Day on the birth anniversary of Dr. S. Radhakrishnan with special recognition for educators.",
      activities: [
        "Teacher Felicitation",
        "Student-Teacher Role Exchange",
        "Cultural Events",
        "Special Assembly",
      ],
    },
    {
      title: "Swami Vivekananda Jayanti",
      date: "January 12",
      description:
        "National Youth Day celebration commemorating Swami Vivekananda's birth anniversary.",
      activities: [
        "Youth Empowerment Seminar",
        "Motivational Talks",
        "Sports Events",
        "Debate Competition",
      ],
    },
  ];

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Jayanti Celebrations
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Introduction */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
          <p className="text-gray-700">
            Our institution celebrates various Jayanti (birth anniversaries) of
            great personalities who have contributed significantly to education,
            culture, and nation-building. These celebrations help students
            understand and appreciate our rich heritage and values.
          </p>
        </div>

        {/* Celebrations List */}
        <div className="space-y-8">
          {celebrations.map((celebration, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h2 className="text-2xl font-bold text-blue-900">
                  {celebration.title}
                </h2>
                <span className="text-orange-600 font-semibold">
                  {celebration.date}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{celebration.description}</p>
              
              <h3 className="font-semibold text-blue-900 mb-3">
                Celebration Activities:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {celebration.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-orange-600">•</span>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>

              {/* Photo Gallery Preview */}
              <div className="mt-6">
                <h3 className="font-semibold text-blue-900 mb-3">
                  Photo Gallery:
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((photo) => (
                    <div
                      key={photo}
                      className="h-24 bg-gray-200 rounded flex items-center justify-center"
                    >
                      <span className="text-gray-500 text-sm">Photo {photo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Celebrations */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Upcoming Celebrations
          </h2>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Dr. APJ Abdul Kalam Jayanti
                  </h3>
                  <p className="text-gray-600">October 15, 2025</p>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                  View Schedule
                </button>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Sardar Vallabhbhai Patel Jayanti
                  </h3>
                  <p className="text-gray-600">October 31, 2025</p>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
