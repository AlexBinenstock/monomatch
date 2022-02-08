<script>
    import Card from "./card.svelte";
    import { deck } from "../stores.js"
</script>

<div class="player-zone">
    {#each Array(3) as _, i ($deck[i].cardId)}
        <Card isGameCard={false} card={$deck[i]}/>
    {/each}
</div>
  
    

<style lang="scss">
    .player-zone {
        display: flex;
        align-items: center;
        justify-content: center;
}
</style>
