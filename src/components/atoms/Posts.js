import React from "react";
import Octokat from "octokat";
import { Post } from "./Post";
import { NoPostFound } from "./NoPostFound";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.octo = new Octokat();
  }

  getPosts = async () => {
    const repo = await this.octo.repos('gustavofsantos', 'site-posts').fetch();
    const contents = await repo.contents.fetch();

    let posts = [];
    await contents.items.forEach( async item => {
      if (item.name.split('.')[1] === 'json') {
        const contentJson = await repo.contents(item.name).read();
        console.log('contentJSON', JSON.parse(contentJson));
        posts.push(JSON.parse(contentJson));
      }
    });

    console.log('posts: ', posts);
    this.setState({ posts });
  }

  componentWillMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        { this.state.posts ?
            this.state.posts.map((post, index) => <Post post={post} key={index} />) : 
            <NoPostFound /> 
        }
      </div>
    );
  }
}