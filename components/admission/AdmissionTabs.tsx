"use client";

import React, { useState } from "react";

interface TabButtonProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  id,
  label,
  isActive,
  onClick,
}) => (
  <button
    onClick={() => onClick(id)}
    className={`px-6 py-3 font-semibold ${
      isActive
        ? "bg-orange-600 text-white"
        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
    }`}
  >
    {label}
  </button>
);

export function AdmissionTabs() {
  const [activeTab, setActiveTab] = useState("howToApply");

  return (
    <>
      {/* Tab Navigation */}
      <div className="flex mb-0">
        <TabButton
          id="howToApply"
          label="How to Apply"
          isActive={activeTab === "howToApply"}
          onClick={setActiveTab}
        />
        <TabButton
          id="enclosures"
          label="Enclosures"
          isActive={activeTab === "enclosures"}
          onClick={setActiveTab}
        />
        <TabButton
          id="uniform"
          label="Uniform"
          isActive={activeTab === "uniform"}
          onClick={setActiveTab}
        />
        <TabButton
          id="examination"
          label="Examination"
          isActive={activeTab === "examination"}
          onClick={setActiveTab}
        />
      </div>

      {/* Tab Content */}
      <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
        {activeTab === "howToApply" && (
          <div className="text-gray-800">
            <p className="mb-4">
              The prescribed application form along with prospectus may be
              obtained from the college on payment of Rupees 1000/- (850/— for
              ST/SC) on any working day during notified period. Against a demand
              draft of Rs. 850/- issued any nationalized bank in favor of{" "}
              <strong>K.N. Bakshi College of Education</strong> payable at{" "}
              <strong>Giridih</strong>.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-blue-900 mt-6">
              <h4 className="font-bold text-blue-900 mb-3">
                Application Process:
              </h4>
              <ul className="space-y-2">
                <li>• Visit the college during working hours</li>
                <li>
                  • Pay the prescribed fee (₹1000/- for General, ₹850/- for
                  ST/SC)
                </li>
                <li>• Collect application form and prospectus</li>
                <li>• Submit completed form within the stipulated time</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "enclosures" && (
          <div className="text-gray-800">
            <h4 className="font-bold text-blue-900 mb-4">
              Required Documents:
            </h4>
            <ul className="space-y-2">
              <li>• Attested copies of all academic certificates</li>
              <li>• Character Certificate from previous institution</li>
              <li>• Caste Certificate (if applicable)</li>
              <li>• Income Certificate (if applicable)</li>
              <li>• Passport size photographs</li>
              <li>• Transfer Certificate</li>
              <li>• NCC/Sports Certificate (if applicable)</li>
              <li>• Domicile Certificate</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="font-semibold text-yellow-700">
                Note: All documents should be properly attested and submitted
                along with the application form.
              </p>
            </div>
          </div>
        )}

        {activeTab === "uniform" && (
          <div className="text-gray-800">
            <h4 className="font-bold text-blue-900 mb-4">
              Dress Code Requirements:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold mb-3">For Male Students:</h5>
                <ul className="space-y-1">
                  <li>• White shirt with collar</li>
                  <li>• Navy blue trousers</li>
                  <li>• Black leather shoes</li>
                  <li>• College badge on shirt</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold mb-3">For Female Students:</h5>
                <ul className="space-y-1">
                  <li>• White kurta/shirt</li>
                  <li>• Navy blue dupatta</li>
                  <li>• Navy blue salwar/trousers</li>
                  <li>• Black shoes</li>
                  <li>• College badge</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
              <p className="font-bold text-red-700">
                Important: Students must wear proper uniform during all college
                hours. Identity card is mandatory.
              </p>
            </div>
          </div>
        )}

        {activeTab === "examination" && (
          <div className="text-gray-800">
            <h4 className="font-bold text-blue-900 mb-4">
              Examination Pattern:
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold mb-2">
                  B.Ed. Course (4 Semesters):
                </h5>
                <ul className="space-y-1">
                  <li>• Semester-wise examination system</li>
                  <li>• Internal assessment: 25%</li>
                  <li>• External examination: 75%</li>
                  <li>• Practical examinations included</li>
                  <li>• Teaching practice evaluation</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold mb-2">D.El.Ed. Course:</h5>
                <ul className="space-y-1">
                  <li>• Annual examination system</li>
                  <li>• Theory and practical components</li>
                  <li>• Continuous assessment</li>
                  <li>• Project work evaluation</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="font-semibold text-blue-700">
                Note: Minimum 75% attendance is mandatory for appearing in
                examinations.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
