import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="T" />
        <Cell value="O" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the word and in the correct spot.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="L" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="present"
        />
        <Cell value="E" />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is in the word but in the wrong spot.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Also, there is only one E in the word.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="E" />
        <Cell value="G" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is not in the word in any spot.
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of Wordle, tailored for a Twitch streamer{' '}
        <a
          href="https://twitch.tv/dotolkim"
          target="_blank"
          rel="noreferrer"
          className="underline font-bold"
        >
          Dotol Kim
        </a>
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/9dog-9dog/toldle"
          target="_blank"
          rel="noreferrer"
          className="underline font-bold"
        >
          check out the code here
        </a>
      </p>
    </BaseModal>
  )
}
