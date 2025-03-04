import teamImage1 from '@/assets/img/team/team_1.png';
import teamImage2 from '@/assets/img/team/team_2.png';
import teamImage3 from '@/assets/img/team/team_3.png';
import teamImage4 from '@/assets/img/team/team_4.png';
import teamImage5 from '@/assets/img/team/team_5.png';
import teamImage6 from '@/assets/img/team/team_6.png';
import teamImage7 from '@/assets/img/team/team_7.png';
import teamImage8 from '@/assets/img/team/team_8.png';
import teamImage9 from '@/assets/img/team/team_9.png';
import teamImage10 from '@/assets/img/team/team_10.png';
import teamImage11 from '@/assets/img/team/team_11.png';
import teamImage12 from '@/assets/img/team/team_12.png';
import teamImage13 from '@/assets/img/team/team_13.png';
import teamImage14 from '@/assets/img/team/team_14.png';
import teamImage15 from '@/assets/img/team/team_15.png';
import teamImage16 from '@/assets/img/team/team_16.png';
import teamImage17 from '@/assets/img/team/team_17.png';
import Integrity from '@/assets/img/team/Integrity.png';
import Excellence from '@/assets/img/team/Excellence.png';
import Collaboration from '@/assets/img/team/Collaboration.png';
import Innovation from '@/assets/img/team/Innovation.png';
import Commitment from '@/assets/img/team/Commitment.png';
import teamImage33 from '@/assets/img/team/team_33.png';
import teamImage34 from '@/assets/img/team/team_34.png';
import teamImage35 from '@/assets/img/team/team_35.png';
import teamImage36 from '@/assets/img/team/team_36.png';
import teamImage37 from '@/assets/img/team/team_37.png';
import teamImage38 from '@/assets/img/team/team_38.png';

