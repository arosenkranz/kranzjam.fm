import { useContext } from 'react';

import PlayerStateContext from '@lib/PlayerStateContext';
import { nextTrack, previousTrack, togglePlayer } from '@lib/player';

const Controls = () => {
  // @TODO: fix type
  const { player }: any = useContext(PlayerStateContext);

  if (!player) {
    return <div>Controls loading...</div>;
  }

  return (
    <div className='mx-auto w-10/12 flex flex-row flex-wrap justify-center p-2'>
      <button
        className='bg-gray-800 text-gray-50 p-2 border-2 border-gray-700 transition-colors duration-100 ease-in cursor-pointer hover:bg-gray-300 hover:text-gray-900'
        onClick={() => previousTrack(player)}
      >
        Previous Track
      </button>

      <button
        className='bg-gray-800 text-gray-50 p-2 border-2 border-gray-700 transition-colors duration-100 ease-in cursor-pointer hover:bg-gray-300 hover:text-gray-900'
        onClick={() => togglePlayer(player)}
      >
        Toggle Player
      </button>

      <button
        className='bg-gray-800 text-gray-50 p-2 border-2 border-gray-700 transition-colors duration-100 ease-in cursor-pointer hover:bg-gray-300 hover:text-gray-900'
        onClick={() => nextTrack(player)}
      >
        Next Track
      </button>
    </div>
  );
};

export default Controls;
