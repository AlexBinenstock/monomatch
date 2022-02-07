<script>
    import { score, deck } from "../stores.js";
    import GameControlls from "./gameControlls.svelte"
</script>

<div class="game-bar">
    <span class='score'>Score: {$score}</span>
    <GameControlls />
    <span class='score'>Cards Remaining: {$deck.length}</span>
</div>

<style lang="scss">
    .game-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
