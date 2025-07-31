import React from "react";

const AboutSection = () => {
  return (
    <>
      {/* University Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        KNB College of Education
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans">
        {/* Objectives Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          OBJECTIVES OF THE COLLEGE
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            {/* Main Objectives List */}
            <ul className="list-none ml-0 mb-6 pl-0">
              <li className="leading-relaxed mb-3 pl-6 relative text-justify">
                <span className="absolute left-0 font-bold">(i)</span>
                To promote the study of modern educational theories and
                pedagogical practices as a means of preserving and popularizing
                for the benefit of the students in particular and of the society
                at large in general, the best thought and culture of
                contemporary education and all that is good and great in the
                field of teacher education;
              </li>
              <li className="leading-relaxed mb-3 pl-6 relative text-justify">
                <span className="absolute left-0 font-bold">(ii)</span>
                to promote learning and research generally in Education and all
                branches of teaching methodologies;
              </li>
              <li className="leading-relaxed mb-3 pl-6 relative text-justify">
                <span className="absolute left-0 font-bold">(iii)</span>
                to advance and diffuse such educational, technical and
                professional knowledge, combined with the necessary practical
                training as is best calculated to help in promoting quality
                education and in developing the human resources of the country;
                and
              </li>
              <li className="leading-relaxed mb-3 pl-6 relative text-justify">
                <span className="absolute left-0 font-bold">(iv)</span>
                to promote the building up of character in youth by values and
                ethics as an integral part of education.
              </li>
            </ul>

            {/* College Profile */}
            <h2 className="text-blue-900 text-3xl mb-6 font-bold">
              College Profile
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-justify">
              KNB College of Education is a premier institution dedicated to
              nurturing future educators and leaders in the field of education.
              Established with a vision to provide quality teacher education,
              our college has consistently maintained high standards of academic
              excellence and professional development.
            </p>

            {/* Our Vision */}
            <h3 className="text-blue-900 text-xl my-6 font-bold">Our Vision</h3>
            <p className="text-gray-800 leading-relaxed mb-4 text-justify">
              To be a center of excellence in teacher education, producing
              competent and committed teachers who will shape the future
              generations with values, knowledge, and skills.
            </p>

            {/* Our Mission */}
            <h3 className="text-blue-900 text-xl my-6 font-bold">
              Our Mission
            </h3>
            <ul className="list-disc ml-6 mb-6">
              <li className="text-gray-800 leading-relaxed mb-2">
                To provide quality teacher education that meets contemporary
                educational needs
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                To develop professional competencies among prospective teachers
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                To promote research and innovation in teaching-learning
                processes
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                To inculcate moral and ethical values among future teachers
              </li>
            </ul>

            {/* Infrastructure & Facilities */}
            <h3 className="text-blue-900 text-xl my-6 font-bold">
              Infrastructure & Facilities
            </h3>
            <p className="text-gray-800 leading-relaxed mb-4 text-justify">
              Our campus is equipped with state-of-the-art facilities including:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li className="text-gray-800 leading-relaxed mb-2">
                Modern Classrooms with Smart Boards
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                Well-equipped Science and Computer Laboratories
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                Rich Library with Digital Resources
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                Spacious Playground and Sports Facilities
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                Psychology Lab and Educational Technology Lab
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                Conference Hall and Seminar Rooms
              </li>
            </ul>

            {/* Programs Offered */}
            <h3 className="text-blue-900 text-xl my-6 font-bold">
              Programs Offered
            </h3>
            <ul className="list-disc ml-6 mb-6">
              <li className="text-gray-800 leading-relaxed mb-2">
                B.Ed. (Bachelor of Education)
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                M.Ed. (Master of Education)
              </li>
              <li className="text-gray-800 leading-relaxed mb-2">
                D.El.Ed. (Diploma in Elementary Education)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
