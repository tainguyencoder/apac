import serviceImage1 from "@/assets/img/service/service__1.png";
import serviceImage2 from "@/assets/img/service/service__2.png";
import serviceImage3 from "@/assets/img/service/service__3.png";
import serviceImage4 from "@/assets/img/service/service__4.png";
import serviceImage6 from "@/assets/img/service/service__6.png";
import serviceImage7 from "@/assets/img/service/service__7.png";
import serviceImage8 from "@/assets/img/service/service__8.png";
import serviceImage9 from "@/assets/img/service/service__9.png";
import serviceImage10 from "@/assets/img/service/service__10.png";
import serviceImage11 from "@/assets/img/service/service__11.png";
import serviceImage12 from "@/assets/img/service/service__12.png";
import serviceImage13 from "@/assets/img/service/service__13.png";
import serviceImage14 from "@/assets/img/service/service__14.png";
import serviceImage15 from "@/assets/img/service/service__15.png";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage9 from "@/assets/img/project/project__9.png";
import projectImage10 from "@/assets/img/project/project__10.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
const getAllServices = () => {
  const services = [
    {
      id: 1,
      title: "Executive Search (C-Suite and Senior Leadership)",
      desc: "We specialize in identifying top executives and senior leaders who drive business success.",
      detailsImg: projectImage9,
      img: serviceImage6,
      category: "Strategic Planning",
      duration: "1500",
      intro: "Our Executive Search service focuses on recruiting C-suite executives, directors, and senior leaders. Using a strategic, research-driven approach, we identify high-potential candidates who align with your business vision.",
      position: [
        "C-suite Executives (CEO, CFO, CTO, etc.)",
        "Board Members and Advisors",
        "Senior Leadership (VPs, Directors, Heads of Departments)",
        "Industry-Specific Expertise"
      ],
      wwd: [
        "Deep industry research to identify and target top talent",
        "Direct outreach to high-level candidates, including passive talent",
        "Comprehensive assessment of leadership capabilities and cultural fit"
      ],
    },
    {
      id: 2,
      title: "Talent Acquisition for Mid-to-Senior Roles",
      desc: "We connect businesses with skilled professionals for mid-to-senior-level positions across industries.",
      detailsImg: projectImage10,
      img: serviceImage7,
      category: "Talent Acquisition",
      duration: "1600",
      intro: "Our Talent Acquisition service helps companies recruit mid-to-senior-level professionals across various functional areas, including operations, marketing, sales, finance, and technology.",
      position: [
        "Managers & Department Heads",
        "Functional Experts and Specialists",
        "Project Managers & Program Leaders",
        "Business Development & Sales Leaders"
      ],
      wwd: [
        "Conduct in-depth screening and interviews to ensure technical and leadership competence",
        "Provide candidates who align with both role requirements and company culture",
        "Streamline the hiring process to deliver top candidates faster"
      ],
    },
    {
      id: 3,
      title: "Talent Pool Building and Market Mapping",
      desc: "We help businesses build a strong pipeline of qualified candidates for future hiring needs.",
      detailsImg: projectImage11,
      img: serviceImage8,
      category: "Workforce Planning",
      duration: "1700",
      intro: "Our Talent Pool Building and Market Mapping services provide a proactive approach to recruitment by identifying top talent before roles become available, ensuring companies stay ahead in hiring.",
      // position: [],
      wwd: [
        "Map the market for talent specific to your industry and location",
        "Build a strong network of pre-screened candidates ready to engage",
        "Maintain an ongoing pipeline of talent for future hiring needs"
      ],
    },
    {
      id: 4,
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "We offer scalable RPO solutions to manage all or part of your recruitment functions.",
      detailsImg: projectImage12,
      img: serviceImage8,
      category: "HR Solutions",
      duration: "1800",
      intro: "Our RPO service allows businesses to outsource recruitment operations, providing dedicated teams and tailored hiring strategies to optimize talent acquisition.",
      wwd: [
        "Manage the entire recruitment process from sourcing to onboarding",
        "Provide dedicated recruitment teams to support your hiring goals",
        "Develop and implement customized recruitment strategies aligned with business objectives"
      ],
    },
    {
      id: 5,
      title: "Diversity and Inclusion Recruitment",
      desc: "We help businesses create diverse, inclusive teams through targeted recruitment strategies.",
      detailsImg: projectImage13,
      img: serviceImage6,
      category: "Diversity Hiring",
      duration: "1900",
      intro: "Our Diversity and Inclusion Recruitment service focuses on sourcing underrepresented talent, fostering equitable hiring, and helping companies build inclusive workplaces.",
      wwd: [
        "Proactively engage with underrepresented talent pools",
        "Ensure a fair and inclusive hiring process for all candidates",
        "Help clients meet diversity targets while enhancing organizational performance"
      ],
    },
    {
      id: 6,
      title: "Employer Branding & Talent Attraction",
      desc: "We strengthen employer branding to attract top-tier candidates and industry leaders.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Talent Marketing",
      duration: "2000",
      intro: "Our Employer Branding & Talent Attraction services help companies establish a strong employer brand, making them more appealing to top talent.",
      wwd: [
        "Develop and refine your employer brand to showcase company culture, values, and vision",
        "Promote your brand across relevant platforms to reach potential candidates",
        "Create a compelling narrative that resonates with high-potential talent"
      ],
    },
  ];
  return services;
};

export default getAllServices;
