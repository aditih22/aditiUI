import { Star, Award, ShieldCheck, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}



export const experiences: Experience[] = [
  {
    company: "TCS, Noida",
    duration: "Jan 2021 - Feb 2023",
    role: "UI/UX Designer",
    desc: "Designed and improved e-commerce experiences for Bed Bath & Beyond",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "TCS, Noida",
    duration: "Feb 2023 - March 2025",
    role: "UI/UX Designer",
    desc: "Worked on PepsiCo platforms, creating dashboards and prototypes for data visualization",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "TCS, Noida",
    duration: "April 2025",
    role: "Lead UX Designer",
    desc: "Managing a small team of designers and mentoring junior UI/UX professionals.",
    dotColor: "bg-[#FD853A]",
  },
];

export const buttons: string[] = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Star,
    name: "4.9 Average Rating",
  },
  {
    icon: Award,
    name: "25+ Winning Awards",
  },
  {
    icon: ShieldCheck,
    name: "Certified Product Design",
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Express",
];

export const blogs: Blog[] = [
  {
    image: "/Rectangle 6.svg",
    button: "Read More",
    name: "Mahesh Pokale",
    date: "10 Nov, 2024",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
  },
  {
    image: "/Frame 60.svg",
    button: "Explore",
    name: "Sarah Johnson",
    date: "12 Dec, 2024",
    title: "Mastering Tailwind: Tips for Clean UI Development",
  },
  {
    image: "/Rectangle 6 (1).svg",
    button: "Check Now",
    name: "John Doe",
    date: "1 Jan, 2025",
    title: "Modern Web Development in 2025",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/proj1.png",
    title: "CEP Website – IIT Patna",
    href: "/cep-website-iit-patna",
    desc: "Designed and developed the official Continuing Education Programme (CEP) website for IIT Patna, providing a centralized platform for professionals to explore upcoming courses and training programs.",
  },
  {
    image: "/proj2.png",
    title: "Queue Management",
    href: "/queue-management",
    desc: "Created a digital queue management app that provides real-time wait-time updates, food-ready notifications, and group ordering features to streamline cafeteria experiences.",
  },
  {
    image: "/proj3.png",
    title: "Designing Registry",
    href: "/designing-registry",
    desc: "Built a seamless digital registry experience for Bed Bath & Beyond, allowing users to create, manage, and share personalized gift registries with smooth product browsing and real-time updates.",
  },
  {
    image: "/proj4.png",
    title: "Celestial Guidance",
    href: "https://github.com/aditih22/Celestial_Guidance",
    desc: "Designed a modern astrology consultation app inspired by AstroTalk, with features for easy user onboarding, personalized horoscopes, and astrologer discovery.",
  },
];


export const reviews: Review[] = [
  {
    name: "Mahesh Pokale",
    role: "Web Designer",
    rating: 5,
    text: "Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    rating: 4,
    text: "Excellent work! Very professional and meets deadlines consistently. Highly recommended for design and development projects.",
  },
  {
    name: "April Prisler",
    role: "UI/UX Lead",
    rating: 5,
    text: "Top quality design and coding. Strong attention to detail and highly collaborative throughout the project lifecycle.",
  },
  {
    name: "Aryan Sharma",
    role: "Software Engineer",
    rating: 4,
    text: "Innovative approach, clean design, and prompt delivery. Will work together again for sure!",
  },
];

export const cardData: CardData[] = [
  { title: "Product Design", imageSrc: "/Rectangle 7.svg" },
  { title: "User Research", imageSrc: "/Rectangle 7.svg" },
  { title: "Usability Testing", imageSrc: "/Rectangle 7.svg" },
  { title: "Visual Design", imageSrc: "/Rectangle 7.svg" },
  { title: "Interaction Design", imageSrc: "/Rectangle 7.svg" },
  { title: "Brand Identity", imageSrc: "/Rectangle 7.svg" },
];
