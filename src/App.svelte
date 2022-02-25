<script>
  import Card from "./components/card.svelte";
  import GameBar from "./components/gameBar.svelte";
  import GameZone from "./components/gameZone.svelte";
  import PlayerZone from "./components/playerZone.svelte";
  import { deck, gameStack, score } from "./stores.js";
  let random = Math.floor(Math.random() * 1000)
</script>

{#if $gameStack.length > 0}
  {#if $deck.length > 0}
    <GameBar />
    <div class="title">
      <h1>
        Dup&#8239;lici
        <span class="dup">p</span>
      </h1>
    </div>
    <div class="player-info">
      <!-- <span class='score'>Score: {$score}</span> -->
      <span class="cards-remaining">Cards Remaining: {$deck.length}</span>
    </div>
    <!-- game zone -->
    <GameZone />
    <!-- player zone -->
    <PlayerZone />
  {:else}
    <h1>You Win!</h1>
  {/if}
{:else}
  <div class="home-container">
    <GameBar />
    <div class="title">
      <h1>
        Dup&#8239;lici
        <span class="dup">p</span>
      </h1>
    </div>
    <div class="banner">
      {#each Array(10) as _, i}
        <svg width="10%" data-jdenticon-value={i + random } />
      {/each}
    </div>
    <div class="instructions">
      <h1>Match icons from your cards with the game card in the center.</h1>
      <h2>Win the game by getting rid of all your cards the fastest.</h2>
    </div>
    <div class="banner">
      {#each Array(50) as _, i}
        <svg width="10%" data-jdenticon-value={i + random + 10} />
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  .player-info {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .instructions {
    padding: 0 20px;
  }

  .home-container {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 8px 8px 0;
  }

  .banner {
    @for $i from 1 through 60 {
      svg:nth-child(#{$i}) {
        opacity: 0.75 - $i * 0.015;
      }
    }
  }

  .banner {
    &:first-child {
      padding: 20px 0;
    }
    width: 100%;
    padding: 20px 0 0 0;
    margin: 0;
    position: relative;
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
      margin: 10px 0 25px;
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
