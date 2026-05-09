<script lang="ts">
  import WaveTop from './WaveTop.svelte';
  import WaveBottom from './WaveBottom.svelte';
  import { base } from '$app/paths';

  interface Vorstandsmitglied {
    name: string;
    role?: string;
    photo?: string;
  }

  const modules = import.meta.glob<Vorstandsmitglied>('/src/content/vorstand/*.json', { eager: true, import: 'default' });
  const mitglieder = Object.values(modules);
</script>

<WaveTop />
<div id="Vorstand" class="secondary-background">
  <section class="container" id="team">
    <h2 class="text-center mb-4">Vorstand</h2>
    <div class="row justify-content-center">
      {#each mitglieder as mitglied}
        <div class="col-md-4 mb-4">
          <div class="card-content">
            {#if mitglied.photo}
              <img src={base + mitglied.photo} class="card-img-top-content" alt={mitglied.name} loading="lazy" />
            {/if}
            <div class="card-body text-center">
              <h5 class="card-title">{mitglied.name}</h5>
              {#if mitglied.role}
                <p class="card-text text-muted">{mitglied.role}</p>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
<WaveBottom />
