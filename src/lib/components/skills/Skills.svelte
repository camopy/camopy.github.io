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
                name: "Flutter",
                image: "flutter.svg",
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
                name: "SvelteKit",
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
        cloud: [
            {
                name: "AWS",
                image: "aws.svg",
            },
            {
                name: "Fly.io",
                image: "flyio.svg",
            },
            {
                name: "Google Cloud",
                image: "gcloud.svg",
            },
            {
                name: "Firebase",
                image: "firebase.svg",
            },
        ],
        db: [
            {
                name: "PostgreSQL",
                image: "postgresql.svg",
            },
            {
                name: "Redis",
                image: "redis.svg",
            },
            {
                name: "ClickHouse",
                image: "clickhouse.svg",
            },
            {
                name: "MySQL",
                image: "mysql.svg",
            },
        ],
        other: [
            {
                name: "REST",
                image: "rest.svg",
            },
            {
                name: "GraphQL",
                image: "graphql.svg",
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
    <SectionHeader title="Skills"/>
    <SectionContent>
        <div class="flex flex-col gap-8">
            <SkillGroup skills={skills.languages} title="Languages"/>
            <SkillGroup skills={skills.cloud} title="Cloud"/>
            <SkillGroup skills={skills.db} title="Database"/>
            <SkillGroup skills={skills.other} title="Other"/>
            <SkillGroup skills={skills.frameworks} title="Frameworks"/>
            <SkillGroup skills={skills.web} title="Web"/>
        </div>
    </SectionContent>
</Section>
