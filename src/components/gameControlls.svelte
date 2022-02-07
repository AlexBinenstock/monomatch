<script>
    import { newDeck } from "../helpers/deckHelpers.js";
    import { deck, gameStack } from "../stores.js";

    function handleNewGame() {
        //place one card in the gameStack
        $deck = [...newDeck()]
        $gameStack = [$deck[0]];
        let tempDeck = $deck;
        tempDeck.shift();
        $deck = [...tempDeck]
        setTimeout(() => jdenticon(), 1);
        //deal 3 cards to each player
    }

    function handleAddPlayer() {
        alert(`add player`);
    }
</script>

<div class="controlls">
    <button on:click={handleNewGame}>New Game</button>
    <button on:click={handleAddPlayer}>Add Player</button>
</div>

<style lang="scss">
    .controlls {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>
