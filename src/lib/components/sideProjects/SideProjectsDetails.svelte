<script>
  import PositionProject from "../experience/PositionProject.svelte";

  export let projects;
</script>

{#each projects as project}
  <PositionProject {project} />
{/each}
