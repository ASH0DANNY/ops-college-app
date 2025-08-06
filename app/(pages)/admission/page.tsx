import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { AdmissionTabs } from "@/components/admission/AdmissionTabs";

export default function AdmissionPage() {
  return (
    <PageLayout>
      {/* University Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        ABC College of Education
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* B.Ed Course Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            B.Ed. Course
          </h2>

          <div className="text-gray-800 mb-6">
            <p className="mb-4">
              The merit list will be prepared on the basis of academic marks
              obtained in various Examination up-to Graduation/P.G. level.
              Weight-age will be given who have participated at state and
              National level Games and also with NCC Certificate with 'B' or 'C'
              level. List of the selected Candidates will be available on
              college notice board and our college website.{" "}
              <strong>Annual intake for this course is 100.</strong>
            </p>
            <p className="italic text-gray-600 mb-6">
              Note :- The reservation policy in admission will be followed by
              the institution according to the Government of Jharkhand
              /Affiliating University.
            </p>
          </div>

          {/* B.Ed Eligibility Banner */}
          <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
            ELIGIBILITY - B.Ed. COURSE
          </div>

          {/* B.Ed Eligibility Content */}
          <div className="bg-green-50 border-2 border-blue-900 p-8 m-0 mb-6">
            <div className="text-gray-800">
              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  Candidates having secured a minimum of 50% marks (45% for ST,
                  SC, &OBC) at Degree level or Equivalent Examination of a
                  recognized university or Equivalent institution.
                </li>
                <li>
                  Since it is a full time course of study, candidates pursuing
                  other course and Enrolled in other institution and those in
                  any kind of Employment shall not be Eligible.
                </li>
              </ol>
              <p className="italic mt-6 text-gray-600">
                Syllabus : Syllabus prescribed by Vinoba Bhave University will
                be followed.
              </p>
            </div>
          </div>

          <button className="bg-orange-600 text-white px-6 py-3 font-bold hover:bg-orange-700 transition-colors">
            Download B. Ed. Syllabus
          </button>
        </div>

        {/* D.El.Ed Course Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            D.El.Ed. Course
          </h2>

          <div className="text-gray-800 mb-6">
            <p className="mb-4">
              The merit list will be prepared completely on the basis of marks
              obtained in various examination upto +2 level and Equivalent. List
              of selected candidate will be displayed on the notice board. They
              will be required to get admitted within stipulated time
              facilitating which seat would be offered to next candidate in
              merit list. <strong>Annual intake for this course is 100.</strong>
            </p>
            <p className="italic text-gray-600 mb-6">
              Note :— The reservation policy in admission will be followed by
              the institution according to the Govt. of Jharkhand I Affiliating
              Board.
            </p>
          </div>

          {/* D.El.Ed Eligibility Banner */}
          <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
            ELIGIBILITY - D.El.Ed. COURSE
          </div>

          {/* D.El.Ed Eligibility Content */}
          <div className="bg-green-50 border-2 border-blue-900 p-8 m-0 mb-6">
            <div className="text-gray-800">
              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  Candidates having secured a minimum 50% marks (45% for ST, SC,
                  & OBC) at +2 level or Equivalent Examination of a recognized
                  Board.
                </li>
                <li>Candidates above the age of 18 years.</li>
                <li>
                  Since it is a full time course of study, candidates pursuing
                  other course and Enrolled in other institution and those in
                  any kind of employment shall not be eligible.
                </li>
              </ol>
            </div>
          </div>

          <button className="bg-orange-600 text-white px-6 py-3 font-bold hover:bg-orange-700 transition-colors mb-8">
            Download D. El. Ed. Syllabus
          </button>
        </div>

        <AdmissionTabs />
      </div>
    </PageLayout>
  );
}
