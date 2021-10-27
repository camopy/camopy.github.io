<script>
  import TechnologyBadge from "./TechnologyBadge.svelte";

  export let project;
</script>

<h5 class="font-medium">{project.title}</h5>

<p>{project.description}</p>

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

<hr class="my-4" />
