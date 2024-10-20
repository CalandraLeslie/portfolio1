import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <header>
          <h1>Pill Doctor</h1>
          <button className="menu-button" aria-label="Menu">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <main>
          <div className="content-area">
            <div className="info-box">
              <h2>Welcome to Pill Doctor!</h2>
              <p>Start tracking your medicine Today!</p>
              <h3>A new way to keep control of your medicine</h3>
              <p className="info-text">
                Non purus semi risus dictum comvallis. Fermentum ultrices nunc elit elementum aenean. Tortor
                egestas sagittis pretium tempor maecenas sapienest accumsan. Gravida et sed feugiat
                consectetur enim. Faucibus nulla ornare mauris faucibus nec. Fermentum lorem aenean nulla
                velit id in varius etiam. Interdum doloret sed maecenas ullamcorper commodo pelten amet
                iaculis arcu. Sampera augue dolor, iaculisi blandin libero egestas elit pulginar. Tortor gravida
                a curabitur tellus nunc commoviment tempus ipsum. Eros auctor anam amet tempus ests.
              </p>
              <p className="info-text">
                Lorem ipsum dolor amet, consectetur adipiscing elit. Nisi mi ultricies vulputate justo lactu
                volutpat amet. Bibendum cum consectetur ultricies helit non leo, justo mi rhoncus eliud
                consectetur. Orci consectetur quam maecenas dictum. Morbi sed quam pulvinar amet tempor
                sed egestas. Quisque pulvinar rhoncus quam eget elementum. Amet eget pharetra nisi purus
                neque est dolor, scelerisque faci tempus suscipit. Lorem blandit sit ameter, consuis rutrum
                neque.
              </p>
            </div>
            <div className="button-group">
              <button>Amount tracker</button>
              <button>Reminder</button>
              <button>Health tracker</button>
            </div>
          </div>

          <div className="login-area">
            <div className="login-box">
              <h2>Please Login or Register Today!</h2>
              <button className="login-button">
                Login
                <span className="arrow">→</span>
              </button>
              <button className="login-button">
                Register
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;