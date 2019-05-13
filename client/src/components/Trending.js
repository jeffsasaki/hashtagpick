import axios from 'axios';
import React, { Component } from 'react'
import Clipboard from 'react-clipboard.js';

export default class Trending extends Component {
  state = {
    hashtags: []
  };

  componentDidMount() {
    axios.get('/api/trending')
      .then(res => {
        const hashtags = res.data;
        this.setState({ hashtags });
      });
  }

  render() {
    return (
      <div className='col-12'>
        <textarea
          id='copyBox'
          className='text-dark w-100'
          rows='4'
          value={this.state.hashtags.join(' ')}
          readOnly
        >
        </textarea>
        <div className='my-4 text-center'>
        <Clipboard
          data-clipboard-target="#copyBox"
          className='btn btn-lg btn-success text-light'
        >
          Copy Hashtags
        </Clipboard>
          </div>
      </div>
      
    )
  }
}
