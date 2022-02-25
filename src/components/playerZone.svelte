<script>
    import Card from "./card.svelte";
    import { deck } from "../stores.js";
</script>

<div class="player-zone">
    {#if $deck.length > 3}
        {#each Array(3) as _, i ($deck[i].cardId)}
            <Card playerCardPosition={i + 1} card={$deck[i]} />
        {/each}
    {:else}
        <!-- if we're at the end of the deck -->
        {#each $deck as card, i}
            <Card playerCardPosition={2} card={card} />
        {/each}
    {/if}
</div>

<style lang="scss">
    .player-zone {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
