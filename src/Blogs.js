import React, { Component } from 'react';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import BlogsCard from './BlogsCard';
import axios from 'axios';
import './App.css';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPage: 1,
      totalPages: 1,
      totalCount: 0
    };
  }
  async fetchData(page = 1) {
    try {
      const response = await axios.get(`https://admin.linlin.fun/api/v1/blogs?page=${page}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      let responseData = response.request.response
      const jsonObject = JSON.parse(responseData);

      if (response.statusText === "OK") {
        this.setState(
          {
            data: jsonObject.blogs,
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

  handlePaginationChange = (page) => {
    this.setState({ currentPage: page }, () => {
      this.fetchData(page);
    });
  };

  handlePreviousPage = () => {
    const { currentPage } = this.state;
    const previousPage = currentPage - 1;
    this.fetchData(previousPage);
  };

  handleNextPage = () => {
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.fetchData(nextPage);
  };

  componentDidMount() {
    this.fetchData()
  }

  handleShowClick = async (id) => {
    const newUrl = "/blog/" + id
    window.location.href = newUrl
  };

  render() {
    const { data, currentPage,totalCount } = this.state;

    console.info("== data: ", data)
    return (
      <div className="blogs-page">
        <BlogsCard />
        <div className="list-blog">
          {data.map(item => (
            <div key={item.id} className="blog-list-title-simple">
              <Link className="a-link" target="_blank" to="/">
                {new Date(item.created_at).toLocaleString().slice(0, -3).replace('/', '-').replace('/', '-')}
                {'   '}
                {item.title}
              </Link>
            </div>
          ))}
        </div>

        <div style={{ float: 'right', marginTop: '20px' }}>
          <Pagination
            current={currentPage}
            total={totalCount}
            onChange={this.handlePaginationChange}
          />
        </div>
      </div>
    );
  }
}

export default Blogs;
