<script>
    import Card from "./card.svelte";
    import { gameStack } from "../stores.js"
</script>

<div class="game-zone">
    <Card isGameCard={true} card={$gameStack[0]} />
</div>
  
    

<style lang="scss">
    .game-zone {
        display: flex;
        align-items: center;
        justify-content: center;
}
</style>
