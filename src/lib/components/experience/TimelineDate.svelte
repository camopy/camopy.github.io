<script>
  export let startDate, endDate, highlighted;
</script>

<div class="flex gap-4">
  <p
    class:text-pink-500={highlighted}
    class:text-lg={highlighted}
    class:italic={!highlighted}
    class:text-gray-500={!highlighted}
    class="w-40 text-right"
  >
    {startDate}
    {endDate ? " - " + endDate : " - Now"}
  </p>
  <div class="flex flex-col items-center">
    <div
      class:bg-gray-500={!highlighted}
      class:bg-pink-500={highlighted}
      class="mt-2 w-2 h-2 rounded-full"
    />
    <div class:border-pink-500={highlighted} class="border h-full" />
  </div>
</div>
