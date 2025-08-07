import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function AchievementPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Our Achievements
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Academic Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Academic Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                University Toppers
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">Batch 2024-25</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>First Rank - Priya Sharma (92%)</li>
                    <li>Second Rank - Rahul Kumar (90%)</li>
                    <li>Third Rank - Amit Singh (89%)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold">Batch 2023-24</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>First Rank - Neha Gupta (93%)</li>
                    <li>Second Rank - Rajesh Kumar (91%)</li>
                    <li>Third Rank - Sunita Devi (88%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Research Achievements
              </h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold">Research Papers Published</p>
                  <p>15 papers in international journals (2024-25)</p>
                </li>
                <li className="border-l-4 border-pink-500 pl-4">
                  <p className="font-semibold">Conferences Attended</p>
                  <p>25 national and international conferences</p>
                </li>
                <li className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">Research Projects</p>
                  <p>3 major research projects completed</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sports Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Sports Excellence
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  State Level Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-gold-500">🏆</span>
                    <span>First place in Inter-College Sports Meet 2025</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-silver-500">🏅</span>
                    <span>Winners in State Level Cricket Tournament</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-bronze-500">🏅</span>
                    <span>Second Runner-up in Athletics Championship</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Individual Achievements
                </h3>
                <ul className="space-y-3">
                  <li>Rajesh Kumar - National Level Basketball Player</li>
                  <li>Priya Singh - State Level Table Tennis Champion</li>
                  <li>Amit Kumar - University Boxing Champion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Achievements */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Cultural Excellence
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Cultural Festivals & Competitions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span>🎭</span>
                    <span>First Prize in State Level Drama Competition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>🎨</span>
                    <span>Winners of Inter-College Cultural Fest 2025</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>🎵</span>
                    <span>Best College in Folk Dance Competition</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Special Recognition
                </h3>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-gray-700">
                    Our college has been recognized as the "Best Cultural
                    Institution" by the State Education Department for the year
                    2024-25.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
