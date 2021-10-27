<script>
  import Sidebar from "$lib/components/menu/Sidebar.svelte";
  import Topbar from "$lib/components/menu/Topbar.svelte";

  import "../app.css";
</script>

<div class="lg:flex w-full h-full">
  <div class="hidden lg:fixed lg:block">
    <Sidebar />
  </div>
  <div class="lg:hidden">
    <Topbar />
  </div>
  <div class="lg:ml-64 w-screen ml-0">
    <slot />
  </div>
</div>
