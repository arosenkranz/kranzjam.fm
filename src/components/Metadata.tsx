import { useContext } from 'react';
import PlayerStateContext from '@lib/PlayerStateContext';

const Metadata = () => {
  // @TODO: fix type
  const { currentTrack }: any = useContext(PlayerStateContext);

  if (!currentTrack) {
    return <div>Loading track info...</div>;
  }

  return (
    <div className='w-full text-center p-2'>
      <h2 className='text-3xl'>{currentTrack.name}</h2>
      <h3 className='text-2xl'>
        by{' '}
        {currentTrack.artists.map(({ name }, i, arr) =>
          i === arr.length - 1 ? name : `${name}, `
        )}
      </h3>
    </div>
  );
};

export default Metadata;
