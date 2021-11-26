<script>
  import { createDeck } from "../helpers/deckHelpers";
  let cards = createDeck();
</script>

<main>
  <h1>Duplici</h1>
  <div class="card-container">
    {#each cards as card}
      <div class="card">
        <div class="card-content">{card.toString()}</div>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-wrap: break-word;
  }

  .card {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(24, 24, 24);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.281);
    border-radius: 100px;
    display: inline-block;
    margin: 5px;
  }

  .card-content {
    height: 100px;
    width: 100px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    overflow-wrap: break-word;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
