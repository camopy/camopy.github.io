<script>
  export let skills, title;
</script>

<h3 class="text-lg font-bold bg-gray-200 px-2 text-center">{title}</h3>
<div class="flex gap-10 flex-wrap justify-around">
  {#each skills as skill}
    <div class=" flex flex-col items-center gap-2">
      <img width="90px" height="90px" src={skill.image} alt={skill.name} />
      <h4>{skill.name}</h4>
    </div>
  {/each}
</div>
