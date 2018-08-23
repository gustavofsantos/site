import React from "react";
import Octokat from "octokat";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.octo = new Octokat();
  }

  getPosts = () => {
    this.octo
      .repos('gustavofsantos', 'site-posts')
      .fetch()
      .then( repo => {
        repo.contents
          .fetch()
          .then( contents => {
            console.log('contents', contents);
            contents.items.forEach( item => {
              if (item.name.split('.')[1] === 'md') {
                repo.contents(item.name)
                  .read()
                  .then( content => {
                    console.log('content: ', content, ' of ', item.name);
                  })
              }
            });
          }
        );
      });
  }

  render() {
    this.getPosts();
    return (
      <div>
        Posts
      </div>
    );
  }
}