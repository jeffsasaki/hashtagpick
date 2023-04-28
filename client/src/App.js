import React from 'react';
import Trending from './components/Trending';

function randBgColor() {
  return 'rgba(' + Math.floor(Math.random() * 256) + ', ' +
    Math.floor(Math.random() * 256) + ', ' +
    Math.floor(Math.random() * 256) + ', 0.25)';
}

function gradient() {
  return { backgroundImage: 'linear-gradient(to bottom right, ' + randBgColor() + ', ' + randBgColor() };
}

function App() {
  return (
    <main role="main" className='w-100 m-auto d-flex full-height' style={gradient()}>
      <div className="m-auto">
        <div className='text-center m-auto col-lg-8 col-md-12 px-5'>
          <Trending />
        </div>
        <footer className="mx-auto py-1 text-center">
          <p>Made by <a className="text-dark" href="https://www.jeffsasaki.com/" target="_blank">Jeff Sasaki</a></p>
          <p>Copyright &copy; { new Date().getFullYear() } Hashtag Pick</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
