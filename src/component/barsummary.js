import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarSummary extends Component {
  componentDidMount() {
    console.log("bar summary here");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Daily Corona Virus Cases Worldwide",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export default BarSummary;
