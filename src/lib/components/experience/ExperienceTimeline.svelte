<script>
  import ExperienceJob from "./ExperienceJob.svelte";

  export let experience;
</script>

<div class="my-4">
  {#each experience as job}
    <ExperienceJob {job} />
  {/each}
</div>
