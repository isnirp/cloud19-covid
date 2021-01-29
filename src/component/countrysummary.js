import React, { Component } from "react";
import { connect } from "react-redux";
// import { GET_SUMMARY } from "../action/types";
import { getSummary } from "../action/act_world";

class CountrySummary extends Component {
  componentDidMount() {
    this.props.getSummary();
  }

  render() {
    const { countrySummary } = this.props;
    const countries = countrySummary.Countries;
    return (
      <React.Fragment>
        {/* <h3>{worldSummary[1].TotalDeaths}</h3> */}
        {/* <h3>{summary.Global.TotalDeaths}</h3> */}
        {/* <h3>Hello world</h3> */}
        <table className="table">
          <thead>
            <tr>
              <th>Country</th>
              <th>New Cases</th>
              <th>New Recoveries</th>
              <th>Total Recoveries</th>
              <th>New Deaths</th>
              <th>Total Deaths</th>
            </tr>
          </thead>
          <tbody>
          {
            countries?(
               countries.map(country=>(
            <tr className="table-primary">
              <td>{country.Country}</td>
              <td>{country.NewConfirmed}</td>
              <td>{country.NewRecovered}</td>
              <td>{country.TotalRecovered}</td>
              <td>{country.NewDeaths}</td>
              <td>{country.TotalDeaths}</td>
            </tr>
            ))
            ):(<p>no data found</p>)
             
          }
            }
            
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  countrySummary: state.summarydata.summary,
});

/* const mapDispatchToProps = (dispatch) => ({
  getWorldSummary: () => dispatch({ type: GET_SUMMARY }),
}); */

//export default connect(mapStateToProps, mapDispatchToProps)(WorldSummary);
export default connect(mapStateToProps, { getSummary })(CountrySummary);
