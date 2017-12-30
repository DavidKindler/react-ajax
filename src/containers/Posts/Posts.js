import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

export default class Posts extends Component {
  state = {
    posts: [],
    // selectedPostid: null,
    error: false
  };

  postSelectedHandler = id => {
    this.setState({ selectedPostid: id });
    // this.props.history.push({ pathname: '/' + id });
    this.props.history.push('/posts/' + id);
  };

  componentDidMount() {
    // console.log(this.props);
    axios
      .get('/posts')
      .then(response => {
        //   console.log(response.data);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'David'
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    console.log(this.props.match.url);
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}
