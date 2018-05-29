import React, { Component } from 'react';
import Post from './components/Post';

import posts from './posts.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>News Aggregator</h2>
        {
          posts.map((post, key) => {
            return(
              <Post key={key}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    />
            )
          })
        }
      </div>
    );
  }
}

export default App;
