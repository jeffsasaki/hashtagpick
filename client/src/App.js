import React from 'react';
import Trending from './components/Trending';

function randBgColor() {
  return 'rgba(' + Math.floor(Math.random() * 256) + ', ' +
    Math.floor(Math.random() * 256) + ', ' +
    Math.floor(Math.random() * 256) + ', 0.4)';
}

function gradient() {
  return { backgroundImage: 'linear-gradient(to bottom right, ' + randBgColor() + ', ' + randBgColor() };
}

function App() {
  return (
    <main role="main">
      <div className="flex-center position-ref full-height" style={gradient()}>
        <div className='text-center mt-5 col-lg-8 col-md-12'>
          <Trending />
        </div>
        <footer className="mx-auto py-1 text-center">
          <p>Copyright &copy; { new Date().getFullYear() } Hashtag Pick</p>
          <p>Made by <a className="text-dark" href="https://www.jeffsasaki.com/" target="_blank">Jeff Sasaki</a></p>
        </footer>
      </div>
    </main>
  );
}

export default App;
