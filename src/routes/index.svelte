<script>
  import Scroller from "@sveltejs/svelte-scroller";

  import About from "$lib/components/about/About.svelte";
  import Education from "$lib/components/education/Education.svelte";
  import Experience from "$lib/components/experience/Experience.svelte";
  import Skills from "$lib/components/skills/Skills.svelte";
  import { selected } from "$lib/stores/menu";

  let index, progress;

  $: if (index || progress) {
    if (progress >= 0.95) {
      $selected = "Education";
    } else if (progress <= 0.02) {
      $selected = "About";
    } else {
      switch (index) {
        case 0:
          $selected = "About";
          break;
        case 1:
          $selected = "Experience";
          break;
        case 2:
          $selected = "Skills";
          break;
        case 3:
          $selected = "Education";
          break;
      }
    }
  }
</script>

<head>
  <title>Paulo Camopy | Software Developer</title>
  <meta
    name="description"
    content="Paulo Camopy, a Software Developer with over 10 years of experience."
  />
</head>

<Scroller top={0} bottom={1} threshold={0.5} bind:progress bind:index>
  <div slot="background" />
  <div slot="foreground" class="flex-1 flex flex-col">
    <About />
    <Experience />
    <Skills />
    <Education />
  </div>
</Scroller>
