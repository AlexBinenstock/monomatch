import { newDeck } from "./deckHelpers";
import {players, deck, gameStack, playerSelectedIcon, gameSelectedIcon} from "../stores.js"

export const createPlayer = ({name, id }) => {
    const player = {
        selectedCardIcon:null,
    }
    $players['player1'] = player;
    
  };

  export const checkMatch = () => {

    // //if playericon and game icon match
    // if (playerSelectedIcon.icon === gameSelectedIcon.icon) {
        
    //     //move to top of game stack
    //     gameStack.update( gStack => {
    //         return [deck[0], ...gStack]
    //     });
        
    //     //take card out of stack
    //     deck.update( nDeck => {
    //         return removeTopCard(nDeck);
    //     });
    // }

  }

  export const removeTopCard = (cards) => {
    cards.shift();
    return [...cards];
  }
  