<script>
  import Card from "./components/card.svelte";
  import GameBar from "./components/gameBar.svelte";
  import GameZone from "./components/gameZone.svelte";
  import PlayerZone from "./components/playerZone.svelte";
  import { deck, gameStack, score } from "./stores.js";


</script>
<GameBar />
<div class="title">
  <h1>Dup&#8239;lici   
    <span class="dup">p</span>
  </h1>
</div>
<div class="player-info">
  <!-- <span class='score'>Score: {$score}</span> -->
  <span class='cards-remaining'>Cards Remaining: {$deck.length}</span>
</div>
{#if $gameStack.length > 0}
<!-- game zone -->
<GameZone/>
<!-- player zone -->
<PlayerZone/>
{:else}
  <div class="card-container">
    <Card card={$deck[0]} />
    <Card card={$deck[1]} />
    <Card card={$deck[2]} />
  </div>
{/if}

<style lang="scss">
  .player-info {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  @keyframes reverse {
    from {
      left: 85px;
      top: 0px;
    }
    to {
      left: 95px;
      top: -10px;
    }
  }

  @keyframes slideAndFade {
    from {
      left: 95px;
      top: -10px;
    }
    to {
      left: 85px;
      top: 0px;
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
      font-weight: 300;
      position: relative;
      display: inline-block;
      user-select: none; 
      margin:10px 0 25px;
      cursor: pointer;
    }
    .dup {
      position: absolute;
      left: 85px;
      top: 0px;
      user-select: none; 
      cursor: pointer;
      animation: reverse 0.5s forwards;
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
