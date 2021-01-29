import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./partials/Header";
import Banner from "./partials/Banner";
import Footer from "./partials/Footer";
import Feed from "./feed";
import News from "./news";

class Index extends Component {
 
  render() {
    
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-7">
              <Feed />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-auto">
              <News />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}


 export default Index;
//export default connect(mapStateToProps, { getWorldSummary })(Index);
