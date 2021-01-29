import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieSummary extends Component {
  constructor(props) {
    super(props);
    /* this.state = {};

    this.getData(props.worldData); */
  }

  // getData(worldData) {

  state = {
    labels: ["Dead Cases", "Recovered Cases", "Active Cases"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
        data: [
          this.props.worldData.totalDeaths,
          this.props.worldData.totalRecovered,
          this.props.worldData.activeCases,
        ],
      },
    ],
  };

  // this.setState(state);
  // }

  render() {
    // const { worldData } = this.props;
    return (
      <React.Fragment>
        <Pie
          data={this.state}
          options={{
            title: {
              display: true,
              text: "Corona Virus Cases Distribution Worldwide",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </React.Fragment>
    );
  }
}

export default PieSummary;
