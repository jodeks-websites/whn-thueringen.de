<script lang="ts">
  import Card from './Card.svelte';
  import { base } from '$app/paths';

  interface Unterstuetzer {
    name: string;
    href: string;
    logo: string;
  }

  const modules = import.meta.glob<Unterstuetzer>('/src/content/unterstuetzer/*.json', { eager: true, import: 'default' });
  const unterstuetzer = Object.values(modules);
</script>

<section class="container my-5" id="supporters">
  <h2 class="text-center mb-4">Unsere Unterstützer</h2>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
    {#each unterstuetzer as u}
      <Card
        title={u.name}
        imgSrc={base + u.logo}
        imgSrcAlt={u.name}
        link={u.href}
      />
    {/each}
  </div>
</section>
