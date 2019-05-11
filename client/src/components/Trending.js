import axios from 'axios';
import React, { Component } from 'react'

export default class Trending extends Component {
  state = {
    hashtags: []
  };

  componentDidMount() {
    axios.get('/trending')
      .then(res => {
        const hashtags = res.data;
        this.setState({ hashtags });
      });
  }

  render() {
    return (
      <div className='col-12'>
        <div id='copyBox' className='text-dark'>
          { this.state.hashtags.join(' ') }
        </div>
      </div>
    )
  }
}
