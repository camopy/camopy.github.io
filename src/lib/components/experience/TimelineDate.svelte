<script>
  export let startDate, endDate, highlighted;
</script>

<div class="flex gap-4">
  <div class="flex flex-col justify-between">
    <p
      class:text-pink-500={highlighted}
      class:text-lg={highlighted}
      class:italic={!highlighted}
      class:text-gray-500={!highlighted}
      class="w-20 text-right"
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

  <div class="flex flex-col items-center">
    <div
      class:bg-gray-500={!highlighted}
      class:bg-pink-500={highlighted}
      class="mt-2 w-2 h-2 rounded-full"
    />
    <div class:border-pink-500={highlighted} class="border h-full" />
    <div
      class:bg-gray-500={!highlighted}
      class:bg-pink-500={highlighted}
      class="mb-2 w-2 h-2 rounded-full"
    />
  </div>
</div>
