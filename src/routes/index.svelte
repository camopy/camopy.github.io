<script>
  import About from "$lib/components/about/About.svelte";
  import Education from "$lib/components/education/Education.svelte";
  import Experience from "$lib/components/experience/Experience.svelte";
  import Skills from "$lib/components/skills/Skills.svelte";
</script>

<div class="flex-1">
  <div class="flex flex-col">
    <About />
    <Experience />
    <Skills />
    <Education />
  </div>
</div>
