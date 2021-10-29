<script>
  import Section from "../Section.svelte";
  import SectionHeader from "../SectionHeader.svelte";
  import SectionContent from "../SectionContent.svelte";
</script>

<Section id="about">
  <SectionHeader title="About" />
  <SectionContent>
    <div class="flex flex-col gap-4 text-lg">
      <p>
        I'm a <span class="text-accent">software developer</span> with over
        <span class="text-accent">10 years of experience</span>.
      </p>

      <div class="border-l-2 border-accent text-secondary">
        <p class="pl-2">
          I'm motivated to help people by creating high-end apps that would
          enhance the user’s performance while performing daily tasks through
          the use of today’s technology, so they can be more effective in their
          activities and gain time to live a good life as everyone deserves.
        </p>
      </div>

      <p>
        I have maintained, developed, and launched multiple projects from
        scratch, carrying the development of its back-end and front-end
        codebases.
      </p>

      <p>
        My current stack of preference includes <strong
          >Golang, JavaScript, TypeScript, SvelteJS, Firebase, Docker</strong
        > and others technologies related to them.
      </p>
    </div>
  </SectionContent>
</Section>
