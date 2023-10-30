import React, { Component } from 'react';
//import logo from './logo.svg';
import axios from 'axios';
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
  async fetchData(page = 1) {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('id');
      console.info(id);
      const response = await axios.get(`https://admin.linlin.fun/api/v1/blogs/${id}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      console.info("== response..: ", response)
      console.info("== response.blogs.: ", response.blogs)
      let responseData = response.request.response
      const jsonObject = JSON.parse(responseData);
      console.info("== jsonObject: ", jsonObject)

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

  render() {
    const { title, content, created_at } = this.state;
    console.info("== title: ", title)
    console.info("== content: ", content)
    console.info("== created_at: ", created_at)

    return (
      <div className="App">
        {title}
        {content}
        {created_at}
      </div>
    );
  }
}

export default Blog;
