/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { transparentize } from 'polished';

const Login = (props) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        font-family: ${theme.font.extended.fontFamily};
        background-color: ${theme.colors.darkgray};
        min-height: 100vh;
        display: grid;
        place-items: center;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: ${transparentize(0.7, theme.colors.light)};
        }

        h1 {
          color: ${theme.colors.dark};
        }

        button {
          font-family: ${theme.font.default.fontFamily};
        }
      `}>
      <div className='rounded'>
        <h1>KRANZJAMS.fm</h1>
        <a
          href={`https://spotiql.herokuapp.com/auth/spotify/login?redirect_uri=${window.location.href}`}>
          <button>
            <i className='fab fa-spotify'></i> Log In!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
