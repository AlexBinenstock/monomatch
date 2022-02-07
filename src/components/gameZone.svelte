<script>
    import Card from "./card.svelte";
    export let gameStack = [];
</script>

<div class="game-zone">
    <Card isGameCard={true} card={gameStack[gameStack.length - 1]} />
</div>
  
    

<style lang="scss">
    .game-zone {
        display: flex;
        align-items: center;
        justify-content: center;
}
</style>
