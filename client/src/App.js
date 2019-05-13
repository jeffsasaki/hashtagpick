import React from 'react';
import Trending from './components/Trending';
import phonesvg from './img/phone.svg';

function App() {
  return (
    <span>
      <section className='jumbotron text-center gradient-bg'>
        <div className='container'>
          <h1 className='jumbotron-heading'>
            Hashtag Manager for your Social Media
          </h1>
          <p className='lead text-dark'>
            Generate unique hashtags for your social media.
          </p>
          <p>
            <a href='#' className='btn btn-lg btn-outline-primary m-1'>
              Learn More
            </a>
            <a href='#' className='btn btn-lg btn-primary m-1'>
              Log In
            </a>
          </p>
        </div>
      </section>

      <div className='py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 my-5'>
              <h2 className='text-center'>Trending Hashtags</h2>
            </div>
          </div>
          <Trending />
        </div>
      </div>

      <div className='jumbotron p-5 gradient-bg'>
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
                <a href='#' className='btn btn-block btn-primary'>
                  <strong>Get Started</strong>
                </a>
              </p>
            </div>
            <div className='col-md-6 text-center'>
              <img src={phonesvg} className="w-50" alt="logo"/>
              <p className='small text-muted mt-4'>
                Icon made by <a title="Freepik" href="http://www.freepik.com">Freepik</a> from <a title="Flaticon" href="http://www.flaticon.com">www.flaticon.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default App;
