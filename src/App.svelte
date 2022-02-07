<script>
  import Card from "./components/card.svelte";
  import GameBar from "./components/gameBar.svelte";
  import GameZone from "./components/gameZone.svelte";
  import PlayerZone from "./components/playerZone.svelte";
  import { deck, gameStack } from "./stores.js";

</script>

<div class="title">
  <h1>Dup&#8239;lici   
    <span class="dup">p</span>
  </h1>
</div>
<GameBar />
{#if $gameStack.length > 0}
<!-- game zone -->
<GameZone gameStack = {$gameStack} />
<!-- player zone -->
<PlayerZone deck = {$deck} />
{:else}
  <div class="card-container">
    {#each $deck as card}
      <Card {card} />
    {/each}
  </div>
{/if}

<style lang="scss">
  @keyframes slideAndFade {
    from {
      left: 85px;
      top: 0px;
    }
    to {
      left: 95px;
      top: -10px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
      position: relative;
      display: inline-block;
    }
    .dup {
      position: absolute;
      left: 85px;
      top: 0px;
    }
    &:hover {
      & .dup {
        animation: slideAndFade 0.5s forwards;
      }
    }
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-wrap: break-word;
  }
</style>
