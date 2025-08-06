"use client";

import { NewsItem } from "@/types/news";
import NewsTab from "./NewsTab";

// Sample data - replace with real data from your API
const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Building Confidence and Clarity: BHU Staff Development Programme",
    date: "Tue, 08 Jul 2025",
    readMoreLink: "/news/1",
    isNew: true,
  },
  {
    id: "2",
    title: "BHU Organizes Capacity Building Programme on Look i",
    date: "Mon, 02 Jun 2025",
    readMoreLink: "/news/2",
  },
  {
    id: "3",
    title: "Empowering Administration: BHU Hosts Capacity Building",
    date: "Mon, 05 May 2025",
    readMoreLink: "/news/3",
  },
  {
    id: "4",
    title: "BHU Organizes Capacity Building Programme on MS Excel",
    date: "Mon, 28 Apr 2025",
    readMoreLink: "/news/4",
  },
];

const noticesData: NewsItem[] = [
  {
    id: "1",
    title: "Application forms for M.Pharma (Ay) and B.Pharma (Ay)",
    date: "Thu, 24 Jul 2025",
    readMoreLink: "/notices/1",
    isNew: true,
  },
  {
    id: "2",
    title: "Public Notice",
    date: "Thu, 24 Jul 2025",
    readMoreLink: "/notices/2",
    isNew: true,
  },
  {
    id: "3",
    title: "List of selected candidates for the post of Senior Resident",
    date: "Tue, 22 Jul 2025",
    readMoreLink: "/notices/3",
    isNew: true,
  },
  {
    id: "4",
    title: "Notification regarding Prof. C.N.R. Rao Education Foundation",
    date: "Tue, 22 Jul 2025",
    readMoreLink: "/notices/4",
    isNew: true,
  },
];

const academicEventsData: NewsItem[] = [
  {
    id: "1",
    title: "Vastuvidya (Indian Science of Architecture)",
    date: "Wed, 04-Aug-2025",
    readMoreLink: "/events/1",
  },
  {
    id: "2",
    title: "भारतीय लोकविद्या (Bharatiya Lokvidya)",
    date: "Tue, 29-Aug-2025",
    readMoreLink: "/events/2",
  },
  {
    id: "3",
    title: "The Sixth 7-days Hands-on Laboratory Workshop for College Teachers",
    date: "Tue, 03-Sep-2025",
    readMoreLink: "/events/3",
  },
  {
    id: "4",
    title: "ENERGY CONCLAVE - 2025 on India's Energy Landscape",
    date: "Fri, 15-Sep-2025",
    readMoreLink: "/events/4",
  },
];

const tabs = [
  { id: "news", label: "News", data: newsData, viewAllLink: "/news" },
  {
    id: "notices",
    label: "Notices",
    data: noticesData,
    viewAllLink: "/notices",
  },
  {
    id: "events",
    label: "Academic Events",
    data: academicEventsData,
    viewAllLink: "/events",
  },
];

const NewsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabs.map((tab) => (
            <NewsTab
              key={tab.id}
              news={tab.data}
              title={tab.label}
              viewAllLink={tab.viewAllLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
