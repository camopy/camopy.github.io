<script>
  export let link, label;
</script>

<a href={link} aria-label={label}>
  <slot />
</a>
