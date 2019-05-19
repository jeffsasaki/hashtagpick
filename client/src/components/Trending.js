import axios from 'axios';
import React, { Component } from 'react'
import Clipboard from 'react-clipboard.js';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default class Trending extends Component {
  state = {
    hashtags: []
  };

  constructor() {
    super();
    toast.configure();
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess() {
    toast.success('Hashtags Copied!', {
      position: 'bottom-center',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });      
  }

  componentDidMount() {
    axios.get('/api/trending')
      .then(res => {
        this.setState({ hashtags: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div id='copyBox' className='p-2 my-4 trending text-dark w-100 text-left bg-light'>
          {this.state.hashtags.join(' ')}
        </div>
        <div className='my-4 text-center'>
          <Clipboard
            onSuccess={this.onSuccess}
            data-clipboard-target='#copyBox'
            className='btn btn-lg btn-success text-light'
            title='Copied!'
          >
            Copy Hashtags
          </Clipboard>
        </div>
    </div>
      
    )
  }
}
