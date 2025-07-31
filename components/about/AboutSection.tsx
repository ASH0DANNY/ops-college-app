import React from "react";

const AboutSection = () => {
  return (
    <>
      {/* University Header */}
      <div className="w-1/2 bg-gray-300 text-blue-900 my-10 px-8 py-4 text-center rounded-r-full text-2xl font-bold">
        ABC College of Education
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 font-sans mb-10">
        {/* Objectives Banner */}
        <div className="bg-blue-900 text-white px-8 py-3 text-center m-0 text-xl font-bold tracking-wide">
          OBJECTIVES OF THE COLLEGE
        </div>

        {/* Content Box */}
        <div className="bg-green-50 border-2 border-blue-900 p-8 m-0">
          <div className="text-gray-800">
            {/* Main Objectives List */}
            <p className="list-none ml-0 mb-6 pl-0">
              In pursuance with its motto, KN BAKSHI COLLEGE OF EDUCATION has
              been established by KARMATAND FOUNDATION to provide high quality
              teacher education with latest teaching methods, techniques and
              infrastructure. A team of highly qualiﬁed professionals,
              educationists, bureaucrats, philanthropists and social activists
              have worked hard to give their vision a shape so that it becomes a
              model for others to follow in the field of setting up high
              standards of institutions through tireless activism. We today need
              high quality infrastructure in remote areas of the country so that
              decentralisation and balanced development is achieved across the
              nation. This can only be done by taking up projects which are in
              consonance with the needs of balanced growth so that our people
              living in the interiors of the country are not deprived of their
              right to avail equal opportunity and high quality facilities. We
              believe that this kind of efforts will go a long way in empowering
              our people through education and knowledge which may liberate them
              from all kinds of bondage in real sense.
            </p>
            <p className="list-none ml-0 mb-6 pl-0">
              K.N.Bakshi college was started with an aim to provide facility of
              higher education within the reach of every section of the society
              by Charging a reasonable fees and at the same time providing
              quality education with all required facilities . The College would
              provide courses sanctioned by the Department of higher Education,
              state Government and Vinoba Bhave University , Hazaribag. The
              college aims to train the students to become worthy citizens of
              India by inculcating the sense of duty & Discipline by Imparting
              scientific, social, moral and Physical Education under the
              Principal of secularism and nationalism.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
