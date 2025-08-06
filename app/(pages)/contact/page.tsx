import React from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        Contact Us
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Contact Information Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          GET IN TOUCH
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Address:
                    </h4>
                    <p className="text-gray-700">
                      College of Education
                      <br />
                      123 Education Street
                      <br />
                      Giridih, Jharkhand 815301
                      <br />
                      India
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Phone:</h4>
                    <p className="text-gray-700">
                      Main Office: +91 1234567890
                      <br />
                      Admission Cell: +91 9876543210
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Email:</h4>
                    <p className="text-gray-700">
                      General Inquiries: info@college.com
                      <br />
                      Admissions: admissions@college.com
                      <br />
                      Principal: principal@college.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Office Hours:
                    </h4>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  Send us a Message
                </h3>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Location Map
              </h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Add your map component or iframe here */}
                <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Map will be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
