<script>
  import SectionContent from "../SectionContent.svelte";
  import SectionHeader from "../SectionHeader.svelte";
  import ExperienceTimeline from "./ExperienceTimeline.svelte";

  const experience = [
    {
      title: "Software Developer/Engineer",
      company: "Born In Code",
      location: "Belo Horizonte, Brazil",
      startDate: "Jul 2017",
      description:
        "Development of apps using Golang, JavaScript frameworks and Firebase.",
      positions: [
        {
          title: "Full Stack Developer/Engineer",
          startDate: "Mar 2018",
          projects: [
            {
              title: "Fast Server Backups & File Transfers with Monitoring",
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
              description: `Worked for the Stylex Team, customizing their products
(Share, FA, Yoom, NYC, Metrum) in CET. Have also developed two new
products for them (Still, Quick).`,
              technologies: ["CM", "CET Developer"],
            },
            {
              title: "CET Developer Model Connections",
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
      endDate: "Nov 2020",
      description: `Development of web apps using JavaScript frameworks and NodeJS,
iOS development, and website design. Several projects were developed using different technologies, such as
Vue, Firebase, NodeJS, Swift, Polymer, Keystone, Elasticsearch.`,
      positions: [
        {
          title: "Software Developer/Engineer",
          startDate: "Apr 2018",
          endDate: "May 2018",
          projects: [
            {
              title: "Azygos",
              description: `Web app designed to facilitate communication between
doctors and patients, with a patient timeline with health data and prescriptions.`,
              technologies: ["Vue", "Firebase"],
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
              description: `WordPress adjustments like menu and responsive design.`,
              technologies: ["Wordpress"],
            },
            {
              title: "300 Softwares Website",
              description: `300 Softwares website development`,
              technologies: ["HTML5", "Bootstrap CSS", "JQuery"],
              links: [
                {
                  title: "Website",
                  url: "https://www.300softwares.com",
                },
              ],
            },
            {
              title: "Design Intake",
              description: `Tool, used by Allsteel designers, which creates new
requests in the Sharepoint system, which is later used by the sales force team`,
              technologies: ["NodeJS", "Jade", "JQuery", "SharePoint"],
            },
            {
              title: "Budgeting Tool",
              description: `Tool, used by Allsteel designers, which calculates the
costs for the installation of walls and doors, and stores a history of budgets in
the Sharepoint system, which is later used by the sales force team.`,
              technologies: ["NodeJS", "Jade", "JQuery", "SharePoint"],
            },
            {
              title: "Typicals, Textiles, Image Gallery",
              description: `Maintained the project for listing and filtering all available Typicals, Textiles and Product Images on
Allsteel's website`,
              technologies: ["NodeJS", "Polymer", "Keystone", "Elasticsearch"],
            },
            {
              title: "HNI-One Portal",
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
  ];
</script>

<section id="experience">
  <SectionHeader title="Experience" />
  <SectionContent>
    <ExperienceTimeline {experience} />
  </SectionContent>
</section>