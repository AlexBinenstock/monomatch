<script>
    import {gameSelectedIcon} from "../stores.js"
    import {checkMatch} from "../helpers/playerHelpers.js"
    export let iconObj = {};

    function handleClick() {
        if (iconObj?.symbol === $gameSelectedIcon) {
            $gameSelectedIcon = null;
            return;
        }
        
        $gameSelectedIcon = iconObj;

        checkMatch();
	}

</script>

<svg on:click="{handleClick}" class="card-icon {$gameSelectedIcon?.symbol === iconObj?.symbol && 'selected'}" data-jdenticon-value="{iconObj.icon}"></svg>    

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
        cursor:pointer;
        animation: rotation 10s infinite linear;
        width: 7.5vw;
        height:7.5vw;
        padding: .75vw;
        filter: drop-shadow(1px 1px 1px #000000);
        &:hover {
            filter: drop-shadow(3px 3px 3px #ff8860);
        }
        &:active {
            filter: drop-shadow(7px 7px 7px #93f2ff);
        }
        &.selected{
            filter: drop-shadow(1px 1px 10px #00b900);
        }
    }
</style>
