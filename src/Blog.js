import React, { Component } from 'react';
//import backgroundImage from './friends.jpeg';
//import { Space, Button} from 'antd';
//import { LeftSquareOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RawHtmlComponent from './RawHtmlComponent';
import './App.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null,
      created_at: null,
      id: null,
      loading: true,
    };
  }
  componentDidMount() {
    this.fetchData()
  }
  async fetchData() {
    console.info("======== fetchData")
    try {
      const pathname = window.location.href;
      const id = pathname.split('/').pop();
      let url = "https://admin.linlin.fun/api/v1/blogs/" + id
      const response = await axios.get(url, { headers: { 'Access-Control-Allow-Origin': '*' } })
      let responseData = response.request.response
      const jsonObject = JSON.parse(responseData);

      if (response.statusText === "OK") {
        this.setState(
          {
            id: response.id,
            title: jsonObject.title,
            content: jsonObject.content,
            created_at: jsonObject.created_at,
            loading: false,
          },
          () => {
            this.render();
          }
        );

      }
    } catch (error) {
      console.error(error)
    }
  }
  handleListClick = async () => {
    const newUrl = "/blogs"
    window.location.href = newUrl
  };

  //<Button onClick={() => this.handleShowClick()}>
  //  <LeftSquareOutlined />
  //   返回
  //</Button>
  render() {
    const { title, content, created_at } = this.state;

    return (
      <div className="blog-page">
        <div className="show-blog">
          <Link className="a-link" to="/">返回</Link>
          <div className="title">{title}</div>
          <div className="created_at">{created_at}</div>
          <div className="content">
            <RawHtmlComponent rawHtml={content} />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
