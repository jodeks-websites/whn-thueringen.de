<script lang="ts">
  import WaveTop from "$lib/components/WaveTop.svelte";
  import { base } from '$app/paths';
  import einstellungen from '../../content/einstellungen.json';

  const imp = einstellungen.impressum;
</script>

<WaveTop />

<footer class="text-center p-4" id="Impressum">
  <div class="container justify-content-center d-flex align-items-center flex-column">
    <h4>Impressum</h4>
    <p><strong>{imp.vereinsname}</strong></p>
    <p class='m-0'>Ansprechpartner: {imp.ansprechpartner}</p>
    <p>Telefon: <a href={`tel:${imp.telefon.replace(/\s/g, '')}`} class='mb-3'>{imp.telefon}</a></p>
    {#if imp.adressZusatz}
      <p class='m-0'>{imp.adressZusatz}</p>
    {/if}
    <p class='m-0'>{imp.strasse}</p>
    <p class='m-0'>{imp.plz} {imp.ort}</p>
    <p class='mb-3'>{imp.land}</p>
    <p>Email: <a href={`mailto:${imp.email}`}>{imp.email}</a></p>
    <p>Vertreten durch: {imp.vertretung}</p>
    <p>StNr.: {imp.steuernummer}</p>
    <div class="line"></div>
    <a href="{base}/datenschutz/">Datenschutzerklärung</a>
  </div>
</footer>
