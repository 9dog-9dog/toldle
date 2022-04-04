import { MAX_WORD_LENGTH } from './settings'

// NOTE(9dog): The guesses should have tailing space
// if their length is less than MAX_WORD_LENGTH
export const WORDS = [
  'twitch', // 2022-03-19
  'degens', // 2022-03-20

  'canada', // 2022-03-21
  'pewpew', // 2022-03-22
  'acorn', // 2022-03-23
  'wotah', // 2022-03-24
  'quokka', // 2022-03-25

  'disney', // 2022-03-26
  'nibble', // 2022-03-27
  'camel', // 2022-03-28
  'cheer', // 2022-03-29
  'drive', // 2022-03-30

  'aespa', // 2022-03-31

  'snore', // 2022-04-01
  'sekush', // 2022-04-02
  'billie', // 2022-04-03
  'laptop', // 2022-04-04
  'mamma', // 2022-04-05

  'waifu', // 2022-04-06
  'fight', // 2022-04-07
  'think', // 2022-04-08
  'shrimp', // 2022-04-09
  'surviv', // 2022-04-10

  'tricky', // 2022-04-11
  'drives', // 2022-04-12
  'sleep', // 2022-04-13
  '', // 2022-04-14
  '', // 2022-04-15

  'travel', // 2022-04-16
  'flight', // 2022-04-17
  '', // 2022-04-18
  '', // 2022-04-19
  '', // 2022-04-20
].map((word) => word.padEnd(MAX_WORD_LENGTH))
