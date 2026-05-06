<script lang="ts">
  import Card from './Card.svelte';
  import { base } from '$app/paths';

  interface Document {
    title: string;
    description: string;
    link: string;
    linkTitle: string;
  }

  const docModules = import.meta.glob<Document>('/src/content/documents/*.json', { eager: true, import: 'default' });
  const documents = Object.values(docModules);
</script>

<section id="documents" class="container my-5">
  <h2 class="text-center mb-4">Dokumente</h2>
  {#each documents as doc}
    <div class="card-content">
      <div class="card-body">
        <Card
          title={doc.title}
          description={doc.description}
          link={base + doc.link}
          linkTitle={doc.linkTitle}
        />
      </div>
    </div>
  {/each}
</section>
