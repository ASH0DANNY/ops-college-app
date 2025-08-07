import { MenuItem } from "@/types/navigation";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About Us",
    submenu: [
      {
        id: "about-college",
        title: "About College",
        path: "/about",
      },
      {
        id: "vision-mission",
        title: "Vision & Mission",
        path: "/vision-mission",
      },
      {
        id: "principal-message",
        title: "Principal Message",
        path: "/principal-message",
      },
    ],
  },
  {
    id: "admission",
    title: "Admission",
    path: "/admission",
  },
  {
    id: "academics",
    title: "Academics",
    submenu: [
      {
        id: "courses",
        title: "Courses",
        path: "/courses",
      },
      {
        id: "syllabus",
        title: "Syllabus",
        path: "/syllabus",
      },
      {
        id: "faculty",
        title: "Faculty",
        path: "/faculty",
      },
      {
        id: "academic-calendar",
        title: "Academic Calendar",
        path: "/academic-calendar",
      },
    ],
  },
  {
    id: "facilities",
    title: "Facilities",
    submenu: [
      {
        id: "library",
        title: "Library",
        path: "/facilities/library",
      },
      {
        id: "laboratories",
        title: "Laboratories",
        path: "/facilities/laboratories",
      },
      {
        id: "sports",
        title: "Sports",
        path: "/facilities/sports",
      },
    ],
  },

  {
    id: "activities",
    title: "Activities",
    submenu: [
      {
        id: "achivement",
        title: "Achiviment",
        path: "/activities/achivement",
      },
      {
        id: "nss",
        title: "NSS",
        path: "/activities/nss",
      },
      {
        id: "seminar-webinar",
        title: "Seminar & Webinar",
        path: "/activities/seminar-webinar",
      },
      {
        id: "news-events",
        title: "News & Events",
        path: "/activities/news-events",
      },
      {
        id: "jayanti-celebrations",
        title: "Jayanti Celebrations",
        path: "/activities/jayanti-celebrations",
      },
      {
        id: "other-celebrations",
        title: "Other Celebrations",
        path: "/activities/other-celebrations",
      },
      {
        id: "college-magazine",
        title: "College Magazine",
        path: "/activities/college-magazine",
      },
      {
        id: "program-report",
        title: "Program Report",
        path: "/activities/program-report",
      },
    ],
  },
  {
    id: "gallery",
    title: "Gallery",
    path: "/gallery",
  },
  {
    id: "alumni",
    title: "Alumni",
    path: "/alumni",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];
