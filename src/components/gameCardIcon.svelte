<script>
    import {
        gameSelectedIcon,
        playerSelectedIcon,
        gameStack,
        deck,
    } from "../stores.js";
    export let iconObj = {};

    function handleClick() {
        if (iconObj?.symbol === $gameSelectedIcon?.symbol) {
            $gameSelectedIcon = null;
            return;
        }

        $gameSelectedIcon = iconObj;

        if ($gameSelectedIcon?.icon === $playerSelectedIcon?.icon) {

            //




            //add the players card to the top of the stack
            const cardToMove = $deck.find(card => card.cardId === $playerSelectedIcon.cardId);
            $gameStack = [cardToMove, ...$gameStack];
            //remove the user's card from their deck
            let updatedDeck = $deck.filter((card) => {
                return card.cardId !== $playerSelectedIcon.cardId;
            });
            $deck = [...updatedDeck];
            //clear the selections
            $gameSelectedIcon = null;
            $playerSelectedIcon = null;
            setTimeout(() => jdenticon(), 0.1);
        }
    }
</script>

<svg
    on:click={handleClick}
    class="card-icon {$gameSelectedIcon?.symbol === iconObj?.symbol &&
        'selected'}"
    data-jdenticon-value={iconObj.icon}
/>

<style lang="scss">
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    .card-icon {
        cursor: pointer;
        animation: rotation 10s infinite linear;
        width: 7.5vw;
        height: 7.5vw;
        padding: 0.75vw;
        filter: drop-shadow(1px 1px 1px #000000);
        &:hover {
            filter: drop-shadow(1px 1px 1px #ff8860);
        }
        &:active {
            filter: drop-shadow(1px 1px 1px #93f2ff);
        }
        &.selected {
            filter: drop-shadow(1px 1px 10px #00b900);
        }
    }
</style>
