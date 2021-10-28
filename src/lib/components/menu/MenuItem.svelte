<script>
  export let name, link, openedMenu;
  import { selected } from "$lib/stores/menu";

  function toggleMenu() {
    openedMenu = !openedMenu;
  }

  function handleClick() {
    $selected = name;
    toggleMenu();
  }
</script>

<li
  class:bg-gray-700={$selected === name}
  class:border-accent={$selected === name}
  class:border-secondary={$selected !== name}
  class="h-12 text-primary text-lg flex justify-center items-center hover:bg-gray-600 border-l-4 hover:border-accent border-r-4 lg:border-r-0"
>
  <a
    class="w-full h-full flex justify-center items-center"
    aria-label={"Navigate to the " + name + " section"}
    href={link}
    on:click={handleClick}
  >
    <span>{name}</span>
  </a>
</li>
