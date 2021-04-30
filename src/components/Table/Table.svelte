<script lang="ts">
  import { keys } from "stores";
  import { ws } from "api";
  import Row from "./components/Row/Row.svelte";
  import type { KeysStoreType } from "types";
  import "./style.css";

  let keysArray: KeysStoreType;
  keys.subscribe((state) => {
    keysArray = state;
  });
</script>

<div class="container">
  <button onClick={ws.close}>close</button>
  <div class="row">
    <div class="item">Ticker</div>
    <div class="item">Bid</div>
    <div class="item">Ask</div>
    <div class="item">High</div>
    <div class="item">Low</div>
    <div class="item">Last</div>
  </div>
  {#each keysArray as item}
    <Row id={item} />
  {/each}
</div>
