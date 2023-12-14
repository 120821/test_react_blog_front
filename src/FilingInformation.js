import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import axios from 'axios';
import RawHtmlComponent from './RawHtmlComponent';
import './App.css';

class FilingInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { title, content, created_at } = this.state;

    return (
      <div className="footer">
        <Link target="_blank" className="footer_link" to="https://beian.miit.gov.cn">豫ICP备2023034815号-2</Link>
      </div>
    );
  }
}

export default FilingInformation;
