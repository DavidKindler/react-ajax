import React, { Component } from 'react';

import Posts from '../Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
// import FullPost from '../FullPost/FullPost';

import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: '/new-post', hash: '#submit', search: '?quick-submit=true' }}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/" component={Posts} /> */}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;

//  <section>
//           <FullPost id={this.state.selectedPostid} />
//         </section>
//         <section>
//           <NewPost />
//         </section>
