<script>
  import Scroller from "@sveltejs/svelte-scroller";

  import About from "$lib/components/about/About.svelte";
  import Education from "$lib/components/education/Education.svelte";
  import Experience from "$lib/components/experience/Experience.svelte";
  import Skills from "$lib/components/skills/Skills.svelte";
  import { selected } from "$lib/stores/menu";
  import SideProjects from "$lib/components/sideProjects/sideProjects.svelte";

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
          $selected = "Side Projects";
          break;
        case 3:
          $selected = "Skills";
          break;
        case 4:
          $selected = "Education";
          break;
      }
    }
  }
</script>

<Scroller top={0} bottom={1} threshold={0.5} bind:progress bind:index>
  <div slot="background" />
  <div slot="foreground" class="flex-1 flex flex-col">
    <About />
    <Experience />
    <SideProjects />
    <Skills />
    <Education />
  </div>
</Scroller>
