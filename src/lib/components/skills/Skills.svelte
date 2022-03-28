<script>
  import Section from "../Section.svelte";

  import SectionContent from "../SectionContent.svelte";
  import SectionHeader from "../SectionHeader.svelte";
  import SkillGroup from "./SkillGroup.svelte";

  const skills = {
    languages: [
      {
        name: "Golang",
        image: "go.svg",
      },
      {
        name: "JavaScript",
        image: "javascript.svg",
      },
      {
        name: "TypeScript",
        image: "typescript.svg",
      },
      {
        name: "PHP",
        image: "php.svg",
      },
      {
        name: "CM",
        image: "cm.jpg",
      },
      {
        name: "Python",
        image: "python.svg",
      },
    ],
    frameworks: [
      {
        name: "Svelte",
        image: "svelte.svg",
      },
      {
        name: "Vue",
        image: "vue.svg",
      },
      {
        name: "Nuxt",
        image: "nuxt.svg",
      },
      {
        name: "Gridsome",
        image: "gridsome.svg",
      },
      {
        name: "React",
        image: "react.svg",
      },
    ],
    web: [
      {
        name: "HTML5",
        image: "html5.svg",
      },
      {
        name: "CSS3",
        image: "css3.svg",
      },
      {
        name: "Tailwind CSS",
        image: "tailwindcss.svg",
      },
    ],
    other: [
      {
        name: "Firebase",
        image: "firebase.svg",
      },
      {
        name: "AWS",
        image: "aws.svg",
      },
      {
        name: "MySQL",
        image: "mysql.svg",
      },
      {
        name: "PostgreSQL",
        image: "postgresql.svg",
      },
      {
        name: "Docker",
        image: "docker.svg",
      },
      {
        name: "Prometheus",
        image: "prometheus.png",
      },
      {
        name: "Grafana",
        image: "grafana.png",
      },
    ],
  };
</script>

<Section id="skills">
  <SectionHeader title="Skills" />
  <SectionContent>
    <div class="flex flex-col gap-8">
      <SkillGroup skills={skills.languages} title="Languages" />
      <SkillGroup skills={skills.frameworks} title="Frameworks" />
      <SkillGroup skills={skills.web} title="Web" />
      <SkillGroup skills={skills.other} title="Other" />
    </div>
  </SectionContent>
</Section>
