<script lang="ts">
  import BankDetailsCard from './BankDetailsCard.svelte';
  import { base } from '$app/paths';
  import einstellungen from '../../content/einstellungen.json';
</script>

<div class="container my-5 text-center">
  <h2 class="card-title">Unsere Bankverbindung</h2>
  <div class="row justify-content-center">
    <BankDetailsCard
      qrCodeSrc={base + einstellungen.bank.qrCode}
      accountHolder={einstellungen.bank.accountHolder}
      iban={einstellungen.bank.iban}
      bic={einstellungen.bank.bic}
    />
  </div>
</div>
