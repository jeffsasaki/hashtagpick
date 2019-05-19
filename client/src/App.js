import React from 'react';
import Trending from './components/Trending';
import phonesvg from './img/phone.svg';

function App() {
  return (
    <span>
      <section className='jumbotron text-center gradient-bg'>
        <div className='container'>
          <h1 className='jumbotron-heading'>
            Top 30 Trending Hashtags
          </h1>
          <Trending />
        </div>
      </section>

      <div className='jumbotron py-5 px-3 bg-light'>
        <div className='container'>
          <div className='row featurette centered-flex'>
            <div className='col-md-6'>
              <h2 className='mb-4'>How It Works</h2>
              <p className='lead text-dark'>
                Log in with your Instagram or Twitter account and keep track of
                the hashtags used.
              </p>
              <p className='lead text-dark'>
                Add your custom hashtags to generate up to 30 unique hashtags to
                paste on your post.
              </p>
              <p className='my-5'>
                This is currently a work in progress.<br/>
                Please come back later for updates!
              </p>
            </div>
            <div className='col-md-6 text-center'>
              <img src='https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' className="w-100" alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default App;
