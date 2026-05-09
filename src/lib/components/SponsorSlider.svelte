<script lang="ts">
  import { base } from '$app/paths';

  interface Unterstuetzer {
    name: string;
    href: string;
    logo: string;
  }

  const modules = import.meta.glob<Unterstuetzer>('/src/content/unterstuetzer/*.json', { eager: true, import: 'default' });
  const slides = Object.values(modules);

  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides, ...slides, ...slides];
</script>

<div class="slider">
  <div class="slide-track">
    {#each duplicatedSlides as slide}
      <div class="slide">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href={slide.href} target="_blank" rel="noopener noreferrer">
          <img src={base + slide.logo} alt={slide.name} loading="lazy" />
        </a>
      </div>
    {/each}
  </div>
</div>
