<script lang="ts">
  import { quote } from "stores";
  import type { IQuote } from "types";
  import "../../style.css";
  import { ws } from "api";
  import { useViewPort as viewport } from "hooks";

  export let id: string;

  let item: IQuote;
  quote.subscribe((state) => {
    item = state[id];
  });
</script>

<div
  class="row"
  use:viewport
  on:enterViewport={() => ws.subscribe(id)}
  on:exitViewport={() => ws.unsubscribe(id)}
>
  <div class="item">{item.name}</div>
  <div class="item">{item.bid}</div>
  <div class="item">{item.ask}</div>
  <div class="item">{item.high}</div>
  <div class="item">{item.low}</div>
  <div class="item">{item.last}</div>
</div>