const getTeamMembers = () => {
  const team = [
    {
      id: 1,
      name: 'VNDIES GRIFFITH',
      img: teamImage15,
      desig: 'Founder & CEO',
      duration: '1500',
    },
    {
      id: 2,
      name: 'MINIEDS GINDIE',
      img: teamImage16,
      desig: 'Founder & COO',
      duration: '1700',
    },
    {
      id: 3,
      name: 'ONIDES BNIDE',
      img: teamImage17,
      desig: 'Project Manager',
      duration: '1900',
    },
    {
      id: 4,
      name: 'QNIDE GRIFFITH',
      img: teamImage15,
      desig: 'Founder & CEO',
      duration: '2100',
    },
    {
      id: 5,
      name: 'GINGER YINESED',
      img: teamImage16,
      desig: 'Founder & CEO',
      duration: '2300',
    },
    {
      id: 6,
      name: 'UNIDSE GINDIE',
      img: teamImage17,
      desig: 'Founder & COO',
      duration: '2500',
    },
    {
      id: 7,
      name: 'MINID TUCKER',
      img: teamImage15,
      desig: 'Project Manager',
      duration: '2700',
    },
    {
      id: 8,
      name: 'SAVANS GRIFFITH',
      img: teamImage16,
      desig: 'Founder & CEO',
      duration: '2900',
    },
    {
      id: 9,
      name: 'D. Tasha',
      img: teamImage1,
      desig: 'Founder & CEO',
      duration: '1500',
    },
    {
      id: 10,
      name: 'R. Mckinney',
      img: teamImage2,
      desig: 'Project Manager',
      duration: '1800',
    },
    {
      id: 11,
      name: 'M. Lambert',
      img: teamImage3,
      desig: 'Senior Consultant',
      duration: '2100',
    },
    {
      id: 12,
      name: 'G. Thompson',
      img: teamImage4,
      desig: 'Junior Consultant',
      duration: '2400',
    },
    {
      id: 13,
      name: 'GINGER GRIFFITH',
      img: teamImage5,
      desig: 'Founder & CEO',
      duration: '1500',
    },
    {
      id: 14,
      name: 'SABRINA TUCKER',
      img: teamImage6,
      desig: 'Project Manager',
      duration: '1800',
    },
    {
      id: 15,
      name: 'WILLIAM GURRERO',
      img: teamImage7,
      desig: 'Web Developer',
      duration: '2100',
    },
    {
      id: 16,
      name: 'MARION GRAHAM',
      img: teamImage8,
      desig: 'UI/UX Designer',
      duration: '2300',
    },

    {
      id: 17,
      name: 'GINGER GRIFFITH',
      img: teamImage5,
      desig: 'Founder & CEO',
      duration: '2500',
    },
    {
      id: 18,
      name: 'SABRINA TUCKER',
      img: teamImage6,
      desig: 'Project Manager',
      duration: '2700',
    },
    {
      id: 19,
      name: 'GINGER GRIFFITH',
      img: teamImage15,
      desig: 'Founder & CEO',
      duration: '1500',
    },
    {
      id: 20,
      name: 'SUNDIE GINDIE',
      img: teamImage16,
      desig: 'Founder & COO',
      duration: '1700',
    },
    {
      id: 21,
      name: 'SABRINA TUCKER',
      img: teamImage17,
      desig: 'Project Manager',
      duration: '1900',
    },
    {
      id: 22,
      name: 'SABRINA TUCKER',
      img: teamImage9,
      desig: 'Project Manager',
      duration: '1500',
    },
    {
      id: 23,
      name: 'WILLIAM GURRERO',
      img: teamImage10,
      desig: 'Web Developer',
      duration: '1700',
    },
    {
      id: 24,
      name: 'MARION GRAHAM',
      img: teamImage11,
      desig: 'UI/UX Designer',
      duration: '1900',
    },

    {
      id: 25,
      name: 'GINGER GRIFFITH',
      img: teamImage12,
      desig: 'Founder & CEO',
      duration: '2100',
    },
    {
      id: 26,
      name: 'SUNDIE GINDIE',
      img: teamImage13,
      desig: 'Founder & COO',
      duration: '2300',
    },
    {
      id: 27,
      name: 'SABRINA TUCKER',
      img: teamImage14,
      desig: 'Project Manager',
      duration: '2500',
    },
    // core values
    {
      id: 28,
      name: 'Integrity',
      img: Integrity,
      desig:
        'We maintain professionalism and confidentiality, ensuring trust in our recruitment process.',
      duration: '2500',
    },
    {
      id: 29,
      name: 'Excellence',
      img: Excellence,
      desig:
        'We exceed expectations in sourcing, screening, and placing top talent.',
      duration: '2500',
    },
    {
      id: 30,
      name: 'Collaboration',
      img: Collaboration,
      desig:
        'We build strong partnerships based on respect, understanding, and shared goals.',
      duration: '2500',
    },
    {
      id: 31,
      name: 'Innovation',
      img: Innovation,
      desig:
        'We adapt to market needs, using advanced tools to connect top talent with organizations.',
      duration: '2500',
    },
    {
      id: 32,
      name: 'Commitment to Diversity',
      img: Commitment,
      desig:
        'We promote equal opportunities, fostering innovation through diverse teams.',
      duration: '2500',
    },
    // Our clients
    {
      id: 33,
      name: 'Large Enterprises and Corporations',
      img: teamImage33,
      desig:
        'We have been working with Tech Connect APAC for several years, and their ability to understand our needs at the executive level is unparalleled. They consistently bring forward candidates who not only possess the technical expertise but also align with our organizational culture.',
      duration: '2500',
      indSer: [
        'Technology & IT',
        'Financial Services',
        'Pharmaceuticals & Healthcare',
        'Manufacturing & Engineering',
        'Retail & Consumer Goods',
        'Energy & Utilities',
      ],
      desc: 'Tech Connect APAC has extensive experience working with established multinational corporations and large enterprises. These organizations require high-level executives and specialized professionals who can thrive in a fast-paced, competitive environment. We support these businesses in identifying and attracting top talent for key leadership and specialized roles, including C-suite executives, directors, and department heads.',
      intro: "We help corporations find top executives and specialists to stay competitive",
    },
    {
      id: 34,
      name: 'Growing Startups & Scaleups',
      img: teamImage34,
      desig:
        'As a rapidly growing SaaS startup, we needed to quickly hire senior leadership to support our international expansion. Tech Connect APAC not only provided us with candidates who fit our culture but also understood the unique challenges of scaling in a tech-driven environment.',
      duration: '2500',
      indSer: [
        'Tech Startups',
        'Fintech & Blockchain',
        'SaaS (Software as a Service)',
        'E-commerce & Online Services',
        'CleanTech & Sustainability',
      ],
      desc: 'Startups and fast-growing companies often face unique challenges when it comes to building high-performing teams. At Tech Connect APAC, we understand the agility and innovation needed in these environments. We help emerging companies find exceptional talent for leadership positions, technical roles, and other critical functions that are pivotal to their growth and success.',
      intro: "We recruit key leaders and tech talent for fast-growing startups",
    },
    {
      id: 35,
      name: 'Mid-Sized Companies and Organizations ',
      img: teamImage35,
      desig:
        'Tech Connect APAC helped us identify and recruit a key Operations Director who played a significant role in optimizing our processes. They took the time to understand our company culture and delivered candidates that fit seamlessly into our team.',
      duration: '2500',
      indSer: [
        'Manufacturing & Industrial',
        'Education & Training',
        'Professional Services',
        'Hospitality & Tourism',
        'Telecommunications',
      ],
      desc: 'For mid-sized companies aiming for growth, our Tech Connect APAC team provides end-to-end recruitment services to ensure you find candidates who can help you reach your next level. Whether you need key managers, functional experts, or directors, we help companies find professionals who can scale and lead their operations effectively.',
      intro: "We provide top managers and experts to drive business growth",

    },
    {
      id: 36,
      name: 'Non-Profit Organizations and Foundations',
      img: teamImage36,
      desig:
        'Tech Connect APAC took the time to understand the unique culture of our non-profit and presented us with candidates who were not only experienced but deeply committed to our cause. Their ability to understand the non-profit sector was crucial to our hiring success.',
      duration: '2500',
      indSer: [
        'Education & Academia',
        'Healthcare & Public Health',
        'Environmental NGOs',
        'Philanthropy & Foundations',
        'Social Services',
      ],
      desc: "We also work closely with non-profit organizations, helping them identify leaders who can drive their mission forward. Whether it's an Executive Director, Program Manager, or Fundraising Lead, Tech Connect APAC partners with nonprofits to find individuals who are passionate about social impact and have the leadership skills to bring about change.",
      intro: "We connect mission-driven leaders with impactful organizations",

    },
    {
      id: 37,
      name: 'Government and Public Sector Organizations',
      img: teamImage37,
      desig:
        'Tech Connect APAC team helped us identify senior leaders with a unique mix of public sector experience and innovative thinking. Their ability to deliver on-time and with high-quality candidates made a significant difference for our public policy initiatives.',
      duration: '2500',
      indSer: [
        'Public Administration',
        'Governmental Agencies',
        'Regulatory Bodies',
        'Public Health & Safety',
        'Urban Planning & Development',
      ],
      desc: 'At Tech Connect APAC, we also provide recruitment services for government and public sector organizations. These organizations require professionals with both technical expertise and a deep understanding of public policy and governance. We help public institutions fill leadership positions, specialized roles, and advisory roles that require a combination of strategic vision and operational efficiency.',
      intro: "We source top talent for government and policy-driven roles",

    },
    {
      id: 38,
      name: 'Family-Owned Businesses and Private Equity Firms',
      img: teamImage38,
      desig:
        'We were looking for an experienced CFO to help drive the financial strategy of our private equity portfolio company. Tech Connect APAC not only helped us find the right candidate but also supported us throughout the onboarding process to ensure smooth integration.',
      duration: '2500',
      indSer: [
        'Family-Owned Businesses',
        'Private Equity Portfolio Companies',
        'Mergers & Acquisitions',
        'Healthcare & Medical Practices',
      ],
      desc: 'Tech Connect APAC also serves family-owned businesses and private equity firms that require strong leadership to take their operations to the next level. Whether for succession planning, new investments, or business transformations, we help these companies find leaders who can balance both business acumen and cultural alignment.',
      intro: "We secure executives for growth and succession planning",

    },
  ];
  return team;
};

export default getTeamMembers;
