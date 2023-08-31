<script>
  import Section from "../Section.svelte";
  import SectionContent from "../SectionContent.svelte";
  import SectionHeader from "../SectionHeader.svelte";
  import SideProjectsDetails from "./SideProjectsDetails.svelte";

  const projects = [
    {
      title: "Feed Aggregator Bot",
      description: `This open-source project aims to aggregate various types of feeds, including RSS, Reddit, YouTube, Crypto, and more, consolidating them for distribution to a designated Telegram channel.
      Notably, the project features direct integration of chatGPT, seamlessly incorporating its capabilities into the bot's functionality.
`,
      technologies: ["Go", "Redis", "Telegram Bot API"],
      links: [
        {
          title: "Github",
          url: "https://github.com/camopy/arya",
        },
      ],
    },
    {
      title: "Browser Chat",
      description: `This project is designed to showcase an event-driven/clean architecture implementation of a simple
browser-based chat application using Go.

`,
      image: "/browser-chat.png",
      technologies: ["Go", "PostgreSQL", "Docker"],
      links: [
        {
          title: "Github",
          url: "https://github.com/camopy/browser-chat",
        },
      ],
    },
    {
      title: "Sitemap Generator",
      description: `This project is designed to showcase Go concurrency's power on a implementation of a simple
sitemap generator using only standard library.

`,
      technologies: ["Go"],
      links: [
        {
          title: "Github",
          url: "https://github.com/camopy/sitemap-generator",
        },
      ],
    },
    {
      title: "Go Fetch Posts",
      description: `This is my resolution for a common interview question to fetch posts from an API.`,
      technologies: ["Go"],
      links: [
        {
          title: "Github",
          url: "https://github.com/camopy/posts-fetcher",
        },
      ],
    },
    {
      title: "Go Concurrency Exercises",
      description: `This is my resolutions for some Go concurrency/race condition exercises.`,
      technologies: ["Go"],
      links: [
        {
          title: "Github",
          url: "https://github.com/camopy/go-concurrency-exercises-solutions",
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
  ];
</script>

<Section id="sideProjects">
  <SectionHeader title="Side Projects" />
  <SectionContent>
    <SideProjectsDetails {projects} />
  </SectionContent>
</Section>
