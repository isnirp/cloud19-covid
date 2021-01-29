import React, { Component } from "react";
import { connect } from "react-redux";
// import { getWorldSummary } from "../action/act_world";

class WorldSummary extends Component {
  /* componentDidMount() {
    this.props.getWorldSummary();
    console.log("world summary here");
  }  */

  render() {
    const { worldData } = this.props;
    return (
      <React.Fragment>
        {/* <h3>{worldSummary[0].TotalDeaths}</h3> */}
        <table className="table">
          <thead>
            <tr>
              <th>Summary</th>
              <th>Figures</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>Total Cases</td>
              <td>{worldData.totalCases}</td>
            </tr>
            <tr className="table-primary">
              <td>New Cases</td>
              <td>{worldData.newCases}</td>
            </tr>
            <tr className="table-primary">
              <td>Active Cases</td>
              <td>{worldData.activeCases}</td>
            </tr>
            <tr className="table-danger">
              <td>Total Recovered</td>
              <td>{worldData.totalRecovered}</td>
            </tr>
            <tr className="table-danger">
              <td>New Recovered</td>
              <td>{worldData.newRecovered}</td>
            </tr>
            <tr className="table-danger">
              <td>Recovery Rate</td>
              <td>{worldData.recoveryRate + "%"}</td>
            </tr>
            <tr className="table-warning">
              <td>Total Deaths</td>
              <td>{worldData.totalDeaths}</td>
            </tr>
            <tr className="table-warning">
              <td>New Deaths</td>
              <td>{worldData.newDeaths}</td>
            </tr>
            <tr className="table-warning">
              <td>Mortality Rate</td>
              <td>{worldData.mortalityRate + "%"}</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

/* const mapStateToProps = (state) => ({
  worldSummary: state.covid.world,
});  */

/* const mapDispatchToProps = (dispatch) => ({
  getWorldSummary: () => dispatch({ type: GET_SUMMARY }),
}); */

//export default connect(mapStateToProps, mapDispatchToProps)(WorldSummary);
// export default connect(mapStateToProps, { getWorldSummary })(WorldSummary);
export default WorldSummary;
