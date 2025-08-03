"use client";

import Image from "next/image";
import PageLayout from "./layout/PageLayout";
import NewsSection from "./news/NewsSection";
import AlertBanner from "./layout/AlertBanner";
import nirf_logo from "@/public/web-logos/nirf-logo.png";
import swachh_bharat_logo from "@/public/web-logos/swachh-bharat-logo.png";
import digital_india_logo from "@/public/web-logos/digital-india-logo.png";
import india_gov_logo from "@/public/web-logos/india-gov-logo.png";

const newsItems = [
  {
    id: 1,
    title: "Building Confidence and Clarity: BHU Staff Development...",
    date: "Tue, 08 Jul 2025",
    type: "news",
  },
  {
    id: 2,
    title: "BHU Organizes Capacity Building Programme on Look i...",
    date: "Mon, 02 Jun 2025",
    type: "news",
  },
  {
    id: 3,
    title: "Empowering Administration: BHU Hosts Capacity Build...",
    date: "Mon, 05 May 2025",
    type: "news",
  },
  {
    id: 4,
    title: "BHU Organizes Capacity Building Programme on MS Ex...",
    date: "Mon, 28 Apr 2025",
    type: "news",
  },
  {
    id: 5,
    title: "Capacity Building Programme on GeM Buyer at BHU –...",
    date: "Mon, 21 Apr 2025",
    type: "news",
  },
  {
    id: 6,
    title: "Maxminimalist 1",
    date: "Fri, 08 Nov 2025",
    type: "news",
  },
];

const noticeItems = [
  {
    id: 1,
    title: "Advertisement for the Post of Junior Resident - Not Lin...",
    date: "Sat, 26 Jul 2025",
    isNew: true,
  },
  {
    id: 2,
    title: "EcoMush 2025 – A National Hands-On Workshop on S...",
    date: "Sat, 26 Jul 2025",
    isNew: true,
  },
  {
    id: 3,
    title: "Application forms for M.Pharma (Ay) and B.Pharma (Ay...",
    date: "Thu, 24 Jul 2025",
    isNew: true,
  },
  {
    id: 4,
    title: "Public Notice",
    date: "Thu, 24 Jul 2025",
    isNew: true,
  },
  {
    id: 5,
    title: "List of selected candidates for the post of Senior Resid...",
    date: "Tue, 22 Jul 2025",
  },
  {
    id: 6,
    title: "Notification regarding Prof. C.N.R. Rao Education Foun...",
    date: "Tue, 22 Jul 2025",
  },
];

const academicEvents = [
  {
    id: 1,
    title: "Vāstuvidyā (Indian Science of Architecture)",
    date: "Wed, 04-Aug-2025",
    status: "upcoming",
  },
  {
    id: 2,
    title: "NATIONAL WORKSHOP ON ABCD OF CRICKET 2025",
    subtitle:
      "In Association With Mahila Varanasi Cricket Association & Litsa Sports",
    date: "Fri, 05-Aug-2025",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Dharma Jivam me Sanatan Raag",
    date: "Wed, 11-Aug-2025",
    status: "upcoming",
  },
  {
    id: 4,
    title: "भारतीय लोकविद्या (Bhartiya Lokvidya)",
    date: "Tue, 29-Aug-2025",
    status: "upcoming",
  },
  {
    id: 5,
    title: "The Sixth 7-days Hands-on Laboratory Workshop for",
    date: "Wed, 03-Sep-2025",
    status: "concluded",
  },
];

const storiesItems = [
  {
    id: 1,
    title: "Institutions of Eminence (IoE) Scheme",
    date: "2020-05-23 13:06:24",
    description: "Dr. Sarvepalli Radhakrishnan Internship 2025-26 [",
    image: "/ioe-scheme.jpg",
  },
  {
    id: 2,
    title: "Gender Advancement for Transforming ...",
    date: "2023-02-16 15:03:49",
    image: "/gender-advancement.jpg",
  },
  {
    id: 3,
    title: "150 Years of Celebrating the Mahatma",
    date: "2019-11-22 15:13:19",
    description:
      "The President of India launches the logo and web portal for commemoration...",
    image: "/mahatma-150.jpg",
  },
  {
    id: 4,
    title: "GOAL (Going Online As Leaders) Progr...",
    date: "2020-06-01 17:11:16",
    description:
      "Ministry Of Tribal Affairs And Facebook India Pvt. Ltd Have Launched A Digital Enabled Mentorship...",
    image: "/goal-program.jpg",
  },
  {
    id: 5,
    title: "Research Excellence Initiative",
    date: "2024-03-15 14:30:45",
    description:
      "BHU launches comprehensive research excellence program to foster innovation and academic advancement across all disciplines...",
    image: "/research-excellence.jpg",
  },
];

const interestItems = [
  {
    id: 1,
    title: "Swayam@BHU",
    date: "2024-06-07 10:42:59",
    description:
      "Banaras Hindu University (BHU) is working on two-pronged strategy related with SWAYAM, i.e., ...",
    image: "/swayam-bhu.jpg",
  },
  {
    id: 2,
    title: "INNOVATION@BHU",
    date: "2020-05-23 18:10:43",
    image: "/innovation-bhu.jpg",
  },
  {
    id: 3,
    title: "How to use Eduroam",
    date: "2021-02-08 15:42:03",
    description: "Click here for details...",
    image: "/eduroam.jpg",
  },
  {
    id: 4,
    title: "Online OPD booking",
    date: "2022-12-02 11:21:51",
    description: "For Online OPD booking (SS Hospital BHU) Click ...",
    image: "/opd-booking.jpg",
  },
];

