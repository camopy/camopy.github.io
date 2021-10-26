<script>
  import Menu from "$lib/components/menu/Menu.svelte";

  import "../app.css";
</script>

<div class="flex w-full h-full">
  <Menu />
  <slot />
</div>
