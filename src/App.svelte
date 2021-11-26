<script>
  let cards = [];
  let iconCount = 57;
  let secretNums = [0, 1, 3, 13, 32, 36, 43, 52];

  // create empty deck of cards
  for (let i = 0; i < iconCount; i++) {
    cards.push([]);
  }

  for (let i = 0; i < iconCount; i++) {
    if (secretNums.includes(i)) {
      cards[i].push(i);
    }
  }
</script>

<main>
  <h1>Duplici</h1>
  {#each cards as card}
    <div class="card">{card}</div>
  {/each}
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

  .card {
    height: 100px;
    width: 100px;
    border: 5px solid rgb(24, 24, 24);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.281);
    border-radius: 100px;
    display: inline-block;
    margin: 5px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
