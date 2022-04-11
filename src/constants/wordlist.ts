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
  'uturn', // 2022-04-10

  'thanku', // 2022-04-11

  // unused
  'dotol', // 2022-04-12
  'dotol', // 2022-04-13
  'dotol', // 2022-04-14
  'dotol', // 2022-04-15

  'dotol', // 2022-04-16
  'dotol', // 2022-04-17
  'dotol', // 2022-04-18
  'dotol', // 2022-04-19
  'dotol', // 2022-04-20

  'dotol', // 2022-04-21
  'dotol', // 2022-04-22
  'dotol', // 2022-04-23
  'dotol', // 2022-04-24
  'dotol', // 2022-04-25

  'dotol', // 2022-04-26
  'dotol', // 2022-04-27
  'dotol', // 2022-04-28
  'dotol', // 2022-04-29
  'dotol', // 2022-04-30
].map((word) => word.padEnd(MAX_WORD_LENGTH))
