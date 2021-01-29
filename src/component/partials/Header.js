import { gsReference } from "../../store";

import React, { Component } from "react";

export default class Header extends Component {
  /* constructor() {
    super();
    this.state = {
      appIcon: "",
    };

    this.getImage();
  }

  getImage() {
    storage
      .child("covid_virus_logo.png")
      .getDownloadURL()
      .then((url) => {
        this.state.appIcon = url;
        this.setState(this.state);
      });
  }
 */
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {/* <img src={this.state.appIcon} alt="covid app icon" /> */}
            <img src={gsReference} alt="covid app icon" />
            {/* <img src="" alt="covid app icon" /> */}
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#">
                News
              </a>
              <a className="nav-link" href="#">
                About
              </a>
            </div>
          </div> */}
        </nav>
      </React.Fragment>
    );
  }
}
