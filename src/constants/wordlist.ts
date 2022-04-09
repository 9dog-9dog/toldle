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
  'mrland', // 2022-04-05

  'waifu', // 2022-04-06
  'sleep', // 2022-04-07
  'think', // 2022-04-08
  'lurker', // 2022-04-09
  'ordler', // 2022-04-10

  'thanku', // 2022-04-11

  // unused
  'ordler', // 2022-04-12
  'family', // 2022-04-13
  'mamma', // 2022-04-14
  'travel', // 2022-04-15

  'flight', // 2022-04-17
  'thanku', // 2022-04-18
  'surviv', // 2022-04-19
].map((word) => word.padEnd(MAX_WORD_LENGTH))
