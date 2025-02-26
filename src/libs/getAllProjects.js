import projectImage2 from "@/assets/img/project/project__2.png";
import projectImage3 from "@/assets/img/project/project__3.png";
import projectImage4 from "@/assets/img/project/project__4.png";
import projectImage5 from "@/assets/img/project/project__5.png";
import projectImage6 from "@/assets/img/project/project__6.png";
import projectImage7 from "@/assets/img/project/project__7.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
import hiring from "@/assets/img/project/hiring.jpg"
const getAllProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Chief Financial Officer (CFO) - Global Tech Company",
      img: hiring,
      duration: "1500",
      location: "Australia (Hybrid)",
      industry: "Technology",
      salary: "Competitive + Benefits",
      jd: "Our client, a leading global technology firm, is seeking an experienced CFO to lead their financial strategy during a period of rapid growth and expansion. The ideal candidate will have a proven track record in financial management at a senior level in a technology-focused business, with experience in global markets.",
      res: [
        "Lead the financial strategy and planning for the company",
        "Oversee financial reporting, budgeting, and forecasting",
        "Manage investor relations and communicate with stakeholders",
        "Ensure compliance with financial regulations and laws"
      ],
      quali: [
        "10+ years of experience in financial management, with at least 5 years in a senior executive role",
        "Strong background in technology or SaaS industries",
        "Exceptional leadership, communication, and strategic thinking skills"
      ]
    },
    {
      id: 2,
      title: "Head of Marketing - Consumer Goods Brand",
      img: hiring,
      duration: "1500",
      location: "Hong Kong (Remote)",
      industry: "Consumer Goods",
      salary: "$120,000 - $150,000 + Bonus",
      jd: "We are partnering with a rapidly growing Consumer Goods Brand that is looking for a Head of Marketing to drive their marketing strategies across North America. This leadership position requires a dynamic marketing professional with a strong background in consumer-facing brands, digital marketing, and brand building.",
      res: [
        "Develop and execute comprehensive marketing strategies",
        "Manage a team of marketing professionals and external agencies",
        "Collaborate with product development teams to align marketing campaigns with new launches",
        "Analyze market trends and customer insights to refine marketing strategies"
      ],
      quali: [
        "8+ years of experience in marketing, with at least 3 years in a senior leadership role",
        "Experience in consumer goods or lifestyle brands",
        "Expertise in digital marketing and brand strategy"
      ]
    },
    {
      id: 3,
      title: "Senior Data Scientist - FinTech Startup",
      img: hiring,
      duration: "1500",
      location: "Thailand (Remote)",
      industry: "FinTech",
      salary: "$150,000 - $180,000 + Equity",
      jd: "An exciting opportunity for a Senior Data Scientist to join a fast-growing FinTech Startup disrupting the financial services industry. The ideal candidate will have experience in machine learning, data modeling, and predictive analytics, with the ability to translate data insights into actionable business strategies.",
      res: [
        "Lead the design and implementation of machine learning algorithms to optimize business operations",
        "Analyze large datasets to uncover insights and improve decision-making",
        "Work closely with product teams to integrate data-driven solutions into the platform",
        "Mentor and guide junior data scientists"
      ],
      quali: [
        "5+ years of experience in data science, with a focus on machine learning",
        "Proficiency in Python, R, SQL, and data visualization tools",
        "Experience in the FinTech or financial services industry is a plus"
      ]
    },
    {
      id: 4,
      title: "Vice President of Sales - Healthcare Technology",
      img: hiring,
      duration: "1500",
      location: "Australia (Full-time)",
      industry: "Healthcare Technology",
      salary: "$180,000 - $220,000 + Performance-Based Bonus",
      jd: "Our client, a leader in the Healthcare Technology space, is looking for a Vice President of Sales to spearhead their sales strategy and growth in the U.S. market. This role requires a strategic, results-driven leader with deep experience in healthcare IT sales and team management.",
      res: [
        "Develop and execute sales strategies to drive revenue growth",
        "Build and manage a high-performing sales team",
        "Establish and maintain relationships with key clients and industry partners",
        "Monitor and report on sales performance, adjusting strategies as needed"
      ],
      quali: [
        "10+ years of experience in sales, with at least 5 years in a senior leadership position",
        "Extensive experience in healthcare technology or IT solutions",
        "Strong leadership and people management skills"
      ]
    },
    {
      id: 5,
      title: "Product Manager - E-Commerce Platform",
      img: hiring,
      duration: "1500",
      location: "Singapore (Full-time)",
      industry: "E-Commerce",
      salary: "Competitive + Benefits",
      jd: "We are assisting a rapidly growing E-Commerce Platform in hiring a Product Manager to lead product development and innovation. This position offers a unique opportunity to shape the future of an industry-leading platform with a focus on improving user experience and maximizing revenue growth.",
      res: [
        "Define the product roadmap and prioritize feature development",
        "Collaborate with cross-functional teams, including engineering, design, and marketing",
        "Conduct market research and analyze user feedback to guide product strategy",
        "Oversee the product life cycle, from ideation to launch"
      ],
      quali: [
        "5+ years of product management experience, preferably in e-commerce or digital platforms",
        "Strong background in agile methodologies and project management tools",
        "Excellent communication and stakeholder management skills"
      ]
    },
    {
      id: 6,
      title: "HR Director - Global Manufacturing Company",
      img: hiring,
      duration: "1500",
      location: "Singapore (Full-time)",
      industry: "Manufacturing",
      salary: "Competitive + Benefits",
      jd: "Our client, a leading Global Manufacturing Company, is seeking an experienced HR Director to oversee all aspects of human resources, including talent acquisition, employee development, performance management, and organizational development.",
      res: [
        "Lead HR strategy and implement best practices across global operations",
        "Develop and maintain employee programs and performance management systems",
        "Support leadership in succession planning and organizational development",
        "Ensure compliance with local and international labor laws"
      ],
      quali: [
        "8+ years of experience in human resources, with 3+ years in a leadership role",
        "Strong experience in manufacturing or industrial sectors",
        "Fluency in English and German is required"
      ]
    },
    {
      id: 7,
      title: "Customer Support Manager",
      img: hiring,
      duration: "1500",
      location: "Hong Kong (Full-time)",
      industry: "Customer Support and Service",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced Customer Support Manager to oversee the customer support team and ensure exceptional service delivery. This role involves managing the daily operations of the support department, improving customer satisfaction, and driving the development of support processes.",
      res: [
        "Lead, manage, and develop the customer support team",
        "Handle customer escalations and ensure timely resolution of complex issues",
        "Develop and implement customer service policies and procedures",
        "Monitor team performance, set KPIs, and provide coaching"
      ],
      quali: [
        "5+ years of experience in a similar role, with 3+ years in a leadership role",
        "Strong communication, problem-solving, and conflict resolution skills",
        "Ability to manage multiple priorities in a fast-paced environment"
      ]
    },
    {
      id: 8,
      title: "UI/UX Specialist",
      img: hiring,
      duration: "1500",
      location: "Hong Kong (Full-time)",
      industry: "Fintech",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced UI/UX Specialist to create engaging, user-friendly digital experiences. This role combines design and user-centered research to deliver aesthetically appealing and functional designs that meet user needs and business goals.",
      res: [
        "Conduct user research to understand needs, behaviors, and pain points",
        "Design wireframes, prototypes, and high-fidelity UI designs",
        "Collaborate with product managers and developers to ensure design consistency",
        "Create user personas and map user journeys to improve engagement"
      ],
      quali: [
        "Proven experience in UI/UX design with a strong portfolio",
        "Proficiency in design tools like Adobe XD, Figma, or Sketch",
        "Strong understanding of user-centered design principles and usability"
      ]
    },
    {
      id: 9,
      title: "Logistics Manager",
      img: hiring,
      duration: "1500",
      location: "Singapore (hybrid)",
      industry: "Logistics",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced Logistics Manager to oversee the efficient movement of goods and materials, ensuring smooth logistics operations. The role involves managing supply chain processes, coordinating transportation, and optimizing inventory levels.",
      res: [
        "Manage and optimize end-to-end logistics operations",
        "Develop and implement logistics strategies to improve efficiency",
        "Coordinate with suppliers, vendors, and transportation partners",
        "Monitor and track shipments, ensuring compliance with regulations"
      ],
      quali: [
        "Proven experience in logistics or supply chain management, with 3-5 years in a managerial role",
        "Strong understanding of inventory management and transportation",
        "Excellent problem-solving, organizational, and leadership skills"
      ]
    },
    {
      id: 10,
      title: "General Counsel",
      img: hiring,
      duration: "1500",
      location: "Australia (Full-time)",
      industry: "Legal",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced General Counsel to oversee all legal and regulatory matters, provide strategic legal advice, and manage the company’s legal risks. This role supports business decisions while protecting the company’s interests.",
      res: [
        "Lead and manage the company’s legal department",
        "Provide legal advice on corporate governance and risk management",
        "Oversee contract drafting, negotiation, and management",
        "Manage and resolve legal disputes, including litigation and arbitration"
      ],
      quali: [
        "Juris Doctor (JD) degree and admission to the bar",
        "10+ years of experience in corporate law",
        "Strong background in business law, contracts, and compliance",
        "Proven leadership in a senior legal role"
      ]
    },
    {
      id: 11,
      title: "Tax Manager",
      img: hiring,
      duration: "1500",
      location: "HCM (Full-time)",
      industry: "Logistics",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced Tax Manager to oversee tax compliance and strategy, ensuring adherence to local, state, and international tax regulations. The role involves managing tax returns, audits, and planning to minimize liabilities.",
      res: [
        "Oversee preparation and filing of corporate tax returns",
        "Develop and implement tax strategies to minimize liabilities",
        "Manage and support tax audits and inquiries",
        "Advise senior management on tax planning and compliance"
      ],
      quali: [
        "Bachelor's degree in Accounting, Finance, or related field; CPA or Master's in Taxation preferred",
        "5+ years of experience in tax management or public accounting",
        "In-depth knowledge of tax laws and regulations",
        "Strong analytical and detail-oriented skills"
      ]
    },
    {
      id: 12,
      title: "SEO Manager",
      img: hiring,
      duration: "1500",
      location: "HCM (Full-time)",
      industry: "Technology",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced SEO Manager to develop and execute strategies to improve search engine visibility and organic traffic. This role involves keyword research, on-page and off-page optimization, and performance tracking.",
      res: [
        "Develop and implement comprehensive SEO strategies",
        "Conduct in-depth keyword research for content optimization",
        "Optimize on-page elements and improve site architecture",
        "Manage off-page SEO initiatives, including link building"
      ],
      quali: [
        "3-5 years of experience as an SEO Manager or similar role",
        "Strong understanding of SEO tools such as Google Analytics and SEMrush",
        "Expertise in on-page and off-page SEO techniques",
        "Familiarity with CMS and website analytics platforms"
      ]
    },
    {
      id: 13,
      title: "QA Tester",
      img: hiring,
      duration: "1500",
      location: "Ha Noi (remote)",
      industry: "Ecommerce",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced QA Tester to ensure the quality and functionality of software applications by identifying bugs and issues before release. The role involves creating test plans, executing tests, and collaborating with development teams.",
      res: [
        "Design and execute detailed test plans and scripts",
        "Perform manual and automated testing to identify bugs",
        "Collaborate with developers to understand requirements",
        "Conduct functional, regression, and performance testing"
      ],
      quali: [
        "2-4 years of experience in software QA or testing",
        "Strong understanding of testing methodologies and tools",
        "Experience with test automation tools (e.g., Selenium)",
        "Familiarity with bug tracking and test management software"
      ]
    },
    {
      id: 14,
      title: "Regional Sales Manager",
      img: hiring,
      duration: "1500",
      location: "Ha Noi (hybrid)",
      industry: "Retail",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced Regional Sales Manager to drive sales growth and manage sales operations within a specific geographic region. This role involves leading a sales team and developing strategies to achieve regional targets.",
      res: [
        "Develop and execute regional sales strategies",
        "Lead and motivate a team of sales representatives",
        "Build and maintain relationships with key clients",
        "Monitor sales performance and implement corrective actions"
      ],
      quali: [
        "5+ years of experience in sales management",
        "Proven track record of achieving sales targets",
        "Strong leadership and team management skills",
        "Excellent communication and negotiation abilities"
      ]
    },
    {
      id: 15,
      title: "Cloud Architect",
      img: hiring,
      duration: "1500",
      location: "Da Nang (Remote)",
      industry: "Technology",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced Cloud Architect to design and manage scalable, secure cloud computing systems. This role involves collaborating with various teams to implement cloud solutions that support business objectives.",
      res: [
        "Design and implement scalable cloud solutions",
        "Collaborate with development and operations teams",
        "Select and manage appropriate cloud platforms",
        "Ensure cloud infrastructure is optimized for performance and cost"
      ],
      quali: [
        "5+ years of experience in cloud architecture",
        "Deep knowledge of AWS, Azure, or Google Cloud",
        "Strong understanding of cloud security and disaster recovery",
        "Experience with containerization technologies like Docker and Kubernetes"
      ]
    },
    {
      id: 16,
      title: "Director of Operations",
      img: hiring,
      duration: "1500",
      location: "HCM (Hybrid)",
      industry: "Finance",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced Director of Operations to optimize day-to-day processes and drive operational efficiency across the company. This role involves strategic planning and cross-functional team leadership.",
      res: [
        "Develop and implement operational strategies",
        "Oversee day-to-day operations across departments",
        "Monitor key operational metrics and drive improvements",
        "Lead cross-functional teams to resolve operational challenges"
      ],
      quali: [
        "8+ years of experience in operations management",
        "Strong understanding of business processes and resource allocation",
        "Proven ability to drive operational improvements",
        "Excellent strategic thinking and decision-making skills"
      ]
    },
    {
      id: 17,
      title: "IT Manager",
      img: hiring,
      duration: "1500",
      location: "Da Nang (Full-time)",
      industry: "Insurance",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced IT Manager to oversee the organization’s technology infrastructure, ensuring systems run smoothly and securely. This role involves managing an IT team and supporting digital transformation initiatives.",
      res: [
        "Manage daily operations of the IT department",
        "Develop and implement IT strategies aligned with business goals",
        "Ensure the security and integrity of company data",
        "Oversee hardware and software installation and maintenance"
      ],
      quali: [
        "5+ years of experience in IT management or similar leadership role",
        "Strong technical knowledge in IT infrastructure and security",
        "Experience in project management and IT budgeting",
        "Excellent problem-solving and analytical skills"
      ]
    },
    {
      id: 18,
      title: "AI Engineer",
      img: hiring,
      duration: "1500",
      location: "Can Tho (Full-time)",
      industry: "Technology",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced AI Engineer to design, develop, and implement AI models and systems to solve complex business problems. The role involves applying machine learning and deep learning techniques to create intelligent applications.",
      res: [
        "Design and develop AI and machine learning models",
        "Collect, clean, and process large datasets for training",
        "Implement and fine-tune machine learning algorithms",
        "Collaborate with data scientists and engineers for production integration"
      ],
      quali: [
        "3-5 years of experience in AI development or machine learning",
        "Proficiency in Python, R, or Java and AI/ML frameworks",
        "Experience with data preprocessing and model evaluation",
        "Solid understanding of neural networks and advanced ML concepts"
      ]
    },
    {
      id: 19,
      title: "Account Executive",
      img: hiring,
      duration: "1500",
      location: "HCM (Full-time)",
      industry: "Real Estate",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced Account Executive to drive sales, manage client relationships, and execute business deals successfully. This role involves prospecting new business opportunities and managing existing accounts.",
      res: [
        "Identify and prospect new business opportunities",
        "Manage and nurture relationships with existing clients",
        "Conduct sales presentations and product demonstrations",
        "Develop and deliver customized proposals and solutions"
      ],
      quali: [
        "2-4 years of experience in sales or account management",
        "Strong communication, negotiation, and relationship-building skills",
        "Goal-oriented with a track record of achieving sales targets",
        "Ability to understand and meet client needs"
      ]
    },
    {
      id: 20,
      title: "HR Business Partner",
      img: hiring,
      duration: "1500",
      location: "Ha Noi (Full-time)",
      industry: "Blockchain",
      salary: "Competitive + Benefits",
      jd: "Our client is seeking an experienced HR Business Partner to act as a strategic advisor to leadership, aligning HR initiatives with business goals. The role involves managing talent, employee relations, and performance management programs.",
      res: [
        "Provide HR expertise and guidance to senior leadership",
        "Drive talent management initiatives, including recruitment and succession planning",
        "Implement performance management programs to boost employee engagement",
        "Support employee relations and conflict resolution"
      ],
      quali: [
        "5+ years of experience in HR with a focus on employee relations and talent management",
        "Strong understanding of HR policies and labor laws",
        "Excellent communication and interpersonal skills",
        "Ability to build strong relationships with leadership and employees"
      ]
    }
  ];
  return projects;
};

export default getAllProjects;
