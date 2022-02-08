import { newDeck } from "./deckHelpers";
import {players, deck, gameStack, playerSelectedIcon, gameSelectedIcon} from "../stores.js"

export const createPlayer = ({name, id }) => {
    const player = {
        selectedCardIcon:null,
    }
    $players['player1'] = player;
    
  };

//   export const isMatch = (playerIcon, gameIcon) => {

//     //if playericon and game icon match
//     if (playerIcon && playerIcon === gameIcon) {
        
//         //move to top of game stack
//         gameStack.update( gStack => {
//             return [deck[0], ...gStack]
//         });
        
//         //take card out of stack
//         deck.update( nDeck => {
//             return removeTopCard(nDeck);
//         });
//         return true;
//     }
//     return false;
//   }

  export const removeTopCard = (cards) => {
    cards.shift();
    return [...cards];
  }
  