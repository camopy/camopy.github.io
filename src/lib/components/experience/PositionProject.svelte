<script>
  import ProjectLocation from "./ProjectLocation.svelte";
  import TechnologyBadge from "./TechnologyBadge.svelte";

  export let project;

  $: websiteUrl = getWebsiteUrl();

  function getWebsiteUrl() {
    let url = "";

    if (project.links) {
      project.links.forEach((link) => {
        if (link.title === "Website") {
          url = link.url;
        }
      });
    }

    return url;
  }
</script>

<div class="flex gap-4 flex-wrap">
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <h5 class="font-medium">{project.title}</h5>
      {#if project.location}
        <ProjectLocation location={project.location} />
      {/if}
    </div>

    <p>{project.description}</p>
    {#if project.explanation}
      <blockquote class="whitespace-pre-line pl-2 border-l-2">
        {project.explanation}
      </blockquote>
    {/if}

    <div class="flex gap-2 flex-wrap">
      {#each project.technologies as tech}
        <TechnologyBadge name={tech} />
      {/each}
    </div>

    {#if project.links}
      <div class="flex gap-2">
        {#each project.links as link}
          <a class="underline" href={link.url}>{link.title}</a>
        {/each}
      </div>
    {/if}
  </div>

  {#if project.image}
    {#if websiteUrl}
      <a href={websiteUrl} aria-label={project.title}>
        <img width="400px" src={project.image} alt={project.title} />
      </a>
    {:else}
      <img width="400px" src={project.image} alt={project.title} />
    {/if}
  {/if}
</div>

<hr class="my-4" />
