<script lang="ts">
  import ProjectCard from './Card.svelte';
  import { base } from '$app/paths';

  interface ProjectImage {
    src: string;
    alt: string;
  }

  interface Project {
    publishedAt: string;
    date: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
    images: ProjectImage[];
  }

  const modules = import.meta.glob<Project>('/src/content/projekte/*.json', { eager: true, import: 'default' });
  const projekte = Object.values(modules).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
</script>

<div>
  <h1 class="text-center">Projekte</h1>
  <div class="timeline">
    <div class="row justify-content-center">
      <div class="col-md-7 mb-4">
        {#each projekte as projekt, i}
          <ProjectCard
            target={`projekt-${i}`}
            title={projekt.title}
            date={projekt.date}
            description={projekt.description}
            link={projekt.link ?? ''}
            linkText={projekt.linkText ?? ''}
            linkClass={projekt.link ? 'btn-own' : ''}
            images={projekt.images.map(img => ({ ...img, src: base + img.src }))}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
