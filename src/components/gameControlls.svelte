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
        setTimeout(() => jdenticon(), .1);
        //deal 3 cards to each player
    }

    function handleAddPlayer() {
        alert(`coming soon`);
    }
</script>

<div class="controlls">
    <div>    
        <button on:click={handleAddPlayer}>Join Room</button>
        <button on:click={handleAddPlayer}>Create Room</button>
    </div>
    <button on:click={handleNewGame}>New Game</button>
</div>

<style lang="scss">
    .controlls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
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
