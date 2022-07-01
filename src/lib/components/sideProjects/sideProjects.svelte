<script>
  import Section from "../Section.svelte";
  import SectionContent from "../SectionContent.svelte";
  import SectionHeader from "../SectionHeader.svelte";
  import SideProjectsDetails from "./SideProjectsDetails.svelte";

  const projects = [
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
        "Go",
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
  ];
</script>

<Section id="sideProjects">
  <SectionHeader title="Side Projects" />
  <SectionContent>
    <SideProjectsDetails {projects} />
  </SectionContent>
</Section>
