import React, { Component } from "react";

class News extends Component {
  componentDidMount() {
    console.log("bar summary here");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            News >> <a href="#">add news</a>
          </div>
          <ul>
            <li>News item 1</li>
            <li>News item 2</li>
            <li>News item 3</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
