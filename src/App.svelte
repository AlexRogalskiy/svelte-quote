<script lang="ts">
  import { onMount } from "svelte";
  import { initWs } from "api/ws";
  import Table from "components/Table/Table.svelte";

  onMount(() => {
    initWs();
  });
</script>

<main>
  <Table />
</main>
