<script lang="ts">
  import WaveTop from "./WaveTop.svelte";
  import WaveBottom from "./WaveBottom.svelte";

  import { base } from '$app/paths';

  interface Media {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    poster?: string;
    youtubeId?: string;
  }

  interface CardProps {
    publishedAt: string;
    date: string;
    title: string;
    description: string;
    media: Media[];
  }

  const newsModules = import.meta.glob<CardProps>('/src/content/news/*.json', { eager: true, import: 'default' });
  const newsCards = Object.values(newsModules).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
</script>

<WaveTop />

<div id="News" class="secondary-background">
  <section class="news-section container text-center">
    <h2 class="text-center mb-3">News & Aktuelles</h2>
    <div class="row justify-content-center">
      {#each newsCards as card, i}
        <div class="col-md-5 mb-4 flex-shrink">
          <div class="timeline-date px-4">{card.date}</div>
          <div class="card-content">
            <div id={`news-carousel-${i}`} class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner">
                {#each card.media as item, index}
                  <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    {#if item.type === 'image'}
                      <img
                        src={base + item.src}
                        class="card-img-top-content"
                        alt={item.alt}
                      />
                    {:else if item.type === 'video'}
                      {#if item.youtubeId}
                        <div class="ratio ratio-16x9">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.youtubeId}`}
                            title={item.alt}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                          </iframe>
                        </div>
                      {:else}
                        <div class="video-container">
                          <video
                            class="card-img-top-content"
                            controls
                            poster={item.poster}
                            preload="none">
                            <source src={base + item.src} type="video/mp4">
                            <track kind="captions">
                            Ihr Browser unterstützt keine Videos.
                          </video>
                        </div>
                      {/if}
                    {/if}
                  </div>
                {/each}
              </div>
              {#if card.media.length > 1}
                <button class="carousel-control-prev video-aware-control" type="button" data-bs-target={`#news-carousel-${i}`} data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next video-aware-control" type="button" data-bs-target={`#news-carousel-${i}`} data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              {/if}
            </div>
            <div class="card-body">
              <h5 class="card-title">{card.title}</h5>
              <p class="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <a href="{base}/projekte/" class="btn-own">Alle Projekte</a>
  </section>
</div>

<WaveBottom />

<style>
  /* Video container styling */
  .video-container {
    position: relative;
    width: 100%;
  }

  video.card-img-top-content {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  /* Adjust carousel controls for videos */
  .video-aware-control {
    top: auto;
    bottom: 50px; /* Move controls up from the bottom to avoid overlap with video controls */
    opacity: 0.8;
    width: 10%; /* Make controls narrower */
  }

  /* Optional: Make controls more visible on hover */
  .video-aware-control:hover {
    opacity: 1;
  }

  /* Alternative: Move controls to top portion of carousel only */
  .carousel:has(video) .carousel-control-prev,
  .carousel:has(video) .carousel-control-next {
    height: 70%; /* Only cover the top 70% of the carousel */
    top: 0;
  }

  /* Another option: Only show controls on hover */
  .carousel {
    position: relative;
  }

  .carousel .carousel-control-prev,
  .carousel .carousel-control-next {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .carousel:hover .carousel-control-prev,
  .carousel:hover .carousel-control-next {
    opacity: 0.8;
  }
</style>
