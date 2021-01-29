import React, { Component } from "react";
import { connect } from "react-redux";
import WorldSummary from "./worldsummary";
import PieSummary from "./piesummary";
import BarSummary from "./barsummary";
import LineSummary from "./linesummary";
import CountrySummary from "./countrysummary";
import { getWorldSummary } from "../action/act_world";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCases: 1,
      newCases: 1,
      activeCases: 1,
      totalRecovered: 1,
      newRecovered: 1,
      totalDeaths: 1,
      recoveryRate: 0,
      newDeaths: 1,
      mortalityRate: 0,
    };

    props.getWorldSummary();
    this.getTotalCases();
    this.getNewCases();
    this.getActiveCases();
    this.getNewRecovered();
    this.getTotalRecovered();
    this.getTotalDeaths();
    this.getNewDeaths();
    this.getRecoveryRate();
    this.getMortalityRate();
  }

  getTotalCases() {
    const { worldSummary } = this.props;
    console.log(worldSummary[0].TotalConfirmed);

    worldSummary.map(
      (world) => (this.state.totalCases += world.TotalConfirmed)
    );
    this.setState(this.state);
  }

  getNewCases() {
    const { worldSummary } = this.props;

    worldSummary.map((world) => (this.state.newCases += world.NewConfirmed));
    this.setState(this.state);
  }

  getActiveCases() {
    const { worldSummary } = this.props;

    worldSummary.map(
      (world) => (this.state.activeCases += world.TotalConfirmed)
    );
    this.setState(this.state);
  }

  getTotalRecovered() {
    const { worldSummary } = this.props;

    worldSummary.map(
      (world) => (this.state.totalRecovered += world.TotalRecovered)
    );
    this.setState(this.state);
  }

  getNewRecovered() {
    const { worldSummary } = this.props;

    worldSummary.map(
      (world) => (this.state.newRecovered += world.NewRecovered)
    );
    this.setState(this.state);
  }

  getTotalDeaths() {
    const { worldSummary } = this.props;

    worldSummary.map((world) => (this.state.totalDeaths += world.TotalDeaths));
    this.setState(this.state);
  }

  getNewDeaths() {
    const { worldSummary } = this.props;

    worldSummary.map((world) => (this.state.newDeaths += world.NewDeaths));
    this.setState(this.state);
  }

  getRecoveryRate() {
    this.state.recoveryRate =
      (this.state.newRecovered / this.state.totalRecovered) * 100;
    this.setState(this.state);
  }

  getMortalityRate() {
    this.state.mortalityRate =
      (this.state.totalDeaths / this.state.totalCases) * 100;
    this.setState(this.state);
  }
  /* componentDidMount() {
    this.props.getWorldSummary();
    console.log("world summary here");
  } */
  render() {
    /* const { worldSummary } = this.props;
    console.log(worldSummary);
    console.log(worldSummary.length); */
    return (
      <React.Fragment>
        <h4>Corona Virus Summary Worldwide {this.state.totalCases}</h4>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#world-summary"
            >
              World
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#pie-chart">
              Pie Chart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#last-7-days">
              Last 7 days
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#since-april">
              Since April
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#country">
              Country
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="world-summary" className="container tab-pane active">
            <WorldSummary worldData={this.state} />
          </div>
          <div id="pie-chart" className="container tab-pane fade">
            <PieSummary worldData={this.state} />
          </div>
          <div id="last-7-days" className="container tab-pane fade">
            <BarSummary worldData={this.state} />
          </div>
          <div id="since-april" className="container tab-pane fade">
            <LineSummary worldData={this.state} />
          </div>
          <div id="country" className="container tab-pane fade">
            <CountrySummary />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  worldSummary: state.covid.world,
});

export default connect(mapStateToProps, { getWorldSummary })(Feed);
// export default Feed;
