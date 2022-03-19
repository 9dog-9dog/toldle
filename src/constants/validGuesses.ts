import { MAX_WORD_LENGTH } from './settings'
import { CUSTOM_GUESSES } from './guesses/custom'
import { FIVE_LETTER_GUESSES } from './guesses/fiveLetters'
import { SIX_LETTER_GUESSES } from './guesses/sixLetters'

export const VALID_GUESSES = ([] as string[])
  .concat(CUSTOM_GUESSES, FIVE_LETTER_GUESSES, SIX_LETTER_GUESSES)
  .map((word) => word.padEnd(MAX_WORD_LENGTH).toLocaleLowerCase())
