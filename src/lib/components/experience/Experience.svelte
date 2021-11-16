<script>
  import Section from "../Section.svelte";

  import SectionContent from "../SectionContent.svelte";
  import SectionHeader from "../SectionHeader.svelte";
  import ExperienceTimeline from "./ExperienceTimeline.svelte";

  const experience = [
    {
      title: "Software Developer/Engineer",
      company: "Born In Code",
      location: "Belo Horizonte, Brazil",
      startDate: "Jul 2019",
      description: `As a solo developer, I have worked on multiple projects from scratch, always taking into account a
      good code architecture, up-to-date technologies, and best practices. Most of them were developed using Golang, JavaScript frameworks, and Firebase.`,
      positions: [
        {
          title: "Full Stack Developer/Engineer",
          startDate: "Jul 2019",
          projects: [
            {
              title: "Fast Server Backups & File Transfers with Monitoring",
              location: "USA",
              inProgress: true,
              private: true,
              description:
                "Transfer files across your servers around the world at lightning speed and monitor everything through a centralized dashboard.",
              technologies: [
                "Golang",
                "PostgreSQL",
                "Prometheus",
                "Grafana",
                "Docker",
                "SvelteKit (TypeScript)",
              ],
            },
            {
              title: "PetNaturau E-commerce Website",
              status: "Live",
              description: "E-commerce for PetNaturau company",
              technologies: ["Svelte", "Tailwind CSS", "Firebase"],
              image: "/petnaturau.png",
              links: [
                {
                  title: "Website",
                  url: "https://petnaturau.com",
                },
              ],
            },
            {
              title: "Python Log Parser - Study case",
              description: `Basic Python log parser that saves to a MySQL database
and serves metrics to Prometheus and Grafana through a Flask REST API
endpoint. Everything is dockerized.`,
              technologies: [
                "Python",
                "Flask",
                "MySQL",
                "SQL Alchemy",
                "Golang",
                "Prometheus",
                "Grafana",
                "Docker",
              ],
              links: [
                {
                  title: "Github",
                  url: "https://github.com/camopy/log_parser_dockerized_flask_prometheus_grafana",
                },
              ],
            },
            {
              title: "Let me ask - Rocketseat study case",
              description: "Create live Q&A rooms",
              technologies: ["React", "Tailwind CSS", "Firebase"],
              image: "/letmeask.png",
              links: [
                {
                  title: "Github",
                  url: "https://github.com/camopy/letmeask-intro-react-ts-tailwind",
                },
                {
                  title: "Website",
                  url: "https://letmeask-6d541.web.app/",
                },
              ],
            },
            {
              title: "Criptorium",
              description: `Online crypto portfolio which connects to various
exchanges through their APIs and syncs your balance and trade history.`,
              technologies: ["Vue", "Vuetify", "Gridsome", "Firebase"],
              links: [
                {
                  title: "Github",
                  url: "https://github.com/camopy/criptorium",
                },
                {
                  title: "Landing page",
                  url: "https://github.com/camopy/criptorium-gridsome",
                },
              ],
            },
            {
              title: "Promoter",
              description: `Web app designed to facilitate the marketing
management of electronic music events, and also to promote such events
throughout the country.`,
              technologies: ["Vue", "Vuetify", "Firebase"],
              links: [
                {
                  title: "Github",
                  url: "https://github.com/camopy/promoter-nuxt-vuetify",
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
(Share, FA, Yoom, NYC, Metrum) in CET. Have also developed two new
products for them (Still, Quick).`,
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
      title: "Software Developer/Engineer",
      company: "300 Softwares",
      location: "Belo Horizonte, Brazil",
      startDate: "Jul 2017",
      endDate: "Jun 2019",
      description: `Development of web apps using JavaScript frameworks and NodeJS,
iOS development, and website design. Several projects were developed using different technologies, such as
Vue, Firebase, NodeJS, Swift, Polymer, Keystone, Elasticsearch.`,
      positions: [
        {
          title: "Software Developer/Engineer",
          startDate: "Fev 2019",
          endDate: "Jun 2019",
          projects: [
            {
              title: "Azygos",
              description: `Web app designed to facilitate communication between
doctors and patients, with a patient timeline with health data and prescriptions.`,
              technologies: ["Vue", "Firebase"],
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
          title: "Web Developer - Frontend",
          startDate: "Jul 2017",
          endDate: "Jan 2018",
          projects: [
            {
              title: "Unwritten Rules Tour Website",
              location: "USA",
              description: `WordPress adjustments like menu and responsive design.`,
              technologies: ["Wordpress"],
            },
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
              title: "Design Intake",
              location: "USA",
              description: `Tool, used by Allsteel designers, which creates new
requests in the Sharepoint system, which is later used by the sales force team`,
              technologies: ["NodeJS", "Jade", "JQuery", "SharePoint"],
            },
            {
              title: "Budgeting Tool",
              location: "USA",
              description: `Tool, used by Allsteel designers, which calculates the
costs for the installation of walls and doors, and stores a history of budgets in
the Sharepoint system, which is later used by the sales force team.`,
              technologies: ["NodeJS", "Jade", "JQuery", "SharePoint"],
            },
            {
              title: "Typicals, Textiles, Image Gallery",
              location: "USA",
              description: `Maintained the project for listing and filtering all available Typicals, Textiles, and Product Images on
Allsteel's website`,
              technologies: ["NodeJS", "Polymer", "Keystone", "Elasticsearch"],
            },
            {
              title: "HNI-One Portal",
              location: "USA",
              description: `Adjustments for the WordPress portal from HNI-One company`,
              technologies: ["Wordpress"],
            },
          ],
        },
      ],
    },
    {
      title: "Web Developer - Backend",
      company: "Teknisa Software",
      location: "Belo Horizonte, Brazil",
      startDate: "Nov 2012",
      endDate: "Jun 2017",
      description: `Development and support to the team and several products
throughout the company. Projects developed using PHP, Javascript, and Oracle.`,
      positions: [
        {
          title: "Web Developer",
          startDate: "Nov 2012",
          endDate: "Jun 2017",
          projects: [
            {
              title: "Pebbian ERP - Documentos Fiscais de Entrada e Saída",
              description: `Fiscal module with invoices, invoice service, and invoice
transmission, for the Pebbian ERP system. The system registers and maintains
all the invoices and transmits them through a web service to SEFAZ (Secretaria
da Fazenda do Estado).`,
              technologies: ["PHP", "JavaScript", "Oracle"],
            },
          ],
        },
      ],
    },
    {
      title: "Web Developer - Frontend",
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