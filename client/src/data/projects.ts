import { Project } from "@shared/types";

export const projects: Project[] = [
  {
    title: "Impact Volleyball Training",
    tags: [
      { name: "Webflow Development", bgColor: "bg-blue-400", textColor: "text-blue-900" },
      { name: "Memberstack", bgColor: "bg-yellow-400", textColor: "text-yellow-900" },
      { name: "Airtable", bgColor: "bg-pink-400", textColor: "text-pink-900" }
    ],
    description: "I built Impact Volleyball's online home and platform, which allows volleyball athletes and enthusiasts to register for their online physical training programs, along with the promotion of their upcoming events and camps.",
    imageUrl: "/images/project1.png",
    features: [
      {
        title: "Memberstack Integration",
        description: "Impact Volleyball's online training platform is built using Memberstack, allowing athletes to register online and view the individual programs on a mobile-friendly web-based platform.",
        color: "blue"
      },
      {
        title: "Webflow CMS-Driven Programs",
        description: "The programs are created and updated using an easy-to-use Webflow CMS structure that allows the Impact Volleyball team to quickly build out new programs.",
        color: "yellow"
      }
    ]
  },
  {
    title: "Apparel Decoration Production Management",
    tags: [
      { name: "Airtable", bgColor: "bg-blue-400", textColor: "text-blue-900" },
      { name: "SendGrid", bgColor: "bg-yellow-400", textColor: "text-yellow-900" },
      { name: "Twilio", bgColor: "bg-purple-400", textColor: "text-purple-900" },
      { name: "Slack", bgColor: "bg-red-400", textColor: "text-red-900" },
      { name: "Google Drive", bgColor: "bg-blue-500", textColor: "text-white" },
      { name: "Zapier", bgColor: "bg-orange-400", textColor: "text-orange-900" }
    ],
    description: "Due to a lack of available software options that were sufficient for our needs, I built a custom order management system for Passion Sports. The initial version launched as a basic Airtable system with simple Slack integrations in April 2017. I completely rebuilt the system from scratch in February 2019 to incorporate much more advanced Zapier integrations and provide more automations for the team.",
    imageUrl: "/images/project2.png",
    features: [
      {
        title: "Airtable Production Base",
        description: "The entire system is based around an Airtable base that houses every order's production requirements, artwork files, due dates, product statuses and order artwork proofs.",
        color: "blue"
      },
      {
        title: "Internal Team Notification System",
        description: "At various stages in the order process, Slack notifications are sent to individuals and channels to keep everyone on the same page with any potential delays or bottlenecks.",
        color: "yellow"
      },
      {
        title: "Custom Shipment Notification System",
        description: "Upon order shipment, the system is designed to create proper tracking URLs for all of the carriers that we use (Canada Post, DHL, UPS, Fedex, and local couriers). From these URLs, a custom shipment tracking email is sent to the customer's rep (via SendGrid), the tracking URL is posted to the order's thread in Slack, and text notifications are sent to the rep.",
        color: "pink"
      }
    ]
  },
  {
    title: "PulpCulture",
    tags: [
      { name: "Web Design", bgColor: "bg-blue-400", textColor: "text-blue-900" },
      { name: "Vinoshipper", bgColor: "bg-yellow-400", textColor: "text-yellow-900" },
      { name: "Webflow Development", bgColor: "bg-pink-400", textColor: "text-pink-900" },
      { name: "Spline 3D", bgColor: "bg-orange-400", textColor: "text-orange-900" }
    ],
    description: "One of my favourite companies to work with and a project that really pushed myself into a couple of new spaces (Spline 3D and custom ecommerce integrations), the PulpCulture website was a great challenge for me.",
    imageUrl: "/images/project3.png",
    features: [
      {
        title: "Ecommerce Integration",
        description: "Integrated each product page with their custom alcohol beverage e-commerce integration, Vinoshipper, this allows their marketing team to quickly add products to their website and handle checkouts through their preferred platform.",
        color: "blue"
      },
      {
        title: "Spline 3D Models",
        description: "Created 3D models of each of the cans from PulpCulture's main product line to be integrated into the website.",
        color: "yellow"
      },
      {
        title: "Custom Landing Page System",
        description: "More recently, we've added a custom landing page system for their marketing team to quickly roll out landing pages for new campaigns and products.",
        color: "pink"
      }
    ]
  },
  {
    title: "Fintech Dashboard",
    tags: [
      { name: "React", bgColor: "bg-blue-400", textColor: "text-blue-900" },
      { name: "TypeScript", bgColor: "bg-blue-600", textColor: "text-white" },
      { name: "Chart.js", bgColor: "bg-green-400", textColor: "text-green-900" },
      { name: "TailwindCSS", bgColor: "bg-teal-400", textColor: "text-teal-900" }
    ],
    description: "An advanced financial dashboard allowing users to track investments, monitor market trends, and manage their portfolio all in one place. The project required complex data visualization and real-time updates.",
    imageUrl: "/images/project4.png",
    features: [
      {
        title: "Real-time Data Visualization",
        description: "Implemented interactive charts and graphs using Chart.js to display complex financial data in an intuitive and user-friendly way.",
        color: "blue"
      },
      {
        title: "Portfolio Management",
        description: "Created a comprehensive system for users to track and manage their investment portfolio with real-time updates and historical performance analysis.",
        color: "yellow"
      },
      {
        title: "Market Analysis Tools",
        description: "Developed advanced tools for technical analysis, including moving averages, RSI indicators, and custom alert systems for price movements.",
        color: "pink"
      }
    ]
  },
  {
    title: "E-Learning Platform",
    tags: [
      { name: "Next.js", bgColor: "bg-black", textColor: "text-white" },
      { name: "Firebase", bgColor: "bg-yellow-500", textColor: "text-white" },
      { name: "Stripe", bgColor: "bg-purple-500", textColor: "text-white" },
      { name: "Framer Motion", bgColor: "bg-pink-500", textColor: "text-white" }
    ],
    description: "A comprehensive online learning platform with course creation tools, student progress tracking, and integrated payment processing for instructors to monetize their educational content.",
    imageUrl: "/images/project5.png",
    features: [
      {
        title: "Interactive Course Builder",
        description: "Created an intuitive drag-and-drop interface for instructors to design courses with videos, quizzes, and assignments without requiring technical knowledge.",
        color: "blue"
      },
      {
        title: "Student Analytics Dashboard",
        description: "Developed detailed analytics for both students and instructors to track progress, identify learning patterns, and optimize the educational experience.",
        color: "yellow"
      },
      {
        title: "Seamless Payment Integration",
        description: "Implemented Stripe for handling course purchases, subscription plans, and revenue sharing between the platform and instructors.",
        color: "pink"
      }
    ]
  }
];
