import React, { Component } from 'react';
import { Input, Button, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import BlogsCard from './BlogsCard';
import axios from 'axios';
import './App.css';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: null,
      content: null,
      currentPage: 1,
      results: [],
      page: 1,
      pageSize: 100,
      loading: false,
      totalPages: 1,
      totalCount: 0
    };
  }
  async fetchData(page = 1, pageSize = 100) {
    try {
      const response = await axios.get(`https://admin.linlin.fun/api/v1/blogs?page=${page}&page_size=${pageSize}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      let responseData = response.request.response
      const jsonObject = JSON.parse(responseData);
      console.info("== jsonObject: ", jsonObject)

      if (response.statusText === "OK") {
        this.setState(
          {
            data: jsonObject.blogs,
            totalCount: jsonObject.total_count,
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

  handleSearch = async () => {
    let {page, pageSize, title, content} = this.state
    const response = await fetch(`https://admin.linlin.fun/api/v1/blogs/search?title=${title}&content=${content}&page=${page}&page_size=${pageSize}`);
    const data = await response.json();
    this.setState({results: data.results, totalCount: data.total_count});
    this.setState({ loading: true });
  };

  handleClear = () => {
    this.setState({
      title: '',
      content: '',
      results: [],
      loading: false,
      currentPage: 1
    });
  };

  handlePaginationChange = (page, pageSize) => {
    this.setState({ currentPage: page }, () => {
      this.fetchData(page, pageSize);
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
    const { results, loading, data, currentPage, totalCount } = this.state;

    console.info("== data: ", data)
    return (
      <div className="blogs-page">
        <BlogsCard />
        <div className="list-blog">
          <div style={{ marginLeft: '20px'}} >
            <h1>琳琳的博客</h1>
            <p>博客总数: {totalCount}</p>
            <span style={{marginRight: '10px' }}>标题:</span>
            <Input
              type="text"
              value={this.state.title}
              style={{
                width: 150,
              }}
              onChange={(e) => this.setState({ title: e.target.value })}
              placeholder="例如 ssl"
            />
            <span style={{margin: '0 10px' }}>内容:</span>
            <Input
              style={{
                width: 150,
              }}
              type="text"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
              placeholder="例如 AWVS"
            />
            <Button onClick={this.handleSearch} style={{marginLeft: '10px' }}>搜索</Button>
            <Button onClick={this.handleClear} style={{marginLeft: '10px' }}>清除</Button>
          </div>
          <Pagination
            current={currentPage}
            style={{margin: '10px 0' }}
            total={totalCount}
            onChange={this.handlePaginationChange}
            showSizeChanger={false}
          />
          <div style={{marginLeft: '20px'}}>
            {loading === true ? (
              <div>
                <h2>查询结果：</h2>
                {results.length > 0 ? (
                  results.map((blog) => (
                    <div key={blog.id} className="blog-list-title-simple">
                      <Link className="a-link" target="_blank" to={`/blog/${blog.id}`}>
                        {new Date(blog.created_at).toLocaleString().slice(0, -3).replace('/', '-').replace('/', '-')}
                        {'   '}
                        {blog.title}
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>查询结果为空。</p>
                )}
              </div>
            ) : null}
          </div>
          {loading === false ? (
            <>
              {results.length === 0 && loading === false && data.map(item => (
                <div key={item.id} className="blog-list-title-simple">
                  <Link className="a-link" target="_blank" to={`/blog/${item.id}`}>
                    {new Date(item.created_at).toLocaleString().slice(0, -3).replace('/', '-').replace('/', '-')}
                    {'   '}
                    {item.title}
                  </Link>
                </div>
              ))}
            </>
          ) : null}
          <Pagination
            style={{margin: '10px 0' }}
            current={currentPage}
            total={totalCount}
            onChange={this.handlePaginationChange}
            showSizeChanger={false}
          />

        </div>

      </div>
    );
  }
}

export default Blogs;
