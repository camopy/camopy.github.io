<script>
  export let startDate, endDate;
  export let highlighted = false;
</script>

<div class="sm:flex gap-4">
  <div class="flex flex-row sm:flex-col justify-between">
    <p
      class:text-accent={highlighted}
      class:text-lg={highlighted}
      class:italic={!highlighted}
      class:text-secondary={!highlighted}
      class="w-20 sm:text-right"
    >
      {endDate || "Now"}
    </p>

    <p
      class:text-accent={highlighted}
      class:text-lg={highlighted}
      class:italic={!highlighted}
      class:text-secondary={!highlighted}
      class="w-20 text-right"
    >
      {startDate}
    </p>
  </div>

  <div class="flex sm:flex-col items-center">
    <div
      class:bg-secondary={!highlighted}
      class:bg-accent={highlighted}
      class="sm:mt-2 w-2 h-2 rounded-full"
    />
    <div
      class:border-pink-500={highlighted}
      class="border w-full sm:w-0 h-full"
    />
    <div
      class:bg-secondary={!highlighted}
      class:bg-accent={highlighted}
      class="sm:mb-2 w-2 h-2 rounded-full"
    />
  </div>
</div>
