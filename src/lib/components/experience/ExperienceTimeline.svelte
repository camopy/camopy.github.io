<script>
  import ExperienceJob from "./ExperienceJob.svelte";

  export let experience;
</script>

{#each experience as job}
  <ExperienceJob {job} />
{/each}
