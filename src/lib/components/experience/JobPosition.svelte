<script>
  import PositionProject from "./PositionProject.svelte";
  import TimelineDate from "./TimelineDate.svelte";

  export let position;
</script>

<div class="flex justify-start gap-6 w-screen max-w-screen-xl my-4">
  <TimelineDate startDate={position.startDate} endDate={position.endDate} />
  <div>
    <div class="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <h3 class="text-lg text-gray-500"><i>{position.title}</i></h3>
    </div>

    <h4 class="my-2 underline">Projects:</h4>

    <div class="flex flex-col gap-2">
      {#each position.projects as project}
        <PositionProject {project} />
      {/each}
    </div>
  </div>
</div>
