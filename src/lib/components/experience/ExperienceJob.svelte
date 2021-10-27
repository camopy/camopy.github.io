<script>
  import JobPosition from "./JobPosition.svelte";
  import TimelineDate from "./TimelineDate.svelte";

  export let job;
</script>

<div
  class="flex flex-col sm:flex-row justify-start gap-6 w-full max-w-screen-xl"
>
  <TimelineDate startDate={job.startDate} endDate={job.endDate} highlighted />
  <div class="flex-1">
    <div class="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
      <h2>
        <span class="border-b-2 border-secondary"
          ><span class="text-lg font-bold">{job.company}</span>, {job.location}</span
        >

        <i class="ml-2 text-lg text-secondary">{job.title}</i>
      </h2>
    </div>

    <p class="mt-2">{job.description}</p>
  </div>
</div>
<div class="my-4 ml-4 mr-4 sm:mr-0">
  {#each job.positions as position}
    <JobPosition {position} />
  {/each}
</div>
