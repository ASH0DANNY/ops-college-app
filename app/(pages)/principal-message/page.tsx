import PageLayout from "@/components/layout/PageLayout";

export default function PrincipalMessagePage() {
  return (
    <PageLayout>
      {/* University Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        ABC College of Education
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Principal's Message Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          PRINCIPAL'S MESSAGE
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            {/* Principal Info Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start mb-8 gap-6">
              <img
                src="/principal.jpg"
                alt="Principal"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-900"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  Dr. Jane Smith
                </h2>
                <p className="text-lg text-gray-700 font-semibold">
                  Principal, College of Education
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-6">
              <p className="mb-6">Dear Students and Parents,</p>

              <p className="mb-6">
                It gives me immense pleasure to welcome you to our College of
                Education. As the Principal, I am proud to lead an institution
                that has been at the forefront of teacher education for decades.
              </p>

              <p className="mb-4">Our college stands committed to:</p>

              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>
                  Excellence in teacher education and professional development
                </li>
                <li>
                  Creating a nurturing environment for learning and growth
                </li>
                <li>Promoting innovative teaching methodologies</li>
                <li>Building strong ethical and moral values</li>
              </ul>

              <p className="mb-6">
                In today's rapidly evolving educational landscape, we strive to
                prepare our students not just as teachers, but as educational
                leaders who will shape the future of education.
              </p>

              <p className="mb-8">
                I encourage all students to take full advantage of our diverse
                learning opportunities and state-of-the-art facilities.
              </p>

              <div className="text-right mt-8">
                <p className="font-semibold text-blue-900">
                  Dr. Jane Smith
                  <br />
                  Principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
