<script>
  export let name, link;
  import { selected } from "$lib/stores/menu";

  function handleClick() {
    $selected = name;
    console.log($selected);
  }
</script>

<li
  class:bg-gray-700={$selected === name}
  class:border-accent={$selected === name}
  class:border-secondary={$selected !== name}
  class="h-12 text-primary text-lg flex justify-center items-center hover:bg-gray-600 border-l-4 hover:border-accent"
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
