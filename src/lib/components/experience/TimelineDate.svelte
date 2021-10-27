<script>
  export let startDate, endDate, highlighted;
</script>

<div class="sm:flex gap-4">
  <div class="flex flex-row sm:flex-col justify-between">
    <p
      class:text-pink-500={highlighted}
      class:text-lg={highlighted}
      class:italic={!highlighted}
      class:text-gray-500={!highlighted}
      class="w-20 sm:text-right"
    >
      {endDate || "Now"}
    </p>

    <p
      class:text-pink-500={highlighted}
      class:text-lg={highlighted}
      class:italic={!highlighted}
      class:text-gray-500={!highlighted}
      class="w-20 text-right"
    >
      {startDate}
    </p>
  </div>

  <div class="flex sm:flex-col items-center">
    <div
      class:bg-gray-500={!highlighted}
      class:bg-pink-500={highlighted}
      class="sm:mt-2 w-2 h-2 rounded-full"
    />
    <div
      class:border-pink-500={highlighted}
      class="border w-full sm:w-0 h-full"
    />
    <div
      class:bg-gray-500={!highlighted}
      class:bg-pink-500={highlighted}
      class="sm:mb-2 w-2 h-2 rounded-full"
    />
  </div>
</div>
