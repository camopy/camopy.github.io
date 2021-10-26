<script>
  export let name, link;
  import { selected } from "$lib/stores/menu";

  function handleClick() {
    $selected = name;
    console.log($selected);
  }
</script>

<a href={link} on:click={handleClick}>
  <li
    class:bg-gray-100={$selected === name}
    class:border-pink-500={$selected === name}
    class:border-white={$selected !== name}
    class="h-12 text-lg flex justify-center items-center hover:bg-gray-200 border-l-4 hover:border-pink-500"
  >
    {name}
  </li>
</a>