const moreInterestItems = [
  {
    id: 1,
    title: "Bharat Kala Bhavan",
    date: "2019-11-22 15:46:44",
    description:
      "The nucleus of Bharat Kala Bhavan evolved in January 1920. Its first H...",
    image: "/bharat-kala-bhavan.jpg",
  },
  {
    id: 2,
    title: "Latest Update COVID-19 INDIA",
    date: "2020-05-23 13:10:08",
    description: "Click on the link for latest updates https://...",
    image: "/covid-update.jpg",
  },
  {
    id: 3,
    title: "Malviya Heritage Complex",
    date: "2019-11-22 15:49:53",
    description:
      "Malaviya Bhavan, the former residence of the founder of the university...",
    image: "/malviya-heritage.jpg",
  },
  {
    id: 4,
    title: "Vishwanath Temple",
    date: "2019-11-22 15:53:42",
    description: "Shri Vishwanath Mandir also known as Vishwanath Mandir, ...",
    image: "/vishwanath-temple.jpg",
  },
];

const stats = [
  { value: "1916", label: "Inception", icon: "calendar" },
  { value: "5", label: "Institutes", icon: "building" },
  { value: "16", label: "Faculties", icon: "user" },
  { value: "135", label: "Departments", icon: "institution" },
];

const nationalPortals = [
  { name: "NIRF", logo: nirf_logo },
  { name: "Swachh Bharat", logo: swachh_bharat_logo },
  { name: "Digital India", logo: digital_india_logo },
  { name: "India.gov.in", logo: india_gov_logo },
];

const HomePage = () => {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* University Header */}
        <section className="relative h-[580px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative h-full">
            {/* Replace with your actual image */}
            <Image
              src="/college-banner.jpg"
              alt="College Campus"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Our College
              </h1>
              <p className="text-xl mb-8">
                Shaping Futures Through Quality Education
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* Alert Banner */}
        <AlertBanner />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white py-5">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              ABC Universitys
            </h1>
            <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              ABC University is an internationally reputed temple of learning,
              situated in the holy city of Varanasi. This creative and
              innovative university was founded by the great nationalist leader,
              Pandit Madan Mohan Malaviya, in 1916, through close cooperation
              with great personalities like Dr Annie Besant, who viewed it as
              the University of India. Banaras Hindu University was established
              by the Parliamentary legislation-ABC. Act 1915.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#1e3a8a] text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 border-2 border-dotted border-white/50 rounded-full flex items-center justify-center">
                    {stat.icon === "calendar" && (
                      <div className="text-2xl">📅</div>
                    )}
                    {stat.icon === "building" && (
                      <div className="text-2xl">🏢</div>
                    )}
                    {stat.icon === "user" && <div className="text-2xl">👥</div>}
                    {stat.icon === "institution" && (
                      <div className="text-2xl">🏛️</div>
                    )}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News, Notices, and Academic Events Section */}
        <NewsSection />

        {/* Stories From The Ground */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
              Stories From The Ground
            </h2>
            <div className="relative">
              <div
                className="overflow-x-auto scrollbar-hide"
                id="stories-container"
              >
                <div
                  className="flex gap-6 pb-4"
                  style={{ width: "max-content" }}
                >
                  {storiesItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-80"
                    >
                      <div className="h-48 bg-gray-200 relative">
                        <Image
                          src={item.image || "/placeholder-story.jpg"}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-2">
                          {item.date}
                        </p>
                        {item.description && (
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  <button
                    className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      const container =
                        document.getElementById("stories-container");
                      container?.scrollBy({ left: -320, behavior: "smooth" });
                    }}
                  >
                    ‹
                  </button>
                  <button
                    className="w-10 h-10 bg-gray-300 text-gray-600 rounded flex items-center justify-center hover:bg-gray-400 transition-colors"
                    onClick={() => {
                      const container =
                        document.getElementById("stories-container");
                      container?.scrollBy({ left: 320, behavior: "smooth" });
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BHU Documentary */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
                <Image
                  src="/bhu-documentary-thumbnail.jpg"
                  alt="BHU Documentary 2019-2020"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-bold">
                    BHU Documentary 2019-2020
                  </h3>
                  <div className="flex gap-4 mt-2 text-sm">
                    <button className="hover:underline">Watch Later</button>
                    <button className="hover:underline">Share</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Tweets by VC office BHU
              </a>
            </div>
          </div>
        </section>

        {/* You May Be Interested In */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
              You May Be Interested In...
            </h2>
            <div className="relative">
              <div
                className="overflow-x-auto scrollbar-hide"
                id="interest-container"
              >
                <div
                  className="flex gap-6 pb-4"
                  style={{ width: "max-content" }}
                >
                  {[...interestItems, ...moreInterestItems].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-80"
                    >
                      <div className="h-32 bg-gray-200 relative">
                        <Image
                          src={item.image || "/placeholder-interest.jpg"}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-2">
                          {item.date}
                        </p>
                        {item.description && (
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  <button
                    className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      const container =
                        document.getElementById("interest-container");
                      container?.scrollBy({ left: -320, behavior: "smooth" });
                    }}
                  >
                    ‹
                  </button>
                  <button
                    className="w-10 h-10 bg-gray-300 text-gray-600 rounded flex items-center justify-center hover:bg-gray-400 transition-colors"
                    onClick={() => {
                      const container =
                        document.getElementById("interest-container");
                      container?.scrollBy({ left: 320, behavior: "smooth" });
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* National Portal Links */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              National Portal Links
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {nationalPortals.map((portal, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full shadow-lg p-8 flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="text-center">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <Image
                        src={portal.logo || "/placeholder-logo.png"}
                        alt={portal.name}
                        width={180}
                        height={60}
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HomePage;
