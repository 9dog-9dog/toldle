import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { getWordOfDay, tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'
import { useEffect } from 'react'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

const getWinnerPic = (answer: string): string => {
  switch (answer.toLocaleLowerCase().trim()) {
    case 'disney':
      return 'dotolMinnie.png'
    case 'nibble':
      return 'nibble.gif'
    case 'camel':
      return 'camel.gif'
    case 'cheer':
      return 'dotolCheer.gif'
    case 'drive':
      return 'monkaDriving.gif'
    case 'aespa':
      return 'nextLevel216.gif'
    case 'snore':
      return 'dotolClowning.gif'
    case 'sekush':
      return 'pepeSekushi.png'
    case 'billie':
      return 'dotolOlder.png'
    case 'laptop':
      return 'pepeLaptop_complete.png'
    case 'mrland':
      return 'mrlandCombined.bmp'
    case 'sleep':
      return 'dotolYessleep_pepe.bmp'
    default:
      return 'ClappyTol.gif'
  }
}

const getStatisticsMessage = (isGameWon: boolean, answer: string): string => {
  if (!isGameWon) {
    return STATISTICS_TITLE
  }

  switch (answer.toLocaleLowerCase().trim()) {
    case 'drive':
      return 'Have fun with the driving test tomorrow'
    case 'camel':
      return "Tol's imaginary sister and friend"
    case 'cheer':
      return 'Cheers to the ones here today'
    case 'aespa':
      return 'Can Tol dance better than this?'
    case 'snore':
      return "This is April Fool's joke. Tol never snores."
    case 'sekush':
      return "It's still April Fool's day somewhere.. right?"
    case 'billie':
      return 'Both Billie Eilish and Dotol Kim can say "when I was older"'
    case 'laptop':
      return 'Everyone, Tol said she needs more money for laptop'
    case 'mrland':
      return "Tol's introverted viking brother and also her favourite Toldle opener"
    case 'sleep':
      return 'GO TO BED TOL dotolBedtime'
    case 'waifu':
      return 'How many of them does Tol have?'
    default:
      return STATISTICS_TITLE
  }
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  const wordOfDay = getWordOfDay()
  const winnerPicSrc = `${process.env.PUBLIC_URL}/${getWinnerPic(
    wordOfDay.solution
  )}`
  const statisticsMessage = getStatisticsMessage(isGameWon, wordOfDay.solution)

  // Prefetch the winner image. The goal of this useEffect is to load the image
  // after the page is loaded, so that the stats modal will just reuse
  // the cached one.
  useEffect(() => {
    const image = new Image()
    image.src = winnerPicSrc
  }, [winnerPicSrc])

  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }

  return (
    <BaseModal
      title={statisticsMessage}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {isGameWon && (
        <img className="mx-auto" src={winnerPicSrc} alt="Game won" />
      )}
      {isGameLost && (
        <img
          className="mx-auto"
          height="60px"
          width="60px"
          src={`${process.env.PUBLIC_URL}/dotolExhausted.gif`}
          alt="Game lost"
        />
      )}
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        gameStats={gameStats}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
