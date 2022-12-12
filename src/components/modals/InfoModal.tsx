import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
        1. You can guess with any common words.
      </p>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
        2. the final answer will be something related to Dotol.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        3. <strong>THE WORDS CAN HAVE EITHER 5 OR 6 LETTERS.</strong>
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
        <Cell
          value=" "
          isRevealing={true}
          isCompleted={true}
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the word and in the correct spot. Also, the answer is
        a 5-letter word.
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
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="present"
        />
        <Cell value="P" />
        <Cell value=" " />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        There are two E's in the word but in the wrong spots.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="E" />
        <Cell value="G" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
        <Cell value="S" />
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
