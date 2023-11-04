import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import HeadImage from './fairy.jpeg';

class BlogsCard extends Component {

  render() {

    return (
      <>
        <div className="home-link">
          <Link to="/" className="a-link">主页</Link>
        </div>
        <div className="container-left">
          <div className="card">
            <img src={HeadImage} alt="Head-Img" style={{ borderRadius: '50%'}}/>
            <div className="card-link-div">
              <Link to="https://blog.csdn.net/m0_67038390?type=blog" target="_blank">CSDN 地址</Link>
              <Link to="https://github.com/120821" target="_blank">GitHub 地址</Link>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default BlogsCard;
