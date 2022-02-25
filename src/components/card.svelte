<script>
    import PlayerCardIcon from "./PlayercardIcon.svelte";
    import GameCardIcon from "./gameCardIcon.svelte";
    export let card = {};
    export let playerCardPosition = null;
    //make sure our icons aren't in the same order on every card.
</script>

<div class={!playerCardPosition ? "game-card card" : "card"}>
    <div class="card-content">
        {#each card.icons as iconObj (iconObj.symbol)}
            {#if playerCardPosition}
                <PlayerCardIcon {iconObj} />
            {:else}
                <GameCardIcon {iconObj} />
            {/if}
        {/each}

        <span class="card-id">
            {card.cardId}
        </span>
    </div>
</div>

<style lang="scss">
    .card {
        height: 28vw;
        width: 28vw;
        position: relative;
        border: 5px solid rgb(24, 24, 24);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.281);
        border-radius: 1vw;
        display: inline-block;
        margin: 5px;
        transition: all ease-in-out;
        background-color: rgb(43, 43, 43);
    }

    .card-id {
        position: relative;
        top: 65px;
        left: 0;
        width: 0;
    }

    @keyframes rainbow {
        100%,
        0% {
            border-color: rgb(255, 0, 0);
        }
        8% {
            border-color: rgb(255, 127, 0);
        }
        16% {
            border-color: rgb(255, 255, 0);
        }
        25% {
            border-color: rgb(127, 255, 0);
        }
        33% {
            border-color: rgb(0, 255, 0);
        }
        41% {
            border-color: rgb(0, 255, 127);
        }
        50% {
            border-color: rgb(0, 255, 255);
        }
        58% {
            border-color: rgb(0, 127, 255);
        }
        66% {
            border-color: rgb(0, 0, 255);
        }
        75% {
            border-color: rgb(127, 0, 255);
        }
        83% {
            border-color: rgb(255, 0, 255);
        }
        91% {
            border-color: rgb(255, 0, 127);
        }
    }

    .game-card {
        animation: rainbow 2.5s linear infinite;
    }

    .card-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>
