<script lang="ts">
  import leitthemen from '../../content/leitthemen.json';
</script>

<section class="container py-4">
  <h2 class="text-center pb-2">{leitthemen.sectionTitle}</h2>
  <div id="leitthemenCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      {#each leitthemen.items as item, index}
        <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <div class="card-content">
            <div class="card-body text-center">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="carousel-control-prev" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" aria-label="Previous"></span>
    </button>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="carousel-control-next" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" aria-label="Next"></span>
    </button>
  </div>
</section>
