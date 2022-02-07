<script>
    import Card from "./card.svelte";
    export let deck = [];
</script>

<div class="player-zone">
    {#each Array(3) as _, i}
        <Card isGameCard={false} card={deck[i]} />
    {/each}
</div>
  
    

<style lang="scss">
    .player-zone {
        display: flex;
        align-items: center;
        justify-content: center;
}
</style>
