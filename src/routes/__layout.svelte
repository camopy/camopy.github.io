<script>
  import Menu from "$lib/components/menu/Menu.svelte";

  import "../app.css";
</script>

<div class="flex w-full h-full">
  <div class="hidden lg:fixed lg:block">
    <Menu />
  </div>
  <div class="lg:ml-64 ml-0">
    <slot />
  </div>
</div>
