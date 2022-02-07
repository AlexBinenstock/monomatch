import { writable } from "svelte/store";
import { newDeck } from "./helpers/deckHelpers";

export const deck = writable(newDeck());
export const players = writable({});
export const score = writable(0);
export const playerSelectedIcon = writable(null);
export const gameSelectedIcon = writable(null);
export const gameStack = writable([]);