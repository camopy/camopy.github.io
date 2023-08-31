<script>
  import Section from "../Section.svelte";
  import SectionContent from "../SectionContent.svelte";
  import SectionHeader from "../SectionHeader.svelte";
  import ExperienceTimeline from "./ExperienceTimeline.svelte";

  const experience = [
    {
      title: "Software Development Engineer",
      company: "Aurox",
      location: "Texas, USA",
      startDate: "Aug 2022",
      description: `Joined Aurox in August 2022 with limited blockchain expertise, rapidly acquiring extensive and valuable knowledge in the field.
      As a proficient Golang developer, I collaborated with a team of exceptional developers to successfully integrate multiple features into the Aurox ecosystem.
      My contributions were held to high standards, prioritizing solid code architecture and adherence to best practices for every pull request.`,
      positions: [
        {
          title: "Software Development Engineer",
          startDate: "Aug 2022",
          projects: [
            {
              title: "Aurox Blockchain Indexer",
              description: `Aurox is a leading crypto software ecosystem. It features a terminal designed to help users make educated trades decisions by allowing them to monitor the entire cryptocurrency market;
              and the safest and easiest web3 wallet that enables users to manage their crypto assets and interact with decentralized applications (dApps) on EVM chains.`,
              explanation: `• Served as a key Golang developer within a dynamic and multi cultural team of approximately 10 members.
• Designed, implemented, and sustained a range of GraphQL queries, including real-time subscriptions through websockets.
• Optimized API response times by implementing strategic caching techniques, employing memory cache and Redis solutions.
• Orchestrated the seamless integration of third-party APIs, enhancing overall system functionality.
• Engineered robust webhooks to enable automated downtime reporting to the monitoring system.
• Pioneered the implementation of multiple Prometheus metrics and Grafana dashboards, ensuring comprehensive system monitoring and performance evaluation.
• Assumed responsibility for maintaining and managing multiple blockchain nodes, ensuring their consistent and reliable operation.`,
              technologies: [
                "Go",
                "BlockChain",
                "PostgreSQL",
                "ClickHouse",
                "Redis",
                "GraphQL",
                "REST",
                "Prometheus",
                "Grafana",
                "Sentry",
                "Docker",
                "Google Cloud",
              ],
              links: [
                {
                  title: "Website",
                  url: "https://www.getaurox.com/",
                },
                {
                  title: "Application",
                  url: "https://getaurox.com/wallet",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Software Development Engineer",
      company: "Born In Code",
      location: "Belo Horizonte, Brazil",
      startDate: "Jul 2019",
      endDate: "Aug 2022",
      description: `As a solo developer, I undertook the responsibility of conceptualizing and executing multiple projects from the ground up.
      Aiming for impeccable code architecture, contemporary technologies, and adherence to best practices, I meticulously crafted each project.
      The tech stack I employed included Go, JavaScript frameworks, and pivotal cloud services like AWS and Firebase.
      This approach facilitated seamless integration of strong code foundations with innovative functionalities, resulting in the delivery of efficient and easily maintainable software solutions.`,
      positions: [
        {
          title: "Software Development Engineer",
          startDate: "Jul 2019",
          projects: [
            {
              title: "Criptorium",
              status: "Discontinued",
              description: `Online cryptocurrency portfolio platform that seamlessly integrates with multiple exchanges via their APIs, enabling the automatic synchronization of account balances and comprehensive trade histories.
              This dynamic solution serves the specific purpose of generating essential monthly reports mandated by the Brazilian government.
              I led the transformation of the project, significantly enhancing its performance and user experience.
              By leveraging AWS, I architected a robust and scalable infrastructure that propelled the platform into modernity and heightened resilience.`,
              explanation: `• Led the entire project from inception.
• Functioned as a solo developer throughout the project.
• Employed Go for backend development, leveraging its concurrency tools for efficient transactions retrieval from crypto exchange APIs.
• Crafted a modern frontend using Svelte Kit and Tailwind CSS.
• Utilized AWS Elastic Beanstalk for streamlined infrastructure delivery.
• Managed deployment using Docker Compose for comprehensive deployment efficiency.
• Customized application messages using AWS Lambda.
• Utilized AWS RDS with PostgreSQL, primarily for handling transactional data.
• Implemented JWT-based authentication through AWS Cognito.
• Enabled payments utilizing Stripe, with a webhook integration for subscription management.
• Implemented AWS CloudWatch for comprehensive monitoring, alerts, and metrics.
• Utilized Prometheus and Grafana for focused development and testing.
• Implemented AWS SQS as a queue system to manage crypto wallet fetch requests, addressing weight limits of certain exchange APIs.`,
              technologies: [
                "Go",
                "SvelteKit",
                "Tailwind CSS",
                "PostgreSQL",
                "Prometheus",
                "Grafana",
                "Docker",
                "Stripe",
                "REST",
                "AWS Elastic Beanstalk",
                "AWS RDS",
                "AWS Cognito",
                "AWS CloudWatch",
                "AWS SQS",
              ],
              image: "criptorium.png",
              links: [
                {
                  title: "Website",
                  url: "https://www.criptorium.com.br/",
                },
                {
                  title: "Application",
                  url: "https://app.criptorium.com.br/",
                },
              ],
            },
            {
              title: "Celler",
              status: "Discontinued",
              location: "USA",
              inProgress: true,
              private: true,
              description:
                "A service for file synchronization across servers around the world at lightning speed with a centralized dashboard and alerting system for monitoring.",
              explanation: `• Utilized Go for backend development.
• Developed a local log file watcher, leveraging Go's concurrency tools to concurrently parse multiple log files, thereby enhancing system performance.
• Executed command prompt operations using Go.
• Employed PostgreSQL as the database management system.
• Implemented comprehensive monitoring, alerting, and metrics utilizing Prometheus and Grafana.
• Constructed a contemporary front-end using Svelte Kit in conjunction with Tailwind CSS.`,
              technologies: [
                "Go",
                "PostgreSQL",
                "Prometheus",
                "Grafana",
                "Docker",
                "SvelteKit (TypeScript)",
                "Tailwind CSS",
              ],
              image: "/celler.png",
              links: [
                {
                  title: "Website",
                  url: "https://inspiring-elion-bb29ec.netlify.app",
                },
              ],
            },
            {
              title: "PetNaturau E-commerce Website",
              status: "Live",
              description: "E-commerce for PetNaturau company",
              explanation: `• Undertook complete ownership of the project from its inception.
• Constructed the frontend using Svelte (Sapper) in combination with Tailwind CSS.
• Established the database infrastructure utilizing Cloud Firestore.
• Engineered the backend using a variety of Firebase services, including Authentication, Storage, and Functions.`,
              technologies: ["Svelte", "Tailwind CSS", "Firebase"],
              image: "/petnaturau.png",
              links: [
                {
                  title: "Website",
                  url: "https://assinatura.petnaturau.com",
                },
              ],
            },
          ],
        },
        {
          title: "CET Developer",
          startDate: "Oct 2019",
          endDate: "Nov 2020",
          projects: [
            {
              title: "Stylex - CET Developer",
              location: "USA",
              description: `Worked for the Stylex Team, customizing their products
(Share, FA, Yoom, NYC, Metrum) in CET. I have also developed two new
products for them (Still, Quick).`,
              explanation: `I was chosen to lead development for the Stylex Team, tasked with creating new products using the CET Developer Software. Despite having no prior experience with the undocumented CM language (from Configura), I quickly adapted and thrived. The software's impeccably organized codebase facilitated a smooth transition, enabling me to comprehend the language and project nuances within just a few weeks. This solid foundation allowed me to successfully launch the products in a remarkably short timeframe, a testament to the clarity and cohesiveness of the codebase.`,
              technologies: ["CM", "CET Developer"],
            },
            {
              title: "CET Developer Model Connections",
              location: "USA",
              description: `Creating new model connections on the CET Developer
software`,
              technologies: ["CM", "CET Developer"],
            },
          ],
        },
      ],
    },
    {
      title: "Software Development Engineer",
      company: "300 Softwares",
      location: "Belo Horizonte, Brazil",
      startDate: "Jul 2017",
      endDate: "Jun 2019",
      description: `Development of web apps using JavaScript frameworks. Several projects were developed using
VueJS, Firebase, PolymerJS, Jade, KeystoneJS.`,
      positions: [
        {
          title: "Software Development Engineer",
          startDate: "Fev 2019",
          endDate: "Jun 2019",
          projects: [
            {
              title: "Azygos",
              description: `Web app designed to facilitate communication between
doctors and patients, with a patient timeline with health data and prescriptions.`,
              technologies: ["Vue", "Firebase"],
              explanation: `• Responsible for the entire project from scratch.
• Constructed the frontend using Vue.js and Vuex for effective state management, while leveraging Vuetify for Material Design UI components.
• Established the database infrastructure utilizing Cloud Firestore, a NoSQL document-oriented database.
• Engineered the backend using a range of Firebase services, including Authentication, Storage, and Functions.`,
              image: "/azygos.png",
              links: [
                {
                  title: "Website",
                  url: "https://azygos.co",
                },
              ],
            },
          ],
        },
        {
          title: "Frontend Developer",
          startDate: "Jul 2017",
          endDate: "Jan 2018",
          projects: [
            {
              title: "300 Softwares Website",
              description: `300 Softwares website development`,
              technologies: ["HTML5", "Bootstrap CSS", "JQuery"],
              image: "300.png",
              links: [
                {
                  title: "Website",
                  url: "https://www.300softwares.com",
                },
              ],
            },
            {
              title: "Allsteel Projects",
              location: "USA",
              description: `Unwritten Rules Tour Website | Design Intake | Budgeting Tool | HNI-One Portal | Typicals, Textiles, Image Gallery`,
              explanation: `• Involved in the development of web apps using JavaScript frameworks.
• Implemented website design.
• Wrote code based on software designs.
• Provided internal support for various departments. Adhered to ethical software development processes.
• Solved project-related distress signs and analyzed the bugs and problems arising at each stage of the product development cycle.
• Ensured compliance with quality and security protocols to maintain the sustainability of the projects carried out by the organization.`,
              technologies: [
                "Jade",
                "JQuery",
                "WordPress",
                "PolymerJS",
                "KeystoneJS",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Backend Developer",
      company: "Teknisa Software",
      location: "Belo Horizonte, Brazil",
      startDate: "Nov 2012",
      endDate: "Jun 2017",
      description: `Development and support to the team and several products
throughout the company. Projects developed using PHP, Javascript, and Oracle.`,
      positions: [
        {
          title: "Backend Developer",
          startDate: "Nov 2012",
          endDate: "Jun 2017",
          projects: [
            {
              title: "Pebbian ERP - Documentos Fiscais de Entrada e Saída",
              description: `Fiscal module with invoices, invoice service, and invoice
transmission, for the Pebbian ERP system. The system registers and maintains
all the invoices and transmits them through a web service to SEFAZ (Secretaria
da Fazenda do Estado).`,
              explanation: `• Acted on a team with other developers and tech leads.
• Worked with SQL databases (Oracle) to handle transactional data.
• Implemented PHP for the backend.
• Built a modern front-end using JavaScript.
• Advocated for improvements to product quality, security, and performance.
• Solved technical problems of moderate scope and complexity.`,
              technologies: ["PHP", "JavaScript", "Oracle"],
            },
          ],
        },
      ],
    },
    {
      title: "Web Developer",
      company: "PUC Minas",
      location: "Belo Horizonte, Brazil",
      startDate: "May 2010",
      endDate: "Dec 2010",
      description: `Scientific initiation focused on web development`,
      positions: [
        {
          title: "Web Developer",
          startDate: "May 2010",
          endDate: "Dec 2010",
          projects: [
            {
              title: "Psicologia em Revista - PePSIC / BVS Psi",
              description: `Was responsible for the HTML and Markup from "Psicologia em Revista" digital journal.`,
              technologies: ["HTML5", "Markup"],
            },
          ],
        },
      ],
    },
  ];
</script>

<Section id="experience">
  <SectionHeader title="Experience" />
  <SectionContent>
    <ExperienceTimeline {experience} />
  </SectionContent>
</Section>
