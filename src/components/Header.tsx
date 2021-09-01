import Auth from '@utils/auth';

const Header = () => {
  return (
    <header className='w-screen py-6 bg-gray-800 text-gray-50'>
      <div className='w-10/12 mx-auto flex flex-col items-center'>
        <h1 className='font-mono text-4xl'>Kranzjam.fm</h1>
        {Auth.loggedIn() ? (
          <button
            className='mx-auto mt-4 mb-2 bg-gray-50 text-gray-800 p-2 border-1 border-gray-500 transition-colors duration-500 ease-in cursor-pointer hover:bg-gray-300 hover:text-gray-900'
            onClick={() => Auth.logout()}
          >
            Logout
          </button>
        ) : (
          <a
            href='/api/login'
            className='mx-auto mt-4 mb-2 bg-gray-50 text-gray-800 p-2 border-1 border-gray-500 transition-colors duration-500 ease-in cursor-pointer hover:bg-gray-300 hover:text-gray-900'
          >
            Login with Spotify
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
