import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function CoursesPage() {
  return (
    <PageLayout>
      {/* University Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Controller of Examinations
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Course Information Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          COURSES OFFERED
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            {/* Course History */}
            <p className="list-none ml-0 mb-6 pl-0">
              The college has successfully and consecutively conducted B.Ed.
              course from 2013-14 onward. Now with the renewal of affiliation
              from VBU and Ministry of Human Resource & Development, (Govt. of
              Jharkhand), B.Ed. Course since July 2015 has been launched with
              four semester system in span of two years starting with 2015-2017
              batch.
            </p>

            {/* Course Details */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Bachelor of Education (B.Ed.)
              </h3>
              <p className="mb-2">
                Recognized by National Council for Teacher Education
                (ERCAPP-1270)
              </p>
              <p className="mb-4">
                Affiliated to Vinoba Bhave University, Hazaribag
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-900">
                <p className="font-semibold mb-2">Course Fee:</p>
                <p>• General & OBC: ₹1,31,800</p>
                <p>• SC & ST: ₹1,26,800</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Diploma in Elementary Education (D.El.Ed.)
              </h3>
              <p className="mb-2">
                Recognized by National Council for Teacher Education
                (ERCAPP-4169)
              </p>
              <p className="mb-4">
                Affiliated to Jharkhand Academic Council Ranchi
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-900">
                <p className="font-semibold mb-2">Course Fee:</p>
                <p>• General & OBC: ₹1,10,000</p>
                <p>• SC & ST: ₹1,05,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rules and Regulations Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide mt-8">
          GENERAL RULES & REGULATIONS
        </div>

        {/* Rules Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            <p className="list-none ml-0 mb-6 pl-0">
              The students will have to follow all the rules & regulations of
              the institution issued from time to time relating to their
              studies, examination, conduct and discipline. Candidate once
              admitted on production of false certificate his/her admission will
              be cancelled and no fee will be refunded to the candidate & legal
              action shall be taken against him/her.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <h4 className="font-bold text-red-700 mb-2">
                Important Guidelines:
              </h4>
              <ul className="space-y-2">
                <li>
                  • The college identity card should be worn during session
                  hours
                </li>
                <li>
                  • There is strict ban on ragging. Anyone found indulging in
                  such activities is likely to be punished as per rules
                </li>
                <li>• All students must attend the class in proper uniform</li>
                <li>
                  • Any legal disputes will be under the jurisdiction of Giridih
                  Court only
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="font-semibold text-yellow-700">
                Note: Students are expected to maintain discipline and follow
                all institutional guidelines for a conducive learning
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
